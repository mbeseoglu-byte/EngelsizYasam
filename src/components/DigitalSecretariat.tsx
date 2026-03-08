
"use client"

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/hooks/use-toast';
import { Send, Loader2, CheckCircle2, MessageSquare, Accessibility } from 'lucide-react';
import { categorizeContactMessage } from '@/ai/flows/categorize-contact-messages-ai';

const formSchema = z.object({
  name: z.string().min(2, { message: "Lütfen isminizi giriniz." }),
  email: z.string().email({ message: "Geçerli bir e-posta adresi giriniz." }),
  message: z.string().min(10, { message: "Mesajınız en az 10 karakter olmalıdır." }),
});

export function DigitalSecretariat() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", email: "", message: "" },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    try {
      const aiResult = await categorizeContactMessage({ message: values.message });
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setSubmitted(true);
      toast({
        title: "Mesajınız Alındı",
        description: `Dijital sekreteryamıza ulaştığınız için teşekkürler. Mesajınız ${aiResult.intent} olarak önceliklendirildi.`,
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Hata",
        description: "Mesaj gönderilirken bir sorun oluştu. Lütfen tekrar deneyin.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div id="iletisim" className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl bg-white p-10 rounded-[3rem] shadow-xl text-left space-y-6 border border-primary/10">
            <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-black text-primary">Teşekkür Ederiz!</h3>
            <p className="text-base text-muted-foreground leading-relaxed">
              Talebiniz dijital sekreteryamıza güvenli bir şekilde ulaştı. Ekibimiz en kısa sürede sizinle iletişime geçecektir.
            </p>
            <Button 
              variant="outline" 
              onClick={() => { setSubmitted(false); form.reset(); }}
              className="mt-6 rounded-full px-10 h-12 font-black text-base border-2"
            >
              Yeni Talep Oluştur
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div id="iletisim" className="py-24 bg-muted/30 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16 items-start">
          <div className="lg:w-2/5 space-y-8 text-left">
            <div>
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full font-black text-[10px] uppercase tracking-widest mb-4">
                <Accessibility className="w-3.5 h-3.5" />
                Dijital Sekreterya
              </div>
              <h2 className="text-2xl lg:text-3xl font-headline font-black text-primary leading-tight">Engelsiz Erişim ve Talep Formu</h2>
            </div>
            <p className="text-base text-muted-foreground leading-relaxed font-medium">
              Görüş, öneri ve taleplerinizi bu form aracılığıyla doğrudan iletebilirsiniz. Yapay zeka destekli sistemimiz mesajınızı kategorize ederek hızlı çözüm üretmemize yardımcı olur.
            </p>
            <div className="space-y-4 pt-4">
              <div className="flex items-center gap-4 p-5 bg-white rounded-2xl shadow-sm border border-primary/5">
                <div className="w-10 h-10 bg-secondary/10 text-secondary rounded-xl flex items-center justify-center shrink-0">📍</div>
                <div className="font-bold text-primary text-sm">TBMM Milletvekili Ofisleri, Ankara</div>
              </div>
              <div className="flex items-center gap-4 p-5 bg-white rounded-2xl shadow-sm border border-primary/5">
                <div className="w-10 h-10 bg-secondary/10 text-secondary rounded-xl flex items-center justify-center shrink-0">📧</div>
                <div className="font-bold text-primary text-sm">iletisim@engelsizdunya.gov.tr</div>
              </div>
            </div>
          </div>

          <div className="lg:w-3/5 w-full">
            <div className="bg-white p-8 lg:p-12 rounded-[3rem] shadow-xl border border-primary/5 relative">
              <div className="absolute -top-4 -right-4 bg-secondary text-white p-4 rounded-2xl shadow-xl rotate-6 hidden lg:block">
                <MessageSquare className="w-6 h-6" />
              </div>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-black text-primary text-sm">Ad Soyad</FormLabel>
                          <FormControl>
                            <Input placeholder="Adınızı giriniz" {...field} className="h-12 rounded-xl focus:ring-secondary border-muted text-sm px-5" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-black text-primary text-sm">E-posta</FormLabel>
                          <FormControl>
                            <Input placeholder="E-posta adresiniz" {...field} className="h-12 rounded-xl focus:ring-secondary border-muted text-sm px-5" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-black text-primary text-sm">Talebiniz veya Mesajınız</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Mesajınızı buraya yazınız..." 
                            className="min-h-[150px] rounded-xl focus:ring-secondary border-muted resize-none p-5 text-sm"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full h-14 bg-primary hover:bg-primary/90 text-white font-black text-lg rounded-2xl group transition-all shadow-xl shadow-primary/20"
                  >
                    {isSubmitting ? (
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    ) : (
                      <>
                        Talebi İlet
                        <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </>
                    )}
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

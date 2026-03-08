
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
import { Send, Loader2, CheckCircle2, Accessibility } from 'lucide-react';
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
      <div id="iletisim" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-xl bg-white p-10 rounded-[2rem] shadow-lg text-left space-y-4 border border-primary/10">
            <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-black text-primary">Teşekkür Ederiz!</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Talebiniz dijital sekreteryamıza güvenli bir şekilde ulaştı. Ekibimiz en kısa sürede sizinle iletişime geçecektir.
            </p>
            <Button 
              variant="outline" 
              onClick={() => { setSubmitted(false); form.reset(); }}
              className="mt-4 rounded-full px-8 h-10 font-black text-sm border-2"
            >
              Yeni Talep Oluştur
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div id="iletisim" className="py-20 bg-muted/30 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12 items-start text-left">
          <div className="lg:w-2/5 space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full font-black text-[9px] uppercase tracking-widest mb-4">
                <Accessibility className="w-3 h-3" />
                Dijital Sekreterya
              </div>
              <h2 className="text-xl lg:text-2xl font-headline font-black text-primary leading-tight">Engelsiz Erişim ve Talep Formu</h2>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed font-medium">
              Görüş, öneri ve taleplerinizi bu form aracılığıyla doğrudan iletebilirsiniz. Yapay zeka destekli sistemimiz mesajınızı kategorize ederek hızlı çözüm üretmemize yardımcı olur.
            </p>
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm border border-primary/5">
                <div className="w-8 h-8 bg-secondary/10 text-secondary rounded-lg flex items-center justify-center shrink-0">📍</div>
                <div className="font-bold text-primary text-xs">TBMM Milletvekili Ofisleri, Ankara</div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm border border-primary/5">
                <div className="w-8 h-8 bg-secondary/10 text-secondary rounded-lg flex items-center justify-center shrink-0">📧</div>
                <div className="font-bold text-primary text-xs">iletisim@engelsizdunya.gov.tr</div>
              </div>
            </div>
          </div>

          <div className="lg:w-3/5 w-full">
            <div className="bg-white p-8 lg:p-10 rounded-[2rem] shadow-lg border border-primary/5 relative">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-black text-primary text-xs">Ad Soyad</FormLabel>
                          <FormControl>
                            <Input placeholder="Adınızı giriniz" {...field} className="h-11 rounded-lg focus:ring-secondary border-muted text-xs px-4" />
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
                          <FormLabel className="font-black text-primary text-xs">E-posta</FormLabel>
                          <FormControl>
                            <Input placeholder="E-posta adresiniz" {...field} className="h-11 rounded-lg focus:ring-secondary border-muted text-xs px-4" />
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
                        <FormLabel className="font-black text-primary text-xs">Talebiniz veya Mesajınız</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Mesajınızı buraya yazınız..." 
                            className="min-h-[120px] rounded-lg focus:ring-secondary border-muted resize-none p-4 text-xs"
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
                    className="w-full h-12 bg-primary hover:bg-primary/90 text-white font-black text-base rounded-xl group transition-all shadow-md"
                  >
                    {isSubmitting ? (
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    ) : (
                      <>
                        Talebi İlet
                        <Send className="ml-2 h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
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

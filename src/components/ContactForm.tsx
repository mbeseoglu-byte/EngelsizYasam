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
import { Send, Loader2, CheckCircle2 } from 'lucide-react';
import { categorizeContactMessage } from '@/ai/flows/categorize-contact-messages-ai';

const formSchema = z.object({
  name: z.string().min(2, { message: "Lütfen isminizi giriniz." }),
  email: z.string().email({ message: "Geçerli bir e-posta adresi giriniz." }),
  message: z.string().min(10, { message: "Mesajınız en az 10 karakter olmalıdır." }),
});

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", email: "", message: "" },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    try {
      // AI Intent Analysis (GenAI Feature)
      const aiResult = await categorizeContactMessage({ message: values.message });
      console.log('AI Category:', aiResult.intent);

      // Simulate API call for storage
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setSubmitted(true);
      toast({
        title: "Mesajınız Alındı",
        description: `İlginiz için teşekkürler, ${values.name}. Mesajınız ${aiResult.intent} olarak kategorize edildi ve ekibimize iletildi.`,
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
      <div className="bg-white p-12 rounded-3xl shadow-2xl text-center space-y-6 border border-primary/10">
        <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <h3 className="text-3xl font-black text-primary">Teşekkür Ederiz!</h3>
        <p className="text-muted-foreground max-w-md mx-auto">
          Mesajınız güvenli bir şekilde bize ulaştı. Ekibimiz en kısa sürede sizinle iletişime geçecektir.
        </p>
        <Button 
          variant="outline" 
          onClick={() => { setSubmitted(false); form.reset(); }}
          className="mt-8 rounded-full px-8 h-12 font-bold"
        >
          Yeni Mesaj Gönder
        </Button>
      </div>
    );
  }

  return (
    <div id="iletisim" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto flex flex-col lg:flex-row gap-16 items-start">
          <div className="lg:w-2/5 space-y-8">
            <div>
              <h2 className="text-sm uppercase tracking-widest text-secondary font-black mb-4">İletişim</h2>
              <h3 className="text-3xl lg:text-5xl font-headline font-black text-primary leading-tight">Gelin, engelleri birlikte aşalım.</h3>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Daha erişilebilir bir dünya için görüş, öneri ve talepleriniz bizim için çok değerli. Bizimle iletişime geçmekten çekinmeyin.
            </p>
            <div className="space-y-4 pt-4">
              <div className="flex items-center gap-4 text-primary font-bold">
                <div className="w-10 h-10 bg-white shadow-md rounded-full flex items-center justify-center">📍</div>
                TBMM Milletvekili Ofisleri, Ankara
              </div>
              <div className="flex items-center gap-4 text-primary font-bold">
                <div className="w-10 h-10 bg-white shadow-md rounded-full flex items-center justify-center">📧</div>
                iletisim@engelsizdunya.gov.tr
              </div>
            </div>
          </div>

          <div className="lg:w-3/5 w-full">
            <div className="bg-white p-8 lg:p-12 rounded-3xl shadow-2xl border border-primary/5">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-bold text-primary">Ad Soyad</FormLabel>
                          <FormControl>
                            <Input placeholder="Mehmet Yılmaz" {...field} className="h-12 rounded-xl focus:ring-secondary border-muted" />
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
                          <FormLabel className="font-bold text-primary">E-posta</FormLabel>
                          <FormControl>
                            <Input placeholder="mehmet@example.com" {...field} className="h-12 rounded-xl focus:ring-secondary border-muted" />
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
                        <FormLabel className="font-bold text-primary">Mesajınız</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Düşüncelerinizi paylaşın..." 
                            className="min-h-[150px] rounded-xl focus:ring-secondary border-muted resize-none p-4"
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
                    className="w-full h-14 bg-primary hover:bg-primary/90 text-white font-bold text-lg rounded-full group"
                  >
                    {isSubmitting ? (
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    ) : (
                      <>
                        Mesajı Gönder
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

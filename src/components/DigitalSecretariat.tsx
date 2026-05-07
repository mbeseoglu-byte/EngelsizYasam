
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
import { 
  Send, 
  Loader2, 
  CheckCircle2, 
  Accessibility, 
  User, 
  Mail, 
  PenLine, 
  MessageSquare,
  MapPin,
  X
} from 'lucide-react';
import { categorizeContactMessage } from '@/ai/flows/categorize-contact-messages-ai';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const formSchema = z.object({
  name: z.string().min(2, { message: "Lütfen isminizi giriniz." }),
  email: z.string().email({ message: "Geçerli bir e-posta adresi giriniz." }),
  subject: z.string().min(3, { message: "Lütfen bir konu başlığı giriniz." }),
  message: z.string().min(10, { message: "Mesajınız en az 10 karakter olmalıdır." }),
});

interface DigitalSecretariatProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

export function DigitalSecretariat({ isOpen, onOpenChange }: DigitalSecretariatProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", email: "", subject: "", message: "" },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    try {
      const aiResult = await categorizeContactMessage({ message: values.message });
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setSubmitted(true);
      toast({
        title: "Mesajınız Alındı",
        description: `Dijital iletişime ulaştığınız için teşekkürler. Mesajınız ${aiResult.intent} olarak önceliklendirildi.`,
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

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl p-0 overflow-hidden rounded-[2.5rem] border-none bg-transparent shadow-none">
        <DialogHeader className="sr-only">
          <DialogTitle>Dijital İletişim Formu</DialogTitle>
          <DialogDescription>
            Görüş, öneri ve taleplerinizi iletmek için dijital iletişim formunu kullanın.
          </DialogDescription>
        </DialogHeader>
        <div className="bg-white/95 backdrop-blur-xl w-full flex flex-col lg:flex-row shadow-2xl relative">
          
          {/* Close button for better UX on mobile */}
          <button 
            onClick={() => onOpenChange(false)}
            className="absolute top-4 right-4 z-50 p-2 bg-muted/20 hover:bg-muted/40 rounded-full transition-colors"
          >
            <X className="w-5 h-5 text-primary" />
          </button>

          {/* Left Side: Info (Gradient) */}
          <div className="lg:w-2/5 bg-gradient-to-br from-primary to-blue-900 p-8 lg:p-10 text-white flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            
            <div className="space-y-6 relative z-10">
              <div className="inline-flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-xl font-black text-[10px] uppercase tracking-widest">
                <Accessibility className="w-4 h-4 text-secondary" />
                Dijital iletişim
              </div>
              <h2 className="text-3xl font-headline font-black leading-tight">
                Engelsiz Erişim <br />
                <span className="text-secondary">ve Talep Formu</span>
              </h2>
              <p className="text-white/70 text-xs font-medium leading-relaxed">
                Yapay zeka destekli sistemimizle taleplerinizi hızla çözüme kavuşturuyoruz.
              </p>
            </div>

            <div className="space-y-3 pt-8 relative z-10">
              <div className="p-3 bg-white/10 rounded-2xl border border-white/5 flex items-center gap-3">
                <MapPin className="w-4 h-4 text-secondary" />
                <p className="font-bold text-[10px]">TBMM Ofisleri, Ankara</p>
              </div>
              <div className="p-3 bg-white/10 rounded-2xl border border-white/5 flex items-center gap-3">
                <Mail className="w-4 h-4 text-secondary" />
                <p className="font-bold text-[10px]">iletisim@engelsizdunya.gov.tr</p>
              </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="lg:w-3/5 p-8 lg:p-10 bg-white">
            {submitted ? (
              <motion.div 
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="h-full flex flex-col items-center justify-center text-center space-y-4"
              >
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-2">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-black text-primary">Teşekkür Ederiz!</h3>
                <p className="text-xs text-muted-foreground leading-relaxed font-medium">
                  Mesajınız alındı. Yapay zeka sistemimiz talebinizi analiz ederek ilgili birime iletti.
                </p>
                <Button 
                  onClick={() => { setSubmitted(false); form.reset(); onOpenChange(false); }}
                  className="rounded-xl px-8 h-11 bg-primary text-white font-black text-xs transition-all"
                >
                  Kapat
                </Button>
              </motion.div>
            ) : (
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem className="space-y-1.5">
                          <FormLabel className="font-black text-primary text-[10px] uppercase tracking-widest ml-1">Ad Soyad</FormLabel>
                          <FormControl>
                            <div className="relative group">
                              <User className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground group-focus-within:text-primary transition-colors" />
                              <Input placeholder="Adınız" {...field} className="h-10 pl-10 rounded-xl border-muted bg-muted/20 focus:bg-white transition-all text-xs font-medium" />
                            </div>
                          </FormControl>
                          <FormMessage className="text-[10px]" />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem className="space-y-1.5">
                          <FormLabel className="font-black text-primary text-[10px] uppercase tracking-widest ml-1">E-posta</FormLabel>
                          <FormControl>
                            <div className="relative group">
                              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground group-focus-within:text-primary transition-colors" />
                              <Input placeholder="E-posta" {...field} className="h-10 pl-10 rounded-xl border-muted bg-muted/20 focus:bg-white transition-all text-xs font-medium" />
                            </div>
                          </FormControl>
                          <FormMessage className="text-[10px]" />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem className="space-y-1.5">
                        <FormLabel className="font-black text-primary text-[10px] uppercase tracking-widest ml-1">Konu</FormLabel>
                        <FormControl>
                          <div className="relative group">
                            <PenLine className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground group-focus-within:text-primary transition-colors" />
                            <Input placeholder="Mesajınızın konusu" {...field} className="h-10 pl-10 rounded-xl border-muted bg-muted/20 focus:bg-white transition-all text-xs font-medium" />
                          </div>
                        </FormControl>
                        <FormMessage className="text-[10px]" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem className="space-y-1.5">
                        <FormLabel className="font-black text-primary text-[10px] uppercase tracking-widest ml-1">Mesajınız</FormLabel>
                        <FormControl>
                          <div className="relative group">
                            <MessageSquare className="absolute left-3 top-3 w-3.5 h-3.5 text-muted-foreground group-focus-within:text-primary transition-colors" />
                            <Textarea 
                              placeholder="Talebinizi buraya yazınız..." 
                              className="min-h-[100px] pl-10 pt-2.5 rounded-xl border-muted bg-muted/20 focus:bg-white transition-all text-xs font-medium resize-none"
                              {...field} 
                            />
                          </div>
                        </FormControl>
                        <FormMessage className="text-[10px]" />
                      </FormItem>
                    )}
                  />

                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full h-11 bg-primary hover:bg-primary/90 text-white font-black text-sm rounded-xl group transition-all shadow-lg shadow-primary/10 flex items-center justify-center gap-2 active:scale-[0.98]"
                  >
                    {isSubmitting ? (
                      <Loader2 className="h-4 w-4 animate-spin" />
                    ) : (
                      <>
                        Talebi İlet
                        <Send className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </>
                    )}
                  </Button>
                </form>
              </Form>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

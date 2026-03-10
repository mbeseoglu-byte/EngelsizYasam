
"use client"

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Award, ShieldCheck } from 'lucide-react';

export function Hero() {
  // Av. Serkan Bayram'ın vizyonunu temsil eden daha profesyonel ve vakarlı bir görsel seed'i
  const heroImage = "https://picsum.photos/seed/serkan-bayram-portrait/800/1000";

  return (
    <section className="relative overflow-hidden bg-white pt-12 pb-20 lg:pt-16 lg:pb-24 border-b border-border text-left">
      <div className="absolute top-0 left-0 w-1/2 h-full bg-primary/5 -skew-x-12 -translate-x-1/4 -z-10" />
      <div className="container px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="lg:w-2/3 space-y-6">
            <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-4 py-1.5 rounded-full font-bold text-[10px] border border-secondary/20 shadow-sm uppercase tracking-wider">
              <Award className="w-3.5 h-3.5" />
              Engelsiz ve Erişilebilir Bir Dünya
            </div>
            <h1 className="text-3xl lg:text-5xl font-headline font-black text-primary leading-tight tracking-tight">
              Yere düştüğünde değil, <br />
              <span className="text-secondary italic">vazgeçtiğinde</span> kaybedersin.
            </h1>
            <p className="text-base text-muted-foreground leading-relaxed max-w-xl font-medium">
              Engelsiz Bir Dünya İçin Küresel Mücadele ve Yasama Çalışmaları. İstanbul Milletvekili Av. Serkan Bayram liderliğinde, engelleri yasal reformlarla ve küresel vizyonla aşıyoruz.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white font-bold h-12 px-8 rounded-full group text-sm shadow-lg shadow-primary/20">
                <Link href="#mucadele">
                  Mücadeleyi Keşfet
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-2 border-primary text-primary hover:bg-primary/5 font-bold h-12 px-8 rounded-full text-sm">
                <Link href="#yasa" className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4" />
                  Yasal Başarılar
                </Link>
              </Button>
            </div>
          </div>
          
          <div className="lg:w-1/3 w-full flex justify-start lg:justify-end">
            <div className="relative w-full max-w-[280px] aspect-[3/4] rounded-[2rem] overflow-hidden shadow-2xl border-8 border-white bg-muted rotate-2 hover:rotate-0 transition-transform duration-500">
              <Image 
                src={heroImage} 
                alt="Av. Serkan Bayram"
                fill
                className="object-cover"
                priority
                data-ai-hint="portrait of a professional statesman"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


"use client"

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Award, ShieldCheck } from 'lucide-react';

export function Hero() {
  const heroImage = "https://picsum.photos/seed/serkan-bayram-tbmm/800/450";

  return (
    <section className="relative overflow-hidden bg-white pt-12 pb-20 lg:pt-16 lg:pb-24 border-b border-border">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 -skew-x-12 translate-x-1/4 -z-10" />
      <div className="container px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 text-left">
          <div className="lg:w-3/4 space-y-6">
            <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-4 py-1.5 rounded-full font-bold text-[10px] border border-secondary/20 shadow-sm uppercase tracking-wider">
              <Award className="w-3.5 h-3.5" />
              Engelsiz ve Erişilebilir Bir Dünya
            </div>
            <h1 className="text-2xl lg:text-4xl font-headline font-black text-primary leading-tight tracking-tight">
              Yere düştüğünde değil, <br />
              <span className="text-secondary italic">vazgeçtiğinde</span> kaybedersin.
            </h1>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xl font-medium">
              Engelsiz Bir Dünya İçin Küresel Mücadele ve Yasama Çalışmaları. İstanbul Milletvekili Av. Serkan Bayram liderliğinde, engelleri yasal reformlarla ve küresel vizyonla aşıyoruz.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white font-bold h-11 px-6 rounded-full group text-xs shadow-lg shadow-primary/20">
                <Link href="#mucadele">
                  Mücadeleyi Keşfet
                  <ArrowRight className="ml-2 w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-2 border-primary text-primary hover:bg-primary/5 font-bold h-11 px-6 rounded-full text-xs">
                <Link href="#yasa" className="flex items-center gap-2">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  Yasal Başarılar
                </Link>
              </Button>
            </div>
          </div>
          
          <div className="lg:w-1/4 w-full max-w-[280px] relative ml-0 lg:ml-auto">
            <div className="relative aspect-[16/10] rounded-[1.5rem] overflow-hidden shadow-2xl border-4 border-white bg-muted">
              <Image 
                src={heroImage} 
                alt="Milletvekili Av. Serkan Bayram"
                fill
                className="object-cover"
                priority
                data-ai-hint="professional statesman press conference"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

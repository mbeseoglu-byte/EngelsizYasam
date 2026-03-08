
"use client"

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Award, ShieldCheck } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function Hero() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-image');
  const fallback = "https://placehold.jp/24/1e3a8a/ffffff/600x400.png?text=Serkan+Bayram";

  return (
    <section className="relative overflow-hidden bg-white pt-16 pb-24 lg:pt-24 lg:pb-32">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 -skew-x-12 translate-x-1/4 -z-10" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-16 lg:gap-20">
          <div className="lg:w-3/5 space-y-8 text-left">
            <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-5 py-2 rounded-full font-bold text-xs border border-secondary/20 shadow-sm animate-fade-in">
              <Award className="w-4 h-4" />
              Buğday Tanesi: Engel Tanımayan Mücadele
            </div>
            <h1 className="text-2xl lg:text-4xl font-headline font-black text-primary leading-[1.2] tracking-tight">
              Yere düştüğünde değil, <br />
              <span className="text-secondary italic">vazgeçtiğinde</span> kaybedersin.
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl font-medium">
              İstanbul Milletvekili Av. Serkan Bayram liderliğinde, engelleri yasal reformlarla ve küresel vizyonla aşan, herkes için tam engelsiz ve erişilebilir bir dünya inşa ediyoruz.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white font-bold h-14 px-8 rounded-full group text-base shadow-xl shadow-primary/25">
                <Link href="#mucadele">
                  Mücadeleyi Keşfet
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-2 border-primary text-primary hover:bg-primary/5 font-bold h-14 px-8 rounded-full text-base">
                <Link href="#yasa" className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4" />
                  Yasal Başarılar
                </Link>
              </Button>
            </div>
          </div>
          
          <div className="lg:w-2/5 w-full max-w-sm lg:max-w-none relative">
            <div className="absolute -inset-6 bg-secondary/15 rounded-[3rem] rotate-3 -z-10 blur-2xl opacity-60"></div>
            <div className="relative aspect-[4/5] lg:aspect-[3/4] rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white">
              <Image 
                src={heroImage?.imageUrl || fallback} 
                alt="Av. Serkan Bayram"
                fill
                className="object-cover"
                priority
                data-ai-hint="professional statesman"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

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
    <section className="relative overflow-hidden bg-white pt-20 pb-32 lg:pt-32 lg:pb-48">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 -skew-x-12 translate-x-1/4 -z-10" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          <div className="lg:w-3/5 space-y-10">
            <div className="inline-flex items-center gap-3 bg-secondary/10 text-secondary px-6 py-2.5 rounded-full font-bold text-sm border border-secondary/20 shadow-sm animate-fade-in">
              <Award className="w-5 h-5" />
              Buğday Tanesi: Engel Tanımayan Mücadele
            </div>
            <h1 className="text-5xl lg:text-8xl font-headline font-black text-primary leading-[1.05] tracking-tight">
              Yere düştüğünde değil, <br />
              <span className="text-secondary italic">vazgeçtiğinde</span> kaybedersin.
            </h1>
            <p className="text-2xl text-muted-foreground leading-relaxed max-w-2xl font-medium">
              İstanbul Milletvekili Av. Serkan Bayram liderliğinde, engelleri yasal reformlarla ve küresel vizyonla aşan, herkes için tam engelsiz ve erişilebilir bir dünya inşa ediyoruz.
            </p>
            <div className="flex flex-wrap gap-6 pt-6">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white font-bold h-18 px-12 rounded-full group text-xl shadow-2xl shadow-primary/25">
                <Link href="#mucadele">
                  Mücadeleyi Keşfet
                  <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1.5 transition-transform" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-2 border-primary text-primary hover:bg-primary/5 font-bold h-18 px-12 rounded-full text-xl">
                <Link href="#yasa" className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5" />
                  Yasal Başarılar
                </Link>
              </Button>
            </div>
          </div>
          
          <div className="lg:w-2/5 relative">
            <div className="absolute -inset-8 bg-secondary/15 rounded-[4rem] rotate-3 -z-10 blur-3xl opacity-60"></div>
            <div className="relative aspect-[3/4] rounded-[3.5rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] border-[12px] border-white">
              <Image 
                src={heroImage?.imageUrl || fallback} 
                alt="Av. Serkan Bayram"
                fill
                className="object-cover"
                priority
                data-ai-hint="professional statesman"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 bg-white p-10 rounded-[2.5rem] shadow-2xl border border-border hidden md:block max-w-[280px]">
              <div className="space-y-5">
                <div className="flex items-center gap-4">
                  <div className="bg-secondary rounded-2xl p-3.5 shadow-lg shadow-secondary/20">
                    <Award className="w-7 h-7 text-white" />
                  </div>
                  <div className="text-base font-black text-primary uppercase tracking-widest">Vizyoner Lider</div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed font-bold">
                  Milyonlarca engelli bireyin sesi, küresel hak savunucusu.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

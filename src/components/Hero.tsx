
"use client"

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Globe, ArrowRight, Award } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function Hero() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-image');

  return (
    <section className="relative overflow-hidden bg-white pt-16 pb-24 lg:pt-24 lg:pb-32">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 -skew-x-12 translate-x-1/4 -z-10" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 space-y-8">
            <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full font-bold text-sm border border-secondary/20">
              <Award className="w-4 h-4" />
              Buğday Tanesi: Engel Tanımayan Mücadele
            </div>
            <h1 className="text-4xl lg:text-7xl font-headline font-black text-primary leading-[1.1]">
              Yere düştüğünde değil, <br />
              <span className="text-secondary italic">vazgeçtiğinde</span> kaybedersin.
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-xl font-medium">
              Av. Serkan Bayram liderliğinde, engelleri yasal reformlarla ve küresel vizyonla aşan, herkes için erişilebilir bir dünya inşa ediyoruz.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white font-bold h-16 px-10 rounded-full group text-lg shadow-xl shadow-primary/20">
                <Link href="#mucadele">
                  Mücadelemizi Tanıyın
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-2 border-primary text-primary hover:bg-primary/5 font-bold h-16 px-10 rounded-full text-lg">
                <Link href="#haberler">Güncel Haberler</Link>
              </Button>
            </div>
          </div>
          
          <div className="lg:w-1/2 relative">
            <div className="absolute -inset-4 bg-secondary/20 rounded-[3rem] rotate-3 -z-10 blur-2xl opacity-50"></div>
            <div className="relative aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white">
              <Image 
                src={heroImage?.imageUrl || ""} 
                alt="Av. Serkan Bayram"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-white p-8 rounded-3xl shadow-2xl border border-border hidden md:block max-w-[240px]">
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="bg-primary rounded-2xl p-3">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-sm font-black text-primary uppercase tracking-wider">Küresel Etki</div>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed font-bold">
                  BM ve uluslararası platformlarda Türkiye'nin engelli hakları vizyonu.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

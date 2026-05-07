
"use client"

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Award, ShieldCheck, Medal } from 'lucide-react';

interface HeroProps {
  onContactClick?: () => void;
  onNobelClick?: () => void;
}

export function Hero({ onContactClick, onNobelClick }: HeroProps) {
  // Av. Serkan Bayram resmi profil fotoğrafı
  const profileImage = "https://media-cdn.t24.com.tr/media/library/2019/05/1558475293655-untitled-1.jpg";

  return (
    <section className="relative overflow-hidden bg-white pt-4 pb-4 lg:pt-8 lg:pb-8 border-b border-secondary/20 text-left">
      <div className="absolute top-0 left-0 w-1/2 h-full bg-primary/5 -skew-x-12 -translate-x-1/4 -z-10" />
      <div className="container px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          <div className="lg:w-2/3 space-y-4">
            <div className="flex flex-wrap gap-2">
              <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-4 py-1.5 rounded-full font-bold text-[10px] border border-secondary/20 shadow-sm uppercase tracking-wider">
                <Award className="w-3.5 h-3.5" />
                Engelsiz ve Erişilebilir Bir Dünya
              </div>
              <button 
                onClick={onNobelClick}
                className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full font-bold text-[10px] border border-primary/20 shadow-sm uppercase tracking-wider hover:bg-primary/20 transition-colors cursor-pointer"
              >
                <Medal className="w-3.5 h-3.5" />
                Nobel Barış Ödülü Adayı (2024)
              </button>
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
            </div>
          </div>
          
          <div className="lg:w-1/3 w-full flex justify-start lg:justify-end">
            <div className="relative group w-full max-w-md">
              <div className="absolute -inset-2 border border-secondary/20 rounded-[1.5rem] -z-10 scale-105 group-hover:scale-110 transition-transform duration-500" />
              <div className="relative overflow-hidden rounded-2xl shadow-2xl border-4 border-secondary bg-white">
                <img 
                  src={profileImage} 
                  alt="Av. Serkan Bayram" 
                  className="w-full aspect-video object-cover transition-transform duration-500 group-hover:scale-105" 
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

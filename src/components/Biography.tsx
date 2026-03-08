"use client"

import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Quote, Flame, Heart, BookOpen } from 'lucide-react';

export function Biography() {
  const bioImg = PlaceHolderImages.find(img => img.id === 'bio-portrait');

  return (
    <section id="biyografi" className="py-40 bg-primary text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-secondary/5 -skew-x-12 translate-x-1/2" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-24">
          <div className="lg:w-2/5">
            <div className="relative">
              <div className="absolute -inset-10 border-4 border-secondary/40 rounded-[4rem] rotate-6" />
              <div className="relative aspect-[4/5] rounded-[3.5rem] overflow-hidden shadow-3xl border-[10px] border-white/10">
                <Image 
                  src={bioImg?.imageUrl || ""} 
                  alt="Av. Serkan Bayram" 
                  fill 
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                  data-ai-hint="man portrait"
                />
              </div>
            </div>
          </div>

          <div className="lg:w-3/5 space-y-12">
            <div className="flex items-center gap-8">
              <div className="h-px w-20 bg-secondary" />
              <h2 className="text-secondary font-black uppercase tracking-[0.3em] text-xl">YAŞAM ÖYKÜSÜ</h2>
            </div>
            
            <h3 className="text-5xl lg:text-8xl font-headline font-black leading-[1.05] italic">
              "Küllerinden Doğan <br />
              <span className="text-secondary">Bir Başarı Hikayesi.</span>"
            </h3>

            <div className="space-y-10 text-2xl text-white/90 leading-relaxed font-medium">
              <div className="flex gap-8 items-start group">
                <div className="p-4 bg-secondary/20 rounded-2xl mt-1 group-hover:bg-secondary transition-colors duration-300">
                  <Flame className="w-8 h-8 text-secondary group-hover:text-white" />
                </div>
                <p>
                  Henüz bebekken tarlada çıkan yangın sonrası ellerini kaybeden Serkan Bayram, hayata küsmek yerine mücadeleyi seçti. "Buğday Tanesi" gibi her zorlukta daha güçlü yeşermeyi bildi.
                </p>
              </div>
              <div className="flex gap-8 items-start group">
                <div className="p-4 bg-secondary/20 rounded-2xl mt-1 group-hover:bg-secondary transition-colors duration-300">
                  <Heart className="w-8 h-8 text-secondary group-hover:text-white" />
                </div>
                <p>
                  Erzincan'ın bir köyünden TBMM'ye uzanan bu yolculukta; bir hukukçu, bir milletvekili ve en önemlisi milyonların umudu olarak engelsiz ve erişilebilir bir dünya için durmaksızın çalışıyor.
                </p>
              </div>
              <div className="flex gap-8 items-start group">
                <div className="p-4 bg-secondary/20 rounded-2xl mt-1 group-hover:bg-secondary transition-colors duration-300">
                  <BookOpen className="w-8 h-8 text-secondary group-hover:text-white" />
                </div>
                <p>
                  Hukuk fakültesini dereceyle bitirerek, adaletin herkes için eşit olması gerektiğine olan inancıyla sayısız yasal düzenlemeye öncülük etti.
                </p>
              </div>
            </div>

            <div className="pt-12 border-t border-white/10">
              <div className="flex items-center gap-10">
                <Quote className="w-20 h-20 text-secondary opacity-40" />
                <div className="space-y-3">
                  <div className="text-3xl font-black tracking-tight">Av. Serkan Bayram</div>
                  <div className="text-base font-black text-secondary uppercase tracking-[0.25em]">İstanbul Milletvekili & Hukukçu</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

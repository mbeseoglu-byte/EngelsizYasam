
"use client"

import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Quote, Flame, Heart } from 'lucide-react';

export function Biography() {
  const bioImg = PlaceHolderImages.find(img => img.id === 'bio-portrait');

  return (
    <section id="biyografi" className="py-32 bg-primary text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-secondary/5 -skew-x-12 translate-x-1/2" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          <div className="lg:w-2/5">
            <div className="relative">
              <div className="absolute -inset-6 border-4 border-secondary/30 rounded-[3rem] rotate-6" />
              <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white/20">
                <Image 
                  src={bioImg?.imageUrl || ""} 
                  alt="Av. Serkan Bayram" 
                  fill 
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                />
              </div>
            </div>
          </div>

          <div className="lg:w-3/5 space-y-10">
            <div className="flex items-center gap-6">
              <div className="h-px w-16 bg-secondary" />
              <h2 className="text-secondary font-black uppercase tracking-widest text-lg">Yaşam Öyküsü</h2>
            </div>
            
            <h3 className="text-4xl lg:text-7xl font-headline font-black leading-[1.1] italic">
              "Küllerinden Doğan <br />
              <span className="text-secondary">Bir Başarı Hikayesi.</span>"
            </h3>

            <div className="space-y-8 text-xl text-white/80 leading-relaxed font-medium">
              <div className="flex gap-6 items-start">
                <div className="p-3 bg-secondary/20 rounded-xl mt-1">
                  <Flame className="w-6 h-6 text-secondary" />
                </div>
                <p>
                  Henüz bebekken tarlada çıkan yangın sonrası ellerini kaybeden Serkan Bayram, hayata küsmek yerine mücadeleyi seçti. "Buğday Tanesi" gibi her zorlukta daha güçlü yeşermeyi bildi.
                </p>
              </div>
              <div className="flex gap-6 items-start">
                <div className="p-3 bg-secondary/20 rounded-xl mt-1">
                  <Heart className="w-6 h-6 text-secondary" />
                </div>
                <p>
                  Erzincan'ın bir köyünden TBMM'ye uzanan bu yolculukta; bir hukukçu, bir milletvekili ve en önemlisi milyonların umudu olarak engelsiz ve erişilebilir bir dünya için durmaksızın çalışıyor.
                </p>
              </div>
            </div>

            <div className="pt-10 border-t border-white/10">
              <div className="flex items-center gap-8">
                <Quote className="w-16 h-16 text-secondary opacity-50" />
                <div className="space-y-2">
                  <div className="text-2xl font-black">Av. Serkan Bayram</div>
                  <div className="text-sm font-black text-secondary uppercase tracking-[0.2em]">İstanbul Milletvekili & Hukukçu</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

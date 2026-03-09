
"use client"

import Image from 'next/image';
import { Quote, Landmark, Heart, ShieldCheck } from 'lucide-react';

export function Biography() {
  const fallback = "https://placehold.jp/24/1e3a8a/ffffff/800x1000.png?text=Av.+Serkan+Bayram";

  return (
    <section id="biyografi" className="py-20 bg-primary text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-secondary/5 -skew-x-12 translate-x-1/2" />
      
      <div className="container px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24 text-left">
          <div className="lg:w-3/5 space-y-6 order-2 lg:order-1">
            <div className="flex items-center gap-4">
              <div className="h-px w-12 bg-secondary" />
              <h2 className="text-secondary font-black uppercase tracking-[0.3em] text-[10px]">HAKKIMDA</h2>
            </div>
            
            <h3 className="text-2xl lg:text-3xl font-headline font-black leading-tight italic">
              Engelli Hakları Savunucusu <br />
              <span className="text-secondary">ve Milletvekili Kimliğiyle.</span>
            </h3>

            <div className="space-y-6 text-base text-white/90 leading-relaxed font-medium">
              <div className="flex gap-4 items-start group">
                <div className="p-3 bg-secondary/20 rounded-xl mt-1 group-hover:bg-secondary transition-colors duration-300 shrink-0">
                  <Landmark className="w-5 h-5 text-secondary group-hover:text-white" />
                </div>
                <p className="text-sm">
                  Av. Serkan Bayram, İstanbul Milletvekili olarak TBMM çatısı altında engelli vatandaşlarımızın sesi olmakta ve Türkiye'nin erişilebilirlik vizyonunu yasalarla taçlandırmaktadır.
                </p>
              </div>
              <div className="flex gap-4 items-start group">
                <div className="p-3 bg-secondary/20 rounded-xl mt-1 group-hover:bg-secondary transition-colors duration-300 shrink-0">
                  <Heart className="w-5 h-5 text-secondary group-hover:text-white" />
                </div>
                <p className="text-sm">
                  Kişisel yaşam mücadelesini milyonların umuduna dönüştüren Bayram, "Buğday Tanesi" projesiyle engelli bireylerin toplumsal hayata tam katılımı için küresel bir kampanya yürütmektedir.
                </p>
              </div>
              <div className="flex gap-4 items-start group">
                <div className="p-3 bg-secondary/20 rounded-xl mt-1 group-hover:bg-secondary transition-colors duration-300 shrink-0">
                  <ShieldCheck className="w-5 h-5 text-secondary group-hover:text-white" />
                </div>
                <p className="text-sm">
                  Hukukçu kimliğiyle adaletin herkes için erişilebilir olmasını savunan Serkan Bayram, özellikle hakim ve savcı adaylığı önündeki engellerin kaldırılması gibi tarihi reformlara öncülük etmiştir.
                </p>
              </div>
            </div>

            <div className="pt-8 border-t border-white/10">
              <div className="flex items-center gap-6">
                <Quote className="w-12 h-12 text-secondary opacity-40" />
                <div className="space-y-1">
                  <div className="text-xl font-black tracking-tight">Av. Serkan Bayram</div>
                  <div className="text-[10px] font-black text-secondary uppercase tracking-[0.25em]">İstanbul Milletvekili & Hukukçu</div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-2/5 order-1 lg:order-2 w-full max-w-sm lg:max-w-none mx-auto lg:mx-0">
            <div className="relative">
              <div className="absolute -inset-6 border-4 border-secondary/40 rounded-[2.5rem] rotate-3" />
              <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl border-8 border-white/10">
                <Image 
                  src={fallback} 
                  alt="Av. Serkan Bayram" 
                  fill 
                  className="object-cover"
                  data-ai-hint="man portrait"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

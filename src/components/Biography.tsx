
"use client"

import Image from 'next/image';
import { Quote, Landmark, Heart } from 'lucide-react';

export function Biography() {
  // Engelli temalı, profesyonel bir görsel kullanıyoruz
  const disabilityImage = "https://picsum.photos/seed/disability-inclusion/800/800";

  return (
    <div className="py-8 lg:py-12 px-4 lg:px-8 bg-primary text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-secondary/5 -skew-x-12 translate-x-1/2" />
      
      <div className="relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 text-left">
          <div className="lg:w-3/5 space-y-6 order-2 lg:order-1">
            <div className="flex items-center gap-4">
              <div className="h-px w-12 bg-secondary" />
              <h2 className="text-secondary font-black uppercase tracking-[0.3em] text-[10px]">HAKKIMDA</h2>
            </div>
            
            <h3 className="text-2xl lg:text-3xl font-headline font-black leading-tight italic">
              Engelli Hakları Savunucusu <br />
              <span className="text-secondary">ve Milletvekili Kimliğiyle.</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-base text-white/90 leading-relaxed font-medium">
              <div className="flex gap-4 items-start group">
                <div className="p-3 bg-secondary/20 rounded-xl mt-1 group-hover:bg-secondary transition-colors duration-300 shrink-0">
                  <Landmark className="w-5 h-5 text-secondary group-hover:text-white" />
                </div>
                <p className="text-xs">
                  Av. Serkan Bayram, İstanbul Milletvekili olarak TBMM çatısı altında engelli vatandaşlarımızın sesi olmaktadır.
                </p>
              </div>
              <div className="flex gap-4 items-start group">
                <div className="p-3 bg-secondary/20 rounded-xl mt-1 group-hover:bg-secondary transition-colors duration-300 shrink-0">
                  <Heart className="w-5 h-5 text-secondary group-hover:text-white" />
                </div>
                <p className="text-xs">
                  "Buğday Tanesi" projesiyle engelli bireylerin toplumsal hayata tam katılımı için çalışmaktadır.
                </p>
              </div>
            </div>

            <div className="pt-6 border-t border-white/10">
              <div className="flex items-center gap-4">
                <Quote className="w-10 h-10 text-secondary opacity-40" />
                <div className="space-y-0.5">
                  <div className="text-lg font-black tracking-tight">Av. Serkan Bayram</div>
                  <div className="text-[9px] font-black text-secondary uppercase tracking-[0.25em]">Milletvekili & Hukukçu</div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-2/5 order-1 lg:order-2 w-full max-w-xs mx-auto lg:mx-0">
            <div className="relative">
              <div className="absolute -inset-4 border-2 border-secondary/40 rounded-[2rem] rotate-3" />
              <div className="relative aspect-square rounded-[1.5rem] overflow-hidden shadow-2xl border-4 border-white/10">
                <Image 
                  src={disabilityImage} 
                  alt="Engelli Hakları ve Erişilebilirlik" 
                  width={600}
                  height={600}
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

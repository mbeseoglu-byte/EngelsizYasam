
"use client"

import Image from 'next/image';
import { PlayCircle, Star, Award, Quote, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function MovieSection() {
  const fallback = "https://placehold.jp/24/1e3a8a/ffffff/600x850.png?text=Bugday+Tanesi+Film";

  return (
    <section id="mucadele" className="py-20 bg-primary text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-secondary/10 -skew-x-12 translate-x-1/2" />
      
      <div className="container px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-16 text-left">
          <div className="lg:w-2/5 w-full max-w-xs lg:max-w-none">
            <div className="relative group">
              <div className="relative aspect-[2/3] rounded-[2rem] overflow-hidden shadow-xl border-4 border-white/10 bg-muted flex items-center justify-center">
                {/* Video Placeholder Area */}
                <div className="absolute inset-0 bg-secondary/20 flex flex-col items-center justify-center p-8 text-center gap-4">
                  <div className="w-16 h-16 bg-white text-primary rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                    <PlayCircle className="w-8 h-8" />
                  </div>
                  <div className="text-xs font-black text-white uppercase tracking-widest">Fragmanı İzle</div>
                </div>
                <Image 
                  src={fallback} 
                  alt="Buğday Tanesi Film Afişi" 
                  fill 
                  className="object-cover opacity-30 transition-transform duration-1000 group-hover:scale-105"
                  data-ai-hint="movie poster"
                />
              </div>
            </div>
          </div>

          <div className="lg:w-3/5 space-y-6">
            <div className="inline-flex items-center gap-2 bg-secondary/20 text-secondary px-4 py-1.5 rounded-full font-black text-[10px] uppercase tracking-widest border border-secondary/30">
              <Star className="w-3.5 h-3.5 fill-current" />
              SİNEMADA BİR HAK MÜCADELESİ
            </div>
            
            <h2 className="text-2xl lg:text-3xl font-headline font-black leading-tight italic">
              Vazgeçmeyenlerin Hikayesi: <br />
              <span className="text-secondary">Buğday Tanesi</span>
            </h2>

            <div className="space-y-4 text-base text-white/90 leading-relaxed font-medium max-w-2xl">
              <p className="text-sm">
                Av. Serkan Bayram'ın çocukluk kazasından TBMM'ye uzanan ilham verici hayat hikayesi, beyaz perdede bir direniş ve azim rehberine dönüştü. Milyonlara umut olan bu hikaye, engellerin zihinlerde olduğunu kanıtlıyor.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                  <Award className="w-6 h-6 text-secondary mb-4" />
                  <h4 className="font-black text-lg mb-2">Uluslararası Ödüller</h4>
                  <p className="text-xs text-white/60">Global film festivallerinde en iyi biyografi ödülleri ve toplumsal etki takdirnameleri.</p>
                </div>
                <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                  <Users className="w-6 h-6 text-secondary mb-4" />
                  <h4 className="font-black text-xl mb-2">Küresel Yayın</h4>
                  <p className="text-sm text-white/60">Onlarca dilde altyazı ve dublaj ile dünya genelinde farkındalık yaratmaya devam ediyor.</p>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-white/10">
              <div className="flex items-start gap-4">
                <Quote className="w-8 h-8 text-secondary opacity-40 shrink-0" />
                <div className="space-y-1">
                  <p className="text-lg font-black italic tracking-tight leading-tight">
                    "Yere düştüğünde değil, vazgeçtiğinde kaybedersin."
                  </p>
                  <div className="text-[9px] font-black text-secondary uppercase tracking-[0.2em]">Av. Serkan Bayram</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

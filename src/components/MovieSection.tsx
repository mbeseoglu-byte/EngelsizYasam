
"use client"

import Image from 'next/image';
import { PlayCircle, Star, Award, Quote, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function MovieSection() {
  const moviePoster = PlaceHolderImages.find(img => img.id === 'movie-poster');
  const fallback = "https://placehold.jp/24/1e3a8a/ffffff/600x850.png?text=Bugday+Tanesi+Film";

  return (
    <section id="mucadele" className="py-24 bg-primary text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-secondary/10 -skew-x-12 translate-x-1/2" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-16 lg:gap-24">
          <div className="lg:w-2/5 w-full max-w-xs lg:max-w-none">
            <div className="relative group">
              <div className="absolute -inset-6 border-2 border-secondary/40 rounded-[3rem] rotate-3 group-hover:rotate-0 transition-transform duration-700" />
              <div className="relative aspect-[2/3] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white/10">
                <Image 
                  src={moviePoster?.imageUrl || fallback} 
                  alt="Buğday Tanesi Film Afişi" 
                  fill 
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  data-ai-hint="movie poster"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Button className="bg-white text-primary hover:bg-secondary hover:text-white font-black py-6 px-8 rounded-xl gap-2 text-base shadow-xl">
                    <PlayCircle className="w-6 h-6" />
                    FRAGMANI İZLE
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-3/5 space-y-8 text-left">
            <div className="inline-flex items-center gap-2 bg-secondary/20 text-secondary px-4 py-1.5 rounded-full font-black text-[10px] uppercase tracking-widest border border-secondary/30">
              <Star className="w-4 h-4 fill-current" />
              SİNEMADA BİR HAK MÜCADELESİ
            </div>
            
            <h2 className="text-2xl lg:text-3xl font-headline font-black leading-tight italic">
              Buğday Tanesi: <br />
              <span className="text-secondary">Milyonların Umudu</span>
            </h2>

            <div className="space-y-6 text-lg text-white/90 leading-relaxed font-medium max-w-2xl">
              <p>
                Av. Serkan Bayram'ın çocukluk kazasından TBMM'ye uzanan ilham verici hayat hikayesi, beyaz perdede bir direniş ve azim rehberine dönüştü.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-5 bg-white/5 rounded-2xl border border-white/10">
                  <Award className="w-6 h-6 text-secondary mb-3" />
                  <h4 className="font-black text-lg mb-1">Uluslararası Ödüller</h4>
                  <p className="text-xs text-white/60">Global film festivallerinde en iyi biyografi ödülleri.</p>
                </div>
                <div className="p-5 bg-white/5 rounded-2xl border border-white/10">
                  <Users className="w-6 h-6 text-secondary mb-3" />
                  <h4 className="font-black text-lg mb-1">Küresel Yayın</h4>
                  <p className="text-xs text-white/60">Onlarca dilde altyazı ve dublaj ile dünya vizyonunda.</p>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-white/10">
              <div className="flex items-start gap-6">
                <Quote className="w-12 h-12 text-secondary opacity-40 shrink-0" />
                <div className="space-y-2">
                  <p className="text-xl font-black italic tracking-tight leading-tight">
                    "Yere düştüğünde değil, vazgeçtiğinde kaybedersin."
                  </p>
                  <div className="text-[10px] font-black text-secondary uppercase tracking-[0.25em]">Av. Serkan Bayram</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

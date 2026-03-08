"use client"

import Image from 'next/image';
import { PlayCircle, Star, Award, Quote, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function MovieSection() {
  const moviePoster = PlaceHolderImages.find(img => img.id === 'movie-poster');
  const fallback = "https://placehold.jp/24/1e3a8a/ffffff/600x850.png?text=Bugday+Tanesi+Film";

  return (
    <section id="mucadele" className="py-40 bg-primary text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-secondary/10 -skew-x-12 translate-x-1/2" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-24">
          <div className="lg:w-2/5">
            <div className="relative group">
              <div className="absolute -inset-10 border-4 border-secondary/40 rounded-[4rem] rotate-6 group-hover:rotate-0 transition-transform duration-700" />
              <div className="relative aspect-[2/3] rounded-[3.5rem] overflow-hidden shadow-3xl border-[10px] border-white/10">
                <Image 
                  src={moviePoster?.imageUrl || fallback} 
                  alt="Buğday Tanesi Film Afişi" 
                  fill 
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  data-ai-hint="movie poster"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Button className="bg-white text-primary hover:bg-secondary hover:text-white font-black py-8 px-10 rounded-2xl gap-3 text-xl shadow-2xl">
                    <PlayCircle className="w-8 h-8" />
                    FRAGMANI İZLE
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-3/5 space-y-12">
            <div className="inline-flex items-center gap-3 bg-secondary/20 text-secondary px-6 py-2 rounded-full font-black text-sm uppercase tracking-widest border border-secondary/30">
              <Star className="w-5 h-5 fill-current" />
              SİNEMADA BİR HAK MÜCADELESİ
            </div>
            
            <h2 className="text-4xl lg:text-6xl font-headline font-black leading-[1.1] italic">
              Buğday Tanesi: <br />
              <span className="text-secondary">Milyonların Umudu</span>
            </h2>

            <div className="space-y-8 text-xl text-white/90 leading-relaxed font-medium">
              <p>
                Av. Serkan Bayram'ın çocukluk kazasından TBMM'ye uzanan ilham verici hayat hikayesi, beyaz perdede bir direniş ve azim rehberine dönüştü.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="p-6 bg-white/5 rounded-3xl border border-white/10">
                  <Award className="w-8 h-8 text-secondary mb-4" />
                  <h4 className="font-black text-xl mb-2">Uluslararası Ödüller</h4>
                  <p className="text-sm text-white/60">Global film festivallerinde en iyi biyografi ödülleri.</p>
                </div>
                <div className="p-6 bg-white/5 rounded-3xl border border-white/10">
                  <Users className="w-8 h-8 text-secondary mb-4" />
                  <h4 className="font-black text-xl mb-2">Küresel Yayın</h4>
                  <p className="text-sm text-white/60">Onlarca dilde altyazı ve dublaj ile dünya vizyonunda.</p>
                </div>
              </div>
            </div>

            <div className="pt-12 border-t border-white/10">
              <div className="flex items-start gap-8">
                <Quote className="w-16 h-16 text-secondary opacity-40 shrink-0" />
                <div className="space-y-4">
                  <p className="text-2xl font-black italic tracking-tight leading-tight">
                    "Yere düştüğünde değil, vazgeçtiğinde kaybedersin."
                  </p>
                  <div className="text-base font-black text-secondary uppercase tracking-[0.25em]">Av. Serkan Bayram</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

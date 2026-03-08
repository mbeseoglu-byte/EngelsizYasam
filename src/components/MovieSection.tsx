"use client"

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlayCircle, Gavel, CheckCircle2, Star } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function MovieSection() {
  const moviePoster = PlaceHolderImages.find(img => img.id === 'movie-poster');
  const legalImg = PlaceHolderImages.find(img => img.id === 'legal-reform');

  return (
    <section id="mucadele" className="py-40 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Movie Part */}
        <div className="flex flex-col lg:flex-row items-center gap-24 mb-48">
          <div className="lg:w-2/5 relative">
            <div className="absolute -inset-16 bg-primary/5 rounded-full blur-[100px] -z-10" />
            <div className="relative aspect-[2/3] w-full max-w-[450px] mx-auto rounded-[2.5rem] overflow-hidden shadow-[0_40px_80px_-15px_rgba(0,0,0,0.4)] border-8 border-white group">
              <Image 
                src={moviePoster?.imageUrl || ""} 
                alt="Buğday Tanesi Film"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                data-ai-hint="movie poster"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <Button className="w-full bg-white text-primary hover:bg-secondary hover:text-white font-black py-7 rounded-2xl gap-3 text-lg shadow-xl">
                  <PlayCircle className="w-7 h-7" />
                  FRAGMANI İZLE
                </Button>
              </div>
            </div>
            <div className="absolute top-10 -right-5 bg-secondary text-white p-5 rounded-2xl shadow-2xl rotate-12 hidden lg:block">
              <Star className="w-8 h-8 fill-current" />
            </div>
          </div>
          <div className="lg:w-3/5 space-y-10">
            <div className="inline-block px-6 py-2 bg-primary/10 text-primary rounded-xl font-black text-sm uppercase tracking-[0.2em] shadow-sm">
              SİNEMADA BİR HAK MÜCADELESİ
            </div>
            <h2 className="text-5xl lg:text-7xl font-headline font-black text-primary leading-[1.1]">
              Buğday Tanesi: <br />
              <span className="text-secondary italic">Milyonların Umudu</span>
            </h2>
            <p className="text-2xl text-muted-foreground leading-relaxed font-medium">
              Av. Serkan Bayram'ın çocukluk kazasından TBMM'ye uzanan ilham verici hayat hikayesi, "Buğday Tanesi" filmiyle beyaz perdeye taşındı. Bu film, sadece bir başarı öyküsü değil, engelli bireylerin toplumsal hak arama mücadelesinin küresel bir simgesidir.
            </p>
            <div className="grid md:grid-cols-2 gap-8 pt-6">
              <div className="p-8 bg-muted/40 rounded-3xl border border-primary/5 hover:border-secondary/20 hover:bg-white hover:shadow-xl transition-all duration-300">
                <h4 className="font-black text-primary text-2xl mb-3">Evrensel Motivasyon</h4>
                <p className="text-base text-muted-foreground font-bold">Dünyanın dört bir yanındaki engelli bireyler için bir direniş ve azim rehberi.</p>
              </div>
              <div className="p-8 bg-muted/40 rounded-3xl border border-primary/5 hover:border-secondary/20 hover:bg-white hover:shadow-xl transition-all duration-300">
                <h4 className="font-black text-primary text-2xl mb-3">Uluslararası Başarı</h4>
                <p className="text-base text-muted-foreground font-bold">Birçok dilde yayınlanarak küresel ölçekte farkındalık yarattı.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Legal Reform Part */}
        <div id="reform" className="bg-primary rounded-[4rem] p-10 lg:p-24 text-white relative overflow-hidden shadow-3xl">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-secondary/15 -skew-x-12 translate-x-1/4" />
          <div className="flex flex-col lg:flex-row gap-20 items-center relative z-10">
            <div className="lg:w-1/2 space-y-10">
              <div className="w-24 h-24 bg-secondary rounded-[2rem] flex items-center justify-center shadow-2xl transform -rotate-6">
                <Gavel className="w-12 h-12 text-white" />
              </div>
              <h2 className="text-4xl lg:text-6xl font-headline font-black leading-tight">
                Tarihi Yasal Reform: <br />
                <span className="text-secondary italic">Bariyerler Yıkıldı</span>
              </h2>
              <p className="text-xl text-white/90 leading-relaxed font-medium">
                Serkan Bayram'ın öncülüğünde, 70 yıllık bir adaletsizliğe son verildi. Yapılan yasal değişiklikle artık engelli vatandaşlarımızın hakim ve savcı olabilmesinin önündeki tüm yasal engeller kaldırıldı.
              </p>
              <ul className="space-y-6">
                {[
                  "70 yıllık mesleki kısıtlama tarihe gömüldü.",
                  "Liyakat ve adalette engel tanımayan yeni dönem.",
                  "Yargıda tam erişilebilirlik ve eşitlik sağlandı."
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-5 text-xl font-bold group">
                    <CheckCircle2 className="w-8 h-8 text-secondary flex-shrink-0 group-hover:scale-110 transition-transform" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:w-1/2">
              <div className="relative aspect-video rounded-[3rem] overflow-hidden border-8 border-white/10 shadow-[0_40px_80px_-15px_rgba(0,0,0,0.5)]">
                <Image 
                  src={legalImg?.imageUrl || ""} 
                  alt="Yasal Reform Görüşmeleri"
                  fill
                  className="object-cover"
                  data-ai-hint="parliament room"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


"use client"

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlayCircle, Gavel, CheckCircle2 } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function MovieSection() {
  const moviePoster = PlaceHolderImages.find(img => img.id === 'movie-poster');
  const legalImg = PlaceHolderImages.find(img => img.id === 'legal-reform');

  return (
    <section id="mucadele" className="py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Movie Part */}
        <div className="flex flex-col lg:flex-row items-center gap-20 mb-32">
          <div className="lg:w-2/5 relative">
            <div className="absolute -inset-10 bg-primary/5 rounded-full blur-3xl -z-10" />
            <div className="relative aspect-[2/3] w-full max-w-[400px] mx-auto rounded-3xl overflow-hidden shadow-[0_32px_64px_-12px_rgba(0,0,0,0.3)] border-4 border-white">
              <Image 
                src={moviePoster?.imageUrl || ""} 
                alt="Buğday Tanesi Film"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-8">
                <Button className="w-full bg-white text-primary hover:bg-secondary hover:text-white font-black py-6 rounded-2xl gap-3">
                  <PlayCircle className="w-6 h-6" />
                  FRAGMANI İZLE
                </Button>
              </div>
            </div>
          </div>
          <div className="lg:w-3/5 space-y-8">
            <div className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-lg font-black text-sm uppercase tracking-widest">
              Bir Umut Hikayesi
            </div>
            <h2 className="text-4xl lg:text-6xl font-headline font-black text-primary leading-tight">
              Buğday Tanesi: <br />
              <span className="text-secondary">Milyonların Sesi Oldu</span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed font-medium">
              Av. Serkan Bayram'ın bebekken geçirdiği talihsiz kaza sonrası verdiği hayat mücadelesini konu alan "Buğday Tanesi" filmi, sadece bir sinema eseri değil; bir hak arama mücadelesinin ve azmin küresel sembolüdür.
            </p>
            <div className="grid md:grid-cols-2 gap-6 pt-4">
              <div className="p-6 bg-muted/30 rounded-2xl border border-primary/5 hover:border-primary/20 transition-all">
                <h4 className="font-black text-primary text-xl mb-2">Engelleri Aşan Başarı</h4>
                <p className="text-sm text-muted-foreground font-bold">Milyonlarca engelli birey için umut ışığı ve motivasyon kaynağı.</p>
              </div>
              <div className="p-6 bg-muted/30 rounded-2xl border border-primary/5 hover:border-primary/20 transition-all">
                <h4 className="font-black text-primary text-xl mb-2">Küresel Gösterim</h4>
                <p className="text-sm text-muted-foreground font-bold">Dünya genelinde festivallerde ve salonlarda izleyiciyle buluştu.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Legal Reform Part */}
        <div className="bg-primary rounded-[3rem] p-8 lg:p-20 text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-secondary/10 -skew-x-12 translate-x-1/4" />
          <div className="flex flex-col lg:flex-row gap-16 items-center relative z-10">
            <div className="lg:w-1/2 space-y-8">
              <div className="w-20 h-20 bg-secondary rounded-3xl flex items-center justify-center shadow-xl">
                <Gavel className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-3xl lg:text-5xl font-headline font-black leading-tight">
                Tarihi Yasal Reform: <br />
                <span className="text-secondary">Hakim ve Savcı Olma Engeli Kalktı</span>
              </h2>
              <p className="text-lg text-white/80 leading-relaxed font-medium">
                Serkan Bayram'ın girişimleriyle, Türk yargı sisteminde 70 yıldır süregelen "engelli bireylerin hakim ve savcı olamaması" kuralı TBMM'de yapılan yasal değişiklikle tarihe gömüldü. Artık engeller, liyakatin önüne geçemiyor.
              </p>
              <ul className="space-y-4">
                {[
                  "70 yıllık adaletsizliğe son verildi.",
                  "Liyakat esaslı yeni bir dönem başladı.",
                  "Fiziksel engel değil, zihinsel bariyerler yıkıldı."
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-lg font-bold">
                    <CheckCircle2 className="w-6 h-6 text-secondary flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:w-1/2">
              <div className="relative aspect-video rounded-3xl overflow-hidden border-4 border-white/20 shadow-2xl">
                <Image 
                  src={legalImg?.imageUrl || ""} 
                  alt="Yasal Reform"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

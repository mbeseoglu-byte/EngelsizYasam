
"use client"

import { Globe2, Landmark, MapPin, ShieldCheck, Briefcase } from 'lucide-react';
import Image from 'next/image';

export function GlobalAdvocacy() {
  const stats = [
    { label: "BM Diplomasisi", value: "Küresel Savunuculuk", icon: <Globe2 className="w-5 h-5" /> },
    { label: "Avrupa Konseyi", value: "İnsan Hakları", icon: <ShieldCheck className="w-5 h-5" /> },
    { label: "Uluslararası Zirve", value: "150+ Katılım", icon: <Briefcase className="w-5 h-5" /> }
  ];

  return (
    <div className="py-8 lg:py-12 px-4 lg:px-8 bg-white">
      <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-12">
        <div className="lg:w-1/2 space-y-6 text-left">
          <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-3 py-1 rounded-full font-black text-[10px] uppercase tracking-widest">
            <Landmark className="w-3.5 h-3.5" />
            Küresel Etki ve Diplomasi
          </div>
          <h2 className="text-2xl lg:text-3xl font-headline font-black text-primary leading-tight italic">Uluslararası Vizyon ve <br />Hak Savunuculuğu</h2>
          <p className="text-xs text-muted-foreground leading-relaxed font-medium">
            Birleşmiş Milletler ve Avrupa Konseyi gibi platformlarda Türkiye'nin engelli hakları modelini anlatan Av. Serkan Bayram, küresel bir farkındalık ağı örerek dünya parlamentolarına ilham vermektedir.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {stats.map((stat, i) => ( stat &&
              <div key={i} className="p-4 bg-muted/30 rounded-2xl border border-secondary/20 hover:bg-white hover:border-secondary/40 hover:shadow-md transition-all">
                <div className="text-secondary mb-2">{stat.icon}</div>
                <div className="text-sm font-black text-primary mb-1">{stat.value}</div>
                <div className="text-[9px] font-bold text-muted-foreground uppercase tracking-tighter">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:w-1/2 w-full relative">
          <div className="relative aspect-video rounded-[2rem] overflow-hidden shadow-2xl border-4 border-muted/20">
            <Image 
              src="https://placehold.jp/24/1e3a8a/ffffff/800x800.png?text=Global+Diplomacy" 
              alt="Global Impact" 
              fill 
              className="object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/20 to-transparent flex flex-col justify-end p-6">
              <div className="flex items-center gap-2 text-white mb-2">
                <MapPin className="w-4 h-4 text-secondary" />
                <span className="font-black text-sm">Cenevre / Strazburg / New York</span>
              </div>
              <p className="text-white/80 text-[10px] font-medium leading-tight">Uluslararası arenada engelli haklarının evrensel bir değer haline gelmesi için diplomatik çalışmalarımız sürüyor.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

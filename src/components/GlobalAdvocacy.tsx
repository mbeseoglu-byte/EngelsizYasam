
"use client"

import { Globe2, Landmark, Users, MapPin } from 'lucide-react';
import Image from 'next/image';

export function GlobalAdvocacy() {
  const stats = [
    { label: "Ziyaret Edilen Ülke", value: "40+", icon: <Globe2 className="w-5 h-5" /> },
    { label: "Uluslararası Zirve", value: "150+", icon: <Landmark className="w-5 h-5" /> },
    { label: "Ortak STK Ağı", value: "500+", icon: <Users className="w-5 h-5" /> }
  ];

  return (
    <section id="kuresel" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-start gap-16 lg:gap-20">
          <div className="lg:w-1/2 space-y-8 text-left">
            <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-3 py-1 rounded-full font-black text-[10px] uppercase tracking-widest">
              <Globe2 className="w-3.5 h-3.5" />
              Küresel Elçi
            </div>
            <h2 className="text-2xl lg:text-3xl font-headline font-black text-primary leading-tight">Sınırları Aşan Bir <br />Hak Savunuculuğu</h2>
            <p className="text-base text-muted-foreground leading-relaxed font-medium">
              Birleşmiş Milletler, Avrupa Konseyi ve dünya parlamentolarında Türkiye'nin "Erişilebilir Dünya" modelini anlatıyor, küresel bir farkındalık ağı örüyoruz.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {stats.map((stat, i) => (
                <div key={i} className="p-5 bg-muted/30 rounded-2xl border border-primary/5 hover:bg-white hover:shadow-md transition-all">
                  <div className="text-secondary mb-2">{stat.icon}</div>
                  <div className="text-xl font-black text-primary mb-1">{stat.value}</div>
                  <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-tighter">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:w-1/2 w-full relative">
            <div className="relative aspect-video lg:aspect-square rounded-[2rem] overflow-hidden shadow-2xl border-4 border-muted/20">
              <Image 
                src="https://placehold.jp/24/1e3a8a/ffffff/800x800.png?text=Global+Advocacy" 
                alt="Global Impact Map" 
                fill 
                className="object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/20 to-transparent flex flex-col justify-end p-8 lg:p-10">
                <div className="flex items-center gap-2 text-white mb-3">
                  <MapPin className="w-5 h-5 text-secondary" />
                  <span className="font-black text-lg">New York / Cenevre / Strazburg</span>
                </div>
                <p className="text-white/80 text-sm font-medium">BM Engelli Hakları Sözleşmesi'nin küresel ölçekte güçlendirilmesi için çalışıyoruz.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

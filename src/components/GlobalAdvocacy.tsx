"use client"

import { Globe2, Landmark, Users2, MapPin, BarChart3 } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';

export function GlobalAdvocacy() {
  const stats = [
    { label: "Ziyaret Edilen Ülke", value: "40+", icon: <Globe2 className="w-5 h-5" /> },
    { label: "Uluslararası Zirve", value: "150+", icon: <Landmark className="w-5 h-5" /> },
    { label: "Ortak STK Ağı", value: "500+", icon: <Users2 className="w-5 h-5" /> }
  ];

  return (
    <section id="kuresel" className="py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          <div className="lg:w-1/2 space-y-10">
            <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-4 py-1.5 rounded-full font-black text-xs uppercase tracking-widest">
              <Globe2 className="w-4 h-4" />
              Küresel Elçi
            </div>
            <h2 className="text-4xl lg:text-6xl font-headline font-black text-primary leading-tight">Sınırları Aşan Bir <br />Hak Savunuculuğu</h2>
            <p className="text-xl text-muted-foreground leading-relaxed font-medium">
              Birleşmiş Milletler, Avrupa Konseyi ve dünya parlamentolarında Türkiye'nin "Erişilebilir Dünya" modelini anlatıyor, küresel bir farkındalık ağı örüyoruz.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {stats.map((stat, i) => (
                <div key={i} className="p-6 bg-muted/30 rounded-3xl border border-primary/5 hover:bg-white hover:shadow-lg transition-all">
                  <div className="text-secondary mb-3">{stat.icon}</div>
                  <div className="text-3xl font-black text-primary mb-1">{stat.value}</div>
                  <div className="text-sm font-bold text-muted-foreground uppercase tracking-tighter">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:w-1/2 relative">
            <div className="relative aspect-square rounded-[3rem] overflow-hidden shadow-3xl border-8 border-muted/20">
              <Image 
                src="https://placehold.jp/24/1e3a8a/ffffff/800x800.png?text=Dunya+Haritasi+ve+Etki+Alanlari" 
                alt="Global Impact Map" 
                fill 
                className="object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent flex flex-col justify-end p-12">
                <div className="flex items-center gap-3 text-white mb-4">
                  <MapPin className="w-6 h-6 text-secondary" />
                  <span className="font-black text-2xl">New York / Cenevre / Strazburg</span>
                </div>
                <p className="text-white/80 font-medium">BM Engelli Hakları Sözleşmesi'nin küresel ölçekte güçlendirilmesi için çalışıyoruz.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
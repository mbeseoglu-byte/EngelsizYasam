
"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';
import { Globe2, Landmark, ShieldCheck, Users2 } from 'lucide-react';

export function GlobalAdvocacy() {
  const advocacyItems = [
    {
      title: "Birleşmiş Milletler",
      desc: "BM Engelli Hakları Sözleşmesi'nin küresel ölçekte güçlendirilmesi için savunuculuk.",
      icon: <Globe2 className="w-8 h-8 text-white" />,
      image: PlaceHolderImages.find(img => img.id === 'un-hq')?.imageUrl
    },
    {
      title: "Avrupa Konseyi & AB",
      desc: "Erişilebilirlik standartlarının Avrupa Birliği normları ile uyumlaştırılması çalışmaları.",
      icon: <Landmark className="w-8 h-8 text-white" />,
      image: PlaceHolderImages.find(img => img.id === 'international')?.imageUrl
    },
    {
      title: "Küresel İttifak",
      desc: "Farklı ülkelerdeki engelli federasyonları ile ortak hak savunuculuğu ağları.",
      icon: <Users2 className="w-8 h-8 text-white" />,
      image: PlaceHolderImages.find(img => img.id === 'global-summit')?.imageUrl
    }
  ];

  return (
    <section id="calismalar" className="py-32 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full font-black text-sm mb-6 uppercase tracking-widest">
            <ShieldCheck className="w-4 h-4" />
            Küresel Savunuculuk
          </div>
          <h2 className="text-4xl lg:text-6xl font-headline font-black text-primary mb-8">Sınırları Aşan Mücadele</h2>
          <p className="text-xl text-muted-foreground font-medium leading-relaxed">
            Türkiye'nin engelsiz yaşam vizyonunu dünya başkentlerine taşıyor, uluslararası hukuk platformlarında sesimizi duyuruyoruz.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-10">
          {advocacyItems.map((item, idx) => (
            <Card key={idx} className="group overflow-hidden border-none shadow-xl hover:shadow-[0_40px_80px_-15px_rgba(0,0,0,0.15)] transition-all duration-500 rounded-[2.5rem] bg-white">
              <div className="relative h-64">
                <Image 
                  src={item.image || ""} 
                  alt={item.title} 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/30 group-hover:bg-primary/10 transition-colors duration-500" />
                <div className="absolute bottom-6 right-6 bg-secondary p-4 rounded-2xl shadow-2xl scale-110 group-hover:rotate-6 transition-transform">
                  {item.icon}
                </div>
              </div>
              <CardHeader className="p-8 pb-4">
                <CardTitle className="text-2xl font-black text-primary group-hover:text-secondary transition-colors">
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8 pt-0">
                <CardDescription className="text-lg leading-relaxed text-muted-foreground font-medium mb-6">
                  {item.desc}
                </CardDescription>
                <div className="h-1 w-12 bg-secondary rounded-full group-hover:w-full transition-all duration-500" />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

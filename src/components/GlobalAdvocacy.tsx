"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';
import { Globe2, Landmark, ShieldCheck, Users2, MapPin } from 'lucide-react';

export function GlobalAdvocacy() {
  const advocacyItems = [
    {
      title: "Birleşmiş Milletler",
      desc: "BM Engelli Hakları Sözleşmesi'nin küresel ölçekte uygulanması ve güçlendirilmesi için Cenevre ve New York'ta aktif savunuculuk.",
      icon: <Globe2 className="w-9 h-9 text-white" />,
      image: PlaceHolderImages.find(img => img.id === 'un-hq')?.imageUrl,
      location: "New York / Cenevre"
    },
    {
      title: "Uluslararası Parlamentolar",
      desc: "Avrupa Konseyi ve farklı ülke parlamentolarında 'Erişilebilir Dünya' modelinin sunulması ve yasal iş birlikleri.",
      icon: <Landmark className="w-9 h-9 text-white" />,
      image: PlaceHolderImages.find(img => img.id === 'global-summit')?.imageUrl,
      location: "Strazburg / Brüksel"
    },
    {
      title: "Küresel İttifak Ağları",
      desc: "Dünya genelindeki engelli federasyonları ve sivil toplum kuruluşları ile ortak hak savunuculuğu ağlarının kurulması.",
      icon: <Users2 className="w-9 h-9 text-white" />,
      image: PlaceHolderImages.find(img => img.id === 'international')?.imageUrl,
      location: "Küresel Ağlar"
    }
  ];

  return (
    <section id="calismalar" className="py-40 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto mb-24">
          <div className="inline-flex items-center gap-3 bg-primary/10 text-primary px-6 py-2.5 rounded-full font-black text-sm mb-8 uppercase tracking-[0.2em] shadow-sm">
            <ShieldCheck className="w-5 h-5" />
            SINIR TANIMAYAN SAVUNUCULUK
          </div>
          <h2 className="text-5xl lg:text-7xl font-headline font-black text-primary mb-10 tracking-tight">Küresel Etki ve Vizyon</h2>
          <p className="text-2xl text-muted-foreground font-medium leading-relaxed">
            Türkiye'nin engelsiz yaşam vizyonunu dünya başkentlerine taşıyor, uluslararası hukuk ve insan hakları platformlarında milyonların sesi oluyoruz.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {advocacyItems.map((item, idx) => (
            <Card key={idx} className="group overflow-hidden border-none shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] hover:shadow-[0_50px_100px_-20px_rgba(0,0,0,0.2)] transition-all duration-700 rounded-[3.5rem] bg-white">
              <div className="relative h-80">
                <Image 
                  src={item.image || ""} 
                  alt={item.title} 
                  fill 
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  data-ai-hint="international assembly"
                />
                <div className="absolute inset-0 bg-primary/40 group-hover:bg-primary/15 transition-colors duration-700" />
                <div className="absolute bottom-8 right-8 bg-secondary p-5 rounded-[2rem] shadow-2xl scale-110 group-hover:rotate-12 transition-transform duration-500">
                  {item.icon}
                </div>
                <div className="absolute top-8 left-8 bg-white/90 backdrop-blur-md px-5 py-2 rounded-full flex items-center gap-2 text-primary font-black text-sm shadow-lg">
                  <MapPin className="w-4 h-4 text-secondary" />
                  {item.location}
                </div>
              </div>
              <CardHeader className="p-10 pb-5">
                <CardTitle className="text-3xl font-black text-primary group-hover:text-secondary transition-colors duration-300">
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-10 pt-0">
                <CardDescription className="text-xl leading-relaxed text-muted-foreground font-medium mb-8">
                  {item.desc}
                </CardDescription>
                <div className="h-1.5 w-16 bg-secondary rounded-full group-hover:w-full transition-all duration-700 ease-in-out" />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

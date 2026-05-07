
"use client"

import { Gavel, CheckCircle2, History } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export function LegislativeTimeline() {
  const achievements = [
    {
      year: "2021",
      title: "Hakim ve Savcı Adaylığı Engeli Kaldırıldı",
      desc: "70 yıllık mülakat engelini ortadan kaldıran yasal düzenleme ile engelli vatandaşlarımızın yargı mensubu olabilmesinin önü açıldı.",
      icon: <Gavel className="w-5 h-5" />
    },
    {
      year: "2022",
      title: "Buğday Tanesi Vizyonu Yasallaştı",
      desc: "Engelli bireylerin toplumsal yaşama tam entegrasyonu için hazırlanan vizyon belgeleri meclis gündemine taşındı.",
      icon: <CheckCircle2 className="w-5 h-5" />
    },
    {
      year: "2023",
      title: "Erişilebilirlik Standartları Güçlendirildi",
      desc: "Kamu binaları ve ulaşım ağlarında tam erişilebilirlik zorunluluğunu getiren ek yasal maddeler kabul edildi.",
      icon: <History className="w-5 h-5" />
    }
  ];

  return (
    <section id="yasa" className="py-8 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mb-6">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full font-black text-[10px] uppercase tracking-widest mb-4">
            <Gavel className="w-3.5 h-3.5" />
            Yasa Değiştirici Güç
          </div>
          <h2 className="text-2xl lg:text-3xl font-headline font-black text-primary mb-3 italic">Tarihi Hukuk Reformları</h2>
          <p className="text-sm text-muted-foreground font-medium max-w-xl">
            Engelleri sadece zihinlerde değil, yasalarda da kaldırdık. 70 yıllık adaletsizliklere son veren reformlara öncülük ettik.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {achievements.map((item, idx) => (
            <div key={idx} className="relative group">
              <Card className="h-full border border-secondary/20 shadow-sm hover:shadow-xl hover:border-secondary/40 transition-all duration-500 rounded-[2rem] bg-white group overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-3xl font-black text-secondary/20">{item.year}</div>
                    <div className="w-8 h-8 bg-primary/5 rounded-lg flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                      {item.icon}
                    </div>
                  </div>
                  <h3 className="text-base font-black text-primary mb-2 leading-tight">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-xs font-medium">{item.desc}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

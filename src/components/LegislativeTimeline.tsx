
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
    <section id="yasa" className="py-20 bg-muted/20 overflow-hidden">
      <div className="container auto px-4">
        <div className="max-w-3xl mb-16 text-center mx-auto">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full font-black text-[10px] uppercase tracking-widest mb-4">
            <Gavel className="w-3.5 h-3.5" />
            Yasa Değiştirici Güç
          </div>
          <h2 className="text-2xl lg:text-4xl font-headline font-black text-primary mb-6">Tarihi Hukuk Reformları</h2>
          <p className="text-base text-muted-foreground font-medium max-w-2xl mx-auto">
            Engelleri sadece zihinlerde değil, yasalarda da kaldırdık. 70 yıllık adaletsizliklere son veren reformlara öncülük ettik.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto timeline-line">
          {achievements.map((item, idx) => (
            <div key={idx} className="flex flex-col md:flex-row items-start gap-6 mb-12 relative z-10">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white shadow-lg z-20 shrink-0 border-4 border-white mt-4">
                {item.icon}
              </div>
              
              <div className="flex-1 w-full text-left">
                <Card className="border-none shadow-md hover:shadow-lg transition-all duration-300 rounded-[1.5rem] bg-white group overflow-hidden">
                  <CardContent className="p-6">
                    <div className="text-xl font-black text-secondary mb-1">{item.year}</div>
                    <h3 className="text-base font-black text-primary mb-2 group-hover:text-secondary transition-colors">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed text-xs">{item.desc}</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

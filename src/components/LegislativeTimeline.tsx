
"use client"

import { Gavel, CheckCircle2, History } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export function LegislativeTimeline() {
  const achievements = [
    {
      year: "2021",
      title: "Hakim ve Savcı Adaylığı Engeli Kaldırıldı",
      desc: "70 yıllık mülakat engelini ortadan kaldıran yasal düzenleme ile engelli vatandaşlarımızın yargı mensubu olabilmesinin önü açıldı.",
      icon: <Gavel className="w-6 h-6" />
    },
    {
      year: "2022",
      title: "Buğday Tanesi Vizyonu Yasallaştı",
      desc: "Engelli bireylerin toplumsal yaşama tam entegrasyonu için hazırlanan vizyon belgeleri meclis gündemine taşındı.",
      icon: <CheckCircle2 className="w-6 h-6" />
    },
    {
      year: "2023",
      title: "Erişilebilirlik Standartları Güçlendirildi",
      desc: "Kamu binaları ve ulaşım ağlarında tam erişilebilirlik zorunluluğunu getiren ek yasal maddeler kabul edildi.",
      icon: <History className="w-6 h-6" />
    }
  ];

  return (
    <section id="yasa" className="py-24 bg-muted/20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mb-16 text-left">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full font-black text-[10px] uppercase tracking-widest mb-4">
            <Gavel className="w-3.5 h-3.5" />
            Yasa Değiştirici Güç
          </div>
          <h2 className="text-2xl lg:text-3xl font-headline font-black text-primary mb-4">Tarihi Hukuk Reformları</h2>
          <p className="text-base text-muted-foreground font-medium max-w-2xl">
            Engelleri sadece zihinlerde değil, yasalarda da kaldırdık. 70 yıllık adaletsizliklere son veren reformlara öncülük ettik.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto md:ml-0 timeline-line">
          {achievements.map((item, idx) => (
            <div key={idx} className={`flex flex-col md:flex-row items-start gap-6 mb-16 relative z-10`}>
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white shadow-xl z-20 shrink-0 border-4 border-white mt-4">
                {item.icon}
              </div>
              
              <div className="flex-1 w-full">
                <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 rounded-[2rem] bg-white group overflow-hidden text-left">
                  <CardContent className="p-6">
                    <div className="text-2xl font-black text-secondary mb-2">{item.year}</div>
                    <h3 className="text-lg font-black text-primary mb-2 group-hover:text-secondary transition-colors">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed text-sm">{item.desc}</p>
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

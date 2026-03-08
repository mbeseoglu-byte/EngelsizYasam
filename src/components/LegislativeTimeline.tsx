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
    <section id="yasa" className="py-32 bg-muted/20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full font-black text-xs uppercase tracking-widest mb-6">
            <Gavel className="w-4 h-4" />
            Yasa Değiştirici Güç
          </div>
          <h2 className="text-2xl lg:text-4xl font-headline font-black text-primary mb-6">Tarihi Hukuk Reformları</h2>
          <p className="text-lg text-muted-foreground font-medium">
            Engelleri sadece zihinlerde değil, yasalarda da kaldırdık. 70 yıllık adaletsizliklere son veren reformlara öncülük ettik.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto timeline-line">
          {achievements.map((item, idx) => (
            <div key={idx} className={`flex flex-col md:flex-row items-center gap-8 mb-20 relative z-10 ${idx % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
              <div className="flex-1 w-full">
                <Card className={`border-none shadow-xl hover:shadow-2xl transition-all duration-300 rounded-[2.5rem] bg-white group overflow-hidden ${idx % 2 === 0 ? 'text-right' : 'text-left'}`}>
                  <CardContent className="p-8">
                    <div className={`text-3xl font-black text-secondary mb-3 ${idx % 2 === 0 ? 'md:mr-2' : 'md:ml-2'}`}>{item.year}</div>
                    <h3 className="text-xl font-black text-primary mb-3 group-hover:text-secondary transition-colors">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed text-base">{item.desc}</p>
                  </CardContent>
                </Card>
              </div>
              
              <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center text-white shadow-2xl z-20 shrink-0 border-4 border-white">
                {item.icon}
              </div>
              
              <div className="flex-1 hidden md:block" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

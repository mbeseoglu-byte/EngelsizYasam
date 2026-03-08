"use client"

import { Medal, ShieldCheck, Heart, Sparkles } from 'lucide-react';

export function NobelVision() {
  const values = [
    { title: "Küresel Barış", desc: "Engelli haklarının evrensel bir barış dili olarak kabul edilmesi.", icon: <Sparkles className="w-8 h-8" /> },
    { title: "İnsan Hakları", desc: "Ayrımcılığa karşı küresel ölçekte yasal ve toplumsal savunuculuk.", icon: <ShieldCheck className="w-8 h-8" /> },
    { title: "İnsani Yardım", desc: "Savaş ve doğal afetlerde engelli bireylerin korunması vizyonu.", icon: <Heart className="w-8 h-8" /> }
  ];

  return (
    <section id="nobel" className="py-40 bg-[#0a192f] text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-secondary rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary rounded-full blur-[150px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-24">
          <div className="inline-flex items-center gap-3 bg-[#ffc107]/20 text-[#ffc107] px-8 py-3 rounded-full font-black text-sm uppercase tracking-widest border border-[#ffc107]/30 shadow-lg shadow-[#ffc107]/10 mb-10">
            <Medal className="w-6 h-6" />
            Nobel Barış Ödülü Vizyonu
          </div>
          <h2 className="text-5xl lg:text-8xl font-headline font-black mb-8 leading-tight tracking-tighter">
            İnsanlık İçin <br />
            <span className="text-[#ffc107] italic">Nobel Adaylığı</span>
          </h2>
          <p className="text-2xl text-white/70 leading-relaxed font-medium">
            Av. Serkan Bayram'ın engelli hakları için yürüttüğü küresel mücadele, dünya barışına ve insan onuruna katkılarından dolayı Nobel Barış Ödülü adaylığı ile taçlanıyor.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {values.map((item, idx) => (
            <div key={idx} className="group p-10 bg-white/5 rounded-[3rem] border border-white/10 hover:bg-white/10 transition-all duration-500 hover:-translate-y-4">
              <div className="w-20 h-20 bg-[#ffc107] rounded-[2rem] flex items-center justify-center text-[#0a192f] mb-8 shadow-2xl group-hover:rotate-12 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-3xl font-black mb-4 text-[#ffc107]">{item.title}</h3>
              <p className="text-white/60 text-lg leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-24 text-center">
          <div className="inline-block p-1 bg-gradient-to-r from-transparent via-[#ffc107]/40 to-transparent w-full max-w-2xl h-px mb-12" />
          <p className="text-sm font-black text-[#ffc107] uppercase tracking-[0.4em]">Barış ve Adalet Herkes İçin</p>
        </div>
      </div>
    </section>
  );
}

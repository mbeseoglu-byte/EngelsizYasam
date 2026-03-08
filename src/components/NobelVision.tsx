
"use client"

import { Medal, ShieldCheck, Heart, Sparkles } from 'lucide-react';

export function NobelVision() {
  const values = [
    { title: "Küresel Barış", desc: "Engelli haklarının evrensel bir barış dili olarak kabul edilmesi.", icon: <Sparkles className="w-6 h-6" /> },
    { title: "İnsan Hakları", desc: "Ayrımcılığa karşı küresel ölçekte yasal ve toplumsal savunuculuk.", icon: <ShieldCheck className="w-6 h-6" /> },
    { title: "İnsani Yardım", desc: "Savaş ve doğal afetlerde engelli bireylerin korunması vizyonu.", icon: <Heart className="w-6 h-6" /> }
  ];

  return (
    <section id="nobel" className="py-20 bg-[#0a192f] text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-secondary rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-primary rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl text-left mb-12">
          <div className="inline-flex items-center gap-2 bg-[#ffc107]/20 text-[#ffc107] px-4 py-1.5 rounded-full font-black text-[10px] uppercase tracking-widest border border-[#ffc107]/30 shadow-lg mb-6">
            <Medal className="w-3.5 h-3.5" />
            Nobel Barış Ödülü Vizyonu
          </div>
          <h2 className="text-xl lg:text-2xl font-headline font-black mb-4 leading-tight tracking-tight">
            İnsanlık İçin <br />
            <span className="text-[#ffc107] italic">Nobel Adaylığı</span>
          </h2>
          <p className="text-base text-white/70 leading-relaxed font-medium max-w-xl">
            Av. Serkan Bayram'ın engelli hakları için yürüttüğü küresel mücadele, dünya barışına ve insan onuruna katkılarından dolayı Nobel Barış Ödülü adaylığı ile taçlanıyor.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {values.map((item, idx) => (
            <div key={idx} className="group p-8 bg-white/5 rounded-[2rem] border border-white/10 hover:bg-white/10 transition-all duration-500 hover:-translate-y-1">
              <div className="w-12 h-12 bg-[#ffc107] rounded-xl flex items-center justify-center text-[#0a192f] mb-6 shadow-lg group-hover:rotate-3 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-lg font-black mb-2 text-[#ffc107]">{item.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

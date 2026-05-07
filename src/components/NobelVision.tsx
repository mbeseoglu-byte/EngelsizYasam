
"use client"

import { Medal, ShieldCheck, Heart, Sparkles } from 'lucide-react';

export function NobelVision() {
  const values = [
    { title: "Küresel Barış", desc: "Engelli haklarının evrensel bir barış dili olarak kabul edilmesi.", icon: <Sparkles className="w-5 h-5" /> },
    { title: "İnsan Hakları", desc: "Ayrımcılığa karşı küresel ölçekte yasal ve toplumsal savunuculuk.", icon: <ShieldCheck className="w-5 h-5" /> },
    { title: "İnsani Yardım", desc: "Savaş ve doğal afetlerde engelli bireylerin korunması vizyonu.", icon: <Heart className="w-5 h-5" /> }
  ];

  return (
    <div className="py-8 lg:py-12 px-4 lg:px-8 bg-[#0a192f] text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-secondary rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-primary rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10">
        <div className="max-w-3xl text-left mb-8">
          <div className="inline-flex items-center gap-2 bg-[#ffc107]/20 text-[#ffc107] px-4 py-1.5 rounded-full font-black text-[10px] uppercase tracking-widest border border-[#ffc107]/30 shadow-lg mb-4">
            <Medal className="w-3.5 h-3.5" />
            Nobel Barış Ödülü Vizyonu
          </div>
          <h2 className="text-2xl lg:text-3xl font-headline font-black mb-3 leading-tight tracking-tight italic">
            İnsanlık İçin <span className="text-[#ffc107]">Nobel Adaylığı</span>
          </h2>
          <p className="text-xs text-white/70 leading-relaxed font-medium max-w-xl">
            Av. Serkan Bayram'ın engelli hakları için yürüttüğü küresel mücadele, dünya barışına katkılarından dolayı Nobel Barış Ödülü adaylığı ile taçlanıyor.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {values.map((item, idx) => (
            <div key={idx} className="group p-6 bg-white/5 rounded-[2rem] border border-[#ffc107]/20 hover:bg-white/10 hover:border-[#ffc107]/40 transition-all duration-500">
              <div className="w-10 h-10 bg-[#ffc107] rounded-xl flex items-center justify-center text-[#0a192f] mb-4 shadow-lg group-hover:rotate-3 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-sm font-black mb-1 text-[#ffc107]">{item.title}</h3>
              <p className="text-white/60 text-[10px] leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

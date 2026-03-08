
"use client"

import Link from 'next/link';
import { Accessibility, Facebook, Twitter, Instagram, Youtube, Mail, Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-primary text-white py-24 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-1/3 h-full bg-secondary/5 skew-y-12 translate-y-1/2" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-4 gap-16 mb-20 border-b border-white/10 pb-20">
          <div className="col-span-2 space-y-8">
            <Link href="/" className="flex items-center gap-4">
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-primary shadow-2xl">
                <Accessibility className="w-9 h-9" />
              </div>
              <div className="flex flex-col">
                <span className="font-headline font-black text-3xl leading-tight">Serkan Bayram</span>
                <span className="text-xs uppercase tracking-[0.3em] text-secondary font-black">Engelsiz ve Erişilebilir Dünya</span>
              </div>
            </Link>
            <p className="text-white/60 max-w-md text-xl leading-relaxed font-medium">
              "Yere düştüğünde değil, vazgeçtiğinde kaybedersin." anlayışıyla engelleri aşan bir gelecek için çalışıyoruz.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
                <Link key={i} href="#" className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center hover:bg-secondary hover:text-white transition-all hover:-translate-y-1">
                  <Icon className="w-6 h-6" />
                </Link>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-black text-2xl mb-8 text-secondary uppercase tracking-widest">Hızlı Erişim</h4>
            <ul className="space-y-5 text-white/70 font-bold text-lg">
              <li><Link href="/#mucadele" className="hover:text-white transition-colors">Buğday Tanesi</Link></li>
              <li><Link href="/#biyografi" className="hover:text-white transition-colors">Biyografi</Link></li>
              <li><Link href="/#calismalar" className="hover:text-white transition-colors">Küresel Etki</Link></li>
              <li><Link href="/faaliyetler" className="hover:text-white transition-colors">Faaliyet Takvimi</Link></li>
              <li><Link href="/#iletisim" className="hover:text-white transition-colors">İletişim</Link></li>
            </ul>
          </div>

          <div className="space-y-8">
            <h4 className="font-black text-2xl text-secondary uppercase tracking-widest">Bülten</h4>
            <p className="text-white/60 font-medium">Gelişmelerden ve mücadelemizden haberdar olun.</p>
            <div className="flex gap-3">
              <input 
                type="email" 
                placeholder="E-posta" 
                className="bg-white/10 border border-white/20 rounded-2xl px-6 py-4 w-full focus:outline-none focus:border-secondary transition-colors font-bold"
              />
              <button className="bg-secondary p-4 rounded-2xl hover:bg-secondary/80 transition-all shadow-lg shadow-secondary/20">
                <Mail className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pt-10">
          <div className="text-white/40 text-sm font-bold flex items-center gap-2">
            © {new Date().getFullYear()} Av. Serkan Bayram. Engelsiz ve Erişilebilir Dünya Platformu.
          </div>
          <div className="flex items-center gap-2 text-secondary font-black text-sm uppercase tracking-widest">
            <Heart className="w-4 h-4 fill-current" />
            Engelleri Birlikte Aşıyoruz
          </div>
        </div>
      </div>
    </footer>
  );
}

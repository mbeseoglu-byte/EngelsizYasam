
"use client"

import Link from 'next/link';
import { Accessibility, Instagram, Youtube, Mail, Heart, Medal } from 'lucide-react';
import { cn } from '@/lib/utils';

const NetflixIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M19.36 0v24c-1.24-.69-2.51-1.49-3.71-2.4V0h3.71zM4.64 0v24C5.88 23.31 7.15 22.51 8.35 21.6V0H4.64zM8.35 0l7.3 21.6V24c-1.24-.69-2.51-1.49-3.71-2.4L4.64 0h3.71z" />
  </svg>
);

const XIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932L18.901 1.153zM17.61 20.644h2.039L6.486 3.24H4.298L17.61 20.644z" />
  </svg>
);

export function Footer() {
  const socialLinks = [
    { Icon: XIcon, href: "https://x.com/AvSerkanBayram", isX: true },
    { Icon: Instagram, href: "https://www.instagram.com/av.serkanbayram/", isInstagram: true },
    { Icon: Youtube, href: "https://www.youtube.com/@av.serkanbayram3935", isYoutube: true },
    { Icon: NetflixIcon, href: "https://www.netflix.com/tr/title/81676907", isNetflix: true }
  ];

  return (
    <footer className="bg-[#0a192f] text-white py-24 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-1/3 h-full bg-secondary/5 skew-y-12 translate-y-1/2" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-4 gap-16 mb-20 border-b border-white/10 pb-20">
          <div className="col-span-2 space-y-8">
            <Link href="/" className="flex items-center gap-4">
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-[#0a192f] shadow-2xl">
                <Accessibility className="w-9 h-9" />
              </div>
              <div className="flex flex-col">
                <span className="font-headline font-black text-3xl leading-tight">Serkan Bayram</span>
                <span className="text-[11px] uppercase tracking-[0.3em] text-secondary font-black">Engelsiz ve Erişilebilir Dünya</span>
              </div>
            </Link>
            <p className="text-white/60 max-w-md text-xl leading-relaxed font-medium">
              "Yere düştüğünde değil, vazgeçtiğinde kaybedersin." anlayışıyla engelleri aşan bir gelecek için küresel ölçekte çalışıyoruz.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, i) => (
                <Link 
                  key={i} 
                  href={social.href} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center transition-all hover:-translate-y-1",
                    (social.isNetflix || social.isYoutube) ? "hover:bg-red-600/10" : 
                    social.isX ? "hover:bg-blue-600/10" : 
                    social.isInstagram ? "hover:bg-pink-600/10" : "hover:bg-secondary hover:text-[#0a192f]"
                  )}
                >
                  <social.Icon className={cn(
                    "w-6 h-6", 
                    (social.isNetflix || social.isYoutube) ? "text-[#FF0000]" : 
                    social.isX ? "text-[#1DA1F2]" : 
                    social.isInstagram ? "text-[#E1306C]" : "text-white"
                  )} />
                </Link>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-black text-2xl mb-8 text-secondary uppercase tracking-widest">Hızlı Erişim</h4>
            <ul className="space-y-5 text-white/70 font-bold text-lg">
              <li><Link href="#yasa" className="hover:text-white transition-colors">Yasa Değiştirici</Link></li>
              <li><Link href="#kuresel" className="hover:text-white transition-colors">Küresel Elçi</Link></li>
              <li><Link href="#mucadele" className="hover:text-white transition-colors">Buğday Tanesi</Link></li>
              <li><Link href="#nobel" className="hover:text-white transition-colors">Nobel Vizyonu</Link></li>
              <li><Link href="#iletisim" className="hover:text-white transition-colors">Dijital Sekreterya</Link></li>
            </ul>
          </div>

          <div className="space-y-8">
            <h4 className="font-black text-2xl text-secondary uppercase tracking-widest">Vizyon 2030</h4>
            <p className="text-white/60 font-medium">Tam erişilebilir ve engelsiz bir dünya için mücadelemiz sürüyor.</p>
            <div className="flex items-center gap-4 text-secondary">
              <Medal className="w-8 h-8" />
              <span className="font-black text-sm uppercase tracking-widest">Nobel Barış Ödülü Adayı</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pt-10">
          <div className="text-white/40 text-sm font-bold flex items-center gap-2 text-center md:text-left">
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

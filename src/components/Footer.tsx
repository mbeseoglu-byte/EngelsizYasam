
"use client"

import Link from 'next/link';
import { Accessibility, Instagram, Youtube, Heart, Medal } from 'lucide-react';
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

interface FooterProps {
  onContactClick?: () => void;
}

export function Footer({ onContactClick }: FooterProps) {
  const socialLinks = [
    { Icon: XIcon, href: "https://x.com/AvSerkanBayram", isX: true },
    { Icon: Instagram, href: "https://www.instagram.com/av.serkanbayram/", isInstagram: true },
    { Icon: Youtube, href: "https://www.youtube.com/@av.serkanbayram3935", isYoutube: true },
    { Icon: NetflixIcon, href: "https://www.netflix.com/tr/title/81676907", isNetflix: true }
  ];

  return (
    <footer className="bg-[#0a192f] text-white pt-8 pb-4 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-1/4 h-full bg-secondary/5 skew-y-12 translate-y-1/2" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-3 gap-12 mb-4 border-b border-secondary/20 pb-4">
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-[#0a192f] shadow-lg">
                <Accessibility className="w-6 h-6" />
              </div>
              <div className="flex flex-col">
                <span className="font-headline font-black text-xl leading-tight">Serkan Bayram</span>
                <span className="text-[8px] uppercase tracking-[0.2em] text-secondary font-black">Engelsiz ve Erişilebilir Dünya</span>
              </div>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed font-medium italic">
              "Yere düştüğünde değil, vazgeçtiğinde kaybedersin."
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, i) => (
                <Link 
                  key={i} 
                  href={social.href} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "w-9 h-9 bg-white/5 rounded-xl flex items-center justify-center transition-all hover:-translate-y-1",
                    (social.isNetflix || social.isYoutube) ? "hover:bg-red-600/10" : 
                    social.isX ? "hover:bg-blue-600/10" : 
                    social.isInstagram ? "hover:bg-pink-600/10" : "hover:bg-secondary hover:text-[#0a192f]"
                  )}
                >
                  <social.Icon className={cn(
                    "w-4 h-4", 
                    (social.isNetflix || social.isYoutube) ? "text-[#FF0000]" : 
                    social.isX ? "text-[#1DA1F2]" : 
                    social.isInstagram ? "text-[#E1306C]" : "text-white"
                  )} />
                </Link>
              ))}
            </div>
          </div>
          
          <div className="flex flex-col md:items-center">
            <div className="text-left md:text-left space-y-4">
              <h4 className="font-black text-xs text-secondary uppercase tracking-widest">Hızlı Erişim</h4>
              <ul className="grid grid-cols-2 gap-x-8 gap-y-2 text-white/60 font-bold text-xs">
                <li><Link href="#yasa" className="hover:text-white transition-colors">Yasa Değiştirici</Link></li>
                <li><Link href="#kuresel" className="hover:text-white transition-colors">Küresel Elçi</Link></li>
                <li><Link href="#mucadele" className="hover:text-white transition-colors">Buğday Tanesi</Link></li>
                <li><Link href="#nobel" className="hover:text-white transition-colors">Nobel Vizyonu</Link></li>
                <li className="col-span-2">
                  <button onClick={onContactClick} className="hover:text-white transition-colors">Dijital iletişim</button>
                </li>
              </ul>
            </div>
          </div>

          <div className="space-y-4 md:text-right">
            <h4 className="font-black text-xs text-secondary uppercase tracking-widest">Vizyon 2030</h4>
            <div className="flex items-center md:justify-end gap-3 text-secondary">
              <Medal className="w-6 h-6" />
              <span className="font-black text-[10px] uppercase tracking-widest text-white/80">Nobel Barış Ödülü Adayı</span>
            </div>
            <p className="text-white/40 text-[10px] font-medium max-w-[200px] md:ml-auto">
              Tam erişilebilir bir dünya için küresel mücadelemiz sürüyor.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-2">
          <div className="text-white/30 text-[9px] font-bold text-center md:text-left">
            © {new Date().getFullYear()} Av. Serkan Bayram. Engelsiz ve Erişilebilir Dünya Platformu.
          </div>
          <div className="flex items-center gap-2 text-secondary font-black text-[9px] uppercase tracking-widest">
            <Heart className="w-3 h-3 fill-current" />
            Engelleri Birlikte Aşıyoruz
          </div>
        </div>
      </div>
    </footer>
  );
}

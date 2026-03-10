"use client"

import Link from 'next/link';
import { Accessibility, Facebook, Twitter, Instagram, Youtube, Mail, Heart, Medal } from 'lucide-react';

export function Footer() {
  const socialLinks = [
    { Icon: Facebook, href: "#" },
    { Icon: Twitter, href: "#" },
    { Icon: Instagram, href: "https://www.instagram.com/av.serkanbayram/" },
    { Icon: Youtube, href: "https://www.youtube.com/@av.serkanbayram3935" }
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
                <span className="text-[11px] uppercase tracking-[0.3em] text-[#ffc107] font-black">Engelsiz ve Erişilebilir Dünya</span>
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
                  target={social.href.startsWith('http') ? "_blank" : undefined}
                  rel={social.href.startsWith('http') ? "noopener noreferrer" : undefined}
                  className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center hover:bg-[#ffc107] hover:text-[#0a192f] transition-all hover:-translate-y-1"
                >
                  <social.Icon className="w-6 h-6" />
                </Link>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-black text-2xl mb-8 text-[#ffc107] uppercase tracking-widest">Hızlı Erişim</h4>
            <ul className="space-y-5 text-white/70 font-bold text-lg">
              <li><Link href="#yasa" className="hover:text-white transition-colors">Yasa Değiştirici</Link></li>
              <li><Link href="#kuresel" className="hover:text-white transition-colors">Küresel Elçi</Link></li>
              <li><Link href="#mucadele" className="hover:text-white transition-colors">Buğday Tanesi</Link></li>
              <li><Link href="#nobel" className="hover:text-white transition-colors">Nobel Vizyonu</Link></li>
              <li><Link href="#iletisim" className="hover:text-white transition-colors">Dijital Sekreterya</Link></li>
            </ul>
          </div>

          <div className="space-y-8">
            <h4 className="font-black text-2xl text-[#ffc107] uppercase tracking-widest">Vizyon 2030</h4>
            <p className="text-white/60 font-medium">Tam erişilebilir ve engelsiz bir world için mücadelemiz sürüyor.</p>
            <div className="flex items-center gap-4 text-[#ffc107]">
              <Medal className="w-8 h-8" />
              <span className="font-black text-sm uppercase tracking-widest">Nobel Barış Ödülü Adayı</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pt-10">
          <div className="text-white/40 text-sm font-bold flex items-center gap-2 text-center md:text-left">
            © {new Date().getFullYear()} Av. Serkan Bayram. Engelsiz ve Erişilebilir Dünya Platformu.
          </div>
          <div className="flex items-center gap-2 text-[#ffc107] font-black text-sm uppercase tracking-widest">
            <Heart className="w-4 h-4 fill-current" />
            Engelleri Birlikte Aşıyoruz
          </div>
        </div>
      </div>
    </footer>
  );
}

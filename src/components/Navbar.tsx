"use client"

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Menu, X, Accessibility, Heart } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'Anasayfa', href: '/' },
    { label: 'Buğday Tanesi', href: '/#mucadele' },
    { label: 'Yasal Reform', href: '/#reform' },
    { label: 'Biyografi', href: '/#biyografi' },
    { label: 'Küresel Etki', href: '/#calismalar' },
    { label: 'Faaliyetler', href: '/faaliyetler' },
  ];

  return (
    <nav className="sticky top-0 z-[100] bg-white/95 backdrop-blur-xl border-b border-border transition-all duration-300">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-28">
          <Link href="/" className="flex items-center gap-5 group">
            <div className="w-16 h-16 bg-primary rounded-[1.25rem] flex items-center justify-center text-white transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-2xl shadow-primary/30">
              <Accessibility className="w-9 h-9" />
            </div>
            <div className="flex flex-col">
              <span className="font-headline font-black text-3xl text-primary leading-tight tracking-tight">Av. Serkan Bayram</span>
              <span className="text-[11px] uppercase tracking-[0.35em] text-secondary font-black">Engelsiz ve Erişilebilir Dünya</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-12">
            {navItems.map((item) => (
              <Link 
                key={item.label} 
                href={item.href}
                className="text-[13px] font-black text-foreground/80 hover:text-primary transition-colors py-2 uppercase tracking-[0.15em] relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-secondary after:transition-all hover:after:w-full"
              >
                {item.label}
              </Link>
            ))}
            <Button asChild variant="default" className="bg-primary hover:bg-secondary text-white px-10 h-14 rounded-full font-black uppercase tracking-[0.2em] text-[11px] transition-all duration-300 shadow-xl shadow-primary/20 hover:-translate-y-1">
              <Link href="/#iletisim" className="flex items-center gap-3">
                Harekete Geç
                <Heart className="w-5 h-5 fill-current" />
              </Link>
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="lg:hidden p-4 bg-muted rounded-2xl text-primary shadow-sm hover:bg-muted/80 transition-all"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menüyü Aç"
          >
            {isMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={cn(
        "lg:hidden absolute top-[112px] left-0 w-full bg-white border-b border-border shadow-3xl transition-all duration-500 ease-in-out z-[90] overflow-hidden",
        isMenuOpen ? "max-h-screen opacity-100 translate-y-0" : "max-h-0 opacity-0 -translate-y-10 pointer-events-none"
      )}>
        <div className="container mx-auto px-6 py-12 flex flex-col gap-8">
          {navItems.map((item) => (
            <Link 
              key={item.label} 
              href={item.href}
              className="text-2xl font-black text-primary border-b border-border/50 pb-6 uppercase tracking-widest hover:text-secondary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Button asChild className="w-full bg-primary py-10 text-2xl font-black uppercase tracking-widest rounded-[2rem] shadow-xl">
            <Link href="/#iletisim" onClick={() => setIsMenuOpen(false)}>Harekete Geç</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
}

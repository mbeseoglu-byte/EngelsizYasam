
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
    { label: 'Biyografi', href: '/#biyografi' },
    { label: 'Küresel Etki', href: '/#calismalar' },
    { label: 'Faaliyetler', href: '/faaliyetler' },
    { label: 'İletişim', href: '/#iletisim' },
  ];

  return (
    <nav className="sticky top-0 z-[100] bg-white/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-24">
          <Link href="/" className="flex items-center gap-4 group">
            <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center text-white transition-all group-hover:scale-110 group-hover:rotate-3 shadow-lg shadow-primary/20">
              <Accessibility className="w-7 h-7" />
            </div>
            <div className="flex flex-col">
              <span className="font-headline font-black text-2xl text-primary leading-tight">Av. Serkan Bayram</span>
              <span className="text-[10px] uppercase tracking-[0.3em] text-secondary font-black">Engelsiz ve Erişilebilir Dünya</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-10">
            {navItems.map((item) => (
              <Link 
                key={item.label} 
                href={item.href}
                className="text-sm font-black text-foreground/70 hover:text-primary transition-colors py-2 uppercase tracking-widest"
              >
                {item.label}
              </Link>
            ))}
            <Button asChild variant="default" className="bg-primary hover:bg-secondary text-white px-8 h-12 rounded-full font-black uppercase tracking-widest text-xs transition-all shadow-lg shadow-primary/10">
              <Link href="/#iletisim" className="flex items-center gap-2">
                Harekete Geç
                <Heart className="w-4 h-4 fill-current" />
              </Link>
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="lg:hidden p-3 bg-muted rounded-xl text-primary"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menüyü Aç"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={cn(
        "lg:hidden absolute top-[96px] left-0 w-full bg-white border-b border-border shadow-2xl transition-all duration-500 ease-in-out z-[90]",
        isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8 pointer-events-none"
      )}>
        <div className="container mx-auto px-4 py-10 flex flex-col gap-6">
          {navItems.map((item) => (
            <Link 
              key={item.label} 
              href={item.href}
              className="text-xl font-black text-primary border-b border-border/50 pb-4 uppercase tracking-widest"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Button asChild className="w-full bg-primary py-8 text-xl font-black uppercase tracking-widest rounded-2xl">
            <Link href="/#iletisim" onClick={() => setIsMenuOpen(false)}>Harekete Geç</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
}

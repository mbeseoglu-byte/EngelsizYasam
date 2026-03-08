
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
    { label: 'Yasa Değiştirici', href: '#yasa' },
    { label: 'Küresel Elçi', href: '#kuresel' },
    { label: 'Buğday Tanesi', href: '#mucadele' },
    { label: 'Nobel Vizyonu', href: '#nobel' },
  ];

  return (
    <nav className="sticky top-0 z-[100] bg-white/95 backdrop-blur-xl border-b border-border transition-all duration-300">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-24">
          <Link href="/" className="flex items-center gap-4 group shrink-0">
            <div className="w-14 h-14 bg-primary rounded-[1.1rem] flex items-center justify-center text-white transition-all duration-500 group-hover:scale-110 shadow-xl shadow-primary/30">
              <Accessibility className="w-8 h-8" />
            </div>
            <div className="flex flex-col">
              <span className="font-headline font-black text-2xl text-primary leading-tight tracking-tight">Av. Serkan Bayram</span>
              <span className="text-[10px] uppercase tracking-[0.3em] text-secondary font-black">Engelsiz ve Erişilebilir Dünya</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link 
                key={item.label} 
                href={item.href}
                className="text-[12px] font-black text-foreground/80 hover:text-primary transition-colors py-2 uppercase tracking-[0.1em] relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-secondary after:transition-all hover:after:w-full"
              >
                {item.label}
              </Link>
            ))}
            <Button asChild variant="default" className="bg-primary hover:bg-secondary text-white px-8 h-12 rounded-full font-black uppercase tracking-[0.15em] text-[10px] transition-all duration-300 shadow-lg shadow-primary/20 hover:-translate-y-0.5">
              <Link href="#iletisim" className="flex items-center gap-2">
                Sekreterya
                <Heart className="w-4 h-4 fill-current" />
              </Link>
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="lg:hidden p-3 bg-muted rounded-xl text-primary shadow-sm hover:bg-muted/80 transition-all"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menüyü Aç"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={cn(
        "lg:hidden absolute top-[96px] left-0 w-full bg-white border-b border-border shadow-3xl transition-all duration-500 ease-in-out z-[90] overflow-hidden",
        isMenuOpen ? "max-h-screen opacity-100 translate-y-0" : "max-h-0 opacity-0 -translate-y-10 pointer-events-none"
      )}>
        <div className="container mx-auto px-6 py-10 flex flex-col gap-6">
          {navItems.map((item) => (
            <Link 
              key={item.label} 
              href={item.href}
              className="text-xl font-black text-primary border-b border-border/50 pb-4 uppercase tracking-widest hover:text-secondary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Button asChild className="w-full bg-primary py-8 text-xl font-black uppercase tracking-widest rounded-2xl shadow-xl">
            <Link href="#iletisim" onClick={() => setIsMenuOpen(false)}>Sekreterya</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
}

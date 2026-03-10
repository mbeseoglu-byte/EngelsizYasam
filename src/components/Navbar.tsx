
"use client"

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Menu, X, Accessibility } from 'lucide-react';
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
    <nav className="sticky top-0 z-[100] bg-white/95 backdrop-blur-xl border-b border-border">
      <div className="container px-4">
        <div className="flex items-center h-20">
          {/* Logo - Left side */}
          <Link href="/" className="flex items-center gap-3 group shrink-0 mr-8">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white transition-all duration-500 group-hover:scale-110 shadow-lg shadow-primary/30">
              <Accessibility className="w-6 h-6" />
            </div>
            <div className="flex flex-col items-start">
              <span className="font-headline font-black text-base text-primary leading-tight tracking-tight">Av. Serkan Bayram</span>
              <span className="text-[8px] uppercase tracking-[0.2em] text-secondary font-black mt-1">Engelsiz ve Erişilebilir Dünya</span>
            </div>
          </Link>

          {/* Desktop Nav - Centered */}
          <div className="hidden lg:flex flex-1 justify-center items-center gap-8">
            {navItems.map((item) => (
              <Link 
                key={item.label} 
                href={item.href}
                className="text-[10px] font-black text-foreground/80 hover:text-primary transition-colors py-2 uppercase tracking-[0.1em] relative after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-0.5 after:bg-secondary after:transition-all hover:after:w-full whitespace-nowrap"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Action Button - Right side */}
          <div className="hidden lg:block ml-8">
            <Button asChild variant="default" className="bg-primary hover:bg-secondary text-secondary px-6 h-10 rounded-full font-black uppercase tracking-[0.1em] text-[10px] transition-all shadow-md shadow-primary/20">
              <Link href="#iletisim" className="flex items-center gap-2">
                Dijital Sekreterya
                <Accessibility className="w-4 h-4" />
              </Link>
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="lg:hidden ml-auto p-2 bg-muted rounded-lg text-primary"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={cn(
        "lg:hidden absolute top-[80px] left-0 w-full bg-white border-b border-border shadow-xl transition-all duration-500 ease-in-out z-[90] overflow-hidden",
        isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 pointer-events-none"
      )}>
        <div className="container px-6 py-8 flex flex-col gap-4">
          {navItems.map((item) => (
            <Link 
              key={item.label} 
              href={item.href}
              className="text-base font-black text-primary border-b border-border/50 pb-2 uppercase tracking-widest text-center whitespace-nowrap"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Button asChild className="w-full bg-primary py-6 text-lg font-black uppercase tracking-widest rounded-xl text-secondary">
            <Link href="#iletisim" className="flex items-center gap-2" onClick={() => setIsMenuOpen(false)}>
              Dijital Sekreterya
              <Accessibility className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </div>
    </nav>
  );
}

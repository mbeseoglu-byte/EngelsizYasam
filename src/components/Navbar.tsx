
"use client"

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Menu, X, Accessibility } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';

interface NavbarProps {
  onContactClick: () => void;
}

export function Navbar({ onContactClick }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'Anasayfa', href: '/' },
    { label: 'Yasa Değiştirici', href: '#yasa' },
    { label: 'Küresel Elçi', href: '#kuresel' },
    { label: 'Buğday Tanesi', href: '#mucadele' },
    { label: 'Nobel Vizyonu', href: '#nobel' },
  ];

  return (
    <nav className="sticky top-0 z-[100] bg-secondary border-b border-black/5 shadow-xl">
      <div className="container px-4">
        <div className="flex items-center h-16">
          {/* Logo - Left side */}
          <Link href="/" className="flex items-center gap-3 group shrink-0 mr-8">
            <div className="w-11 h-11 bg-white rounded-xl flex items-center justify-center text-secondary transition-all duration-500 group-hover:scale-105 shadow-lg shadow-black/10">
              <Accessibility className="w-7 h-7" />
            </div>
            <div className="flex flex-col items-start">
              <span className="font-headline font-black text-lg text-white leading-tight tracking-tight drop-shadow-sm">
                Av. Serkan Bayram
              </span>
              <span className="text-[9px] uppercase tracking-[0.2em] text-primary font-black mt-0.5 opacity-90">
                Engelsiz ve Erişilebilir Dünya
              </span>
            </div>
          </Link>

          {/* Desktop Nav - Centered */}
          <div className="hidden lg:flex flex-1 justify-center items-center gap-8">
            {navItems.map((item) => (
              <Link 
                key={item.label} 
                href={item.href}
                className="text-[11px] font-black text-white hover:text-primary transition-all py-2 uppercase tracking-[0.12em] relative after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full whitespace-nowrap drop-shadow-sm"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Action Button - Right side */}
          <div className="hidden lg:block ml-8">
            <Button 
              variant="default" 
              onClick={onContactClick}
              className="bg-primary hover:bg-white hover:text-secondary text-white font-black uppercase tracking-[0.1em] text-[10px] h-11 px-8 rounded-full transition-all shadow-lg border-none"
            >
              Dijital iletişim
              <Accessibility className="w-4 h-4" />
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="lg:hidden ml-auto p-2.5 bg-white/20 rounded-xl text-white hover:bg-white/30 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={cn(
        "lg:hidden absolute top-[80px] left-0 w-full bg-secondary border-b border-black/5 shadow-2xl transition-all duration-500 ease-in-out z-[90] overflow-hidden",
        isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 pointer-events-none"
      )}>
        <div className="container px-6 py-6 flex flex-col gap-3">
          {navItems.map((item) => (
            <Link 
              key={item.label} 
              href={item.href}
              className="text-base font-black text-white border-b border-white/10 pb-3 uppercase tracking-widest text-center whitespace-nowrap active:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Button 
            className="w-full bg-primary hover:bg-white hover:text-secondary py-5 text-base font-black uppercase tracking-widest rounded-2xl text-white transition-all shadow-xl"
            onClick={() => { onContactClick(); setIsMenuOpen(false); }}
          >
            Dijital iletişim
            <Accessibility className="w-6 h-6" />
          </Button>
        </div>
      </div>
    </nav>
  );
}

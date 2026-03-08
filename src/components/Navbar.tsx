"use client"

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Menu, X, Globe, Accessibility } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'Anasayfa', href: '/' },
    { label: 'Biyografi', href: '/#biyografi' },
    { label: 'Çalışmalarımız', href: '/#calismalar' },
    { label: 'Haberler', href: '/#haberler' },
    { label: 'Faaliyetler', href: '/faaliyetler' },
    { label: 'İletişim', href: '/#iletisim' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white transition-transform group-hover:scale-110">
              <Accessibility className="w-6 h-6" />
            </div>
            <div className="flex flex-col">
              <span className="font-headline font-bold text-xl text-primary leading-tight">Engelsiz Dünya</span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-secondary font-bold">Erişilebilir Gelecek</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link 
                key={item.label} 
                href={item.href}
                className="text-sm font-semibold text-foreground/80 hover:text-primary transition-colors py-2"
              >
                {item.label}
              </Link>
            ))}
            <Button asChild variant="default" className="bg-primary hover:bg-primary/90 text-white px-6 rounded-full font-bold">
              <Link href="/#iletisim">Harekete Geç</Link>
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="lg:hidden p-2 text-primary"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menüyü Aç"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={cn(
        "lg:hidden absolute top-20 left-0 w-full bg-white border-b border-border shadow-xl transition-all duration-300 ease-in-out",
        isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
      )}>
        <div className="container mx-auto px-4 py-8 flex flex-col gap-6">
          {navItems.map((item) => (
            <Link 
              key={item.label} 
              href={item.href}
              className="text-lg font-bold text-foreground border-b border-border/50 pb-2"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Button asChild className="w-full bg-primary py-6 text-lg">
            <Link href="/#iletisim" onClick={() => setIsMenuOpen(false)}>Harekete Geç</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
}

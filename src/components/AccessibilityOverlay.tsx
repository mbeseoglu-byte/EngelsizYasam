
"use client"

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { 
  Accessibility, 
  Type, 
  Contrast, 
  BookOpen, 
  X,
  ChevronRight,
  ChevronLeft,
  EyeOff,
  RotateCcw
} from 'lucide-react';
import { useAccessibility } from '@/hooks/use-accessibility';
import { cn } from '@/lib/utils';

export function AccessibilityOverlay() {
  const [isOpen, setIsOpen] = useState(false);
  const { 
    fontSize, setFontSize, 
    highContrast, setHighContrast, 
    dyslexicFont, setDyslexicFont,
    readingMode, setReadingMode,
    reset
  } = useAccessibility();

  return (
    <div className="fixed left-0 bottom-8 z-[110] flex items-end transition-transform duration-300">
      <div 
        className={cn(
          "bg-white border-r border-y border-border shadow-2xl rounded-r-xl p-4 w-72 transition-all duration-300 ease-in-out",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-base font-bold text-primary flex items-center gap-2">
            <Accessibility className="w-4 h-4" />
            Erişilebilirlik Paneli
          </h2>
          <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} aria-label="Kapat" className="h-8 w-8">
            <X className="w-4 h-4" />
          </Button>
        </div>

        <div className="space-y-6">
          <section>
            <label className="text-[10px] font-semibold mb-3 block text-muted-foreground uppercase tracking-wider">
              Yazı Boyutu
            </label>
            <div className="grid grid-cols-3 gap-2">
              <Button 
                variant={fontSize === 'normal' ? 'default' : 'outline'} 
                size="sm"
                onClick={() => setFontSize('normal')}
                className="h-8 text-xs"
              >
                A
              </Button>
              <Button 
                variant={fontSize === 'large' ? 'default' : 'outline'} 
                size="sm"
                onClick={() => setFontSize('large')}
                className="h-8 text-xs"
              >
                A+
              </Button>
              <Button 
                variant={fontSize === 'xlarge' ? 'default' : 'outline'} 
                size="sm"
                onClick={() => setFontSize('xlarge')}
                className="h-8 text-xs"
              >
                A++
              </Button>
            </div>
          </section>

          <section className="space-y-2">
            <label className="text-[10px] font-semibold mb-1 block text-muted-foreground uppercase tracking-wider">
              Görünüm Ayarları
            </label>
            <Button 
              variant={highContrast ? 'default' : 'outline'} 
              className="w-full justify-start gap-3 h-10 text-xs"
              onClick={() => setHighContrast(!highContrast)}
            >
              <Contrast className="w-3.5 h-3.5" />
              Yüksek Kontrast
            </Button>
            <Button 
              variant={dyslexicFont ? 'default' : 'outline'} 
              className="w-full justify-start gap-3 h-10 text-xs"
              onClick={() => setDyslexicFont(!dyslexicFont)}
            >
              <BookOpen className="w-3.5 h-3.5" />
              Disleksi Dostu Font
            </Button>
          </section>

          <section>
            <label className="text-[10px] font-semibold mb-3 block text-muted-foreground uppercase tracking-wider">
              Okuma Modu
            </label>
            <Button 
              variant={readingMode ? 'default' : 'outline'} 
              className="w-full justify-start gap-3 h-10 text-xs"
              onClick={() => setReadingMode(!readingMode)}
            >
              <EyeOff className="w-3.5 h-3.5" />
              Görselleri Gizle
            </Button>
          </section>

          <div className="pt-4 border-t border-border">
            <Button 
              variant="destructive" 
              className="w-full gap-2 h-10 text-xs font-bold"
              onClick={reset}
            >
              <RotateCcw className="w-3.5 h-3.5" />
              Ayarları Sıfırla
            </Button>
          </div>
        </div>
      </div>

      <Button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "h-12 w-12 rounded-r-xl shadow-xl border-y border-r border-border flex items-center justify-center p-0 bg-primary hover:bg-primary/90 transition-transform",
          isOpen ? "-ml-px" : "ml-0"
        )}
        aria-label="Erişilebilirlik Menüsünü Aç"
      >
        {isOpen ? <ChevronLeft className="w-6 h-6 text-white" /> : <Accessibility className="w-6 h-6 text-white" />}
      </Button>
    </div>
  );
}

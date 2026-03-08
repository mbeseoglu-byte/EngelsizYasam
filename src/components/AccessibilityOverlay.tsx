
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
  ChevronLeft
} from 'lucide-react';
import { useAccessibility } from '@/hooks/use-accessibility';
import { cn } from '@/lib/utils';

export function AccessibilityOverlay() {
  const [isOpen, setIsOpen] = useState(false);
  const { fontSize, setFontSize, highContrast, setHighContrast, dyslexicFont, setDyslexicFont } = useAccessibility();

  return (
    <div className="fixed left-0 bottom-8 z-[100] flex items-end transition-transform duration-300">
      <div 
        className={cn(
          "bg-white border-r border-y border-border shadow-2xl rounded-r-xl p-4 w-72 transition-all duration-300 ease-in-out",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-bold text-primary flex items-center gap-2">
            <Accessibility className="w-5 h-5" />
            Erişilebilirlik
          </h2>
          <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} aria-label="Kapat">
            <X className="w-4 h-4" />
          </Button>
        </div>

        <div className="space-y-6">
          <section>
            <label className="text-sm font-semibold mb-3 block text-muted-foreground uppercase tracking-wider">
              Yazı Boyutu
            </label>
            <div className="grid grid-cols-3 gap-2">
              <Button 
                variant={fontSize === 'normal' ? 'default' : 'outline'} 
                size="sm"
                onClick={() => setFontSize('normal')}
              >
                A
              </Button>
              <Button 
                variant={fontSize === 'large' ? 'default' : 'outline'} 
                size="sm"
                onClick={() => setFontSize('large')}
              >
                A+
              </Button>
              <Button 
                variant={fontSize === 'xlarge' ? 'default' : 'outline'} 
                size="sm"
                onClick={() => setFontSize('xlarge')}
              >
                A++
              </Button>
            </div>
          </section>

          <section>
            <label className="text-sm font-semibold mb-3 block text-muted-foreground uppercase tracking-wider">
              Görünüm
            </label>
            <Button 
              variant={highContrast ? 'default' : 'outline'} 
              className="w-full justify-start gap-3"
              onClick={() => setHighContrast(!highContrast)}
            >
              <Contrast className="w-4 h-4" />
              Yüksek Kontrast
            </Button>
          </section>

          <section>
            <label className="text-sm font-semibold mb-3 block text-muted-foreground uppercase tracking-wider">
              Okuma Desteği
            </label>
            <Button 
              variant={dyslexicFont ? 'default' : 'outline'} 
              className="w-full justify-start gap-3"
              onClick={() => setDyslexicFont(!dyslexicFont)}
            >
              <BookOpen className="w-4 h-4" />
              Disleksi Dostu Font
            </Button>
          </section>
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

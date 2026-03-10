"use client"

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { 
  Accessibility, 
  Type, 
  Contrast, 
  BookOpen, 
  X,
  ChevronLeft,
  ChevronRight,
  EyeOff,
  RotateCcw,
  Plus,
  Minus
} from 'lucide-react';
import { useAccessibility } from '@/hooks/use-accessibility';
import { cn } from '@/lib/utils';

export function AccessibilityOverlay() {
  const [isOpen, setIsOpen] = useState(false);
  const { 
    fontScale, setFontScale, 
    highContrast, setHighContrast, 
    dyslexicFont, setDyslexicFont,
    readingMode, setReadingMode,
    reset
  } = useAccessibility();

  const increaseFont = () => setFontScale(prev => Math.min(prev + 10, 150));
  const decreaseFont = () => setFontScale(prev => Math.max(prev - 10, 100));

  return (
    <div className="fixed left-0 bottom-8 z-[110] flex items-end transition-transform duration-300">
      <div 
        className={cn(
          "bg-white border-r border-y border-border shadow-2xl rounded-r-3xl p-6 w-80 transition-all duration-300 ease-in-out",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-lg font-black text-primary flex items-center gap-2">
            <Accessibility className="w-5 h-5" />
            Erişilebilirlik
          </h2>
          <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} aria-label="Kapat" className="h-10 w-10">
            <X className="w-5 h-5" />
          </Button>
        </div>

        <div className="space-y-8">
          <section>
            <div className="flex justify-between items-center mb-4">
              <label className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">
                Yazı Boyutu (%{fontScale})
              </label>
              <div className="flex gap-2">
                <Button variant="outline" size="icon" onClick={decreaseFont} disabled={fontScale <= 100} className="h-8 w-8">
                  <Minus className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="icon" onClick={increaseFont} disabled={fontScale >= 150} className="h-8 w-8">
                  <Plus className="w-4 h-4" />
                </Button>
              </div>
            </div>
            <Slider 
              value={[fontScale]} 
              min={100} 
              max={150} 
              step={10} 
              onValueChange={(val) => setFontScale(val[0])}
              className="mt-4"
            />
          </section>

          <section className="space-y-3">
            <label className="text-[10px] font-black text-muted-foreground uppercase tracking-widest mb-2 block">
              Görünüm Ayarları
            </label>
            <Button 
              variant={highContrast ? 'default' : 'outline'} 
              className={cn(
                "w-full justify-start gap-3 h-12 text-xs font-bold rounded-xl transition-all",
                highContrast && "bg-secondary text-white border-secondary"
              )}
              onClick={() => setHighContrast(!highContrast)}
            >
              <Contrast className="w-4 h-4" />
              Yüksek Kontrast (Filtre)
            </Button>
            <Button 
              variant={dyslexicFont ? 'default' : 'outline'} 
              className={cn(
                "w-full justify-start gap-3 h-12 text-xs font-bold rounded-xl transition-all",
                dyslexicFont && "bg-secondary text-white border-secondary"
              )}
              onClick={() => setDyslexicFont(!dyslexicFont)}
            >
              <BookOpen className="w-4 h-4" />
              Disleksi Dostu Mod
            </Button>
            <Button 
              variant={readingMode ? 'default' : 'outline'} 
              className={cn(
                "w-full justify-start gap-3 h-12 text-xs font-bold rounded-xl transition-all",
                readingMode && "bg-secondary text-white border-secondary"
              )}
              onClick={() => setReadingMode(!readingMode)}
            >
              <EyeOff className="w-4 h-4" />
              Görselleri Gizle
            </Button>
          </section>

          <div className="pt-6 border-t border-border">
            <Button 
              variant="destructive" 
              className="w-full gap-2 h-12 text-xs font-black uppercase tracking-widest rounded-xl shadow-lg hover:shadow-destructive/20"
              onClick={reset}
            >
              <RotateCcw className="w-4 h-4" />
              Ayarları Sıfırla
            </Button>
          </div>
        </div>
      </div>

      <Button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "h-14 w-14 rounded-r-3xl shadow-2xl border-y border-r border-border flex items-center justify-center p-0 bg-primary hover:bg-primary/90 transition-all",
          isOpen ? "-ml-px" : "ml-0"
        )}
        aria-label="Erişilebilirlik Menüsünü Aç"
      >
        {isOpen ? <ChevronLeft className="w-8 h-8 text-white" /> : <Accessibility className="w-8 h-8 text-white" />}
      </Button>
    </div>
  );
}

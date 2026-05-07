
"use client"

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { 
  Accessibility, 
  Contrast, 
  BookOpen, 
  X,
  EyeOff,
  RotateCcw,
  Plus,
  Minus
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

interface AccessibilityOverlayProps {
  fontSize: number;
  setFontSize: (val: number | ((prev: number) => number)) => void;
  isHighContrast: boolean;
  setIsHighContrast: (val: boolean) => void;
  isDyslexic: boolean;
  setIsDyslexic: (val: boolean) => void;
  isReadingMode: boolean;
  setIsReadingMode: (val: boolean) => void;
  reset: () => void;
}

export function AccessibilityOverlay({
  fontSize, setFontSize,
  isHighContrast, setIsHighContrast,
  isDyslexic, setIsDyslexic,
  isReadingMode, setIsReadingMode,
  reset
}: AccessibilityOverlayProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [mousePos, setMousePos] = useState<{ y: number | null }>({ y: null });

  const increaseFont = () => setFontSize(prev => Math.min(prev + 10, 150));
  const decreaseFont = () => setFontSize(prev => Math.max(prev - 10, 100));

  // Disleksi Cetveli Takibi
  useEffect(() => {
    if (!isDyslexic) {
      setMousePos({ y: null });
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isDyslexic]);

  return (
    <>
      {/* Disleksi Cetveli (Reading Ruler) */}
      <AnimatePresence>
        {isDyslexic && mousePos.y !== null && (
          <motion.div 
            className="reading-ruler"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: mousePos.y - 20 }}
            exit={{ opacity: 0 }}
            transition={{ type: 'tween', ease: 'linear', duration: 0 }}
          />
        )}
      </AnimatePresence>

      {/* Draggable FAB Button - Positioned Middle Right */}
      <motion.div 
        drag
        dragConstraints={{ left: -1500, right: 0, top: -500, bottom: 500 }}
        dragElastic={0.1}
        className="fixed right-0 top-1/2 -translate-y-1/2 z-[110]"
        initial={{ x: 100 }}
        animate={{ x: 0 }}
        whileHover={{ scale: 1.05, opacity: 1 }}
        whileTap={{ scale: 0.95 }}
        style={{ opacity: isOpen ? 1 : 0.6 }}
      >
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className={cn(
            "h-14 w-14 rounded-l-2xl rounded-r-none shadow-[-4px_0_20px_rgba(0,0,0,0.15)] border-y border-l border-white/20 flex items-center justify-center p-0 bg-primary hover:bg-primary/90 transition-all relative overflow-hidden group",
            isOpen && "rotate-90 rounded-2xl"
          )}
          aria-label="Erişilebilirlik Menüsünü Aç"
        >
          <div className="absolute inset-0 bg-secondary/20 scale-0 group-hover:scale-100 transition-transform duration-500 rounded-full" />
          {isOpen ? <X className="w-7 h-7 text-white relative z-10" /> : <Accessibility className="w-7 h-7 text-white relative z-10" />}
          
          {/* Animated Ring */}
          {!isOpen && (
            <motion.div 
              className="absolute inset-0 border-2 border-white rounded-l-2xl"
              animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          )}
        </Button>
      </motion.div>

      {/* Right Side Panel Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 bottom-0 z-[120] bg-white border-l border-border shadow-2xl p-6 w-80 lg:w-96 flex flex-col"
          >
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                  <Accessibility className="w-6 h-6" />
                </div>
                <h2 className="text-xl font-black text-primary">Erişilebilirlik</h2>
              </div>
              <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} aria-label="Kapat" className="h-10 w-10 rounded-full hover:bg-muted">
                <X className="w-5 h-5" />
              </Button>
            </div>

            <div className="flex-1 overflow-y-auto pr-2 space-y-8 scrollbar-thin scrollbar-thumb-muted">
              <section>
                <div className="flex justify-between items-center mb-4">
                  <label className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">
                    Yazı Boyutu (%{fontSize})
                  </label>
                  <div className="flex gap-2">
                    <Button variant="outline" size="icon" onClick={decreaseFont} disabled={fontSize <= 100} className="h-8 w-8 rounded-lg">
                      <Minus className="w-4 h-4" />
                    </Button>
                    <Button variant="outline" size="icon" onClick={increaseFont} disabled={fontSize >= 150} className="h-8 w-8 rounded-lg">
                      <Plus className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
                <Slider 
                  value={[fontSize]} 
                  min={100} 
                  max={150} 
                  step={10} 
                  onValueChange={(val) => setFontSize(val[0])}
                  className="mt-4"
                />
              </section>

              <section className="space-y-3">
                <label className="text-[10px] font-black text-muted-foreground uppercase tracking-widest mb-2 block">
                  Görünüm Ayarları
                </label>
                <Button 
                  variant={isHighContrast ? 'default' : 'outline'} 
                  className={cn(
                    "w-full justify-start gap-4 h-14 text-xs font-bold rounded-2xl transition-all border-2",
                    isHighContrast ? "bg-secondary text-white border-secondary shadow-lg shadow-secondary/20" : "hover:border-primary/20"
                  )}
                  onClick={() => setIsHighContrast(!isHighContrast)}
                >
                  <div className={cn("w-8 h-8 rounded-lg flex items-center justify-center", isHighContrast ? "bg-white/20" : "bg-muted")}>
                    <Contrast className="w-4 h-4" />
                  </div>
                  Yüksek Kontrast (Filtre)
                </Button>
                <Button 
                  variant={isDyslexic ? 'default' : 'outline'} 
                  className={cn(
                    "w-full justify-start gap-4 h-14 text-xs font-bold rounded-2xl transition-all border-2",
                    isDyslexic ? "bg-secondary text-white border-secondary shadow-lg shadow-secondary/20" : "hover:border-primary/20"
                  )}
                  onClick={() => setIsDyslexic(!isDyslexic)}
                >
                  <div className={cn("w-8 h-8 rounded-lg flex items-center justify-center", isDyslexic ? "bg-white/20" : "bg-muted")}>
                    <BookOpen className="w-4 h-4" />
                  </div>
                  Disleksi Dostu Mod
                </Button>
                <Button 
                  variant={isReadingMode ? 'default' : 'outline'} 
                  className={cn(
                    "w-full justify-start gap-4 h-14 text-xs font-bold rounded-2xl transition-all border-2",
                    isReadingMode ? "bg-secondary text-white border-secondary shadow-lg shadow-secondary/20" : "hover:border-primary/20"
                  )}
                  onClick={() => setIsReadingMode(!isReadingMode)}
                >
                  <div className={cn("w-8 h-8 rounded-lg flex items-center justify-center", isReadingMode ? "bg-white/20" : "bg-muted")}>
                    <EyeOff className="w-4 h-4" />
                  </div>
                  Görselleri Gizle
                </Button>
              </section>
            </div>

            <div className="pt-6 border-t border-border mt-auto">
              <Button 
                variant="destructive" 
                className="w-full gap-2 h-14 text-xs font-black uppercase tracking-widest rounded-2xl shadow-lg hover:shadow-destructive/20 transition-all border-none"
                onClick={reset}
              >
                <RotateCcw className="w-4 h-4" />
                Ayarları Sıfırla
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Backdrop */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[115]"
        />
      )}
    </>
  );
}
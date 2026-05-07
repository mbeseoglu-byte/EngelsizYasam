'use client';

import { useState, useEffect } from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { LegislativeTimeline } from '@/components/LegislativeTimeline';
import { MovieSection } from '@/components/MovieSection';
import { StrategicImpact } from '@/components/StrategicImpact';
import { DigitalSecretariat } from '@/components/DigitalSecretariat';
import { Footer } from '@/components/Footer';
import { AccessibilityOverlay } from '@/components/AccessibilityOverlay';
import { Toaster } from '@/components/ui/toaster';

import { VisionMissionTabs } from '@/components/VisionMissionTabs';

export default function Home() {
  // 1. Accessibility Engine State
  const [fontSize, setFontSize] = useState(100);
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [isDyslexic, setIsDyslexic] = useState(false);
  const [isReadingMode, setIsReadingMode] = useState(false);

  // 2. Contact Modal State
  const [isContactOpen, setIsContactOpen] = useState(false);

  // 3. Strategic Impact Trigger State
  const [selectedImpactId, setSelectedImpactId] = useState<string | null>(null);

  // 4. Erişilebilirlik Motoru: State değişimlerini document üzerine anlık yansıtır
  useEffect(() => {
    const root = document.documentElement;
    root.style.fontSize = `${fontSize}%`;

    if (isHighContrast) {
      root.style.filter = 'grayscale(1) contrast(200%)';
    } else {
      root.style.filter = 'none';
    }

    if (isDyslexic) {
      root.classList.add('dyslexic-font');
    } else {
      root.classList.remove('dyslexic-font');
    }

    if (isReadingMode) {
      root.classList.add('reading-mode');
    } else {
      root.classList.remove('reading-mode');
    }
  }, [fontSize, isHighContrast, isDyslexic, isReadingMode]);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar onContactClick={() => setIsContactOpen(true)} />
      
      <AccessibilityOverlay 
        fontSize={fontSize}
        setFontSize={setFontSize}
        isHighContrast={isHighContrast}
        setIsHighContrast={setIsHighContrast}
        isDyslexic={isDyslexic}
        setIsDyslexic={setIsDyslexic}
        isReadingMode={isReadingMode}
        setIsReadingMode={setIsReadingMode}
        reset={() => {
          setFontSize(100);
          setIsHighContrast(false);
          setIsDyslexic(false);
          setIsReadingMode(false);
        }}
      />
      
      <main className="space-y-0">
        <Hero 
          onContactClick={() => setIsContactOpen(true)} 
          onNobelClick={() => setSelectedImpactId('nobel')}
        />
        <LegislativeTimeline />
        <VisionMissionTabs />
        <StrategicImpact 
          externalImpactId={selectedImpactId} 
          onClearExternal={() => setSelectedImpactId(null)} 
        />
        <MovieSection />
      </main>

      <DigitalSecretariat isOpen={isContactOpen} onOpenChange={setIsContactOpen} />

      <Footer onContactClick={() => setIsContactOpen(true)} />
      <Toaster />
    </div>
  );
}
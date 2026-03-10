'use client';

import { useState, useEffect } from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Biography } from '@/components/Biography';
import { LegislativeTimeline } from '@/components/LegislativeTimeline';
import { GlobalAdvocacy } from '@/components/GlobalAdvocacy';
import { MovieSection } from '@/components/MovieSection';
import { NobelVision } from '@/components/NobelVision';
import { DigitalSecretariat } from '@/components/DigitalSecretariat';
import { Footer } from '@/components/Footer';
import { AccessibilityOverlay } from '@/components/AccessibilityOverlay';
import { Toaster } from '@/components/ui/toaster';

export default function Home() {
  // 1. State Yönetimi (Accessibility Engine)
  const [fontSize, setFontSize] = useState(100);
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [isDyslexic, setIsDyslexic] = useState(false);
  const [isReadingMode, setIsReadingMode] = useState(false);

  // 2. Erişilebilirlik Motoru: State değişimlerini document üzerine anlık yansıtır
  useEffect(() => {
    const root = document.documentElement;

    // Font Ölçeklendirme (%100 - %150)
    root.style.fontSize = `${fontSize}%`;

    // Kontrast Modu (Filtre Uygulaması)
    if (isHighContrast) {
      root.style.filter = 'grayscale(1) contrast(200%)';
    } else {
      root.style.filter = 'none';
    }

    // Disleksi Sınıfı
    if (isDyslexic) {
      root.classList.add('dyslexic-font');
    } else {
      root.classList.remove('dyslexic-font');
    }

    // Okuma Modu Sınıfı
    if (isReadingMode) {
      root.classList.add('reading-mode');
    } else {
      root.classList.remove('reading-mode');
    }
  }, [fontSize, isHighContrast, isDyslexic, isReadingMode]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* 3. Kontrollü Bileşen: State ve Setter'lar prop olarak iletiliyor */}
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
      
      <main>
        <Hero />
        <Biography />
        <LegislativeTimeline />
        <GlobalAdvocacy />
        <MovieSection />
        <NobelVision />
        <DigitalSecretariat />
      </main>

      <Footer />
      <Toaster />
    </div>
  );
}

"use client"

import { useState, useEffect, useCallback } from 'react';

export function useAccessibility() {
  const [fontScale, setFontScale] = useState(100);
  const [highContrast, setHighContrast] = useState(false);
  const [dyslexicFont, setDyslexicFont] = useState(false);
  const [readingMode, setReadingMode] = useState(false);

  const reset = useCallback(() => {
    setFontScale(100);
    setHighContrast(false);
    setDyslexicFont(false);
    setReadingMode(false);
  }, []);

  useEffect(() => {
    const root = document.documentElement;

    // Font Ölçeklendirme Motoru: 100% - 150% arası dinamik değişim
    root.style.fontSize = `${fontScale}%`;

    // Kontrast Motoru: Grayscale ve Contrast filtreleri uygulaması
    if (highContrast) {
      root.style.filter = 'grayscale(1) contrast(200%)';
      root.classList.add('high-contrast-mode');
    } else {
      root.style.filter = 'none';
      root.classList.remove('high-contrast-mode');
    }

    // Font Tipi
    if (dyslexicFont) {
      root.classList.add('dyslexic-font');
    } else {
      root.classList.remove('dyslexic-font');
    }

    // Okuma Modu
    if (readingMode) {
      root.classList.add('reading-mode');
    } else {
      root.classList.remove('reading-mode');
    }
  }, [fontScale, highContrast, dyslexicFont, readingMode]);

  return {
    fontScale,
    setFontScale,
    highContrast,
    setHighContrast,
    dyslexicFont,
    setDyslexicFont,
    readingMode,
    setReadingMode,
    reset
  };
}

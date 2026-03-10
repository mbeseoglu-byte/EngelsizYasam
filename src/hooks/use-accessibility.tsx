
"use client"

import { useState, useEffect, useCallback } from 'react';

export type FontSize = 'normal' | 'large' | 'xlarge';

export function useAccessibility() {
  const [fontSize, setFontSize] = useState<FontSize>('normal');
  const [highContrast, setHighContrast] = useState(false);
  const [dyslexicFont, setDyslexicFont] = useState(false);
  const [readingMode, setReadingMode] = useState(false);

  const reset = useCallback(() => {
    setFontSize('normal');
    setHighContrast(false);
    setDyslexicFont(false);
    setReadingMode(false);
  }, []);

  useEffect(() => {
    const root = document.documentElement;

    // Apply font size class to html element for global scaling via rem
    root.classList.remove('font-large', 'font-xlarge');
    if (fontSize === 'large') root.classList.add('font-large');
    if (fontSize === 'xlarge') root.classList.add('font-xlarge');

    // Apply high contrast
    if (highContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }

    // Apply dyslexic font
    if (dyslexicFont) {
      root.classList.add('dyslexic-font');
    } else {
      root.classList.remove('dyslexic-font');
    }

    // Apply reading mode (hide images)
    if (readingMode) {
      root.classList.add('reading-mode');
    } else {
      root.classList.remove('reading-mode');
    }
  }, [fontSize, highContrast, dyslexicFont, readingMode]);

  return {
    fontSize,
    setFontSize,
    highContrast,
    setHighContrast,
    dyslexicFont,
    setDyslexicFont,
    readingMode,
    setReadingMode,
    reset
  };
}

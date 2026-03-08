"use client"

import { useState, useEffect } from 'react';

export type FontSize = 'normal' | 'large' | 'xlarge';

export function useAccessibility() {
  const [fontSize, setFontSize] = useState<FontSize>('normal');
  const [highContrast, setHighContrast] = useState(false);
  const [dyslexicFont, setDyslexicFont] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    const body = document.body;

    // Apply font size
    body.classList.remove('font-large', 'font-xlarge');
    if (fontSize === 'large') body.classList.add('font-large');
    if (fontSize === 'xlarge') body.classList.add('font-xlarge');

    // Apply high contrast
    if (highContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }

    // Apply dyslexic font
    if (dyslexicFont) {
      body.classList.add('dyslexic-font');
    } else {
      body.classList.remove('dyslexic-font');
    }
  }, [fontSize, highContrast, dyslexicFont]);

  return {
    fontSize,
    setFontSize,
    highContrast,
    setHighContrast,
    dyslexicFont,
    setDyslexicFont,
  };
}

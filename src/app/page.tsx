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
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <AccessibilityOverlay />
      
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

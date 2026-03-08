
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { MovieSection } from '@/components/MovieSection';
import { GlobalAdvocacy } from '@/components/GlobalAdvocacy';
import { NewsSection } from '@/components/NewsSection';
import { Biography } from '@/components/Biography';
import { ContactForm } from '@/components/ContactForm';
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
        <MovieSection />
        <Biography />
        <GlobalAdvocacy />
        <NewsSection />
        <ContactForm />
      </main>

      <Footer />
      <Toaster />
    </div>
  );
}

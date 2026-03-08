import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Initiatives } from '@/components/Initiatives';
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
        <Initiatives />
        <Biography />
        <NewsSection />
        <ContactForm />
      </main>

      <Footer />
      <Toaster />
    </div>
  );
}

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Globe, ArrowRight } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function Hero() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-image');

  return (
    <section className="relative overflow-hidden bg-white pt-16 pb-24 lg:pt-24 lg:pb-32">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 space-y-8">
            <div className="inline-flex items-center gap-2 bg-primary/5 text-primary px-4 py-2 rounded-full font-bold text-sm">
              <Globe className="w-4 h-4" />
              Küresel Hak Savunuculuğu
            </div>
            <h1 className="text-4xl lg:text-6xl font-headline font-black text-primary leading-tight">
              Serkan Bayram ile <span className="text-secondary italic">erişilebilir</span> bir dünya.
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-xl">
              Dünya genelinde engelli hakları için çalışıyoruz. Türkiye'nin vizyonunu küresel ölçekte paylaşarak, bariyerleri birlikte aşıyoruz.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white font-bold h-14 px-8 rounded-full group">
                <Link href="/faaliyetler">
                  Faaliyetlerim
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-2 border-primary text-primary hover:bg-primary/5 font-bold h-14 px-8 rounded-full">
                <Link href="#calismalar">Çalışmalarımızı İnceleyin</Link>
              </Button>
            </div>
          </div>
          
          <div className="lg:w-1/2 relative">
            <div className="absolute -inset-4 bg-secondary/10 rounded-3xl -rotate-2 -z-10"></div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <Image 
                src={heroImage?.imageUrl || ""} 
                alt={heroImage?.description || "Advocacy"}
                fill
                className="object-cover"
                data-ai-hint={heroImage?.imageHint}
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-border hidden md:block">
              <div className="flex items-center gap-4">
                <div className="bg-secondary rounded-full p-3">
                  <AccessibilityIcon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-black text-primary">100+</div>
                  <div className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Uluslararası Proje</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AccessibilityIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="4" r="1" />
      <path d="m18 19 1-7c0-1-1-2-2-2h-2V7c0-1-1-2-2-2s-2 1-2 2v3H9c-1 0-2 1-2 2l1 7" />
      <path d="m9 19 3-1 3 1" />
    </svg>
  );
}

import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Quote } from 'lucide-react';

export function Biography() {
  const bioImg = PlaceHolderImages.find(img => img.id === 'bio-portrait');

  return (
    <section id="biyografi" className="py-24 bg-primary text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-secondary/5 -skew-x-12 translate-x-1/2" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/3">
            <div className="relative">
              <div className="absolute -inset-4 border-2 border-secondary/30 rounded-2xl rotate-3" />
              <div className="relative aspect-[4/5] rounded-xl overflow-hidden shadow-2xl grayscale hover:grayscale-0 transition-all duration-700 border-2 border-white/20">
                <Image 
                  src={bioImg?.imageUrl || ""} 
                  alt="Serkan Bayram - Engelli Hakları Savunucusu" 
                  fill 
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <div className="lg:w-2/3 space-y-8">
            <div className="flex items-center gap-4">
              <div className="h-px w-12 bg-secondary" />
              <h2 className="text-secondary font-black uppercase tracking-widest">Biyografi</h2>
            </div>
            
            <h3 className="text-4xl lg:text-6xl font-headline font-black leading-tight italic">
              "Engellilerin Sesi, <br />
              <span className="text-secondary">Engelsiz ve Erişilebilir</span> Yarınların Mimarı."
            </h3>

            <div className="space-y-6 text-lg text-white/80 leading-relaxed font-medium">
              <p>
                Hayatını engelli hakları mücadelesine adamış bir savunucu olarak, AK Parti çatısı altında hem Meclis'te hem de küresel platformlarda sesimizi duyuruyoruz. Türkiye'nin 20 yıldır engelliler alanında yazdığı başarı hikayesini, dünya genelinde bir model olarak sunmak en büyük gayemizdir.
              </p>
              <p>
                Birleşmiş Milletler'den yerel yönetimlerimize kadar her platformda; sadece fiziksel değil, zihinsel bariyerlerin de yıkıldığı bir dünya için ter döküyoruz. "Engelsiz ve Erişilebilir Bir Dünya" hayali bizim için sadece bir slogan değil, her gün adım adım inşa ettiğimiz bir gerçektir.
              </p>
            </div>

            <div className="pt-8 border-t border-white/10">
              <div className="flex items-center gap-6">
                <Quote className="w-12 h-12 text-secondary opacity-50" />
                <div className="space-y-1">
                  <div className="text-xl font-black">Serkan Bayram</div>
                  <div className="text-sm font-bold text-secondary uppercase tracking-widest">AK Parti Milletvekili & Savunucu</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

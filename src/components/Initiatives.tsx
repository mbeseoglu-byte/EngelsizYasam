import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';
import { Globe, Users, Landmark, Award } from 'lucide-react';

export function Initiatives() {
  const initiatives = [
    {
      title: "BM Engelli Hakları Sözleşmesi",
      desc: "Uluslararası standartların Türkiye ve dünya genelinde uygulanması için koordinasyon.",
      icon: <Globe className="w-8 h-8 text-white" />,
      image: PlaceHolderImages.find(img => img.id === 'un-conference')?.imageUrl
    },
    {
      title: "Küresel Konferanslar",
      desc: "BM, AB ve İslam İşbirliği Teşkilatı nezdinde düzenlenen zirvelerde Türkiye temsili.",
      icon: <Users className="w-8 h-8 text-white" />,
      image: PlaceHolderImages.find(img => img.id === 'international')?.imageUrl
    },
    {
      title: "Yerel Projeler",
      desc: "Belediyelerimizle birlikte yürütülen 'Sıfır Bariyer' şehircilik projeleri.",
      icon: <Landmark className="w-8 h-8 text-white" />,
      image: PlaceHolderImages.find(img => img.id === 'fieldwork')?.imageUrl
    }
  ];

  return (
    <section id="calismalar" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm uppercase tracking-widest text-secondary font-black mb-4">Küresel Etki</h2>
          <h3 className="text-3xl lg:text-5xl font-headline font-black text-primary mb-6">Uluslararası Çalışmalarımız</h3>
          <p className="text-lg text-muted-foreground">
            Sınırları aşan bir vizyonla, engelli haklarının evrensel bir değer haline gelmesi için çalışıyoruz.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {initiatives.map((item, idx) => (
            <Card key={idx} className="group overflow-hidden border-none shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="relative h-48">
                <Image 
                  src={item.image || ""} 
                  alt={item.title} 
                  fill 
                  className="object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-primary/40 group-hover:bg-primary/20 transition-colors" />
                <div className="absolute top-4 right-4 bg-secondary p-3 rounded-xl shadow-lg">
                  {item.icon}
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-xl font-bold text-primary group-hover:text-secondary transition-colors">
                  {item.title}
                </CardTitle>
                <CardDescription className="text-base leading-relaxed mt-2">
                  {item.desc}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <button className="text-primary font-bold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                  Detayları İncele
                  <Award className="w-4 h-4" />
                </button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

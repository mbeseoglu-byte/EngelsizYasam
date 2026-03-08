import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function NewsSection() {
  const categories = [
    { id: 'meclis', label: "Meclis'ten" },
    { id: 'saha', label: "Saha Çalışmaları" },
    { id: 'uluslararasi', label: "Uluslararası Görüşmeler" }
  ];

  const newsData = {
    meclis: [
      {
        title: "Erişilebilirlik Yasası Komisyon'da Kabul Edildi",
        date: "14 Mart 2024",
        image: PlaceHolderImages.find(img => img.id === 'parliament')?.imageUrl,
        desc: "Kamu binalarının tam erişilebilir olması için hazırlanan yeni düzenleme meclis komisyonundan geçti."
      },
      {
        title: "Engelli İstihdamı Üzerine Soru Önergesi",
        date: "10 Mart 2024",
        image: PlaceHolderImages.find(img => img.id === 'parliament')?.imageUrl,
        desc: "Özel sektörde engelli istihdam kotalarının artırılmasına yönelik çalışmalarımız sürüyor."
      }
    ],
    saha: [
      {
        title: "Anadolu Buluşmaları: Engelsiz Şehirler",
        date: "12 Mart 2024",
        image: PlaceHolderImages.find(img => img.id === 'fieldwork')?.imageUrl,
        desc: "Saha ziyaretleri kapsamında engelli derneklerimizle bir araya gelerek talepleri yerinde dinledik."
      }
    ],
    uluslararasi: [
      {
        title: "Cenevre'de BM Temsilcileri ile Görüşme",
        date: "05 Mart 2024",
        image: PlaceHolderImages.find(img => img.id === 'un-conference')?.imageUrl,
        desc: "Küresel engelli hakları savunuculuğu vizyonumuzu BM insan hakları temsilcileriyle paylaştık."
      }
    ]
  };

  return (
    <section id="haberler" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-sm uppercase tracking-widest text-secondary font-black mb-4">Güncel Duyurular</h2>
            <h3 className="text-3xl lg:text-5xl font-headline font-black text-primary">Haberler ve Faaliyetler</h3>
          </div>
        </div>

        <Tabs defaultValue="meclis" className="w-full">
          <TabsList className="bg-muted p-1 rounded-full mb-12 h-auto flex-wrap justify-start">
            {categories.map(cat => (
              <TabsTrigger 
                key={cat.id} 
                value={cat.id}
                className="rounded-full px-8 py-3 data-[state=active]:bg-primary data-[state=active]:text-white transition-all font-bold"
              >
                {cat.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {categories.map(cat => (
            <TabsContent key={cat.id} value={cat.id} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {newsData[cat.id as keyof typeof newsData].map((news, i) => (
                <Card key={i} className="group flex flex-col h-full border-none shadow-md hover:shadow-xl transition-all">
                  <div className="relative h-56 overflow-hidden rounded-t-xl">
                    <Image 
                      src={news.image || ""} 
                      alt={news.title} 
                      fill 
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-white/90 text-primary font-bold border-none hover:bg-white">{cat.label}</Badge>
                    </div>
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-2 text-muted-foreground text-xs font-bold mb-3 uppercase tracking-tighter">
                      <Calendar className="w-3.5 h-3.5" />
                      {news.date}
                    </div>
                    <CardTitle className="text-xl font-bold text-primary group-hover:text-secondary transition-colors line-clamp-2">
                      {news.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                      {news.desc}
                    </p>
                  </CardContent>
                  <CardFooter className="pt-0">
                    <button className="text-primary font-black text-xs uppercase tracking-widest flex items-center gap-2 hover:gap-3 transition-all">
                      Devamını Oku
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </CardFooter>
                </Card>
              ))}
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}

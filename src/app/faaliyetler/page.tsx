import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { AccessibilityOverlay } from '@/components/AccessibilityOverlay';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Calendar, ExternalLink } from 'lucide-react';

export default function FaaliyetlerPage() {
  const activities = [
    {
      title: "BM Küresel Engelli Hakları Zirvesi",
      date: "25 Nisan 2024",
      location: "New York, ABD",
      category: "Uluslararası",
      desc: "Türkiye'nin engelli hakları vizyonunu dünyaya sunacağımız BM ana merkezi toplantısı."
    },
    {
      title: "Anadolu Engelsiz Şehirler Çalıştayı",
      date: "12 Mayıs 2024",
      location: "Konya, Türkiye",
      category: "Yerel",
      desc: "Belediye başkanlarımızla erişilebilir şehircilik standartlarını belirleyeceğimiz bölgesel çalıştay."
    },
    {
      title: "Geleceğin Erişilebilir Teknolojileri Fuarı",
      date: "20 Haziran 2024",
      location: "İstanbul, Türkiye",
      category: "Teknoloji",
      desc: "Engellilerin hayatını kolaylaştıran inovatif yerli teknolojilerin sergileneceği fuar açılışı."
    },
    {
      title: "Meclis Engelsiz Kütüphane Açılışı",
      date: "05 Temmuz 2024",
      location: "Ankara, Türkiye",
      category: "Meclis",
      desc: "TBMM bünyesinde tüm vatandaşlarımıza açık, tam erişilebilir kütüphane kompleksinin açılış töreni."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <AccessibilityOverlay />

      <main className="flex-grow py-24 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-16">
            <h1 className="text-4xl lg:text-6xl font-headline font-black text-primary mb-6 text-center">Faaliyet Takvimimiz</h1>
            <p className="text-xl text-muted-foreground text-center">
              Engelsiz bir dünya için planladığımız tüm etkinlik, zirve ve çalışmaları buradan takip edebilirsiniz.
            </p>
          </div>

          <div className="grid gap-8 max-w-5xl mx-auto">
            {activities.map((act, idx) => (
              <Card key={idx} className="group border-none shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/4 bg-primary p-8 flex flex-col items-center justify-center text-white text-center">
                    <Calendar className="w-10 h-10 mb-4 text-secondary" />
                    <div className="text-2xl font-black">{act.date.split(' ')[0]}</div>
                    <div className="text-sm font-bold uppercase tracking-widest">{act.date.split(' ')[1]} {act.date.split(' ')[2]}</div>
                  </div>
                  <div className="md:w-3/4 p-8 relative">
                    <div className="flex justify-between items-start mb-4">
                      <Badge variant="secondary" className="bg-secondary/10 text-secondary border-none font-bold uppercase tracking-widest px-4">
                        {act.category}
                      </Badge>
                      <button className="text-muted-foreground hover:text-primary transition-colors">
                        <ExternalLink className="w-5 h-5" />
                      </button>
                    </div>
                    <CardHeader className="p-0 mb-4">
                      <CardTitle className="text-2xl font-bold text-primary group-hover:text-secondary transition-colors">
                        {act.title}
                      </CardTitle>
                      <div className="flex items-center gap-2 text-muted-foreground font-bold text-sm mt-2">
                        <MapPin className="w-4 h-4 text-secondary" />
                        {act.location}
                      </div>
                    </CardHeader>
                    <CardContent className="p-0">
                      <p className="text-muted-foreground leading-relaxed">
                        {act.desc}
                      </p>
                    </CardContent>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-20 text-center">
            <div className="bg-white inline-block p-12 rounded-3xl shadow-xl border border-primary/5">
              <h3 className="text-2xl font-black text-primary mb-4">Bize Katılın</h3>
              <p className="text-muted-foreground mb-8">Faaliyetlerimize gönüllü olarak destek vermek ister misiniz?</p>
              <button className="bg-primary text-white font-bold py-4 px-12 rounded-full hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/30">
                Gönüllü Başvuru Formu
              </button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

import Link from 'next/link';
import { Accessibility, Facebook, Twitter, Instagram, Youtube, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-primary text-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-16 border-b border-white/10 pb-16">
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-primary">
                <Accessibility className="w-8 h-8" />
              </div>
              <div className="flex flex-col">
                <span className="font-headline font-black text-2xl leading-tight">Serkan Bayram</span>
                <span className="text-xs uppercase tracking-[0.2em] text-secondary font-bold">Engelsiz Dünya Platformu</span>
              </div>
            </Link>
            <p className="text-white/60 max-w-md text-lg leading-relaxed">
              Dünya genelinde engelli hakları için sürdürdüğümüz mücadeleyi Türkiye vizyonu ile birleştiriyor, herkes için daha adil ve erişilebilir bir gelecek inşa ediyoruz.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-xl mb-6 text-secondary">Hızlı Menü</h4>
            <ul className="space-y-4 text-white/70 font-medium">
              <li><Link href="/" className="hover:text-white transition-colors">Anasayfa</Link></li>
              <li><Link href="/#biyografi" className="hover:text-white transition-colors">Biyografi</Link></li>
              <li><Link href="/#calismalar" className="hover:text-white transition-colors">Küresel Çalışmalar</Link></li>
              <li><Link href="/faaliyetler" className="hover:text-white transition-colors">Faaliyet Takvimi</Link></li>
              <li><Link href="/#iletisim" className="hover:text-white transition-colors">Bize Ulaşın</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-xl mb-6 text-secondary">Bülten Aboneliği</h4>
            <p className="text-sm text-white/60 mb-6">Gelişmelerden haberdar olmak için bültenimize katılın.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="E-posta" 
                className="bg-white/10 border border-white/20 rounded-lg px-4 py-2 w-full focus:outline-none focus:border-secondary transition-colors"
              />
              <button className="bg-secondary p-2 rounded-lg hover:bg-secondary/80 transition-colors">
                <Mail className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-white/40 text-sm">
            © {new Date().getFullYear()} Serkan Bayram - Engelsiz Dünya Platformu. Tüm hakları saklıdır.
          </div>
          <div className="flex gap-4">
            <Link href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-secondary hover:text-white transition-all">
              <Facebook className="w-5 h-5" />
            </Link>
            <Link href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-secondary hover:text-white transition-all">
              <Twitter className="w-5 h-5" />
            </Link>
            <Link href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-secondary hover:text-white transition-all">
              <Instagram className="w-5 h-5" />
            </Link>
            <Link href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-secondary hover:text-white transition-all">
              <Youtube className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

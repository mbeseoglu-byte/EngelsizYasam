
"use client"

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Medal, 
  Gavel, 
  Globe2, 
  Map, 
  ChevronRight, 
  ChevronLeft,
  Sparkles,
  ShieldCheck,
  Building2,
  Users2,
  X,
  Target,
  HandHeart,
  Scale,
  Award,
  Zap,
  Star,
  Quote,
  Accessibility
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

interface ImpactItem {
  id: string;
  icon: React.ReactNode;
  title: string;
  year: string;
  description: string;
  details: string[];
  color: string;
  bg: string;
  longDescription: string;
  achievements: string[];
}

interface StrategicImpactProps {
  externalImpactId?: string | null;
  onClearExternal?: () => void;
}

export function StrategicImpact({ externalImpactId, onClearExternal }: StrategicImpactProps) {
  const [selectedImpact, setSelectedImpact] = useState<ImpactItem | null>(null);

  const impacts: ImpactItem[] = [
    {
      id: "nobel",
      icon: <Medal className="w-6 h-6" />,
      title: "Nobel Barış Ödülü Adaylığı",
      year: "2024",
      description: "Avrupa Ekonomik Senatosu tarafından Türkiye'nin ilk engelli milletvekili Nobel adayı olarak gösterildi.",
      details: ["Küresel Barış Elçiliği", "Erişilebilir Dünya Vizyonu", "İnsan Hakları Savunuculuğu"],
      color: "from-blue-950 via-slate-900 to-indigo-950",
      bg: "bg-slate-50",
      longDescription: "Serkan Bayram, engelli hakları konusundaki uluslararası çalışmaları ve 'Buğday Tanesi' filmi ile yarattığı toplumsal farkındalık nedeniyle 2024 yılında Avrupa Ekonomik Senatosu (EES) tarafından Nobel Barış Ödülü'ne aday gösterildi.",
      achievements: [
        "EES tarafından resmi adaylık ilanı",
        "Küresel engelli hakları diplomasisi",
        "Dünya genelinde 100+ konferans"
      ]
    },
    {
      id: "law",
      icon: <Gavel className="w-6 h-6" />,
      title: "Yasa Değiştirici Reformlar",
      year: "Hukuk",
      description: "Engelli bireylerin hâkim ve savcı olmasını engelleyen yasanın değiştirilmesine öncülük etti.",
      details: ["Engelsiz Adalet Sistemi", "Kaymakamlık Yasası Hedefi", "Liyakat Temelli İstihdam"],
      color: "from-slate-900 via-blue-900 to-indigo-900",
      bg: "bg-slate-50",
      longDescription: "Yıllarca süregelen ve engelli bireylerin yargı sisteminde görev almasını engelleyen 70 yıllık mülakat engelini ortadan kaldıran yasal düzenleme, Serkan Bayram'ın en büyük hukuki başarılarından biridir.",
      achievements: [
        "Hâkimlik ve Savcılık Yasası Değişikliği",
        "Meclis onaylı kadro genişletmeleri",
        "Liyakat odaklı istihdam yasaları"
      ]
    },
    {
      id: "centers",
      icon: <Building2 className="w-6 h-6" />,
      title: "81 İlde 81 Yaşam Merkezi",
      year: "Proje",
      description: "Buğday Tanesi Vakfı aracılığıyla Türkiye'nin her ilinde tam donanımlı rehabilitasyon merkezleri kurma hedefi.",
      details: ["Modern Protez-Ortez Merkezleri", "Psikososyal Destek Alanları", "İstihdam Odaklı Eğitim"],
      color: "from-slate-800 via-blue-950 to-slate-900",
      bg: "bg-slate-50",
      longDescription: "Serkan Bayram'ın vizyonuyla kurulan Buğday Tanesi Vakfı, Türkiye'nin 81 ilinde engelli bireylerin rehabilitasyon, eğitim ve sosyal hayata katılımını sağlayacak dev merkezler inşa ediyor.",
      achievements: [
        "Gaziantep Protez-Ortez Merkezi açılışı",
        "Kocaeli Engelsiz Yaşam Köyü iş birliği",
        "Vakıf üzerinden burs ve eğitim desteği"
      ]
    },
    {
      id: "global",
      icon: <Globe2 className="w-6 h-6" />,
      title: "Küresel Diplomasi",
      year: "BM/AB",
      description: "BM bünyesinde Engelli Temsilciliği ve tüm ülkelerde Engelliler Bakanlığı kurulması teklifi.",
      details: ["Uluslararası Sözleşmeler", "Dijital Erişilebilirlik Standartları", "Küresel Farkındalık Hareketleri"],
      color: "from-indigo-950 via-blue-950 to-slate-900",
      bg: "bg-slate-50",
      longDescription: "Uluslararası platformlarda Türkiye'yi temsil eden Serkan Bayram, dünyadaki her ülkede bir 'Engelliler Bakanlığı' kurulmasını ve BM bünyesinde kalıcı bir temsilcilik oluşturulmasını savunmaktadır.",
      achievements: [
        "BM Genel Kurulu önerge çalışmaları",
        "Tayvan Küresel Yaşam Sevgisi Ödülü",
        "Avrupa Parlamentosu Sunumları"
      ]
    }
  ];

  // Handle external trigger
  useEffect(() => {
    if (externalImpactId) {
      const impact = impacts.find(i => i.id === externalImpactId);
      if (impact) {
        setSelectedImpact(impact);
      }
    }
  }, [externalImpactId]);

  const handleNext = () => {
    if (!selectedImpact) return;
    const currentIndex = impacts.findIndex(i => i.id === selectedImpact.id);
    const nextIndex = (currentIndex + 1) % impacts.length;
    setSelectedImpact(impacts[nextIndex]);
  };

  const handlePrev = () => {
    if (!selectedImpact) return;
    const currentIndex = impacts.findIndex(i => i.id === selectedImpact.id);
    const prevIndex = (currentIndex - 1 + impacts.length) % impacts.length;
    setSelectedImpact(impacts[prevIndex]);
  };

  const handleOpenChange = (open: boolean) => {
    if (!open) {
      setSelectedImpact(null);
      if (onClearExternal) onClearExternal();
    }
  };

  return (
    <section id="nobel" className="py-6 bg-white relative overflow-hidden scroll-mt-20">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.02] pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <pattern id="grid-comp" width="30" height="30" patternUnits="userSpaceOnUse">
            <path d="M 30 0 L 0 0 0 30" fill="none" stroke="currentColor" strokeWidth="1"/>
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid-comp)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-6">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="inline-flex items-center gap-1.5 bg-primary/5 text-primary px-3 py-1 rounded-full font-black text-[9px] uppercase tracking-widest mb-2"
          >
            <Sparkles className="w-3 h-3" />
            VİZYON 2030
          </motion.div>
          <h2 className="text-2xl lg:text-3xl font-headline font-black text-primary leading-tight mb-2">
            Engelleri <span className="text-secondary">Küresel Ölçekte</span> Kaldırıyoruz
          </h2>
          <p className="text-muted-foreground font-medium text-xs leading-relaxed">
            Serkan Bayram liderliğinde yerelden küresele uzanan stratejik adımlar.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {impacts.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              onClick={() => setSelectedImpact(item)}
              className="group bg-white rounded-3xl p-5 shadow-sm border border-secondary/20 hover:border-secondary/40 hover:shadow-lg transition-all cursor-pointer flex flex-col items-start"
            >
              <div className={`w-10 h-10 ${item.bg} rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                <div className="text-primary group-hover:text-secondary transition-colors">
                  {item.icon}
                </div>
              </div>
              <span className={`text-[8px] font-black uppercase tracking-widest px-1.5 py-0.5 rounded bg-gradient-to-r ${item.color} text-white mb-2`}>
                {item.year}
              </span>
              <h3 className="text-sm font-black text-primary mb-2 leading-tight group-hover:text-secondary">
                {item.title}
              </h3>
              <p className="text-[10px] text-muted-foreground font-medium leading-relaxed mb-4 line-clamp-2">
                {item.description}
              </p>
              <Button variant="ghost" className="p-0 h-auto font-black text-[9px] uppercase tracking-widest text-primary group/btn">
                Detaylar
                <ChevronRight className="w-2.5 h-2.5 ml-0.5 group-hover/btn:translate-x-0.5 transition-transform" />
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Compact Proposal Bar */}
        <motion.div 
          id="kuresel"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-6 bg-gradient-to-r from-primary to-blue-900 rounded-[2rem] p-5 lg:p-6 text-white relative overflow-hidden scroll-mt-20"
        >
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-4 text-center lg:text-left">
              <div className="p-3 bg-white/10 rounded-2xl">
                <Globe2 className="w-5 h-5 text-secondary" />
              </div>
              <div>
                <h3 className="text-lg font-black leading-tight mb-1">Küresel Siyaset Vizyonu</h3>
                <p className="text-[10px] text-white/70 font-medium italic">"Her ülkede bir Engelliler Bakanlığı kurulana kadar mücadelemiz sürecek."</p>
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {['Engelliler Bakanlığı', 'BM Temsilciliği', 'Erişilebilir Şehirler'].map((t) => (
                <span key={t} className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-xl text-[9px] font-black uppercase tracking-widest">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* COMPACT Detail Modal with Navigation */}
      <Dialog open={!!selectedImpact} onOpenChange={handleOpenChange}>
        <DialogContent className="max-w-2xl p-0 overflow-hidden rounded-[2.5rem] border-none bg-white shadow-2xl">
          {selectedImpact && (
            <div className="flex flex-col relative">
              
              {/* Tight Header */}
              <div className={`relative h-32 overflow-hidden bg-gradient-to-br ${selectedImpact.color}`}>
                <div className="absolute inset-0 opacity-10">
                  <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <rect width="100%" height="100%" fill="url(#grid-comp)" />
                  </svg>
                </div>
                
                {/* Custom close button removed to fix overlap. Global DialogClose is used. */}

                {/* Navigation Arrows */}
                <div className="absolute inset-0 flex items-center justify-between px-4 z-20 pointer-events-none">
                  <button 
                    onClick={handlePrev}
                    className="p-2 bg-white/10 hover:bg-white/30 backdrop-blur-md rounded-full transition-all text-white border border-white/10 group active:scale-90 pointer-events-auto"
                  >
                    <ChevronLeft className="w-6 h-6 group-hover:-translate-x-0.5 transition-transform" />
                  </button>
                  <button 
                    onClick={handleNext}
                    className="p-2 bg-white/10 hover:bg-white/30 backdrop-blur-md rounded-full transition-all text-white border border-white/10 group active:scale-90 pointer-events-auto"
                  >
                    <ChevronRight className="w-6 h-6 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </div>

                <div className="absolute inset-0 flex flex-col justify-center px-16 text-white text-center">
                  <span className="text-[8px] font-black uppercase tracking-[0.2em] opacity-80 mb-1">{selectedImpact.year} VİZYONU</span>
                  <DialogTitle className="text-xl lg:text-2xl font-headline font-black leading-tight drop-shadow-lg">
                    {selectedImpact.title}
                  </DialogTitle>
                </div>
              </div>

              {/* Floating Icon with Orange Border - MOVED TO LEFT */}
              <div className="absolute top-32 left-10 -translate-y-1/2 z-20">
                <div className="w-20 h-20 bg-white rounded-3xl shadow-xl flex items-center justify-center text-primary border-4 border-secondary ring-8 ring-white">
                  {selectedImpact.icon}
                </div>
              </div>

              {/* Compact Body - ALIGNED LEFT */}
              <div className="p-8 pt-16 bg-white">
                <div className="max-w-2xl mx-auto space-y-6">
                  <DialogDescription className="text-sm font-medium text-primary/80 leading-relaxed italic text-left pl-4 border-l-3 border-secondary/30">
                    "{selectedImpact.longDescription}"
                  </DialogDescription>
                  
                  <div className="flex flex-wrap gap-2">
                    {selectedImpact.details.map((tag, i) => (
                      <span key={i} className="px-3 py-1 bg-muted rounded-lg text-[9px] font-black text-primary/60 uppercase tracking-widest">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="bg-primary/5 rounded-3xl p-6 border border-primary/5 text-left">
                    <h4 className="text-[10px] font-black text-primary uppercase tracking-[0.15em] flex items-center gap-2 mb-4">
                      <Zap className="w-4 h-4 text-secondary fill-secondary" />
                      STRATEJİK KAZANIMLAR
                    </h4>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {selectedImpact.achievements.map((ach, i) => (
                        <div key={i} className="flex items-start gap-3 p-3 bg-white rounded-2xl shadow-sm border border-primary/5">
                          <div className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 bg-gradient-to-br ${selectedImpact.color}`} />
                          <span className="text-[10px] font-bold text-primary/70 leading-tight">{ach}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}

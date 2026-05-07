
"use client"

import { useState } from 'react';
import { Biography } from './Biography';
import { GlobalAdvocacy } from './GlobalAdvocacy';
import { NobelVision } from './NobelVision';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { User, Globe, Trophy } from 'lucide-react';

export function VisionMissionTabs() {
  return (
    <section id="vizyon" className="py-6 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <Tabs defaultValue="biography" className="w-full">
          <div className="flex justify-center mb-2">
            <TabsList className="bg-muted/50 p-1 rounded-2xl h-auto flex flex-wrap justify-center gap-2">
              <TabsTrigger 
                value="biography" 
                className="rounded-xl px-4 py-2 data-[state=active]:bg-primary data-[state=active]:text-white flex items-center gap-2 font-black text-xs transition-all"
              >
                <User className="w-4 h-4" />
                BİYOGRAFİ
              </TabsTrigger>
              <TabsTrigger 
                value="global" 
                className="rounded-xl px-6 py-3 data-[state=active]:bg-primary data-[state=active]:text-white flex items-center gap-2 font-black text-xs transition-all"
              >
                <Globe className="w-4 h-4" />
                KÜRESEL ETKİ
              </TabsTrigger>
              <TabsTrigger 
                value="nobel" 
                className="rounded-xl px-6 py-3 data-[state=active]:bg-primary data-[state=active]:text-white flex items-center gap-2 font-black text-xs transition-all"
              >
                <Trophy className="w-4 h-4" />
                NOBEL VİZYONU
              </TabsTrigger>
            </TabsList>
          </div>

          <div className="bg-muted/10 rounded-[3rem] overflow-hidden border border-muted/20">
            <TabsContent value="biography" className="m-0 focus-visible:ring-0">
              <Biography />
            </TabsContent>
            <TabsContent value="global" className="m-0 focus-visible:ring-0">
              <GlobalAdvocacy />
            </TabsContent>
            <TabsContent value="nobel" className="m-0 focus-visible:ring-0">
              <NobelVision />
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </section>
  );
}

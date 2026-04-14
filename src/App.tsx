/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Section from "./components/Section";
import { personalData } from "./data";
import { motion } from "motion/react";

export default function App() {
  return (
    <div className="min-h-screen selection:bg-brand-accent selection:text-white">
      <Navigation />
      
      <main className="max-w-7xl mx-auto px-6">
        <Hero />
        
        <div className="section-divider" />
        
        <Section id="tech" data={personalData.sections.tech} />
        
        <div className="section-divider" />
        
        <Section id="philosophy" data={personalData.sections.philosophy} />
        
        <div className="section-divider" />
        
        <Section id="cross" data={personalData.sections.cross} />

        <div className="section-divider" />
        
        <Section id="personal" data={personalData.sections.personal} />
        
        <footer className="py-20 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <p className="font-serif font-bold text-2xl mb-2">Xihui (Stream) Wu</p>
            <p className="text-sm text-brand-secondary opacity-60 font-mono uppercase tracking-widest">
              AI Developer & Independent Philosophy Scholar
            </p>
          </div>
          
          <div className="flex gap-8 text-sm font-medium text-brand-secondary">
            <a href="https://www.linkedin.com/in/xihui-wu-b845ab82" target="_blank" rel="noopener noreferrer" className="hover:text-brand-accent transition-colors">LinkedIn</a>
            <a href="mailto:streamwu.pro@gmail.com" className="hover:text-brand-accent transition-colors">Email</a>
          </div>
          
          <p className="text-[10px] font-mono uppercase tracking-widest text-brand-secondary opacity-40">
            © {new Date().getFullYear()} — Built with Intent
          </p>
        </footer>
      </main>

      {/* Background decorative elements */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.03, 0.05, 0.03],
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute -top-[20%] -right-[10%] w-[60%] aspect-square rounded-full bg-brand-accent blur-[120px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.02, 0.04, 0.02],
          }}
          transition={{ duration: 15, repeat: Infinity, delay: 2 }}
          className="absolute -bottom-[10%] -left-[5%] w-[50%] aspect-square rounded-full bg-brand-primary blur-[100px]"
        />
      </div>
    </div>
  );
}


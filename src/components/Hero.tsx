import { motion } from "motion/react";
import { personalData } from "../data";
import { ArrowDown, User } from "lucide-react";
import { useState } from "react";

export default function Hero() {
  const [imageError, setImageError] = useState(false);

  return (
    <section className="min-h-[80vh] flex flex-col justify-center pt-20 pb-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-7 order-2 lg:order-1"
        >
          <div className="mb-8">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "60px" }}
              transition={{ duration: 1, delay: 0.5 }}
              className="h-1 bg-brand-accent mb-6"
            />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
              {personalData.name}
            </h1>
            <p className="text-xl md:text-2xl font-serif italic text-brand-secondary opacity-80">
              {personalData.title}
            </p>
          </div>

          <div className="max-w-3xl">
            <div className="text-base text-brand-secondary leading-relaxed mb-10 whitespace-pre-wrap">
              {personalData.about.split('\n\n').map((paragraph, index) => (
                <p key={index} className={index === 0 ? "font-bold mb-4" : "mb-4"}>
                  {paragraph}
                </p>
              ))}
            </div>
            
            <div className="flex flex-wrap gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('tech')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-brand-primary text-white rounded-full font-medium shadow-lg shadow-black/10 transition-shadow hover:shadow-black/20"
              >
                Explore Work
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('philosophy')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 border border-black/10 rounded-full font-medium hover:bg-black/5 transition-colors"
              >
                Academic Philosophy
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('cross')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 border border-black/10 rounded-full font-medium hover:bg-black/5 transition-colors"
              >
                NGO - Ideality Refracted
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('personal')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 border border-black/10 rounded-full font-medium hover:bg-black/5 transition-colors"
              >
                Life & Art
              </motion.button>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-5 order-1 lg:order-2"
        >
          <div className="relative aspect-[3/4] max-w-[280px] mx-auto lg:ml-auto">
            <div className="absolute inset-0 border border-brand-accent/30 rounded-2xl translate-x-3 translate-y-3 -z-10" />
            <div className="w-full h-full rounded-2xl overflow-hidden shadow-xl border border-black/5 bg-brand-accent/5 flex items-center justify-center">
              {!imageError ? (
                <img
                  src={personalData.profileImage}
                  alt={personalData.name}
                  referrerPolicy="no-referrer"
                  onError={() => setImageError(true)}
                  className="w-full h-full object-cover transition-all duration-700"
                />
              ) : (
                <div className="flex flex-col items-center gap-4 text-brand-accent/40">
                  <User size={64} strokeWidth={1} />
                  <span className="text-[10px] uppercase tracking-widest font-mono">Profile Image</span>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="mt-20 flex flex-col items-center gap-2 text-brand-secondary opacity-40"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.3em]">Scroll to discover</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ArrowDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
}

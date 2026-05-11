"use client"

import { motion } from "framer-motion"
import { Shield, Skull, Ghost, Eye } from "lucide-react"

export function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video Placeholder */}
      <div className="absolute inset-0 z-0 bg-black">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050505]/50 to-[#050505] z-10" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1509248961158-e54f6934749c?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-40 grayscale" />
      </div>

      <div className="relative z-20 text-center px-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <span className="cinematic-text text-primary font-bold text-sm mb-4 block animate-glow">
            Official Investigation Database
          </span>
          <h1 className="font-horror text-6xl md:text-9xl text-white mb-6 drop-shadow-2xl">
            Paranormal Vault
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-light">
            Documenting the unexplained through empirical evidence, witness testimony, 
            and cinematic storytelling. Explore the shadows.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="flex flex-wrap justify-center gap-6"
        >
          <button className="px-8 py-4 bg-primary text-white font-bold uppercase tracking-widest hover:bg-red-700 transition-all transform hover:scale-105 red-glow border border-primary/50">
            Explore Investigations
          </button>
          <button className="px-8 py-4 bg-transparent text-white font-bold uppercase tracking-widest border border-white/20 hover:border-white transition-all transform hover:scale-105">
            Submit Evidence
          </button>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-12 z-20 text-muted-foreground/50">
        <div className="flex flex-col items-center gap-2">
          <Eye size={20} />
          <span className="text-[10px] uppercase tracking-tighter">Observing</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Shield size={20} />
          <span className="text-[10px] uppercase tracking-tighter">Protecting</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Skull size={20} />
          <span className="text-[10px] uppercase tracking-tighter">Remembering</span>
        </div>
      </div>
    </section>
  )
}

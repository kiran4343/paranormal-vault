"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Calendar, MapPin, ArrowRight } from "lucide-react"

const investigations = [
  {
    title: "The Whispering Asylum",
    slug: "whispering-asylum",
    summary: "Residual hauntings recorded in the East Wing of the abandoned Blackwood Sanitarium.",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80",
    date: "Oct 12, 2025",
    location: "Victoria, AU"
  },
  {
    title: "Shadows of Greyfriars",
    slug: "greyfriars-shadows",
    summary: "Intelligent manifestation caught on infrared during a 48-hour lockdown.",
    image: "https://images.unsplash.com/photo-1505635330303-3195307bc6e2?auto=format&fit=crop&q=80",
    date: "Nov 02, 2025",
    location: "Edinburgh, UK"
  },
  {
    title: "The Red Room Entity",
    slug: "red-room-entity",
    summary: "Class IV poltergeist activity documented in a 19th-century residential property.",
    image: "https://images.unsplash.com/photo-1534732863216-056ad9c633ef?auto=format&fit=crop&q=80",
    date: "Dec 15, 2025",
    location: "New Orleans, USA"
  }
]

export function LatestInvestigations() {
  return (
    <section className="py-24 px-6 bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="cinematic-text text-primary font-bold text-xs tracking-[0.3em] mb-4 block">
              Recent Evidence
            </span>
            <h2 className="font-horror text-5xl md:text-6xl text-white">
              Latest Investigations
            </h2>
          </div>
          <Link 
            href="/investigations" 
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors font-bold uppercase tracking-widest text-xs"
          >
            View Full Archive <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {investigations.map((inv, index) => (
            <motion.div
              key={inv.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group relative bg-[#0a0a0a] border border-white/5 overflow-hidden hover:border-primary/30 transition-all"
            >
              <div className="relative h-64 overflow-hidden">
                <Image 
                  src={inv.image} 
                  alt={inv.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0 opacity-60 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
              </div>

              <div className="p-8">
                <div className="flex items-center gap-4 text-[10px] text-muted-foreground mb-4 uppercase tracking-widest">
                  <span className="flex items-center gap-1"><Calendar size={12} /> {inv.date}</span>
                  <span className="flex items-center gap-1"><MapPin size={12} /> {inv.location}</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-primary transition-colors">
                  {inv.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6 font-light">
                  {inv.summary}
                </p>
                <Link 
                  href={`/investigations/${inv.slug}`}
                  className="inline-block text-[10px] font-bold uppercase tracking-widest text-primary hover:text-white transition-colors border-b border-primary/30 pb-1"
                >
                  Examine Case
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

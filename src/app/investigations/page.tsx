"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Search, Filter, Calendar, MapPin, Ghost } from "lucide-react"
import { Navbar } from "@/components/Navbar"

const allInvestigations = [
  {
    title: "The Whispering Asylum",
    slug: "whispering-asylum",
    category: "Residual",
    summary: "Residual hauntings recorded in the East Wing of the abandoned Blackwood Sanitarium.",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80",
    date: "2025-10-12",
    location: "Victoria, AU"
  },
  {
    title: "Shadows of Greyfriars",
    slug: "greyfriars-shadows",
    category: "Intelligent",
    summary: "Intelligent manifestation caught on infrared during a 48-hour lockdown.",
    image: "https://images.unsplash.com/photo-1505635330303-3195307bc6e2?auto=format&fit=crop&q=80",
    date: "2025-11-02",
    location: "Edinburgh, UK"
  },
  {
    title: "The Red Room Entity",
    slug: "red-room-entity",
    category: "Poltergeist",
    summary: "Class IV poltergeist activity documented in a 19th-century residential property.",
    image: "https://images.unsplash.com/photo-1534732863216-056ad9c633ef?auto=format&fit=crop&q=80",
    date: "2025-12-15",
    location: "New Orleans, USA"
  },
  {
    title: "The Silent Watcher",
    slug: "silent-watcher",
    category: "Shadow Person",
    summary: "Encounters with a tall, featureless silhouette in the Mojave Desert.",
    image: "https://images.unsplash.com/photo-1509248961158-e54f6934749c?auto=format&fit=crop&q=80",
    date: "2026-01-10",
    location: "California, USA"
  },
  {
    title: "Echoes of the Mines",
    slug: "echoes-mines",
    category: "Elemental",
    summary: "Subterranean anomalies detected in the deep shafts of Kalgoorlie.",
    image: "https://images.unsplash.com/photo-1514336762319-3c3294326982?auto=format&fit=crop&q=80",
    date: "2026-02-05",
    location: "Kalgoorlie, AU"
  }
]

export default function InvestigationsPage() {
  const [search, setSearch] = useState("")
  const [filter, setFilter] = useState("All")

  const categories = ["All", "Residual", "Intelligent", "Poltergeist", "Shadow Person", "Elemental"]

  const filtered = allInvestigations.filter(inv => {
    const matchesSearch = inv.title.toLowerCase().includes(search.toLowerCase()) || 
                          inv.summary.toLowerCase().includes(search.toLowerCase())
    const matchesFilter = filter === "All" || inv.category === filter
    return matchesSearch && matchesFilter
  })

  return (
    <div className="min-h-screen flex flex-col pt-32 pb-20 px-6">
      <Navbar />
      
      <div className="max-w-7xl mx-auto w-full">
        <header className="mb-16">
          <span className="cinematic-text text-primary font-bold text-xs tracking-[0.4em] mb-4 block">
            The Complete Archive
          </span>
          <h1 className="font-horror text-6xl md:text-8xl text-white mb-8">
            Investigations
          </h1>
          
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between bg-white/5 p-6 border border-white/10">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
              <input 
                type="text" 
                placeholder="Search case files..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-black border border-white/10 py-3 pl-12 pr-4 text-sm focus:border-primary outline-none transition-all"
              />
            </div>
            
            <div className="flex items-center gap-4 overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
              <Filter size={18} className="text-muted-foreground hidden md:block" />
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`whitespace-nowrap px-4 py-2 text-[10px] font-bold uppercase tracking-widest border transition-all ${
                    filter === cat ? "bg-primary border-primary text-white" : "border-white/10 text-muted-foreground hover:border-white/30"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filtered.map((inv, index) => (
            <motion.div
              key={inv.slug}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="group relative flex flex-col bg-black border border-white/5 hover:border-primary/50 transition-all"
            >
              <Link href={`/investigations/${inv.slug}`} className="relative h-64 overflow-hidden">
                <Image 
                  src={inv.image} 
                  alt={inv.title}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110 grayscale"
                />
                <div className="absolute top-4 left-4 bg-primary px-3 py-1 text-[9px] font-bold uppercase tracking-widest text-white">
                  {inv.category}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
              </Link>
              
              <div className="p-8">
                <div className="flex items-center gap-4 text-[9px] text-muted-foreground mb-4 uppercase tracking-[0.2em]">
                  <span className="flex items-center gap-1"><Calendar size={12} /> {inv.date}</span>
                  <span className="flex items-center gap-1"><MapPin size={12} /> {inv.location}</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-primary transition-colors">
                  {inv.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-8 font-light line-clamp-2">
                  {inv.summary}
                </p>
                <div className="mt-auto flex justify-between items-center">
                   <Link 
                    href={`/investigations/${inv.slug}`}
                    className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-white group-hover:text-primary transition-colors"
                  >
                    Examine Case <Ghost size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {filtered.length === 0 && (
          <div className="text-center py-20">
            <Ghost className="mx-auto text-muted-foreground/20 mb-6" size={64} />
            <p className="text-muted-foreground italic">No matches found in the archive.</p>
          </div>
        )}
      </div>
    </div>
  )
}

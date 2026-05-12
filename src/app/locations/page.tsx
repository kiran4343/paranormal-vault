"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { MapPin, Info, ArrowRight, Ghost } from "lucide-react"
import { Navbar } from "@/components/Navbar"

const locations = [
  {
    name: "Blackwood Sanitarium",
    slug: "blackwood-sanitarium",
    type: "Asylum",
    description: "Closed in 1964 following multiple patient disappearances. High EVP activity reported.",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80",
    haunting: "Residual"
  },
  {
    name: "Greyfriars Kirkyard",
    slug: "greyfriars-shadows",
    type: "Cemetery",
    description: "Home to the Mackenzie Poltergeist. Visitors report scratches and sudden temperature drops.",
    image: "https://images.unsplash.com/photo-1505635330303-3195307bc6e2?auto=format&fit=crop&q=80",
    haunting: "Intelligent"
  },
  {
    name: "The Screaming Woods",
    slug: "screaming-woods",
    type: "Forest",
    description: "Named for the auditory anomalies heard between 2:00 AM and 4:00 AM.",
    image: "https://images.unsplash.com/photo-1502481851512-e9e2529bbbf9?auto=format&fit=crop&q=80",
    haunting: "Auditory"
  }
]

export default function LocationsPage() {
  return (
    <div className="min-h-screen flex flex-col pt-32 pb-20 px-6">
      <Navbar />
      
      <div className="max-w-7xl mx-auto w-full">
        <header className="mb-16">
          <span className="cinematic-text text-primary font-bold text-xs tracking-[0.4em] mb-4 block">
            Hotspots & Anomalies
          </span>
          <h1 className="font-horror text-6xl md:text-8xl text-white mb-8">
            Haunted Locations
          </h1>
          <p className="text-muted-foreground max-w-2xl text-lg font-light leading-relaxed">
            Our global database of verified locations with sustained paranormal activity. 
            Proceed with caution and respect the entities that reside there.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {locations.map((loc, index) => (
            <motion.div
              key={loc.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group bg-[#0a0a0a] border border-white/5 overflow-hidden hover:border-primary/30 transition-all"
            >
              <div className="relative h-72">
                <Image 
                  src={loc.image} 
                  alt={loc.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale opacity-50 group-hover:opacity-100"
                />
                <div className="absolute top-4 right-4 bg-primary/20 backdrop-blur-md border border-primary/50 px-3 py-1 text-[9px] font-bold uppercase tracking-widest text-primary">
                  {loc.haunting}
                </div>
              </div>
              
              <div className="p-8">
                <div className="flex items-center gap-2 text-primary mb-2">
                  <MapPin size={14} />
                  <span className="text-[10px] font-bold uppercase tracking-widest">{loc.type}</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-primary transition-colors">
                  {loc.name}
                </h3>
                <p className="text-muted-foreground text-sm font-light leading-relaxed mb-8">
                  {loc.description}
                </p>
                <Link 
                  href={`/locations/${loc.slug}`}
                  className="flex items-center justify-between text-[10px] font-bold uppercase tracking-widest text-white border-t border-white/5 pt-6 group-hover:text-primary transition-colors"
                >
                  Explore Site Records <ArrowRight size={14} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

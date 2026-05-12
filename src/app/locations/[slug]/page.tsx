"use client"

import { useParams } from "next/navigation"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { MapPin, Ghost, ArrowLeft, ShieldAlert, History, Activity } from "lucide-react"
import { Navbar } from "@/components/Navbar"

const locationData: any = {
  "blackwood-sanitarium": {
    name: "Blackwood Sanitarium",
    type: "Asylum",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80",
    history: "Constructed in 1890, the asylum was known for its experimental 'Deep Sleep' therapies. Closed in 1964 following multiple patient disappearances.",
    anomalies: "Class III residual whispers, thermal cold spots, and documented shadow manifestations in the East Wing.",
    status: "Restricted Access"
  }
}

export default function LocationDetailPage() {
  const { slug } = useParams()
  const loc = locationData[slug as string]

  if (!loc) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center px-6">
        <Navbar />
        <MapPin size={64} className="text-primary mb-8 animate-pulse" />
        <h1 className="font-horror text-4xl text-white mb-4">Location Restricted</h1>
        <p className="text-muted-foreground mb-8">Detailed coordinates for this site are currently classified.</p>
        <Link href="/locations" className="text-primary font-bold uppercase tracking-widest text-xs hover:underline">
          Return to Map
        </Link>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col pt-32 pb-20">
      <Navbar />
      
      <div className="max-w-7xl mx-auto w-full px-6">
        <Link href="/locations" className="flex items-center gap-2 text-muted-foreground hover:text-white transition-colors text-xs font-bold uppercase tracking-widest mb-12">
          <ArrowLeft size={14} /> Back to Locations
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <span className="bg-primary/20 border border-primary/50 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-primary">
                Verified Hotspot
              </span>
              <span className="text-[10px] text-muted-foreground uppercase tracking-widest font-bold flex items-center gap-1">
                <ShieldAlert size={12} className="text-red-500" /> {loc.status}
              </span>
            </div>
            <h1 className="font-horror text-6xl md:text-8xl text-white mb-8">
              {loc.name}
            </h1>
            
            <div className="space-y-12">
              <div className="flex gap-6">
                <div className="p-4 bg-white/5 text-primary h-fit rounded-lg">
                  <History size={24} />
                </div>
                <div>
                  <h3 className="text-white font-bold mb-2 uppercase tracking-widest text-sm">Site History</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">{loc.history}</p>
                </div>
              </div>
              
              <div className="flex gap-6">
                <div className="p-4 bg-white/5 text-primary h-fit rounded-lg">
                  <Activity size={24} />
                </div>
                <div>
                  <h3 className="text-white font-bold mb-2 uppercase tracking-widest text-sm">Reported Anomalies</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">{loc.anomalies}</p>
                </div>
              </div>
            </div>

            <button className="mt-12 px-10 py-4 bg-primary text-white font-bold uppercase tracking-widest hover:bg-red-700 transition-all red-glow">
              Request On-Site Access
            </button>
          </div>

          <div className="relative h-[600px] border border-white/10 rounded-3xl overflow-hidden group">
            <Image 
              src={loc.image} 
              alt={loc.name}
              fill
              className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
            <div className="absolute top-10 right-10 flex flex-col gap-4">
              <div className="w-12 h-12 bg-black/80 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/10 cursor-pointer hover:bg-primary transition-all">
                <MapPin size={20} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

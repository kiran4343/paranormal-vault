"use client"

import { useParams } from "next/navigation"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Calendar, MapPin, ArrowLeft, Ghost, Shield, Eye, Clock } from "lucide-react"
import { Navbar } from "@/components/Navbar"

const investigationData: any = {
  "whispering-asylum": {
    title: "The Whispering Asylum",
    date: "Oct 12, 2025",
    location: "Victoria, AU",
    category: "Residual",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80",
    content: "The Blackwood Sanitarium was closed in 1964 following multiple patient disappearances. During our 48-hour lockdown, we recorded 12 distinct vocalizations in the East Wing. These 'whispers' appear to be residual recordings of past events rather than intelligent communication.",
    evidence: [
      "https://images.unsplash.com/photo-1514336762319-3c3294326982?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1509248961158-e54f6934749c?auto=format&fit=crop&q=80"
    ]
  },
  "greyfriars-shadows": {
    title: "Shadows of Greyfriars",
    date: "Nov 02, 2025",
    location: "Edinburgh, UK",
    category: "Intelligent",
    image: "https://images.unsplash.com/photo-1505635330303-3195307bc6e2?auto=format&fit=crop&q=80",
    content: "Greyfriars Kirkyard is home to the notorious Mackenzie Poltergeist. Our team documented sudden temperature drops (from 12°C to -4°C in seconds) and captured a bipedal shadow manifestation near the Black Mausoleum.",
    evidence: [
      "https://images.unsplash.com/photo-1534732863216-056ad9c633ef?auto=format&fit=crop&q=80"
    ]
  }
}

export default function InvestigationDetailPage() {
  const { slug } = useParams()
  const caseFile = investigationData[slug as string]

  if (!caseFile) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center px-6">
        <Navbar />
        <Ghost size={64} className="text-primary mb-8 animate-pulse" />
        <h1 className="font-horror text-4xl text-white mb-4">Case File Missing</h1>
        <p className="text-muted-foreground mb-8">This investigation record has been restricted or does not exist.</p>
        <Link href="/investigations" className="text-primary font-bold uppercase tracking-widest text-xs hover:underline">
          Return to Archive
        </Link>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col pt-32 pb-20">
      <Navbar />
      
      <div className="max-w-5xl mx-auto w-full px-6">
        <Link href="/investigations" className="flex items-center gap-2 text-muted-foreground hover:text-white transition-colors text-xs font-bold uppercase tracking-widest mb-12">
          <ArrowLeft size={14} /> Back to Case Files
        </Link>

        <header className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <span className="bg-primary px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white">
              {caseFile.category} Investigation
            </span>
            <span className="text-[10px] text-muted-foreground uppercase tracking-widest font-bold flex items-center gap-1">
              <Clock size={12} /> Status: Open
            </span>
          </div>
          <h1 className="font-horror text-5xl md:text-7xl text-white mb-8">
            {caseFile.title}
          </h1>
          
          <div className="flex flex-wrap gap-12 border-y border-white/5 py-8">
            <div className="flex items-center gap-3">
              <Calendar className="text-primary" size={20} />
              <div>
                <p className="text-[9px] text-muted-foreground uppercase tracking-widest font-bold">Investigation Date</p>
                <p className="text-sm text-white font-medium">{caseFile.date}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="text-primary" size={20} />
              <div>
                <p className="text-[9px] text-muted-foreground uppercase tracking-widest font-bold">Location</p>
                <p className="text-sm text-white font-medium">{caseFile.location}</p>
              </div>
            </div>
          </div>
        </header>

        <div className="relative h-[500px] mb-16 rounded-2xl overflow-hidden border border-white/5">
          <Image 
            src={caseFile.image} 
            alt={caseFile.title}
            fill
            className="object-cover grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          <div className="md:col-span-2 prose prose-invert max-w-none">
            <h2 className="font-horror text-3xl mb-6">Field Summary</h2>
            <p className="text-muted-foreground text-lg leading-relaxed font-light mb-12">
              {caseFile.content}
            </p>
            
            <h2 className="font-horror text-3xl mb-8">Evidence Gallery</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {caseFile.evidence.map((img: string, i: number) => (
                <div key={i} className="relative h-64 border border-white/5 rounded-xl overflow-hidden group">
                  <Image 
                    src={img} 
                    alt="Evidence"
                    fill
                    className="object-cover transition-all duration-700 grayscale group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-[10px] text-white font-bold uppercase tracking-widest">View Full Resolution</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <aside className="space-y-8">
            <div className="p-8 bg-white/5 border border-white/5 rounded-2xl">
              <h3 className="text-white font-bold uppercase tracking-widest text-xs mb-6 flex items-center gap-2">
                <Shield size={16} className="text-primary" /> Investigator Notes
              </h3>
              <ul className="space-y-4 text-xs text-muted-foreground font-light leading-relaxed">
                <li className="flex gap-3">
                  <span className="text-primary">01.</span>
                  Equipment malfunction reported in the basement. Possible interference.
                </li>
                <li className="flex gap-3">
                  <span className="text-primary">02.</span>
                  Auditory anomalies match patient names from 1952 records.
                </li>
                <li className="flex gap-3">
                  <span className="text-primary">03.</span>
                  Recommended for quarterly monitoring.
                </li>
              </ul>
            </div>

            <div className="p-8 bg-primary/5 border border-primary/20 rounded-2xl">
              <h3 className="text-white font-bold uppercase tracking-widest text-xs mb-6 flex items-center gap-2">
                <Eye size={16} className="text-primary" /> Risk Level: High
              </h3>
              <p className="text-[10px] text-muted-foreground leading-relaxed uppercase tracking-widest">
                This location contains volatile energy. Unauthorized entry is strictly prohibited for non-team members.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}

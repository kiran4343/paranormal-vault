"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Play, Mic, Clock, Share2, Headphones } from "lucide-react"
import { Navbar } from "@/components/Navbar"

const episodes = [
  {
    title: "EVP Sessions: The Blackwood Tapes",
    duration: "45:12",
    date: "Dec 05, 2025",
    summary: "In this episode, we analyze 12 distinct vocalizations captured during our 48-hour lockdown at the asylum.",
    image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&q=80"
  },
  {
    title: "Shadow People: Ancient Origins",
    duration: "58:30",
    date: "Nov 20, 2025",
    summary: "Exploring historical accounts of silhouette manifestations across different cultures and centuries.",
    image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&q=80"
  },
  {
    title: "Equipment 101: The Spirit Box",
    duration: "32:15",
    date: "Oct 15, 2025",
    summary: "A technical deep-dive into sweep frequencies and how to differentiate between radio bleed and true communication.",
    image: "https://images.unsplash.com/photo-1520529277867-dbf8c5e0b33b?auto=format&fit=crop&q=80"
  }
]

export default function PodcastsPage() {
  return (
    <div className="min-h-screen flex flex-col pt-32 pb-20 px-6">
      <Navbar />
      
      <div className="max-w-7xl mx-auto w-full">
        <header className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <span className="cinematic-text text-primary font-bold text-xs tracking-[0.4em] mb-4 block">
              Audio Evidence & Discussions
            </span>
            <h1 className="font-horror text-6xl md:text-8xl text-white mb-4">
              The Vault Podcast
            </h1>
            <p className="text-muted-foreground max-w-xl text-lg font-light leading-relaxed">
              Listen to unfiltered EVP sessions, expert interviews, and field reports from our active investigations.
            </p>
          </div>
          
          <div className="flex gap-4">
            <button className="p-4 bg-white/5 border border-white/10 hover:border-primary/50 text-white transition-all rounded-full">
              <Share2 size={20} />
            </button>
            <button className="flex items-center gap-3 px-8 py-4 bg-primary text-white font-bold uppercase tracking-widest hover:bg-red-700 transition-all red-glow">
              <Headphones size={20} /> Subscribe
            </button>
          </div>
        </header>

        <div className="space-y-6">
          {episodes.map((episode, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group flex flex-col md:flex-row gap-8 bg-[#0a0a0a] border border-white/5 p-6 hover:border-primary/20 transition-all"
            >
              <div className="relative w-full md:w-64 h-48 flex-shrink-0 overflow-hidden">
                <Image 
                  src={episode.image} 
                  alt={episode.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale"
                />
                <button className="absolute inset-0 m-auto w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity transform scale-90 group-hover:scale-100">
                  <Play size={24} fill="currentColor" />
                </button>
              </div>
              
              <div className="flex-grow">
                <div className="flex items-center gap-4 text-[10px] text-muted-foreground mb-4 uppercase tracking-[0.2em] font-bold">
                  <span className="flex items-center gap-1"><Mic size={14} className="text-primary" /> EP {episodes.length - index}</span>
                  <span className="flex items-center gap-1"><Clock size={14} /> {episode.duration}</span>
                  <span>{episode.date}</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-primary transition-colors">
                  {episode.title}
                </h3>
                <p className="text-muted-foreground text-sm font-light leading-relaxed max-w-3xl">
                  {episode.summary}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

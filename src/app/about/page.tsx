"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Shield, Eye, BookOpen, Users, ArrowRight } from "lucide-react"
import { Navbar } from "@/components/Navbar"

const team = [
  {
    name: "Dr. Alistair Vance",
    role: "Lead Investigator",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80",
    bio: "Specialist in electromagnetic anomalies and acoustic resonance."
  },
  {
    name: "Sarah Thorne",
    role: "Historical Researcher",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80",
    bio: "Intuitive mapper with 15 years experience in archival research."
  },
  {
    name: "Marcus Kane",
    role: "Technical Specialist",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80",
    bio: "Engineer responsible for our custom-built thermal and multi-spectrum arrays."
  }
]

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col pt-32 pb-20 px-6">
      <Navbar />
      
      <div className="max-w-7xl mx-auto w-full">
        {/* Mission Section */}
        <section className="mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <span className="cinematic-text text-primary font-bold text-xs tracking-[0.4em] mb-4 block">
                The Organization
              </span>
              <h1 className="font-horror text-6xl md:text-8xl text-white mb-8">
                Paranormal Vault
              </h1>
              <p className="text-muted-foreground text-xl font-light leading-relaxed mb-12">
                Founded in 2012, we are an independent research collective dedicated to the systematic documentation and analysis of supernatural phenomena. 
                Our approach combines rigorous scientific method with historical context and intuitive exploration.
              </p>
              
              <div className="grid grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="text-white font-bold uppercase tracking-widest text-xs flex items-center gap-2">
                    <Shield size={16} className="text-primary" /> Our Duty
                  </h3>
                  <p className="text-muted-foreground text-sm font-light">To protect and document evidence that the mainstream world ignores.</p>
                </div>
                <div className="space-y-4">
                  <h3 className="text-white font-bold uppercase tracking-widest text-xs flex items-center gap-2">
                    <Eye size={16} className="text-primary" /> Our Vision
                  </h3>
                  <p className="text-muted-foreground text-sm font-light">To bridge the gap between empirical science and the unexplained.</p>
                </div>
              </div>
            </div>
            
            <div className="relative h-[600px] border border-white/5 rounded-2xl overflow-hidden group">
              <Image 
                src="https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&q=80" 
                alt="Vault Headquarters"
                fill
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 opacity-60 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
              <div className="absolute bottom-10 left-10">
                <p className="font-horror text-4xl text-white mb-2">Since 2012</p>
                <p className="cinematic-text text-[10px] text-primary font-bold uppercase tracking-widest">A Decade of Shadows</p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="mb-32">
          <div className="text-center mb-20">
            <span className="cinematic-text text-primary font-bold text-xs tracking-[0.4em] mb-4 block">
              The Researchers
            </span>
            <h2 className="font-horror text-5xl md:text-6xl text-white">Meet the Team</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-[#0a0a0a] border border-white/5 p-8 rounded-2xl hover:border-primary/30 transition-all text-center"
              >
                <div className="relative w-40 h-40 mx-auto mb-8 rounded-full overflow-hidden border-2 border-primary/20 p-1">
                  <div className="relative w-full h-full rounded-full overflow-hidden">
                    <Image 
                      src={member.image} 
                      alt={member.name}
                      fill
                      className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                <p className="text-primary text-[10px] font-bold uppercase tracking-widest mb-4">{member.role}</p>
                <p className="text-muted-foreground text-sm font-light leading-relaxed">
                  {member.bio}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="p-12 md:p-20 bg-primary/5 border border-primary/20 rounded-3xl text-center">
          <h2 className="font-horror text-4xl md:text-6xl text-white mb-8">Ready to explore?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-10 text-lg font-light italic">
            "Fear is not our enemy; it is our teacher. It tells us we are standing on the edge of the unknown."
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <button className="px-10 py-4 bg-primary text-white font-bold uppercase tracking-widest hover:bg-red-700 transition-all red-glow">
              Join Our Newsletter
            </button>
            <button className="px-10 py-4 bg-transparent text-white font-bold uppercase tracking-widest border border-white/20 hover:border-white transition-all">
              Contact Us
            </button>
          </div>
        </section>
      </div>
    </div>
  )
}

"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Send, Upload, ShieldCheck, Eye, Ghost } from "lucide-react"
import { Navbar } from "@/components/Navbar"

export default function CommunityPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
  }

  return (
    <div className="min-h-screen flex flex-col pt-32 pb-20 px-6">
      <Navbar />
      
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Content Side */}
          <header>
            <span className="cinematic-text text-primary font-bold text-xs tracking-[0.4em] mb-4 block">
              The Collective Witness
            </span>
            <h1 className="font-horror text-6xl md:text-8xl text-white mb-8">
              Community Portal
            </h1>
            <p className="text-muted-foreground text-lg font-light leading-relaxed mb-12">
              Have you encountered the unexplained? Your story is a vital piece of the global paranormal puzzle. 
              Submit your testimony, photos, or audio recordings for verification by our lead investigators.
            </p>

            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="p-4 bg-primary/10 text-primary h-fit rounded-lg">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <h3 className="text-white font-bold mb-2 uppercase tracking-widest text-sm">Secure & Anonymous</h3>
                  <p className="text-muted-foreground text-sm font-light">Your identity is protected. We only publish stories with explicit consent.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="p-4 bg-primary/10 text-primary h-fit rounded-lg">
                  <Eye size={24} />
                </div>
                <div>
                  <h3 className="text-white font-bold mb-2 uppercase tracking-widest text-sm">Expert Review</h3>
                  <p className="text-muted-foreground text-sm font-light">Every submission is analyzed for environmental factors and potential hoaxes.</p>
                </div>
              </div>
            </div>

            {/* Evidence Feed Placeholder */}
            <div className="mt-20 p-8 border border-white/5 bg-[#0a0a0a] rounded-xl">
              <h2 className="text-white font-horror text-2xl mb-6">Recent Reports</h2>
              <div className="space-y-4">
                {[1, 2, 3].map((_, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 bg-white/5 rounded border border-white/5">
                    <Ghost size={16} className="text-primary" />
                    <div>
                      <p className="text-xs text-white font-medium">Anomaly detected in Perth residence</p>
                      <p className="text-[10px] text-muted-foreground uppercase tracking-wider">3 hours ago • Verified Status: Pending</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </header>

          {/* Form Side */}
          <div className="relative">
            {isSubmitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-[#0a0a0a] border border-primary/30 p-12 text-center rounded-2xl"
              >
                <div className="w-20 h-20 bg-primary/20 text-primary mx-auto mb-8 rounded-full flex items-center justify-center">
                  <Send size={32} />
                </div>
                <h2 className="text-3xl font-bold text-white mb-4">Transmission Received</h2>
                <p className="text-muted-foreground font-light mb-8">
                  Your testimony has been encrypted and sent to our research team. We will contact you if further evidence is required.
                </p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="text-primary text-[10px] font-bold uppercase tracking-[0.3em] hover:underline"
                >
                  Submit Another Account
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-[#0a0a0a] border border-white/10 p-8 md:p-12 rounded-2xl space-y-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.2em]">Full Name or Pseudonym</label>
                  <input 
                    type="text" 
                    required
                    placeholder="E.g., The Observer"
                    className="w-full bg-black border border-white/10 p-4 text-white focus:border-primary outline-none transition-all font-light"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.2em]">Contact Email (Internal Only)</label>
                  <input 
                    type="email" 
                    required
                    placeholder="email@example.com"
                    className="w-full bg-black border border-white/10 p-4 text-white focus:border-primary outline-none transition-all font-light"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.2em]">The Account</label>
                  <textarea 
                    rows={6}
                    required
                    placeholder="Describe your encounter in as much detail as possible..."
                    className="w-full bg-black border border-white/10 p-4 text-white focus:border-primary outline-none transition-all font-light resize-none"
                  />
                </div>
                
                <div className="p-8 border-2 border-dashed border-white/10 hover:border-primary/50 transition-all text-center cursor-pointer group">
                  <Upload size={24} className="mx-auto text-muted-foreground group-hover:text-primary mb-4" />
                  <p className="text-[10px] font-bold text-muted-foreground group-hover:text-white uppercase tracking-widest">
                    Attach Evidence (Images/Audio)
                  </p>
                  <p className="text-[9px] text-muted-foreground/50 mt-2">Max file size: 50MB</p>
                </div>

                <button 
                  type="submit"
                  className="w-full py-5 bg-primary text-white font-bold uppercase tracking-[0.3em] text-xs hover:bg-red-700 transition-all red-glow"
                >
                  Send Testimony
                </button>
                
                <p className="text-[9px] text-muted-foreground text-center uppercase tracking-widest leading-relaxed">
                  By clicking send, you agree to our research terms and conditions. 
                  Data is processed under the Paranormal Data Act of 2024.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

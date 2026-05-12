"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Ghost, Lock, User, ShieldAlert } from "lucide-react"
import Link from "next/link"
import { createClient } from "@/lib/supabase/client"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  
  const supabase = createClient()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)
    
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (error) {
      setError(error.message)
      setIsLoading(false)
    } else {
      window.location.href = "/admin"
    }
  }

  return (
    <div className="min-h-screen bg-[#050505] flex items-center justify-center px-6">
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] pointer-events-none" />
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-md relative z-10"
      >
        <div className="text-center mb-10">
          <Ghost className="mx-auto text-primary mb-6 animate-pulse" size={48} />
          <h1 className="font-horror text-4xl text-white mb-2">Terminal Access</h1>
          <p className="cinematic-text text-[10px] text-muted-foreground tracking-[0.3em] font-bold">
            Authorized Personnel Only
          </p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          {error && (
            <div className="p-4 bg-red-500/10 border border-red-500/50 text-red-500 text-xs text-center rounded">
              {error}
            </div>
          )}
          <div className="relative">
            <User className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
            <input 
              type="email" 
              placeholder="Operator ID (Email)"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-black border border-white/10 py-4 pl-12 pr-4 text-sm text-white focus:border-primary outline-none transition-all placeholder:text-muted-foreground/50"
            />
          </div>

          <div className="relative">
            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
            <input 
              type="password" 
              placeholder="Security Key"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-black border border-white/10 py-4 pl-12 pr-4 text-sm text-white focus:border-primary outline-none transition-all placeholder:text-muted-foreground/50"
            />
          </div>

          <button 
            type="submit"
            disabled={isLoading}
            className="w-full py-4 bg-primary text-white font-bold uppercase tracking-[0.2em] text-xs hover:bg-red-700 transition-all red-glow disabled:opacity-50 flex items-center justify-center gap-2"
          >
            {isLoading ? "Authenticating..." : "Establish Connection"}
          </button>
        </form>

        <div className="mt-8 flex items-center justify-center gap-2 text-[9px] text-muted-foreground uppercase tracking-widest">
          <ShieldAlert size={12} />
          <span>All activities are logged and monitored</span>
        </div>

        <div className="mt-12 text-center">
          <Link href="/" className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground hover:text-white transition-colors">
            Return to Public Access
          </Link>
        </div>
      </motion.div>
    </div>
  )
}

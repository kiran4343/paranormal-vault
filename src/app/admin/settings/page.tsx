"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { 
  Save, 
  Shield, 
  Globe, 
  Bell, 
  Database,
  Lock
} from "lucide-react"

export default function AdminSettings() {
  return (
    <div className="space-y-8 max-w-4xl">
      <header>
        <h1 className="text-3xl font-bold text-white mb-2">Vault Settings</h1>
        <p className="text-muted-foreground text-sm">Configure your organization's digital infrastructure.</p>
      </header>

      <div className="space-y-6">
        {/* General Settings */}
        <div className="p-8 bg-[#0a0a0a] border border-white/5 rounded-2xl">
          <h2 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
            <Globe size={20} className="text-primary" /> General Configuration
          </h2>
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Organization Name</label>
                <input type="text" defaultValue="Paranormal Vault" className="w-full bg-black border border-white/10 p-3 text-sm text-white focus:border-primary outline-none rounded" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Primary Contact Email</label>
                <input type="email" defaultValue="hq@paranormalvault.org" className="w-full bg-black border border-white/10 p-3 text-sm text-white focus:border-primary outline-none rounded" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Mission Statement</label>
              <textarea rows={3} className="w-full bg-black border border-white/10 p-3 text-sm text-white focus:border-primary outline-none rounded resize-none" defaultValue="Documenting the unexplained through empirical evidence and historical research." />
            </div>
          </div>
        </div>

        {/* Security Settings */}
        <div className="p-8 bg-[#0a0a0a] border border-white/5 rounded-2xl">
          <h2 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
            <Shield size={20} className="text-primary" /> Security & Privacy
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
              <div>
                <p className="text-sm font-medium text-white">Enable Multi-Factor Authentication</p>
                <p className="text-xs text-muted-foreground">Require a secondary code for all operator logins.</p>
              </div>
              <div className="w-12 h-6 bg-primary rounded-full relative"><div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full" /></div>
            </div>
            <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
              <div>
                <p className="text-sm font-medium text-white">Public Evidence Submission</p>
                <p className="text-xs text-muted-foreground">Allow non-members to submit stories and media.</p>
              </div>
              <div className="w-12 h-6 bg-primary rounded-full relative"><div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full" /></div>
            </div>
          </div>
        </div>

        {/* Database & API */}
        <div className="p-8 bg-[#0a0a0a] border border-white/5 rounded-2xl">
          <h2 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
            <Database size={20} className="text-primary" /> System & API
          </h2>
          <div className="space-y-4">
             <div className="p-4 bg-black border border-white/10 rounded font-mono text-[10px] text-muted-foreground flex justify-between items-center">
               <span>SUPABASE_PROJECT_REF: pv-alpha-09</span>
               <Lock size={12} />
             </div>
             <div className="p-4 bg-black border border-white/10 rounded font-mono text-[10px] text-muted-foreground flex justify-between items-center">
               <span>CLOUDINARY_BUCKET: hq-evidence-main</span>
               <Lock size={12} />
             </div>
          </div>
        </div>

        <div className="flex justify-end">
          <button className="flex items-center gap-2 px-8 py-4 bg-primary text-white font-bold uppercase tracking-widest text-xs hover:bg-red-700 transition-all red-glow">
            <Save size={16} /> Save Configuration
          </button>
        </div>
      </div>
    </div>
  )
}

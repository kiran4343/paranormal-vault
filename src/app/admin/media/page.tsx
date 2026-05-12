"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { 
  Plus, 
  Search, 
  Image as ImageIcon, 
  Trash2, 
  ExternalLink,
  Filter,
  Grid,
  List
} from "lucide-react"
import Image from "next/image"

const media = [
  { id: 1, name: "Asylum_EVP_Capture.jpg", size: "2.4 MB", type: "Image", url: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80" },
  { id: 2, name: "Woods_Thermal_01.png", size: "1.8 MB", type: "Image", url: "https://images.unsplash.com/photo-1502481851512-e9e2529bbbf9?auto=format&fit=crop&q=80" },
  { id: 3, name: "Cemetery_Fog_Anomalies.jpg", size: "4.1 MB", type: "Image", url: "https://images.unsplash.com/photo-1505635330303-3195307bc6e2?auto=format&fit=crop&q=80" },
  { id: 4, name: "Resident_Interview.mp3", size: "12.5 MB", type: "Audio", url: "#" },
]

export default function AdminMedia() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')

  return (
    <div className="space-y-8">
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Media Library</h1>
          <p className="text-muted-foreground text-sm">Store and organize evidence files.</p>
        </div>
        <button className="flex items-center gap-2 px-6 py-3 bg-primary text-white text-xs font-bold uppercase tracking-widest rounded hover:bg-red-700 transition-all">
          <Plus size={16} /> Upload Evidence
        </button>
      </header>

      <div className="bg-[#0a0a0a] border border-white/5 rounded-xl p-6">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-8">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
            <input 
              type="text" 
              placeholder="Search files..."
              className="w-full bg-black border border-white/10 py-3 pl-12 pr-4 text-sm text-white focus:border-primary outline-none transition-all rounded-lg"
            />
          </div>
          <div className="flex items-center gap-2">
            <button 
              onClick={() => setViewMode('grid')}
              className={cn("p-2 rounded border transition-all", viewMode === 'grid' ? "bg-primary border-primary text-white" : "border-white/10 text-muted-foreground hover:border-white/20")}
            >
              <Grid size={18} />
            </button>
            <button 
              onClick={() => setViewMode('list')}
              className={cn("p-2 rounded border transition-all", viewMode === 'list' ? "bg-primary border-primary text-white" : "border-white/10 text-muted-foreground hover:border-white/20")}
            >
              <List size={18} />
            </button>
          </div>
        </div>

        {viewMode === 'grid' ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {media.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="group relative bg-black border border-white/5 rounded-xl overflow-hidden hover:border-primary/30 transition-all"
              >
                <div className="relative h-40 bg-white/5">
                  {item.type === 'Image' ? (
                    <Image src={item.url} alt={item.name} fill className="object-cover grayscale group-hover:grayscale-0 transition-all" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-primary">
                      <ImageIcon size={48} className="opacity-20" />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                    <button className="p-2 bg-primary text-white rounded-full hover:scale-110 transition-transform"><ExternalLink size={16} /></button>
                    <button className="p-2 bg-red-600 text-white rounded-full hover:scale-110 transition-transform"><Trash2 size={16} /></button>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-xs font-medium text-white truncate mb-1">{item.name}</p>
                  <p className="text-[10px] text-muted-foreground uppercase tracking-widest">{item.size} • {item.type}</p>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-white/5 text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  <th className="px-6 py-4 font-bold">File</th>
                  <th className="px-6 py-4 font-bold">Type</th>
                  <th className="px-6 py-4 font-bold">Size</th>
                  <th className="px-6 py-4 font-bold text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {media.map((item) => (
                  <tr key={item.id} className="hover:bg-white/5 transition-colors group">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3 text-sm text-white">
                        <ImageIcon size={16} className="text-primary" />
                        {item.name}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-xs text-muted-foreground">{item.type}</td>
                    <td className="px-6 py-4 text-xs text-muted-foreground">{item.size}</td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <button className="p-2 hover:bg-white/10 rounded text-muted-foreground hover:text-white transition-colors"><ExternalLink size={16} /></button>
                        <button className="p-2 hover:bg-white/10 rounded text-muted-foreground hover:text-red-500 transition-colors"><Trash2 size={16} /></button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  )
}

import { cn } from "@/lib/utils"

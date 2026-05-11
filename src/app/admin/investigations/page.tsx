"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { 
  Plus, 
  Search, 
  MoreVertical, 
  Edit, 
  Trash2, 
  ExternalLink,
  Ghost
} from "lucide-react"

const investigations = [
  { id: 1, title: "The Whispering Asylum", status: "Published", date: "Oct 12, 2025", views: "1.2k" },
  { id: 2, title: "Shadows of Greyfriars", status: "Published", date: "Nov 02, 2025", views: "850" },
  { id: 3, title: "The Red Room Entity", status: "Draft", date: "Dec 15, 2025", views: "0" },
  { id: 4, title: "Silent Watcher", status: "Archived", date: "Jan 10, 2026", views: "3.4k" },
]

export default function AdminInvestigations() {
  const [search, setSearch] = useState("")

  return (
    <div className="space-y-8">
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Investigations</h1>
          <p className="text-muted-foreground text-sm">Manage case files and evidence records.</p>
        </div>
        <button className="flex items-center gap-2 px-6 py-3 bg-primary text-white text-xs font-bold uppercase tracking-widest rounded hover:bg-red-700 transition-all">
          <Plus size={16} /> New Investigation
        </button>
      </header>

      <div className="bg-[#0a0a0a] border border-white/5 rounded-xl overflow-hidden">
        <div className="p-6 border-b border-white/5 flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
            <input 
              type="text" 
              placeholder="Filter cases..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-black border border-white/10 py-3 pl-12 pr-4 text-sm text-white focus:border-primary outline-none transition-all rounded-lg"
            />
          </div>
          <div className="flex items-center gap-2">
            <select className="bg-black border border-white/10 text-xs text-muted-foreground py-3 px-4 rounded-lg outline-none focus:border-primary">
              <option>All Status</option>
              <option>Published</option>
              <option>Draft</option>
              <option>Archived</option>
            </select>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-white/5 text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                <th className="px-6 py-4 font-bold">Investigation</th>
                <th className="px-6 py-4 font-bold">Status</th>
                <th className="px-6 py-4 font-bold">Date Published</th>
                <th className="px-6 py-4 font-bold">Views</th>
                <th className="px-6 py-4 font-bold text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {investigations.map((inv) => (
                <tr key={inv.id} className="hover:bg-white/5 transition-colors group">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded bg-white/5 flex items-center justify-center text-primary">
                        <Ghost size={16} />
                      </div>
                      <span className="text-sm font-medium text-white">{inv.title}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded ${
                      inv.status === 'Published' ? 'bg-green-500/10 text-green-500' :
                      inv.status === 'Draft' ? 'bg-yellow-500/10 text-yellow-500' :
                      'bg-white/10 text-muted-foreground'
                    }`}>
                      {inv.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-xs text-muted-foreground">
                    {inv.date}
                  </td>
                  <td className="px-6 py-4 text-xs text-muted-foreground">
                    {inv.views}
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button className="p-2 hover:bg-white/10 rounded text-muted-foreground hover:text-white transition-colors">
                        <Edit size={16} />
                      </button>
                      <button className="p-2 hover:bg-white/10 rounded text-muted-foreground hover:text-red-500 transition-colors">
                        <Trash2 size={16} />
                      </button>
                      <button className="p-2 hover:bg-white/10 rounded text-muted-foreground hover:text-primary transition-colors">
                        <ExternalLink size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

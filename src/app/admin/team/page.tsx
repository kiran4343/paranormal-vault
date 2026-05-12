"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { 
  Plus, 
  Search, 
  Users, 
  Edit, 
  Trash2, 
  ShieldCheck
} from "lucide-react"
import Image from "next/image"

const team = [
  { id: 1, name: "Dr. Alistair Vance", role: "Lead Investigator", status: "Active", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80" },
  { id: 2, name: "Sarah Thorne", role: "Historical Researcher", status: "Active", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80" },
  { id: 3, name: "Marcus Kane", role: "Technical Specialist", status: "On Leave", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80" },
]

export default function AdminTeam() {
  const [search, setSearch] = useState("")

  return (
    <div className="space-y-8">
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Team Management</h1>
          <p className="text-muted-foreground text-sm">Control access and roles for your research team.</p>
        </div>
        <button className="flex items-center gap-2 px-6 py-3 bg-primary text-white text-xs font-bold uppercase tracking-widest rounded hover:bg-red-700 transition-all">
          <Plus size={16} /> Invite Member
        </button>
      </header>

      <div className="bg-[#0a0a0a] border border-white/5 rounded-xl overflow-hidden">
        <div className="p-6 border-b border-white/5">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
            <input 
              type="text" 
              placeholder="Search members..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-black border border-white/10 py-3 pl-12 pr-4 text-sm text-white focus:border-primary outline-none transition-all rounded-lg"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-white/5 text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                <th className="px-6 py-4 font-bold">Member</th>
                <th className="px-6 py-4 font-bold">Role</th>
                <th className="px-6 py-4 font-bold">Status</th>
                <th className="px-6 py-4 font-bold text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {team.map((member) => (
                <tr key={member.id} className="hover:bg-white/5 transition-colors group">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full overflow-hidden border border-white/10">
                        <Image src={member.image} alt={member.name} width={40} height={40} className="object-cover grayscale" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-white">{member.name}</p>
                        <p className="text-[10px] text-muted-foreground">member_id: {member.id}00x</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-xs text-muted-foreground">
                    {member.role}
                  </td>
                  <td className="px-6 py-4">
                    <span className={`text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded ${
                      member.status === 'Active' ? 'bg-green-500/10 text-green-500' : 'bg-white/10 text-muted-foreground'
                    }`}>
                      {member.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button className="p-2 hover:bg-white/10 rounded text-muted-foreground hover:text-white transition-colors">
                        <Edit size={16} />
                      </button>
                      <button className="p-2 hover:bg-white/10 rounded text-muted-foreground hover:text-red-500 transition-colors">
                        <Trash2 size={16} />
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

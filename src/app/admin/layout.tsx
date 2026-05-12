"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { 
  LayoutDashboard, 
  FileText, 
  MapPin, 
  Users, 
  Image as ImageIcon, 
  Settings, 
  LogOut,
  ChevronLeft,
  ChevronRight,
  Eye
} from "lucide-react"
import { cn } from "@/lib/utils"

const adminLinks = [
  { name: "Dashboard", href: "/admin", icon: LayoutDashboard },
  { name: "Investigations", href: "/admin/investigations", icon: FileText },
  { name: "Locations", href: "/admin/locations", icon: MapPin },
  { name: "Team", href: "/admin/team", icon: Users },
  { name: "Media Library", href: "/admin/media", icon: ImageIcon },
  { name: "Settings", href: "/admin/settings", icon: Settings },
]

import { createClient } from "@/lib/supabase/client"

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const [isCollapsed, setIsCollapsed] = useState(false)
  const supabase = createClient()

  const handleLogout = async () => {
    await supabase.auth.signOut()
    window.location.href = "/login"
  }

  return (
    <div className="min-h-screen bg-[#020202] text-white flex">
      {/* Sidebar */}
      <aside 
        className={cn(
          "h-screen sticky top-0 border-r border-white/5 bg-black transition-all duration-300 flex flex-col",
          isCollapsed ? "w-20" : "w-64"
        )}
      >
        <div className="p-6 flex items-center justify-between mb-8">
          {!isCollapsed && (
            <span className="font-horror text-2xl text-primary tracking-tighter">Vault Admin</span>
          )}
          <button 
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="p-2 hover:bg-white/5 rounded-md text-muted-foreground"
          >
            {isCollapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
          </button>
        </div>

        <nav className="flex-grow px-3 space-y-2">
          {adminLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className={cn(
                "flex items-center gap-4 px-4 py-3 rounded-md transition-all group",
                "text-muted-foreground hover:text-white hover:bg-white/5"
              )}
            >
              <link.icon size={20} className="group-hover:text-primary transition-colors" />
              {!isCollapsed && (
                <span className="text-sm font-medium">{link.name}</span>
              )}
            </Link>
          ))}
        </nav>

        <div className="p-3 border-t border-white/5">
          <Link 
            href="/" 
            className="flex items-center gap-4 px-4 py-3 text-muted-foreground hover:text-white transition-all"
          >
            <Eye size={20} />
            {!isCollapsed && <span className="text-sm">View Website</span>}
          </Link>
          <button 
            onClick={handleLogout}
            className="w-full flex items-center gap-4 px-4 py-3 text-muted-foreground hover:text-red-500 transition-all"
          >
            <LogOut size={20} />
            {!isCollapsed && <span className="text-sm">Logout</span>}
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-grow p-8 overflow-y-auto">
        {children}
      </main>
    </div>
  )
}

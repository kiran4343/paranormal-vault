"use client"

import { motion } from "framer-motion"
import { 
  Users, 
  FileText, 
  Eye, 
  TrendingUp, 
  ShieldAlert,
  Clock
} from "lucide-react"

const stats = [
  { label: "Total Visitors", value: "24,592", change: "+12%", icon: Users },
  { label: "Active Investigations", value: "18", change: "+2", icon: FileText },
  { label: "Evidence Submissions", value: "142", change: "+24", icon: ShieldAlert },
  { label: "Avg. Engagement", value: "4m 12s", change: "+5%", icon: TrendingUp },
]

const recentActivity = [
  { action: "New Story Submitted", user: "Witness_99", time: "12 mins ago", type: "Story" },
  { action: "Investigation Published", user: "Lead_Investigator", time: "2 hours ago", type: "Case" },
  { action: "Media Gallery Updated", user: "Editor_Red", time: "5 hours ago", type: "Media" },
  { action: "Comment Flagged", user: "System", time: "Yesterday", type: "Moderation" },
]

export default function AdminDashboard() {
  return (
    <div className="space-y-10">
      <header>
        <h1 className="text-3xl font-bold text-white mb-2">Command Center</h1>
        <p className="text-muted-foreground text-sm">Welcome back, Operator. Here is the latest activity.</p>
      </header>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="p-6 bg-[#0a0a0a] border border-white/5 rounded-xl hover:border-primary/20 transition-all"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="p-2 bg-primary/10 rounded-lg text-primary">
                <stat.icon size={20} />
              </div>
              <span className="text-xs font-bold text-green-500 bg-green-500/10 px-2 py-1 rounded">
                {stat.change}
              </span>
            </div>
            <h3 className="text-muted-foreground text-xs uppercase tracking-widest font-bold mb-1">
              {stat.label}
            </h3>
            <p className="text-2xl font-bold text-white">{stat.value}</p>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Activity */}
        <div className="lg:col-span-2 space-y-6">
          <div className="p-6 bg-[#0a0a0a] border border-white/5 rounded-xl">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-bold text-white flex items-center gap-2">
                <Clock size={18} className="text-primary" />
                Recent Logs
              </h2>
              <button className="text-xs text-primary font-bold uppercase tracking-widest hover:underline">
                View All Logs
              </button>
            </div>
            <div className="space-y-4">
              {recentActivity.map((activity, i) => (
                <div key={i} className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-white/5">
                  <div className="flex items-center gap-4">
                    <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    <div>
                      <p className="text-sm font-medium text-white">{activity.action}</p>
                      <p className="text-xs text-muted-foreground">by {activity.user}</p>
                    </div>
                  </div>
                  <span className="text-[10px] text-muted-foreground uppercase tracking-widest">
                    {activity.time}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="space-y-6">
          <div className="p-6 bg-primary/5 border border-primary/20 rounded-xl">
            <h2 className="text-lg font-bold text-white mb-6">Quick Actions</h2>
            <div className="grid grid-cols-1 gap-3">
              <button className="w-full py-3 bg-primary text-white text-xs font-bold uppercase tracking-widest rounded hover:bg-red-700 transition-all">
                New Investigation
              </button>
              <button className="w-full py-3 bg-white/5 text-white text-xs font-bold uppercase tracking-widest rounded border border-white/10 hover:bg-white/10 transition-all">
                Upload Media
              </button>
              <button className="w-full py-3 bg-white/5 text-white text-xs font-bold uppercase tracking-widest rounded border border-white/10 hover:bg-white/10 transition-all">
                Review Stories (12)
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

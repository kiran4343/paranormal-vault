"use client"

import { motion } from "framer-motion"

export function Atmosphere() {
  return (
    <>
      <div className="fog-overlay" />
      <div className="fixed inset-0 pointer-events-none z-40 bg-[radial-gradient(circle_at_50%_50%,rgba(136,8,8,0.05),transparent_70%)]" />
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.1, 0.15, 0.1] }}
        transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
        className="fixed inset-0 pointer-events-none z-30 bg-[#000000] opacity-10 mix-blend-overlay"
      />
    </>
  )
}

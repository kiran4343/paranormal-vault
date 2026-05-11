import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { LatestInvestigations } from "@/components/LatestInvestigations";
import { Stats } from "@/components/Stats";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Hero />
      <Stats />
      <LatestInvestigations />
      
      {/* Featured Location Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden border-y border-white/5">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/60 z-10" />
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1502481851512-e9e2529bbbf9?auto=format&fit=crop&q=80')] bg-cover bg-fixed bg-center grayscale" />
        </div>
        
        <div className="relative z-20 text-center px-6">
          <span className="cinematic-text text-primary font-bold text-xs tracking-[0.4em] mb-4 block">
            Featured Site
          </span>
          <h2 className="font-horror text-4xl md:text-7xl text-white mb-6">
            The Screaming Woods
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8 font-light italic">
            "We heard the first vocalization at 03:14 AM. It didn't sound human, yet it possessed a rhythmic pattern of speech."
          </p>
          <button className="px-8 py-3 bg-white text-black font-bold uppercase tracking-widest hover:bg-primary hover:text-white transition-all">
            Read Field Report
          </button>
        </div>
      </section>

      {/* Footer Placeholder */}
      <footer className="py-20 bg-black border-t border-white/5 text-center px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-horror text-3xl text-white mb-8">Paranormal Vault</h2>
          <div className="flex flex-wrap justify-center gap-12 mb-12">
            <div className="flex flex-col gap-4">
              <span className="cinematic-text text-[10px] text-primary font-bold">Research</span>
              <a href="#" className="text-muted-foreground text-xs hover:text-white">Methods</a>
              <a href="#" className="text-muted-foreground text-xs hover:text-white">Equipment</a>
              <a href="#" className="text-muted-foreground text-xs hover:text-white">Theories</a>
            </div>
            <div className="flex flex-col gap-4">
              <span className="cinematic-text text-[10px] text-primary font-bold">Archive</span>
              <a href="#" className="text-muted-foreground text-xs hover:text-white">Cases</a>
              <a href="#" className="text-muted-foreground text-xs hover:text-white">Media</a>
              <a href="#" className="text-muted-foreground text-xs hover:text-white">Witnesses</a>
            </div>
            <div className="flex flex-col gap-4">
              <span className="cinematic-text text-[10px] text-primary font-bold">Organization</span>
              <a href="#" className="text-muted-foreground text-xs hover:text-white">Team</a>
              <a href="#" className="text-muted-foreground text-xs hover:text-white">Contact</a>
              <a href="#" className="text-muted-foreground text-xs hover:text-white">Donate</a>
            </div>
          </div>
          <p className="text-muted-foreground/30 text-[9px] uppercase tracking-[0.2em]">
            &copy; 2026 Paranormal Vault Organization. All Rights Reserved. Not for the faint of heart.
          </p>
        </div>
      </footer>
    </div>
  );
}

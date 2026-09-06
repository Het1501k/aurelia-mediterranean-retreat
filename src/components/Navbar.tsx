import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const links = [["Villas", "#villas"], ["The ritual", "#ritual"], ["Packages", "#packages"], ["FAQ", "#faq"]];
  return (
    <header className="absolute left-0 right-0 top-0 z-30">
      <div className="container-aurelia flex h-24 items-center justify-between">
        <a href="#" className="group flex items-center gap-3" aria-label="Aurelia home">
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-lg font-display italic text-terracotta">A</span>
          <span className="font-mono text-xs tracking-[.3em]">AURELIA</span>
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {links.map(([label, href]) => <a key={href} href={href} className="text-xs text-white/65 transition hover:text-white">{label}</a>)}
        </nav>
        <a href="#book" className="hidden rounded-full border border-white/15 px-5 py-3 text-xs font-medium transition hover:border-terracotta hover:bg-terracotta hover:text-obsidian md:block">Plan your stay</a>
        <button onClick={() => setOpen(!open)} className="md:hidden" aria-label={open ? "Close menu" : "Open menu"}>
          {open ? <X size={21}/> : <Menu size={21}/>}
        </button>
      </div>
      {open && <div className="container-aurelia pb-6 md:hidden"><div className="glass rounded-2xl p-5">
        {links.map(([label, href]) => <a onClick={() => setOpen(false)} key={href} href={href} className="block border-b border-white/10 py-4 text-sm last:border-0">{label}</a>)}
        <a href="#book" onClick={() => setOpen(false)} className="mt-4 block rounded-full bg-terracotta px-5 py-3 text-center text-xs font-bold text-obsidian">Plan your stay</a>
      </div></div>}
    </header>
  );
}

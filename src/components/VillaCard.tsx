import { motion } from "framer-motion";
import type { Villa } from "../types";

export default function VillaCard({ villa, index }: { villa: Villa; index: number }) {
  return <motion.article
    initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: .18 }} transition={{ duration: .7, delay: index * .04 }}
    whileHover={{ y: -6 }} className={`group overflow-hidden rounded-2xl border ${villa.featured ? "border-terracotta/60" : "border-white/[.07]"} bg-white/[.025]`}
  >
    <div className={`relative overflow-hidden ${villa.size === "tall" ? "aspect-[4/5]" : villa.size === "wide" ? "aspect-[16/9]" : "aspect-[4/3]"}`}>
      <img src={villa.image} alt={villa.name} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.045]" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />
      {villa.featured && <span className="absolute left-4 top-4 rounded-full border border-terracotta/40 bg-black/35 px-3 py-1.5 font-mono text-[9px] uppercase tracking-[.2em] text-terracotta backdrop-blur-md">Signature</span>}
    </div>
    <div className="flex items-end justify-between gap-3 p-5">
      <div><h3 className="text-lg tracking-tight">{villa.name}</h3><p className="mt-1 text-xs text-white/45">{villa.desc}</p></div>
      <span className="text-lg text-terracotta transition-transform group-hover:translate-x-1">↗</span>
    </div>
  </motion.article>;
}

import { Plus } from "lucide-react";
import { useState } from "react";

export default function FAQ({ items }: { items: readonly (readonly [string, string])[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return <div className="reveal divide-y divide-white/[.07] border-y border-white/[.07]">
    {items.map(([q, a], i) => <div key={q} className={open === i ? "border-l-2 border-terracotta" : "border-l-2 border-transparent"}>
      <button onClick={() => setOpen(open === i ? null : i)} className="flex w-full items-center justify-between gap-6 px-5 py-6 text-left" aria-expanded={open === i}>
        <span className="text-base font-medium md:text-lg">{q}</span>
        <Plus size={19} className={`shrink-0 text-terracotta transition-transform duration-300 ${open === i ? "rotate-45" : ""}`} />
      </button>
      <div className={`grid transition-all duration-300 ease-out ${open === i ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
        <div className="overflow-hidden"><p className="max-w-2xl px-5 pb-6 text-sm leading-7 text-white/55">{a}</p></div>
      </div>
    </div>)}
  </div>;
}

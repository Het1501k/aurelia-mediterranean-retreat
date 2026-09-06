import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check, Minus } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Loader from "./components/Loader";
import BackgroundVideo from "./components/BackgroundVideo";
import Navbar from "./components/Navbar";
import SectionHeading from "./components/SectionHeading";
import VillaCard from "./components/VillaCard";
import FAQ from "./components/FAQ";
import { faqs, steps, villas } from "./data";

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const app = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      document.querySelectorAll(".reveal").forEach(el => { (el as HTMLElement).style.opacity = "1"; (el as HTMLElement).style.transform = "none"; });
      return;
    }
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".reveal").forEach(el => {
        gsap.to(el, { opacity: 1, y: 0, duration: .9, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 84%", once: true } });
      });
      gsap.from(".hero-copy > *", { y: 28, opacity: 0, duration: 1.1, stagger: .09, delay: 2.65, ease: "power3.out" });
      gsap.to(".hero-orbit", { yPercent: -14, ease: "none", scrollTrigger: { trigger: "#hero", start: "top top", end: "bottom top", scrub: true }});
    }, app);
    return () => ctx.revert();
  }, []);

  return <div ref={app} className="overflow-x-hidden bg-obsidian">
    <Loader />
    <div className="noise" />
    <Navbar />

    <main>
      <section id="hero" className="relative flex min-h-[100svh] items-center justify-center overflow-hidden">
        <BackgroundVideo />
        <div className="hero-orbit absolute left-1/2 top-1/2 h-[38vw] w-[38vw] -translate-x-1/2 -translate-y-1/2 rounded-full border border-terracotta/10 blur-[1px]" />
        <div className="hero-copy container-aurelia relative z-10 text-center">
          <p className="eyebrow mb-7">AURELIA · MEDITERRANEAN RETREAT</p>
          <h1 className="mx-auto max-w-5xl text-[clamp(48px,8vw,96px)] leading-[.88] tracking-[-.055em]">
            Where the sea meets<br/><span className="display text-terracotta">timeless serenity.</span>
          </h1>
          <p className="mx-auto mt-7 max-w-xl text-sm leading-7 text-white/65 md:text-base">Luxury villas, curated experiences, and an escape that lingers long after the tide goes out.</p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <a href="#villas" className="group inline-flex items-center justify-center gap-3 rounded-full bg-terracotta px-6 py-3.5 text-xs font-bold text-obsidian transition hover:scale-[1.02]">Discover our villas <ArrowRight size={15} className="transition-transform group-hover:translate-x-1"/></a>
            <a href="#book" className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3.5 text-xs transition hover:border-white/50 hover:bg-white/5">Plan your stay</a>
          </div>
        </div>
        <div className="absolute bottom-7 left-0 right-0 z-10">
          <div className="container-aurelia flex items-center justify-between font-mono text-[9px] uppercase tracking-[.25em] text-white/35">
            <span>38° 42′ N · 20° 39′ E</span><span className="hidden sm:block">Scroll to explore ↓</span><span>Private collection</span>
          </div>
        </div>
      </section>

      <section id="villas" className="py-[clamp(80px,10vw,160px)]">
        <div className="container-aurelia">
          <SectionHeading eyebrow="01 · THE COLLECTION" title={<>Homes made for <span className="display text-terracotta">slow mornings.</span></>} body="Eight private residences shaped by limestone, linen, olive wood and the blue horizon. Every room opens toward the sea." />
          <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-12">
            {villas.map((v, i) => <div key={v.name} className={`${v.size === "wide" ? "md:col-span-8" : v.size === "tall" ? "md:col-span-4 md:row-span-2" : "md:col-span-4"}`}><VillaCard villa={v} index={i}/></div>)}
          </div>
        </div>
      </section>

      <section id="ritual" className="border-y border-white/[.06] bg-white/[.015] py-[clamp(80px,10vw,160px)]">
        <div className="container-aurelia">
          <SectionHeading eyebrow="02 · THE AURELIA RITUAL" title={<>A stay, <span className="display text-terracotta">composed.</span></>} body="Nothing is left to chance. We build the days around your pace, from the first espresso to the last light over the water." />
          <div className="mt-20 space-y-24 md:space-y-36">
            {steps.map((s, i) => <div key={s.number} className={`reveal grid items-center gap-10 md:grid-cols-12 md:gap-16 ${i % 2 ? "" : ""}`}>
              <div className={`md:col-span-5 ${i % 2 ? "md:order-2" : ""}`}>
                <div className="font-mono text-xs tracking-[.3em] text-terracotta">{s.number}</div>
                <h3 className="mt-5 text-[clamp(26px,3.5vw,44px)] leading-none tracking-[-.035em]">{s.title}</h3>
                <p className="mt-6 text-sm leading-7 text-white/55">{s.body}</p>
                <a href="#book" className="mt-7 inline-flex items-center gap-2 text-xs font-medium text-white transition hover:text-terracotta">Make it yours <ArrowRight size={14}/></a>
              </div>
              <div className={`md:col-span-7 ${i % 2 ? "md:order-1" : ""}`}>
                <div className="overflow-hidden rounded-2xl border border-white/[.07]">
                  <img src={s.image} alt="" loading="lazy" className="aspect-[16/10] w-full object-cover transition duration-700 hover:scale-[1.02]"/>
                </div>
              </div>
            </div>)}
          </div>
        </div>
      </section>

      <section className="py-[clamp(80px,10vw,150px)]">
        <div className="container-aurelia">
          <div className="reveal grid gap-10 md:grid-cols-12 md:items-end">
            <div className="md:col-span-5"><SectionHeading eyebrow="03 · WORD OF MOUTH" title={<>The kind of place <span className="display text-terracotta">you remember.</span></>} /></div>
            <div className="md:col-span-7 md:pb-2"><p className="text-sm leading-7 text-white/55 md:ml-auto md:max-w-md">“Aurelia made us forget what day it was. Every detail felt effortless, personal and completely unhurried.”</p><p className="mt-5 font-mono text-[10px] uppercase tracking-[.25em] text-white/35 md:ml-auto md:max-w-md">— Sofia & Marc · London</p></div>
          </div>
          <div className="mt-14 grid gap-4 md:grid-cols-3">
            {["“The rare luxury of having nowhere to be.”", "“A beautiful collision of sea, stone and silence.”", "“We arrived for five nights. We stayed in our heads for months.”"].map((quote, i) =>
              <motion.div key={quote} whileHover={{ y: -4 }} className="glass rounded-2xl p-7 md:p-8">
                <div className="mb-14 font-display text-3xl text-terracotta">“</div><p className="text-lg leading-7 tracking-tight">{quote}</p><div className="mt-8 font-mono text-[9px] uppercase tracking-[.25em] text-white/35">Guest journal · 0{i+1}</div>
              </motion.div>)}
          </div>
        </div>
      </section>

      <section id="packages" className="bg-white/[.015] py-[clamp(80px,10vw,160px)]">
        <div className="container-aurelia">
          <SectionHeading eyebrow="04 · STAY PACKAGES" title={<>Choose your <span className="display text-terracotta">rhythm.</span></>} body="Every package is a starting point. Tell us what you want to feel, and our concierge will shape the details." align="center" />
          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {[
              ["03 NIGHTS","Escape","€2,400",["Seaside villa","Daily breakfast","Arrival transfer","Concierge"] ,false],
              ["05 NIGHTS","Indulgence","€3,900",["Sea-view villa","Daily breakfast","Private chef dinner","Yacht half-day","Concierge"] ,true],
              ["07 NIGHTS","Signature","€5,500",["Signature villa","Daily breakfast","Private chef dinner","Full-day yacht","Spa ritual","Concierge"] ,false]
            ].map(([eyebrow,name,price,features,featured], i) => <div key={name as string} className={`reveal rounded-2xl border p-7 md:p-8 ${featured ? "border-terracotta/70 bg-terracotta/[.055] shadow-[0_0_70px_rgba(212,163,115,.08)]" : "border-white/[.07] bg-white/[.025]"}`}>
              <div className="flex items-center justify-between"><span className="eyebrow">{eyebrow as string}</span>{featured && <span className="rounded-full bg-terracotta px-3 py-1 font-mono text-[8px] uppercase tracking-[.2em] text-obsidian">Most loved</span>}</div>
              <h3 className="mt-10 text-2xl">{name as string}</h3><div className="mt-2 text-4xl tracking-[-.04em]">{price as string}</div>
              <div className="my-8 h-px bg-white/[.08]" />
              <ul className="space-y-4 text-sm text-white/60">{(features as string[]).map(f => <li key={f} className="flex gap-3"><Check size={15} className="mt-0.5 shrink-0 text-terracotta"/>{f}</li>)}{i === 0 && <li className="flex gap-3 text-white/25"><Minus size={15}/>Yacht & spa add-ons</li>}</ul>
              <a href="#book" className={`mt-9 flex w-full items-center justify-center rounded-full px-5 py-3.5 text-xs font-bold transition hover:scale-[1.02] ${featured ? "bg-terracotta text-obsidian" : "border border-white/15 hover:border-white/40"}`}>Enquire now <ArrowRight size={14} className="ml-2"/></a>
            </div>)}
          </div>
          <p className="mt-7 text-center font-mono text-[9px] uppercase tracking-[.2em] text-white/30">All stays include breakfast, concierge, and welcome amenities.</p>
        </div>
      </section>

      <section id="faq" className="py-[clamp(80px,10vw,160px)]">
        <div className="container-aurelia grid gap-14 md:grid-cols-12">
          <div className="md:col-span-4"><SectionHeading eyebrow="05 · QUESTIONS" title={<>Before you <span className="display text-terracotta">arrive.</span></>} body="A few useful details. If your question isn't here, our concierge is one message away." /></div>
          <div className="md:col-span-8"><FAQ items={faqs}/></div>
        </div>
      </section>

      <section id="book" className="relative overflow-hidden border-t border-white/[.06] py-[clamp(100px,13vw,190px)]">
        <div className="absolute bottom-0 left-1/2 h-[480px] w-[700px] -translate-x-1/2 rounded-full bg-terracotta/10 blur-[130px]" />
        <div className="container-aurelia relative z-10 text-center">
          <div className="reveal eyebrow">06 · YOUR NEXT MORNING</div>
          <h2 className="reveal mx-auto mt-6 max-w-4xl text-[clamp(46px,7vw,88px)] leading-[.88] tracking-[-.055em]">Ready to escape?<br/><span className="display text-terracotta">Or still dreaming of the coast?</span></h2>
          <p className="reveal mx-auto mt-7 max-w-md text-sm leading-7 text-white/55">Tell us your dates, your pace and the people you want beside you. We’ll take it from there.</p>
          <motion.a whileHover={{ scale: 1.02 }} href="mailto:stay@aurelia-retreat.com" className="reveal mt-9 inline-flex items-center gap-3 rounded-full bg-terracotta px-7 py-4 text-xs font-bold text-obsidian">Book your stay <ArrowRight size={15}/></motion.a>
        </div>
        <div className="mt-24 overflow-hidden border-y border-white/[.07] py-5">
          <div className="flex w-max animate-[marquee_24s_linear_infinite] hover:[animation-play-state:paused]">
            {Array.from({length: 6}).map((_,i) => <span key={i} className="mx-6 whitespace-nowrap font-mono text-[10px] uppercase tracking-[.38em] text-white/30">SUNSETS · SEA BREEZES · TIMELESS ELEGANCE ·</span>)}
          </div>
        </div>
      </section>
    </main>

    <footer className="border-t border-white/[.07] py-12">
      <div className="container-aurelia grid gap-10 md:grid-cols-12">
        <div className="md:col-span-5">
          <div className="flex items-center gap-3"><span className="flex h-10 w-10 items-center justify-center rounded-full border border-terracotta/50 font-display text-xl italic text-terracotta">A</span><span className="font-mono text-xs tracking-[.3em]">AURELIA</span></div>
          <p className="mt-6 max-w-sm text-sm leading-6 text-white/40">A Mediterranean hideaway for people who believe the best days are the ones that move slowly.</p>
        </div>
        <div className="grid grid-cols-2 gap-8 md:col-span-4">
          <div><div className="eyebrow mb-5">Explore</div><div className="space-y-3 text-xs text-white/50"><a className="block hover:text-white" href="#villas">Villas</a><a className="block hover:text-white" href="#ritual">The ritual</a><a className="block hover:text-white" href="#packages">Packages</a><a className="block hover:text-white" href="#faq">FAQ</a></div></div>
          <div><div className="eyebrow mb-5">Contact</div><div className="space-y-3 text-xs text-white/50"><a className="block hover:text-white" href="mailto:stay@aurelia-retreat.com">Email</a><a className="block hover:text-white" href="tel:+302100000000">+30 210 000 0000</a><span className="block">Ionian Coast · Greece</span></div></div>
        </div>
        <div className="md:col-span-3 md:text-right"><div className="eyebrow mb-5">Aurelia journal</div><p className="text-xs leading-6 text-white/40">Stories of salt air, local tables and the art of doing less.</p><p className="mt-8 font-mono text-[9px] uppercase tracking-[.2em] text-white/25">© 2026 Aurelia Retreat</p></div>
      </div>
    </footer>

    <style>{`@keyframes marquee { from { transform: translateX(0) } to { transform: translateX(-33.333%) } }`}</style>
  </div>
}

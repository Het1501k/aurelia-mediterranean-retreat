type Props = { eyebrow: string; title: React.ReactNode; body?: string; align?: "left" | "center" };
export default function SectionHeading({ eyebrow, title, body, align = "left" }: Props) {
  return <div className={`reveal ${align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}`}>
    <div className="eyebrow mb-5">{eyebrow}</div>
    <h2 className="text-[clamp(36px,5vw,64px)] leading-[.95] tracking-[-.04em]">{title}</h2>
    {body && <p className="mt-6 max-w-xl text-sm leading-7 text-white/60">{body}</p>}
  </div>;
}

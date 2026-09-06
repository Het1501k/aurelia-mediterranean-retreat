import { useEffect, useState } from "react";

export default function Loader() {
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => setVisible(false), 2850);
    return () => clearTimeout(t);
  }, []);
  if (!visible) return null;
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0A0A0A]">
      <div className="text-center">
        <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full border border-terracotta/30">
          <span className="display text-3xl text-terracotta">A</span>
        </div>
        <div className="eyebrow animate-pulse">AURELIA · 2026</div>
      </div>
    </div>
  );
}

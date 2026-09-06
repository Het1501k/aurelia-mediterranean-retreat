import { useEffect, useRef } from "react";
import Hls from "hls.js";

const FALLBACK = "https://storage.googleapis.com/coverr-main/mp4/Mt_Baker.mp4";

export default function BackgroundVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const hlsUrl = import.meta.env.VITE_HLS_URL as string | undefined;
    let hls: Hls | null = null;

    if (hlsUrl && Hls.isSupported()) {
      hls = new Hls({ enableWorker: true, lowLatencyMode: true });
      hls.loadSource(hlsUrl);
      hls.attachMedia(video);
      hls.on(Hls.Events.ERROR, (_, data) => {
        if (data.fatal) {
          video.src = FALLBACK;
          video.load();
          video.play().catch(() => {});
        }
      });
    } else if (hlsUrl && video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = hlsUrl;
    } else {
      video.src = FALLBACK;
    }
    video.play().catch(() => {});
    return () => hls?.destroy();
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      <video
        ref={videoRef}
        className="h-full w-full object-cover scale-[1.03]"
        autoPlay muted loop playsInline preload="metadata"
        poster="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2000&q=80"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-black/55" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/15 to-[#0A0A0A]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(212,163,115,.13),transparent_35%)]" />
    </div>
  );
}

# Aurelia — Mediterranean Retreat

Premium single-page React/Vite/Tailwind/TypeScript resort landing page.

## Run locally

```bash
npm install
npm run dev
```

Then open the local Vite URL shown in the terminal.

## Production build

```bash
npm run build
npm run preview
```

## Optional HLS background video

Copy `.env.example` to `.env` and set:

```bash
VITE_HLS_URL=https://your-stream.example/live.m3u8
```

The site uses hls.js when a compatible HLS stream is supplied. If none is supplied, it falls back to an MP4 background video automatically.

## Notes

- Images use optimized Unsplash CDN URLs and lazy loading below the fold.
- The page respects `prefers-reduced-motion`.
- Keyboard focus rings and accessible FAQ controls are included.
- Replace the demo imagery, contact email/phone, and optional video stream before publishing.

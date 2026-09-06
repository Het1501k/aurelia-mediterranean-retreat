import type { Villa, Step } from "./types";

export const villas: Villa[] = [
  { name: "The Aegean House", desc: "Sea-view villa · 4 guests", image: "https://images.unsplash.com/photo-1601918774946-25832a4be0d6?auto=format&fit=crop&w=1400&q=85", size: "wide", featured: true },
  { name: "Cypress Suite", desc: "Private terrace · 2 guests", image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85", size: "normal" },
  { name: "Neroli House", desc: "Garden retreat · 4 guests", image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=85", size: "tall" },
  { name: "Caldera Residence", desc: "Infinity pool · 6 guests", image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1400&q=85", size: "normal" },
  { name: "Olive Grove Suite", desc: "Sunset terrace · 2 guests", image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85", size: "wide" },
  { name: "Marina House", desc: "Direct sea access · 4 guests", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85", size: "normal" },
  { name: "Solara Villa", desc: "Horizon view · 6 guests", image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1400&q=85", size: "tall" },
  { name: "Luna Suite", desc: "Quiet escape · 2 guests", image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=85", size: "normal" }
];

export const steps: Step[] = [
  { number: "01", title: "CHOOSE YOUR VILLA", body: "Select from our curated collection of seaside retreats, each designed around a slower rhythm and the changing light of the coast.", image: "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1400&q=85" },
  { number: "02", title: "CURATE YOUR EXPERIENCE", body: "Add private dining beneath the stars, yacht charters across hidden coves, or restorative spa days — all arranged before you arrive.", image: "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1400&q=85" },
  { number: "03", title: "ARRIVE & UNWIND", body: "Let us handle every detail, from the airport transfer to the first chilled drink and the final turndown. You simply arrive.", image: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=1400&q=85" }
];

export const faqs = [
  ["How far in advance should I book?", "For the best villa selection, we recommend booking 8–12 weeks ahead. Last-minute stays are welcome whenever availability allows."],
  ["What is included in every stay?", "Every Aurelia stay includes breakfast, concierge support, welcome amenities, daily housekeeping and complimentary Wi-Fi."],
  ["Can you arrange airport transfers?", "Yes. Private airport and port transfers can be arranged door-to-door, with your itinerary handled by our concierge."],
  ["Is Aurelia suitable for children?", "Absolutely. Several villas are ideal for families, and we can arrange cots, high chairs, babysitting and child-friendly experiences."],
  ["Do you allow pets?", "Selected villas welcome well-behaved pets. Please tell us about your companion when you enquire so we can match you with the right home."],
  ["What is your cancellation policy?", "Flexible cancellation terms depend on the season and rate selected. Your exact terms are displayed before confirmation."],
  ["Can you arrange private dining?", "Yes. Our chefs can create anything from a relaxed poolside lunch to an intimate multi-course dinner featuring local ingredients."],
  ["Do you offer longer stays?", "Yes. Extended stays can be tailored with preferential rates and a more personalized rhythm of housekeeping, dining and experiences."]
] as const;

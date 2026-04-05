/**
 * Flint Preserve Bluebird Trail — Single-page conservation website
 * Design: "Open Sky" — Expansive landscape photography aesthetic
 * Typography: DM Serif Display (headings) + DM Sans (body)
 * Palette: cream base, deep forest text, sky blue data, warm orange accent
 */

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  Bird,
  MapPin,
  Calendar,
  Thermometer,
  Eye,
  ChevronRight,
  X,
} from "lucide-react";

// ─── CDN URLS ───────────────────────────────────────────────
const IMAGES = {
  hero: "https://d2xsxph8kpxj0f.cloudfront.net/107080624/BiHs7aozuG8zbrLuqWsyf3/hero-bluebird-LzrWonUA4n38Lki8iV92cK.webp",
  bluebird: "https://d2xsxph8kpxj0f.cloudfront.net/107080624/BiHs7aozuG8zbrLuqWsyf3/eastern-bluebird-portrait-bfmazibuLzcVUzgJJwLTUS.webp",
  swallow: "https://d2xsxph8kpxj0f.cloudfront.net/107080624/BiHs7aozuG8zbrLuqWsyf3/tree-swallow-portrait-SD2uEdUk3Ws6KYWc4yd49c.webp",
  meadow: "https://d2xsxph8kpxj0f.cloudfront.net/107080624/BiHs7aozuG8zbrLuqWsyf3/meadow-landscape-Ee5jjaF82rAF9AmxiBP9sr.webp",
};

const GALLERY = [
  {
    src: "https://d2xsxph8kpxj0f.cloudfront.net/107080624/BiHs7aozuG8zbrLuqWsyf3/photo_AQADUQtrG9NVOUZ-_555e5e1f.jpg",
    caption: "Boxes 37 (left) and 38 (right)",
    location: "Open meadow habitat",
    wide: true,
  },
  {
    src: "https://d2xsxph8kpxj0f.cloudfront.net/107080624/BiHs7aozuG8zbrLuqWsyf3/photo_AQADYAtrG9NVOUZ-_bfa17661.jpg",
    caption: "Boxes 3 (right) and 4 (left)",
    location: "Rolling meadow with wood line",
    wide: true,
  },
  {
    src: "https://d2xsxph8kpxj0f.cloudfront.net/107080624/BiHs7aozuG8zbrLuqWsyf3/photo_AQADXwtrG9NVOUZ-_d5ea2c6b.jpg",
    caption: "Boxes 18 (left) and 19 (right)",
    location: "Flint residence in background",
    wide: false,
  },
  {
    src: "https://d2xsxph8kpxj0f.cloudfront.net/107080624/BiHs7aozuG8zbrLuqWsyf3/photo_AQADWwtrG9NVOUZ-_2b5dc29e.jpg",
    caption: "Boxes 13 (right) and 13A (left)",
    location: "Orchard section",
    wide: false,
  },
  {
    src: "https://d2xsxph8kpxj0f.cloudfront.net/107080624/BiHs7aozuG8zbrLuqWsyf3/photo_AQADUwtrG9NVOUZ-_6c3f900d.jpg",
    caption: "Boxes 29 (left) and 30 (right)",
    location: "Wood\u2019s edge habitat",
    wide: false,
  },
  {
    src: "https://d2xsxph8kpxj0f.cloudfront.net/107080624/BiHs7aozuG8zbrLuqWsyf3/photo_AQADVwtrG9NVOUZ-_89f121a6.jpg",
    caption: "Box 10 at the Garden",
    location: "Fence post mount",
    wide: false,
  },
  {
    src: "https://d2xsxph8kpxj0f.cloudfront.net/107080624/BiHs7aozuG8zbrLuqWsyf3/photo_AQADXQtrG9NVOUZ-_1c43c7a5.jpg",
    caption: "Boxes 14 (right) and 15 (left)",
    location: "Near Flint residence",
    wide: false,
  },
];

// ─── ANIMATED COUNTER ───────────────────────────────────────
function AnimatedNumber({ value, suffix = "" }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 1500;
    const startTime = performance.now();
    const step = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      start = Math.round(eased * value);
      setCount(start);
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [isInView, value]);

  return (
    <span ref={ref}>
      ~{count}
      {suffix}
    </span>
  );
}

// ─── SECTION WRAPPER ────────────────────────────────────────
function FadeIn({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ─── NAV ────────────────────────────────────────────────────
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-cream/90 backdrop-blur-md shadow-sm border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-16">
        <a
          href="#top"
          className={`flex items-center gap-2 font-serif text-lg transition-colors ${
            scrolled ? "text-forest-dark" : "text-white"
          }`}
        >
          <Bird className="w-5 h-5" />
          <span>Flint Preserve</span>
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          {[
            ["About", "#about"],
            ["2025 Season", "#season-2025"],
            ["2026 Tracker", "#season-2026"],
            ["Gallery", "#gallery"],
            ["Species", "#species"],
          ].map(([label, href]) => (
            <a
              key={href}
              href={href}
              className={`transition-colors hover:text-sky ${
                scrolled ? "text-foreground/70" : "text-white/80"
              }`}
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

// ─── HERO ───────────────────────────────────────────────────
function Hero() {
  return (
    <section id="top" className="relative h-[90vh] min-h-[600px] flex items-end overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={IMAGES.hero}
          alt="Eastern Bluebird perched on a nest box at golden hour"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10" />
      </div>
      <div className="relative container pb-16 md:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <p className="text-white/70 text-sm tracking-[0.2em] uppercase mb-3 font-medium">
            Citizen Science &middot; Centreville, Delaware
          </p>
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white leading-[1.1] mb-4 max-w-3xl">
            Flint Preserve
            <br />
            Bluebird Trail
          </h1>
          <p className="text-white/80 text-lg md:text-xl max-w-xl leading-relaxed mb-6">
            A citizen science nest box monitoring project
          </p>
          <div className="flex items-center gap-2 text-white/60 text-sm">
            <span className="w-12 h-px bg-white/40" />
            46 boxes &middot; 6 seasons &middot; Hundreds of birds given a home
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── ABOUT ──────────────────────────────────────────────────
function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-cream">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <p className="text-sky text-sm tracking-[0.15em] uppercase font-medium mb-4">
              About the Trail
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-forest-dark mb-8 leading-tight">
              Six years of monitoring.<br className="hidden md:block" /> One meadow. Forty-six nest boxes.
            </h2>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-foreground/75 text-lg leading-relaxed mb-6">
              Bill Kaiser has been monitoring a 46-box bluebird trail at Flint Preserve for six years. 
              The trail supports Eastern Bluebirds and Tree Swallows — two cavity-nesting species that 
              depend on human-maintained nest boxes for successful reproduction.
            </p>
            <p className="text-foreground/75 text-lg leading-relaxed">
              Each spring, boxes are checked regularly from March through August, tracking nesting 
              attempts, clutch sizes, hatching success, and fledgling counts. The data contributes to 
              a growing understanding of local breeding populations and the effectiveness of nest box 
              programs in supporting cavity-nesting bird conservation.
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

// ─── MEADOW PHOTO BREAK ─────────────────────────────────────
function MeadowBreak() {
  return (
    <div className="relative h-[40vh] min-h-[300px] overflow-hidden">
      <img
        src={IMAGES.meadow}
        alt="Panoramic view of the bluebird trail meadow with nest boxes"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-cream via-transparent to-transparent h-24" />
      <div className="absolute inset-0 bg-gradient-to-t from-cream via-transparent to-transparent h-24 bottom-0 top-auto" />
    </div>
  );
}

// ─── 2025 SEASON ────────────────────────────────────────────
function Season2025() {
  const stats = [
    { label: "Eastern Bluebirds", value: 75, color: "bg-sky", textColor: "text-sky" },
    { label: "Tree Swallows", value: 81, color: "bg-[oklch(0.55_0.12_180)]", textColor: "text-[oklch(0.45_0.12_180)]" },
    { label: "House Wrens", value: 48, color: "bg-sunset", textColor: "text-sunset" },
    { label: "Carolina Wrens", value: 8, color: "bg-forest", textColor: "text-forest" },
  ];

  const total = 211;
  const conservationPriority = 156;

  return (
    <section id="season-2025" className="py-20 md:py-28 bg-warm-white">
      <div className="container">
        <FadeIn>
          <p className="text-sky text-sm tracking-[0.15em] uppercase font-medium mb-4 text-center">
            2025 Season Results
          </p>
          <h2 className="font-serif text-3xl md:text-5xl text-forest-dark mb-4 text-center leading-tight">
            A Strong Year for the Trail
          </h2>
          <p className="text-foreground/60 text-center max-w-xl mx-auto mb-16">
            Estimated fledgling counts across all species monitored during the 2025 nesting season.
          </p>
        </FadeIn>

        {/* Big number cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-16 max-w-5xl mx-auto">
          {stats.map((s, i) => (
            <FadeIn key={s.label} delay={i * 0.1}>
              <div className="bg-cream rounded-xl p-6 md:p-8 text-center border border-border/50 hover:shadow-lg transition-shadow duration-300">
                <div className={`font-serif text-4xl md:text-5xl lg:text-6xl ${s.textColor} mb-2`}>
                  <AnimatedNumber value={s.value} />
                </div>
                <p className="text-foreground/60 text-sm font-medium">{s.label} fledged</p>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Summary cards */}
        <div className="grid md:grid-cols-2 gap-4 md:gap-6 max-w-3xl mx-auto mb-16">
          <FadeIn delay={0.1}>
            <div className="bg-sky/10 border border-sky/20 rounded-xl p-6 md:p-8 text-center">
              <div className="font-serif text-5xl md:text-6xl text-sky mb-2">
                <AnimatedNumber value={conservationPriority} />
              </div>
              <p className="text-sky-dark font-medium text-sm">Conservation Priority Birds</p>
              <p className="text-foreground/50 text-xs mt-1">Eastern Bluebird + Tree Swallow</p>
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="bg-forest/10 border border-forest/20 rounded-xl p-6 md:p-8 text-center">
              <div className="font-serif text-5xl md:text-6xl text-forest mb-2">
                <AnimatedNumber value={total} />
              </div>
              <p className="text-forest-dark font-medium text-sm">Total Fledglings</p>
              <p className="text-foreground/50 text-xs mt-1">All species combined</p>
            </div>
          </FadeIn>
        </div>

        {/* Bar chart */}
        <FadeIn delay={0.2}>
          <div className="max-w-2xl mx-auto">
            <h3 className="font-serif text-xl text-forest-dark mb-6 text-center">
              Fledglings by Species
            </h3>
            <div className="space-y-4">
              {stats.map((s) => (
                <div key={s.label} className="flex items-center gap-4">
                  <span className="text-sm text-foreground/60 w-36 text-right shrink-0">
                    {s.label}
                  </span>
                  <div className="flex-1 bg-cream-dark rounded-full h-8 overflow-hidden">
                    <motion.div
                      className={`h-full ${s.color} rounded-full flex items-center justify-end pr-3`}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${(s.value / 81) * 100}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                    >
                      <span className="text-white text-xs font-semibold">~{s.value}</span>
                    </motion.div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex items-center gap-4 mt-4 pt-4 border-t border-border/50">
              <span className="text-sm text-foreground/60 w-36 text-right shrink-0">
                Nest Boxes
              </span>
              <div className="flex-1 flex items-center gap-2">
                <span className="font-serif text-2xl text-forest-dark">46</span>
                <span className="text-foreground/50 text-sm">monitored annually</span>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

// ─── 2026 SEASON TRACKER ────────────────────────────────────
function Season2026() {
  const timelineSteps = [
    {
      date: "Mar 27",
      label: "Visit 1",
      status: "complete" as const,
      detail: "40 of 46 boxes checked. No nesting activity yet.",
      weather: "47\u00b0F, cloudy",
    },
    {
      date: "Mid-Apr",
      label: "Visit 2",
      status: "upcoming" as const,
      detail: "Expected start of nesting season.",
      weather: null,
    },
    {
      date: "May\u2013Jul",
      label: "Peak Season",
      status: "future" as const,
      detail: "Weekly monitoring of active nests.",
      weather: null,
    },
    {
      date: "August",
      label: "Season Close",
      status: "future" as const,
      detail: "Final checks and nest box cleanout.",
      weather: null,
    },
  ];

  return (
    <section id="season-2026" className="py-20 md:py-28 bg-cream">
      <div className="container">
        <FadeIn>
          <p className="text-sunset text-sm tracking-[0.15em] uppercase font-medium mb-4 text-center">
            2026 Season
          </p>
          <h2 className="font-serif text-3xl md:text-5xl text-forest-dark mb-4 text-center leading-tight">
            Season Underway
          </h2>
          <p className="text-foreground/60 text-center max-w-xl mx-auto mb-16">
            The 2026 monitoring season has begun. Follow along as nesting activity develops.
          </p>
        </FadeIn>

        {/* Status badge */}
        <FadeIn delay={0.1}>
          <div className="flex justify-center mb-12">
            <div className="inline-flex items-center gap-3 bg-forest/10 border border-forest/20 rounded-full px-6 py-3">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-forest opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-forest" />
              </span>
              <span className="text-forest-dark font-medium text-sm">Active — Early Season</span>
            </div>
          </div>
        </FadeIn>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-border" />

            {timelineSteps.map((step, i) => (
              <FadeIn key={step.label} delay={i * 0.1}>
                <div className="relative flex gap-6 md:gap-8 mb-8 last:mb-0">
                  {/* Dot */}
                  <div
                    className={`relative z-10 w-12 md:w-16 h-12 md:h-16 rounded-full flex items-center justify-center shrink-0 ${
                      step.status === "complete"
                        ? "bg-forest text-white"
                        : step.status === "upcoming"
                        ? "bg-sunset text-white"
                        : "bg-cream-dark text-foreground/30 border-2 border-border"
                    }`}
                  >
                    {step.status === "complete" ? (
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    ) : step.status === "upcoming" ? (
                      <ChevronRight className="w-5 h-5" />
                    ) : (
                      <span className="w-2 h-2 rounded-full bg-current" />
                    )}
                  </div>

                  {/* Content */}
                  <div
                    className={`flex-1 pb-8 ${
                      step.status === "future" ? "opacity-50" : ""
                    }`}
                  >
                    <div className="flex items-baseline gap-3 mb-1">
                      <span className="font-serif text-xl md:text-2xl text-forest-dark">
                        {step.label}
                      </span>
                      <span className="text-foreground/40 text-sm">{step.date}, 2026</span>
                    </div>
                    <p className="text-foreground/70 text-sm md:text-base mb-2">
                      {step.detail}
                    </p>
                    {step.weather && (
                      <div className="inline-flex items-center gap-2 text-xs text-foreground/50 bg-cream-dark rounded-full px-3 py-1">
                        <Thermometer className="w-3 h-3" />
                        {step.weather}
                      </div>
                    )}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* Maintenance notes */}
        <FadeIn delay={0.3}>
          <div className="max-w-3xl mx-auto mt-12 bg-sunset/5 border border-sunset/15 rounded-xl p-6">
            <h3 className="font-serif text-lg text-forest-dark mb-3 flex items-center gap-2">
              <Eye className="w-4 h-4 text-sunset" />
              Maintenance Notes
            </h3>
            <ul className="space-y-2 text-sm text-foreground/65">
              <li className="flex items-start gap-2">
                <span className="text-sunset mt-0.5">&bull;</span>
                <span><strong>Box 22:</strong> Needs replacement (knocked over)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-sunset mt-0.5">&bull;</span>
                <span><strong>Boxes 27, 40, 44:</strong> Entrance hole enlargement by woodpeckers — reducers needed</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-sunset mt-0.5">&bull;</span>
                <span><strong>Box 4:</strong> Slight enlargement, monitoring</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-sunset mt-0.5">&bull;</span>
                <span><strong>Box 45:</strong> Raccoon predation risk, wooden post</span>
              </li>
            </ul>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

// ─── PHOTO GALLERY ──────────────────────────────────────────
function Gallery() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <section id="gallery" className="py-20 md:py-28 bg-warm-white">
      <div className="container">
        <FadeIn>
          <p className="text-sky text-sm tracking-[0.15em] uppercase font-medium mb-4 text-center">
            From the Field
          </p>
          <h2 className="font-serif text-3xl md:text-5xl text-forest-dark mb-4 text-center leading-tight">
            Trail Gallery
          </h2>
          <p className="text-foreground/60 text-center max-w-xl mx-auto mb-16">
            Photos from the March 27, 2026 season-opening visit to Flint Preserve.
          </p>
        </FadeIn>

        {/* Photo grid — first row full-width, then 2-col pairs, last one centered */}
        <div className="max-w-6xl mx-auto">
          {/* First wide photo */}
          <FadeIn className="mb-4">
            <button
              onClick={() => setLightbox(0)}
              className="group relative w-full overflow-hidden rounded-lg bg-cream-dark aspect-[21/9] block"
            >
              <img
                src={GALLERY[0].src}
                alt={GALLERY[0].caption}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <p className="text-white text-sm font-medium">{GALLERY[0].caption}</p>
                <p className="text-white/70 text-xs flex items-center gap-1 mt-0.5">
                  <MapPin className="w-3 h-3" />
                  {GALLERY[0].location}
                </p>
              </div>
            </button>
          </FadeIn>

          {/* 3-column grid for remaining 6 photos */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {GALLERY.slice(1).map((photo, i) => (
              <FadeIn key={photo.src} delay={(i + 1) * 0.08}>
                <button
                  onClick={() => setLightbox(i + 1)}
                  className="group relative w-full overflow-hidden rounded-lg bg-cream-dark aspect-[4/3] block"
                >
                  <img
                    src={photo.src}
                    alt={photo.caption}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <p className="text-white text-sm font-medium">{photo.caption}</p>
                    <p className="text-white/70 text-xs flex items-center gap-1 mt-0.5">
                      <MapPin className="w-3 h-3" />
                      {photo.location}
                    </p>
                  </div>
                </button>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-4 right-4 text-white/70 hover:text-white z-10"
            onClick={() => setLightbox(null)}
          >
            <X className="w-8 h-8" />
          </button>
          <div className="max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={GALLERY[lightbox].src}
              alt={GALLERY[lightbox].caption}
              className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
            />
            <div className="text-center mt-4">
              <p className="text-white text-base font-medium">
                {GALLERY[lightbox].caption}
              </p>
              <p className="text-white/60 text-sm mt-1">
                {GALLERY[lightbox].location}
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </section>
  );
}

// ─── SPECIES ────────────────────────────────────────────────
function Species() {
  const species = [
    {
      name: "Eastern Bluebird",
      latin: "Sialia sialis",
      image: IMAGES.bluebird,
      description:
        "A small thrush with brilliant blue upperparts and a warm russet breast. Eastern Bluebirds experienced severe population declines in the mid-20th century due to habitat loss and competition from House Sparrows and European Starlings. Nest box programs like this trail have been instrumental in their recovery — providing the tree cavities they can no longer find in a landscape of cleared forests and removed dead wood.",
      tag: "Conservation Priority",
    },
    {
      name: "Tree Swallow",
      latin: "Tachycineta bicolor",
      image: IMAGES.swallow,
      description:
        "An agile aerial insectivore with iridescent blue-green upperparts and clean white underparts. Tree Swallows are secondary cavity nesters that readily adopt nest boxes, making them valuable indicators of local insect populations and environmental health. Their presence on the trail reflects a healthy meadow ecosystem with abundant flying insects.",
      tag: "Conservation Priority",
    },
  ];

  return (
    <section id="species" className="py-20 md:py-28 bg-cream">
      <div className="container">
        <FadeIn>
          <p className="text-sky text-sm tracking-[0.15em] uppercase font-medium mb-4 text-center">
            Why Nest Boxes Matter
          </p>
          <h2 className="font-serif text-3xl md:text-5xl text-forest-dark mb-16 text-center leading-tight">
            About the Species
          </h2>
        </FadeIn>

        <div className="max-w-5xl mx-auto space-y-12">
          {species.map((s, i) => (
            <FadeIn key={s.name} delay={i * 0.15}>
              <div
                className={`flex flex-col ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } gap-8 items-center`}
              >
                <div className="w-full md:w-2/5 shrink-0">
                  <div className="relative overflow-hidden rounded-xl aspect-[4/3]">
                    <img
                      src={s.image}
                      alt={s.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="inline-flex items-center gap-1.5 bg-sky/10 text-sky-dark text-xs font-medium px-3 py-1 rounded-full mb-3">
                    <Bird className="w-3 h-3" />
                    {s.tag}
                  </div>
                  <h3 className="font-serif text-2xl md:text-3xl text-forest-dark mb-1">
                    {s.name}
                  </h3>
                  <p className="text-foreground/40 italic text-sm mb-4">{s.latin}</p>
                  <p className="text-foreground/70 leading-relaxed">{s.description}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── FOOTER ─────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="bg-forest-dark text-white/70 py-12">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <Bird className="w-5 h-5 text-sky" />
            <span className="font-serif text-lg text-white">Flint Preserve Bluebird Trail</span>
          </div>
          <div className="text-sm text-center md:text-right">
            <p>Monitored by Bill Kaiser &middot; Flint Preserve, Centreville, DE</p>
            <p className="text-white/40 mt-1">Since 2020</p>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-white/10 text-center text-xs text-white/30">
          <p>A citizen science project supporting cavity-nesting bird conservation.</p>
        </div>
      </div>
    </footer>
  );
}

// ─── PAGE ───────────────────────────────────────────────────
export default function Home() {
  return (
    <div className="min-h-screen">
      <Nav />
      <Hero />
      <About />
      <MeadowBreak />
      <Season2025 />
      <Season2026 />
      <Gallery />
      <Species />
      <Footer />
    </div>
  );
}

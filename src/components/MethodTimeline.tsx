import React, { useEffect, useRef, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { BrandLogo } from "@/components/BrandLogo";
import {
  Lightbulb,
  Target,
  LineChart,
  Users,
  Video,
  BookOpen,
  GraduationCap,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

/* ─── Content Data ──────────────────────────────────────────────── */
interface TimelineItem {
  title: string;
  description: string;
  icon: LucideIcon;
  gradient: string;      // card left-accent gradient
  iconColor: string;     // icon container classes
  visual: React.ReactNode;
}

const timelineData: TimelineItem[] = [
  {
    title: "Conceptual Clarity",
    description:
      "We break down every complex topic into intuitive frameworks so that concepts finally click. No rote memorization — only deep understanding that lasts.",
    icon: Lightbulb,
    gradient: "from-blue-500 to-indigo-500",
    iconColor: "bg-blue-50 text-blue-600 border-blue-200/50",
    visual: (
      <div className="w-full h-full bg-gradient-to-br from-blue-600/10 via-indigo-600/5 to-transparent flex items-center justify-center p-8">
        <div className="space-y-5 w-full max-w-[340px]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center shadow-lg">
              <Lightbulb className="w-5 h-5 text-white" />
            </div>
            <span className="text-lg font-bold text-foreground">Concept Maps</span>
          </div>
          {["Number Properties", "Algebra & Equations", "Geometry Fundamentals", "Data Interpretation"].map((topic, i) => (
            <motion.div
              key={topic}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.12, duration: 0.4 }}
              className="flex items-center gap-3 bg-white/80 backdrop-blur-sm border border-blue-100 rounded-xl px-4 py-3 shadow-sm"
            >
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500" />
              <span className="text-base font-medium text-foreground">{topic}</span>
            </motion.div>
          ))}
        </div>
      </div>
    ),
  },
  {
    title: "Strategic Problem-Solving",
    description:
      "Learn pattern recognition and smart shortcuts tailored for every question type. Approach each problem with confidence and a clear plan of attack.",
    icon: Target,
    gradient: "from-indigo-600 to-violet-600",
    iconColor: "bg-indigo-50 text-indigo-600 border-indigo-200/50",
    visual: (
      <div className="w-full h-full bg-gradient-to-br from-indigo-600/10 via-violet-600/5 to-transparent flex items-center justify-center p-8">
        <div className="space-y-4 w-full max-w-[340px]">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-600 to-violet-600 flex items-center justify-center shadow-lg">
              <Target className="w-5 h-5 text-white" />
            </div>
            <span className="text-lg font-bold text-foreground">Strategy Framework</span>
          </div>
          {[
            { label: "Identify Pattern", pct: "95%" },
            { label: "Apply Framework", pct: "88%" },
            { label: "Verify & Optimize", pct: "92%" },
          ].map((step, i) => (
            <motion.div
              key={step.label}
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ delay: i * 0.15, duration: 0.5, ease: "easeOut" }}
              style={{ transformOrigin: "left" }}
              className="bg-white/80 backdrop-blur-sm border border-indigo-100 rounded-xl px-4 py-3 shadow-sm"
            >
              <div className="flex justify-between items-center mb-2">
                <span className="text-base font-medium text-foreground">{step.label}</span>
                <span className="text-base font-bold text-indigo-600">{step.pct}</span>
              </div>
              <div className="h-1.5 bg-indigo-100 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: step.pct }}
                  transition={{ delay: i * 0.15 + 0.3, duration: 0.6, ease: "easeOut" }}
                  className="h-full bg-gradient-to-r from-indigo-500 to-violet-500 rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    ),
  },
  {
    title: "Score-Driven Results",
    description:
      "Practice with purpose. Our structured drills and analytics help you build consistency that shows up in your actual test scores — no more random plateaus.",
    icon: LineChart,
    gradient: "from-emerald-500 to-teal-600",
    iconColor: "bg-emerald-50 text-emerald-600 border-emerald-200/50",
    visual: (
      <div className="w-full h-full bg-gradient-to-br from-emerald-600/10 via-teal-600/5 to-transparent flex items-center justify-center p-8">
        <div className="space-y-4 w-full max-w-[340px]">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center shadow-lg">
              <LineChart className="w-5 h-5 text-white" />
            </div>
            <span className="text-lg font-bold text-foreground">Score Progression</span>
          </div>
          <div className="bg-white/80 backdrop-blur-sm border border-emerald-100 rounded-xl p-4 shadow-sm">
            <div className="flex items-end justify-between gap-2 h-28">
              {[40, 52, 58, 65, 72, 80, 88, 95].map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ height: 0 }}
                  animate={{ height: `${h}%` }}
                  transition={{ delay: i * 0.08, duration: 0.5, ease: "easeOut" }}
                  className="flex-1 bg-gradient-to-t from-emerald-500 to-teal-400 rounded-t-md min-w-[8px]"
                />
              ))}
            </div>
            <div className="flex justify-between mt-3 text-muted-foreground" style={{ fontSize: "0.85rem" }}>
              <span>Week 1</span>
              <span>Week 8</span>
            </div>
          </div>
          <div className="flex gap-3">
            <div className="flex-1 bg-white/80 backdrop-blur-sm border border-emerald-100 rounded-xl px-4 py-3 text-center shadow-sm">
              <div className="text-2xl font-extrabold text-emerald-600">+120</div>
              <div className="text-muted-foreground" style={{ fontSize: "0.85rem" }}>Avg Improvement</div>
            </div>
            <div className="flex-1 bg-white/80 backdrop-blur-sm border border-emerald-100 rounded-xl px-4 py-3 text-center shadow-sm">
              <div className="text-2xl font-extrabold text-emerald-600">92%</div>
              <div className="text-muted-foreground" style={{ fontSize: "0.85rem" }}>Success Rate</div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Expert-Led Live Classes",
    description:
      "Interactive, scheduled sessions with real-time doubt solving, peer learning, and accountability. Never feel lost — our mentors guide you every step.",
    icon: Video,
    gradient: "from-rose-500 to-pink-600",
    iconColor: "bg-rose-50 text-rose-600 border-rose-200/50",
    visual: (
      <div className="w-full h-full bg-gradient-to-br from-rose-600/10 via-pink-600/5 to-transparent flex items-center justify-center p-8">
        <div className="space-y-4 w-full max-w-[340px]">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-rose-500 to-pink-600 flex items-center justify-center shadow-lg">
              <Video className="w-5 h-5 text-white" />
            </div>
            <span className="text-lg font-bold text-foreground">Live Session</span>
          </div>
          <div className="bg-white/80 backdrop-blur-sm border border-rose-100 rounded-xl p-5 shadow-sm relative overflow-hidden">
            <div className="absolute top-3 right-3 flex items-center gap-1.5">
              <div className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
              <span className="text-rose-600 font-bold" style={{ fontSize: "0.85rem" }}>LIVE</span>
            </div>
            <div className="space-y-3 mt-2">
              <div className="h-3 bg-rose-100 rounded-full w-3/4" />
              <div className="h-3 bg-rose-100 rounded-full w-1/2" />
              <div className="flex items-center gap-2 mt-4">
                {[1, 2, 3, 4].map((_, i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-rose-300 to-pink-400 border-2 border-white shadow-sm -ml-2 first:ml-0" />
                ))}
                <span className="text-muted-foreground ml-1" style={{ fontSize: "0.85rem" }}>+24 students</span>
              </div>
            </div>
          </div>
          <div className="flex gap-3">
            <div className="flex-1 bg-white/80 backdrop-blur-sm border border-rose-100 rounded-xl px-3 py-3 text-center shadow-sm">
              <div className="text-2xl font-extrabold text-rose-600">100+</div>
              <div className="text-muted-foreground" style={{ fontSize: "0.85rem" }}>Hours Live</div>
            </div>
            <div className="flex-1 bg-white/80 backdrop-blur-sm border border-rose-100 rounded-xl px-3 py-3 text-center shadow-sm">
              <div className="text-2xl font-extrabold text-rose-600">Daily</div>
              <div className="text-muted-foreground" style={{ fontSize: "0.85rem" }}>Sessions</div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "1-on-1 Private Mentoring",
    description:
      "Personalized attention tailored directly to your score goals, weak areas, and timeline. Work with a dedicated mentor who knows your journey inside out.",
    icon: Users,
    gradient: "from-amber-500 to-orange-600",
    iconColor: "bg-amber-50 text-amber-600 border-amber-200/50",
    visual: (
      <div className="w-full h-full bg-gradient-to-br from-amber-600/10 via-orange-600/5 to-transparent flex items-center justify-center p-8">
        <div className="space-y-4 w-full max-w-[340px]">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center shadow-lg">
              <Users className="w-5 h-5 text-white" />
            </div>
            <span className="text-lg font-bold text-foreground">Your Personal Plan</span>
          </div>
          {[
            { label: "Diagnostic Assessment", status: "✓", color: "text-emerald-600" },
            { label: "Custom Study Plan", status: "✓", color: "text-emerald-600" },
            { label: "Weekly 1-on-1 Sessions", status: "Active", color: "text-amber-600" },
            { label: "Score Goal: 330+", status: "→", color: "text-amber-600" },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className="flex items-center justify-between bg-white/80 backdrop-blur-sm border border-amber-100 rounded-xl px-4 py-3 shadow-sm"
            >
              <span className="text-base font-medium text-foreground">{item.label}</span>
              <span className={`font-bold ${item.color}`} style={{ fontSize: "0.9rem" }}>{item.status}</span>
            </motion.div>
          ))}
        </div>
      </div>
    ),
  },
];

/* ─── Main Section Component ────────────────────────────────────── */
export const MethodTimeline: React.FC = () => {
  const [activeCard, setActiveCard] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const cardElements = container.querySelectorAll(".timeline-card");
      if (cardElements.length === 0) return;

      const containerRect = container.getBoundingClientRect();
      const containerTop = containerRect.top;

      const scrollTop = container.scrollTop;
      const scrollHeight = container.scrollHeight;
      const clientHeight = container.clientHeight;
      const maxScroll = scrollHeight - clientHeight;

      // If we are scrolled to the very bottom, force the last card to be active
      if (scrollTop >= maxScroll - 10) {
        setActiveCard(cardElements.length - 1);
        return;
      }

      // Check which card is closest to the activation zone (around 80px from container top)
      let closestIndex = 0;
      let minDistance = Infinity;

      cardElements.forEach((card, index) => {
        const cardRect = card.getBoundingClientRect();
        const distance = Math.abs(cardRect.top - containerTop - 80);
        if (distance < minDistance) {
          minDistance = distance;
          closestIndex = index;
        }
      });

      setActiveCard(closestIndex);
    };

    container.addEventListener("scroll", handleScroll, { passive: true });
    // Run once on mount to establish initial state
    handleScroll();

    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="py-12 md:py-20 px-4 sm:px-6 md:px-16 lg:px-24 xl:px-16 bg-gradient-to-b from-background via-blue-50/20 to-background relative overflow-hidden">
      {/* Decorative glows */}
      <div className="absolute top-1/4 left-10 w-96 h-96 rounded-full bg-blue-400/5 blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-10 w-80 h-80 rounded-full bg-indigo-400/8 blur-3xl pointer-events-none -z-10" />

      <div className="max-w-[1200px] mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-[900px] mx-auto mb-10 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-5 py-2 mb-6"
          >
            <Sparkles className="w-3.5 h-3.5 text-primary" />
            <span className="text-xs font-bold uppercase tracking-[0.14em] text-primary">
              Our Methodology
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="text-3xl md:text-4xl font-bold font-display text-foreground leading-[1.1] tracking-tight mb-5"
          >
            How We Take You From{" "}
            <span className="text-primary">Confused</span> to{" "}
            <span className="text-primary">Confident</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.14 }}
            className="text-base md:text-lg text-muted-foreground leading-relaxed"
          >
            Our proven system builds clarity, strategy, and results — step by step.
          </motion.p>
        </div>

        {/* Sticky Scroll Container - DESKTOP ONLY */}
        <div
          ref={containerRef}
          className="hidden lg:flex method-timeline-container relative justify-between gap-10 overflow-y-auto rounded-[28px] border border-border/60 bg-card/50 backdrop-blur-sm shadow-soft"
          style={{ height: "36rem" }}
        >
          {/* Custom scrollbar styling */}
          <style>{`
            .method-timeline-container::-webkit-scrollbar { width: 6px; }
            .method-timeline-container::-webkit-scrollbar-track { background: transparent; }
            .method-timeline-container::-webkit-scrollbar-thumb { background: hsl(var(--border)); border-radius: 999px; }
            .method-timeline-container::-webkit-scrollbar-thumb:hover { background: hsl(var(--primary) / 0.3); }
          `}</style>

          {/* LEFT SIDE: Timeline Cards */}
          <div className="relative flex-1 px-8 py-10">
            {/* Vertical timeline line */}
            <div className="absolute left-[2.25rem] top-10 bottom-10 w-px bg-border z-0" />

            {timelineData.map((item, index) => {
              const isActive = activeCard === index;
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="timeline-card relative pl-14 my-16 first:mt-0 last:mb-0"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-[1.5rem] top-1 z-10">
                    <motion.div
                      animate={{
                        scale: isActive ? 1 : 0.7,
                        opacity: isActive ? 1 : 0.4,
                      }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className={cn(
                        "w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors duration-300",
                        isActive
                          ? "border-primary bg-primary shadow-md shadow-primary/30"
                          : "border-border bg-background"
                      )}
                    >
                      <div
                        className={cn(
                          "w-2 h-2 rounded-full transition-colors duration-300",
                          isActive ? "bg-white" : "bg-muted-foreground/30"
                        )}
                      />
                    </motion.div>
                  </div>

                  {/* Card content */}
                  <motion.div
                    animate={{
                      opacity: isActive ? 1 : 0.35,
                      y: isActive ? 0 : 4,
                    }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                    className="relative"
                  >
                    {/* Icon + Title Row */}
                    <div className="flex items-center gap-3 mb-3">
                      <div
                        className={cn(
                          "w-9 h-9 rounded-xl flex items-center justify-center border shrink-0 shadow-sm transition-all duration-300",
                          item.iconColor
                        )}
                      >
                        <Icon className="w-4.5 h-4.5 stroke-[2]" />
                      </div>
                      <h3 className="text-xl font-bold text-foreground text-left">
                        {item.title}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="text-base text-muted-foreground leading-relaxed text-left max-w-lg">
                      {item.description}
                    </p>
                  </motion.div>
                </div>
              );
            })}
            {/* Spacer at bottom */}
            <div className="h-[24rem]" />
          </div>

          {/* RIGHT SIDE: Sticky visual panel */}
          <div className="sticky top-0 hidden lg:flex items-center justify-center w-[400px] xl:w-[440px] shrink-0 p-6">
            <div className="w-full h-[28rem] rounded-[24px] border border-border/60 bg-background overflow-hidden shadow-soft relative">
              {/* Logo watermark */}
              <div className="absolute top-4 right-4 z-20 opacity-30">
                <BrandLogo size="nav" />
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCard}
                  initial={{ opacity: 0, y: 16, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -16, scale: 0.98 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="w-full h-full"
                >
                  {timelineData[activeCard].visual}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* MOBILE VIEW (lg:hidden): Full-width stacked methodology cards */}
        <div className="lg:hidden mt-8 space-y-6">
          {timelineData.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="bg-card border border-border/80 rounded-[24px] overflow-hidden shadow-soft p-5 sm:p-6 text-left"
              >
                {/* Header: Step Pill & Title */}
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className={cn(
                      "w-10 h-10 rounded-xl flex items-center justify-center border shrink-0 shadow-sm",
                      item.iconColor
                    )}
                  >
                    <Icon className="w-5 h-5 stroke-[2]" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-primary block">
                      Step 0{index + 1}
                    </span>
                    <h3 className="text-xl font-bold font-display text-foreground text-left">
                      {item.title}
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <p className="text-base text-muted-foreground leading-relaxed text-left mb-5">
                  {item.description}
                </p>

                {/* Graphic Visual */}
                <div className="w-full rounded-2xl border border-border/60 bg-background overflow-hidden min-h-[220px] flex items-center justify-center p-2">
                  <div className="w-full max-w-[340px] flex items-center justify-center">
                    {item.visual}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

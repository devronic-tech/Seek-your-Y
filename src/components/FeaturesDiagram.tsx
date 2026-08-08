import React, { useState } from "react";
import { BookSessionDialog } from "./BookSessionDialog";
import { motion } from "framer-motion";
import seekYourYLogo from "@/assets/seekyoury_logo_favicon.png";
import {
  Zap,
  Calendar,
  ArrowRight,
  Trophy,
  Users,
  Clock,
  Target,
  TrendingUp,
  Sparkles,
} from "lucide-react";

export const FeaturesDiagram: React.FC = () => {
  const [isBookSessionOpen, setIsBookSessionOpen] = useState(false);

  const featureCards = [
    {
      number: "01",
      title: "Record Holders of GMAT 800 & V51",
      desc: "Prepared by tutors who have achieved absolute perfection on the official test.",
      icon: Trophy,
    },
    {
      number: "02",
      title: "Live Discussion of All Tests",
      desc: "Review every test option and mistake directly with master trainers.",
      icon: Users,
    },
    {
      number: "03",
      title: "100+ Hours of Live Training",
      desc: "Exhaustive coverage of every single concept with extensive practice.",
      icon: Clock,
    },
    {
      number: "04",
      title: "Personalized 1-on-1 Mentorship",
      desc: "Customized strategy tailored specifically to your target score & timeline.",
      icon: Target,
    },
    {
      number: "05",
      title: "Adaptive Mocks & AI Analytics",
      desc: "Real exam simulations with granular diagnostic weakness tracking.",
      icon: TrendingUp,
    },
    {
      number: "06",
      title: "Unlimited Doubt Solving",
      desc: "24/7 priority resolution from expert faculty until you hit your target score.",
      icon: Sparkles,
    },
  ];

  const leftCards = featureCards.slice(0, 3);
  const rightCards = featureCards.slice(3, 6);

  return (
    <section className="pt-14 pb-20 md:pt-16 md:pb-24 bg-[#030914] text-white border-t border-b border-blue-950/40 relative overflow-hidden">
      {/* Dark Blue Background Glows */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#07172e] via-[#030914] to-[#030914] pointer-events-none" />
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-blue-600/10 blur-[150px] pointer-events-none -z-10 animate-pulse-slow" />
      <div className="absolute top-1/2 right-1/3 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-sky-500/10 blur-[150px] pointer-events-none -z-10" />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e3a8a12_1px,transparent_1px),linear-gradient(to_bottom,#1e3a8a12_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(16)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-sky-400/40 animate-pulse"
            style={{
              width: `${(i % 3) + 2}px`,
              height: `${(i % 3) + 2}px`,
              top: `${(i * 13) % 90 + 5}%`,
              left: `${(i * 19) % 90 + 5}%`,
              animationDelay: `${i * 0.3}s`,
              animationDuration: `${3 + (i % 4)}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-14">
          <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-blue-950/70 border border-sky-500/30 text-sky-400 text-xs sm:text-sm font-extrabold uppercase tracking-[0.14em] shadow-lg shadow-blue-950/50 mb-3 backdrop-blur-sm">
            <Zap className="w-4 h-4 text-sky-400 fill-sky-400/20" />
            <span>THE SEEK YOUR Y ADVANTAGE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-white mt-2 mb-3 tracking-tight">
            Built for{" "}
            <span className="bg-gradient-to-r from-sky-400 via-blue-300 to-cyan-300 bg-clip-text text-transparent">
              Elite Performance
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-sky-500 via-blue-500 to-indigo-500 rounded-full mx-auto my-3" />
          <p className="text-slate-300 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed font-sans">
            Why leading GMAT and GRE aspirants trust our structured preparation model.
          </p>
        </div>

        {/* Desktop 3-Column Layout with Center Radar & Connected Beam Lines */}
        <div className="hidden lg:grid grid-cols-12 gap-6 items-center relative min-h-[580px]">
          {/* SVG Animated Beams Background connecting Center Hub to Cards */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none z-0"
            viewBox="0 0 1200 600"
            preserveAspectRatio="none"
          >
            {/* Left 3 Card Lines */}
            <path
              id="path-left-1"
              d="M 600 300 C 480 300, 360 120, 240 100"
              stroke="#38bdf8"
              strokeWidth="2.5"
              strokeDasharray="6 6"
              fill="none"
              style={{ filter: "drop-shadow(0 0 6px rgba(56, 189, 248, 0.7))" }}
            />
            <path
              id="path-left-2"
              d="M 600 300 C 480 300, 360 300, 240 300"
              stroke="#38bdf8"
              strokeWidth="2.5"
              strokeDasharray="6 6"
              fill="none"
              style={{ filter: "drop-shadow(0 0 6px rgba(56, 189, 248, 0.7))" }}
            />
            <path
              id="path-left-3"
              d="M 600 300 C 480 300, 360 480, 240 500"
              stroke="#38bdf8"
              strokeWidth="2.5"
              strokeDasharray="6 6"
              fill="none"
              style={{ filter: "drop-shadow(0 0 6px rgba(56, 189, 248, 0.7))" }}
            />

            {/* Right 3 Card Lines */}
            <path
              id="path-right-1"
              d="M 600 300 C 720 300, 840 120, 960 110"
              stroke="#38bdf8"
              strokeWidth="2.5"
              strokeDasharray="6 6"
              fill="none"
              style={{ filter: "drop-shadow(0 0 6px rgba(56, 189, 248, 0.7))" }}
            />
            <path
              id="path-right-2"
              d="M 600 300 C 720 300, 840 300, 960 300"
              stroke="#38bdf8"
              strokeWidth="2.5"
              strokeDasharray="6 6"
              fill="none"
              style={{ filter: "drop-shadow(0 0 6px rgba(56, 189, 248, 0.7))" }}
            />
            <path
              id="path-right-3"
              d="M 600 300 C 720 300, 840 480, 960 500"
              stroke="#38bdf8"
              strokeWidth="2.5"
              strokeDasharray="6 6"
              fill="none"
              style={{ filter: "drop-shadow(0 0 6px rgba(56, 189, 248, 0.7))" }}
            />

            {/* Left Particles */}
            <circle r="4.5" fill="#38bdf8" style={{ filter: "drop-shadow(0 0 8px #38bdf8)" }}>
              <animateMotion
                path="M 600 300 C 480 300, 360 120, 240 100"
                dur="2.8s"
                repeatCount="indefinite"
              />
            </circle>
            <circle r="4.5" fill="#38bdf8" style={{ filter: "drop-shadow(0 0 8px #38bdf8)" }}>
              <animateMotion
                path="M 600 300 C 480 300, 360 300, 240 300"
                dur="3.2s"
                repeatCount="indefinite"
              />
            </circle>
            <circle r="4.5" fill="#38bdf8" style={{ filter: "drop-shadow(0 0 8px #38bdf8)" }}>
              <animateMotion
                path="M 600 300 C 480 300, 360 480, 240 500"
                dur="2.5s"
                repeatCount="indefinite"
              />
            </circle>

            {/* Right Particles */}
            <circle r="4.5" fill="#38bdf8" style={{ filter: "drop-shadow(0 0 8px #38bdf8)" }}>
              <animateMotion
                path="M 600 300 C 720 300, 840 120, 960 110"
                dur="2.7s"
                repeatCount="indefinite"
              />
            </circle>
            <circle r="4.5" fill="#38bdf8" style={{ filter: "drop-shadow(0 0 8px #38bdf8)" }}>
              <animateMotion
                path="M 600 300 C 720 300, 840 300, 960 300"
                dur="3.1s"
                repeatCount="indefinite"
              />
            </circle>
            <circle r="4.5" fill="#38bdf8" style={{ filter: "drop-shadow(0 0 8px #38bdf8)" }}>
              <animateMotion
                path="M 600 300 C 720 300, 840 480, 960 500"
                dur="3.5s"
                repeatCount="indefinite"
              />
            </circle>
          </svg>

          {/* Left 3 Feature Cards */}
          <div className="col-span-4 flex flex-col gap-5 z-10">
            {leftCards.map((feat, index) => {
              const IconComp = feat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="group relative bg-white text-slate-900 border border-slate-200/90 rounded-3xl p-6 shadow-xl shadow-slate-950/20 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-sky-400 hover:shadow-2xl hover:shadow-sky-500/25"
                >
                  <div className="flex items-center gap-4 mb-3">
                    <div className="flex items-center justify-center w-10 h-10 rounded-2xl bg-gradient-to-br from-blue-50 to-sky-100 text-blue-600 font-extrabold font-mono text-sm border border-blue-200 group-hover:scale-105 transition-transform">
                      {feat.number}
                    </div>
                    <div className="h-0.5 flex-1 bg-gradient-to-r from-blue-500/40 via-sky-400/20 to-transparent rounded-full" />
                    <IconComp className="w-5 h-5 text-blue-600 group-hover:text-blue-500 transition-colors" />
                  </div>
                  <h3 className="text-lg font-bold font-display leading-tight mb-2 text-slate-950 group-hover:text-blue-600 transition-colors">
                    {feat.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-sans font-medium">
                    {feat.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* Center Column: 5-Ring Radar Hub with Seek Your Y Logo */}
          <div className="col-span-4 flex items-center justify-center z-10">
            <div className="relative w-full max-w-[380px] aspect-square flex items-center justify-center">
              {/* 5 ROTATING CONCENTRIC RINGS */}
              {/* Ring 1: Outermost Ring with Spin Slow */}
              <div
                className="absolute inset-0 rounded-full border border-sky-400/30 dark:border-sky-500/25 animate-spin-slow pointer-events-none"
                style={{ transform: "scale(1.1)" }}
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-sky-400 shadow-[0_0_12px_#38bdf8]" />
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2.5 h-2.5 rounded-full bg-blue-400 shadow-[0_0_12px_#60a5fa]" />
              </div>

              {/* Ring 2: Inset-2 Ring with Spin Reverse */}
              <div className="absolute inset-2 rounded-full border border-blue-500/30 animate-spin-reverse flex items-center justify-center pointer-events-none">
                <div className="absolute top-1/4 left-0 -translate-x-1/2 w-2 h-2 rounded-full bg-sky-300/80" />
                <div className="absolute bottom-1/4 right-0 translate-x-1/2 w-2 h-2 rounded-full bg-sky-300/80" />
              </div>

              {/* Ring 3: Inset-10 Ring with Medium Spin */}
              <div className="absolute inset-10 rounded-full border border-indigo-400/25 animate-spin-medium pointer-events-none">
                <div className="absolute top-0 right-1/4 translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-cyan-300 shadow-[0_0_8px_#67e8f9]" />
              </div>

              {/* Ring 4: Inset-20 Sky Blue Ring with Reverse Fast Spin */}
              <div className="absolute inset-20 rounded-full border border-sky-400/30 animate-spin-reverse-fast pointer-events-none">
                <div className="absolute bottom-0 left-1/3 -translate-x-1/2 translate-y-1/2 w-2 h-2 rounded-full bg-sky-400 shadow-[0_0_8px_#38bdf8]" />
              </div>

              {/* Ring 5: Inset-32 Dashed Sky Ring */}
              <div className="absolute inset-32 rounded-full border border-dashed border-sky-400/40 animate-pulse-slow pointer-events-none" />

              {/* CENTER HUB NODE: SEEK YOUR Y LOGO */}
              <div
                className="relative z-20 w-32 h-32 sm:w-36 sm:h-36 rounded-full bg-[#061225] border-2 border-sky-400 flex items-center justify-center p-4 cursor-pointer shadow-[0_0_50px_rgba(56,189,248,0.5)] group transition-transform duration-300 hover:scale-105"
                tabIndex={0}
              >
                <div className="absolute -inset-2 rounded-full bg-sky-500/20 blur-md pointer-events-none animate-pulse-slow" />
                <img
                  src={seekYourYLogo}
                  alt="Seek Your Y Logo"
                  className="w-full h-full object-contain filter drop-shadow-[0_0_15px_rgba(56,189,248,0.85)] group-hover:scale-110 transition-transform duration-300 relative z-10 translate-y-[10px]"
                />
              </div>
            </div>
          </div>

          {/* Right 3 Feature Cards */}
          <div className="col-span-4 flex flex-col gap-5 z-10">
            {rightCards.map((feat, index) => {
              const IconComp = feat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="group relative bg-white text-slate-900 border border-slate-200/90 rounded-3xl p-6 shadow-xl shadow-slate-950/20 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-sky-400 hover:shadow-2xl hover:shadow-sky-500/25"
                >
                  <div className="flex items-center gap-4 mb-3">
                    <div className="flex items-center justify-center w-10 h-10 rounded-2xl bg-gradient-to-br from-blue-50 to-sky-100 text-blue-600 font-extrabold font-mono text-sm border border-blue-200 group-hover:scale-105 transition-transform">
                      {feat.number}
                    </div>
                    <div className="h-0.5 flex-1 bg-gradient-to-r from-blue-500/40 via-sky-400/20 to-transparent rounded-full" />
                    <IconComp className="w-5 h-5 text-blue-600 group-hover:text-blue-500 transition-colors" />
                  </div>
                  <h3 className="text-lg font-bold font-display leading-tight mb-2 text-slate-950 group-hover:text-blue-600 transition-colors">
                    {feat.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-sans font-medium">
                    {feat.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Mobile View Layout (Stacked Radar Hub + 6 Cards Grid) */}
        <div className="lg:hidden flex flex-col items-center gap-8">
          {/* Radar Hub */}
          <div className="relative w-full max-w-[320px] aspect-square flex items-center justify-center">
            {/* 5 Concentric Rings */}
            <div
              className="absolute inset-0 rounded-full border border-sky-400/30 animate-spin-slow pointer-events-none"
              style={{ transform: "scale(1.08)" }}
            />
            <div className="absolute inset-2 rounded-full border border-blue-500/30 animate-spin-reverse pointer-events-none" />
            <div className="absolute inset-8 rounded-full border border-indigo-400/25 animate-spin-medium pointer-events-none" />
            <div className="absolute inset-16 rounded-full border border-sky-400/30 animate-spin-reverse-fast pointer-events-none" />
            <div className="absolute inset-24 rounded-full border border-dashed border-sky-400/40 animate-pulse-slow pointer-events-none" />

            {/* Center Logo Node */}
            <div className="relative z-20 w-28 h-28 rounded-full bg-[#061225] border-2 border-sky-400 flex items-center justify-center p-3 shadow-[0_0_40px_rgba(56,189,248,0.4)]">
              <img
                src={seekYourYLogo}
                alt="Seek Your Y"
                className="w-full h-full object-contain filter drop-shadow-[0_0_12px_rgba(56,189,248,0.8)] translate-y-[10px]"
              />
            </div>
          </div>

          {/* 6 Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mt-2">
            {featureCards.map((feat, index) => {
              const IconComp = feat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-white border border-slate-200 rounded-2xl p-5 text-left shadow-lg hover:border-sky-400 transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-2.5">
                    <div className="w-8 h-8 rounded-xl bg-blue-50 text-blue-600 font-bold font-mono text-xs flex items-center justify-center border border-blue-200">
                      {feat.number}
                    </div>
                    <IconComp className="w-4 h-4 text-blue-600" />
                  </div>
                  <h3 className="text-base font-bold text-slate-950 mb-1.5">
                    {feat.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-medium">
                    {feat.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-14 text-center flex justify-center z-10 relative">
          <button
            onClick={() => setIsBookSessionOpen(true)}
            className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 text-white font-extrabold text-base md:text-lg shadow-xl shadow-sky-500/25 hover:from-sky-400 hover:to-indigo-500 hover:scale-105 transition-all duration-200 cursor-pointer border border-sky-300/30"
          >
            <Calendar className="w-5 h-5 text-white" />
            <span>Book a Session</span>
            <ArrowRight className="w-5 h-5 text-white/90" />
          </button>
        </div>
      </div>

      <BookSessionDialog
        open={isBookSessionOpen}
        onOpenChange={setIsBookSessionOpen}
        title="Book a Session"
        description="Select your target exam and fill in your details to book a consultation with Aman."
      />
    </section>
  );
};



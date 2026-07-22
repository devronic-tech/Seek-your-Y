import React from "react";
import { BrandLogo } from "./BrandLogo";
import { motion } from "framer-motion";
import { Zap } from "lucide-react";

export const FeaturesDiagram: React.FC = () => {
  const leftFeatures = [
    {
      title: "675+ Score Guarantee* or Get Your Money Back",
      desc: "We stand behind our methodology with a robust, clear score guarantee."
    },
    {
      title: "Daily live classes for Accountability and Consistency",
      desc: "Stay on track with regular daily sessions that keep your momentum going."
    },
    {
      title: "Proud Record Holders of GMAT 800 and V51",
      desc: "Prepared by tutors who have achieved absolute perfection on the test."
    }
  ];

  const rightFeatures = [
    {
      title: "100+ Hours of Live Training (Highest in the World)",
      desc: "Exhaustive coverage of every single concept with extensive practice."
    },
    {
      title: "Only Company with 6 Personalized Courses to Choose From",
      desc: "Tailored to your target score, current level, and preparation style."
    },
    {
      title: "Live discussion of all tests with expert faculty",
      desc: "Review every test option and mistake directly with master trainers."
    }
  ];

  return (
    <section className="py-24 bg-slate-950 text-white border-t border-b border-slate-800/80 relative overflow-hidden">
      {/* Decorative background glows */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-blue-500/10 blur-[120px] pointer-events-none -z-10 animate-pulse" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-indigo-500/10 blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-[1360px] mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full bg-white border border-blue-200 text-blue-600 text-base md:text-lg font-extrabold uppercase tracking-[0.14em] shadow-xl mb-4">
            <Zap className="w-4 h-4 text-blue-600 stroke-[2.5]" />
            <span>THE SEEK YOUR Y ADVANTAGE</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold font-display text-white mt-4 mb-2 tracking-tight">
            Built for Elite Performance
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mx-auto my-5" />
          <p className="text-slate-400 max-w-2xl mx-auto leading-relaxed" style={{ fontSize: "20px" }}>
            Why leading GMAT and GRE aspirants trust our structured preparation model.
          </p>
        </div>

        {/* Desktop Diagram Layout */}
        <div className="hidden lg:grid grid-cols-[1.1fr_260px_1.1fr] items-center gap-12 lg:gap-20 relative min-h-[520px]">
          
          {/* SVG Connecting Lines (Absolute Positioning with 45° & 90° Angled Lines & Arrowheads) */}
          <div className="absolute inset-0 pointer-events-none z-0">
            <svg className="w-full h-full" viewBox="0 0 1000 500" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                {/* Gradients */}
                <linearGradient id="gradient-line-left" x1="500" y1="250" x2="330" y2="250" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#3b82f6" stopOpacity="0.4" />
                  <stop offset="1" stopColor="#60a5fa" stopOpacity="0.95" />
                </linearGradient>
                <linearGradient id="gradient-line-right" x1="500" y1="250" x2="670" y2="250" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#6366f1" stopOpacity="0.4" />
                  <stop offset="1" stopColor="#818cf8" stopOpacity="0.95" />
                </linearGradient>

                {/* Arrow Markers pointing forward directly into card indicator dots */}
                <marker id="arrow-left" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto">
                  <path d="M 0 1 L 9 5 L 0 9 Z" fill="#60a5fa" />
                </marker>
                <marker id="arrow-right" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto">
                  <path d="M 0 1 L 9 5 L 0 9 Z" fill="#818cf8" />
                </marker>
              </defs>

              {/* LEFT COLUMN CONNECTING LINES (Pointing Left towards Left Cards) */}
              {/* Left Top Line (45° angle upwards) */}
              <line x1="400" y1="230" x2="335" y2="90" stroke="url(#gradient-line-left)" strokeWidth="2.5" strokeDasharray="6 4" marker-end="url(#arrow-left)" />
              {/* Left Middle Line (0° / 90° straight horizontal) */}
              <line x1="390" y1="250" x2="335" y2="250" stroke="url(#gradient-line-left)" strokeWidth="2.5" strokeDasharray="6 4" marker-end="url(#arrow-left)" />
              {/* Left Bottom Line (45° angle downwards) */}
              <line x1="400" y1="270" x2="335" y2="410" stroke="url(#gradient-line-left)" strokeWidth="2.5" strokeDasharray="6 4" marker-end="url(#arrow-left)" />

              {/* RIGHT COLUMN CONNECTING LINES (Pointing Right towards Right Cards) */}
              {/* Right Top Line (45° angle upwards) */}
              <line x1="600" y1="230" x2="665" y2="90" stroke="url(#gradient-line-right)" strokeWidth="2.5" strokeDasharray="6 4" marker-end="url(#arrow-right)" />
              {/* Right Middle Line (0° / 90° straight horizontal) */}
              <line x1="610" y1="250" x2="665" y2="250" stroke="url(#gradient-line-right)" strokeWidth="2.5" strokeDasharray="6 4" marker-end="url(#arrow-right)" />
              {/* Right Bottom Line (45° angle downwards) */}
              <line x1="600" y1="270" x2="665" y2="410" stroke="url(#gradient-line-right)" strokeWidth="2.5" strokeDasharray="6 4" marker-end="url(#arrow-right)" />
            </svg>
          </div>

          {/* Left Features Column */}
          <div className="flex flex-col gap-10 z-10">
            {leftFeatures.map((feat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="bg-white border border-slate-200/90 shadow-2xl hover:shadow-blue-500/20 hover:border-blue-500/60 rounded-[24px] p-7 text-left transition duration-300 relative group"
              >
                {/* Visual indicator dot */}
                <div className="absolute top-1/2 -right-3 -translate-y-1/2 w-6 h-6 rounded-full bg-white border-2 border-blue-500 flex items-center justify-center shadow-lg z-20 transition group-hover:scale-110">
                  <div className="w-2.5 h-2.5 rounded-full bg-blue-600" />
                </div>
                <h3 className="text-xl md:text-[22px] font-extrabold text-slate-900 mb-2.5 group-hover:text-blue-600 transition duration-300 leading-snug">
                  {feat.title}
                </h3>
                <p className="text-base text-slate-600 font-medium leading-relaxed">
                  {feat.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Center Circular Logo area */}
          <div className="flex justify-center items-center z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative w-48 h-48 rounded-full flex items-center justify-center p-1.5 shadow-2xl bg-white border border-slate-200"
            >
              {/* Outer decorative pulsing ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500 via-indigo-500 to-cyan-400 animate-[spin_12s_linear_infinite] p-[2.5px]">
                <div className="w-full h-full bg-white rounded-full" />
              </div>

              {/* Inner Circle Container */}
              <div className="relative w-full h-full rounded-full bg-slate-50 flex items-center justify-center p-2 shadow-inner z-10 border border-slate-100">
                <BrandLogo size="custom" className="w-[85%] h-auto max-h-[90%] object-contain drop-shadow-md translate-y-2" />
              </div>
            </motion.div>
          </div>

          {/* Right Features Column */}
          <div className="flex flex-col gap-10 z-10">
            {rightFeatures.map((feat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="bg-white border border-slate-200/90 shadow-2xl hover:shadow-indigo-500/20 hover:border-indigo-500/60 rounded-[24px] p-7 text-left transition duration-300 relative group"
              >
                {/* Visual indicator dot */}
                <div className="absolute top-1/2 -left-3 -translate-y-1/2 w-6 h-6 rounded-full bg-white border-2 border-blue-500 flex items-center justify-center shadow-lg z-20 transition group-hover:scale-110">
                  <div className="w-2.5 h-2.5 rounded-full bg-blue-600" />
                </div>
                <h3 className="text-xl md:text-[22px] font-extrabold text-slate-900 mb-2.5 group-hover:text-blue-600 transition duration-300 leading-snug">
                  {feat.title}
                </h3>
                <p className="text-base text-slate-600 font-medium leading-relaxed">
                  {feat.desc}
                </p>
              </motion.div>
            ))}
          </div>

        </div>

        {/* Mobile Diagram Layout (Stacked) */}
        <div className="lg:hidden flex flex-col items-center gap-10">
          {/* Logo in Center */}
          <div className="relative w-36 h-36 rounded-full flex items-center justify-center p-1 shadow-xl bg-white border border-slate-200">
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500 via-indigo-500 to-cyan-400 animate-[spin_10s_linear_infinite] p-[2px]">
              <div className="w-full h-full bg-white rounded-full" />
            </div>
            <div className="relative w-full h-full rounded-full bg-slate-50 flex items-center justify-center p-2 z-10">
              <BrandLogo size="custom" className="w-[85%] h-auto max-h-[90%] object-contain translate-y-1.5" />
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid gap-6 sm:grid-cols-2 w-full mt-4">
            {[...leftFeatures, ...rightFeatures].map((feat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white border border-slate-200 shadow-lg rounded-[20px] p-6 text-left hover:border-blue-500/50 transition duration-300"
              >
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {feat.title}
                </h3>
                <p className="text-sm text-slate-600 font-medium leading-relaxed">
                  {feat.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

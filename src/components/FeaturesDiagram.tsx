import React from "react";
import { BrandLogo } from "./BrandLogo";
import { motion } from "framer-motion";

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
    <section className="py-20 bg-gradient-to-b from-background via-slate-50/50 to-background border-t border-b border-border relative overflow-hidden">
      {/* Decorative background glows */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 rounded-full bg-blue-500/5 blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 rounded-full bg-indigo-500/5 blur-3xl pointer-events-none -z-10" />

      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-xs md:text-sm font-bold uppercase tracking-[0.15em] text-primary block">
            THE SEEK YOUR Y ADVANTAGE
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold font-display text-foreground mt-4 mb-2 tracking-tight">
            Built for Elite Performance
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto my-5" />
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Why leading GMAT and GRE aspirants trust our structured preparation model.
          </p>
        </div>

        {/* Desktop Diagram Layout */}
        <div className="hidden lg:grid grid-cols-[1.1fr_240px_1.1fr] items-center gap-8 relative min-h-[500px]">
          
          {/* SVG Connecting Lines (Absolute Positioning) */}
          <div className="absolute inset-0 pointer-events-none z-0">
            <svg className="w-full h-full" viewBox="0 0 1000 500" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Left Top Line */}
              <path d="M 400 100 H 410 V 250 H 420" stroke="url(#gradient-line-left)" strokeWidth="2" strokeDasharray="4 4" />
              {/* Left Middle Line */}
              <path d="M 400 250 H 420" stroke="url(#gradient-line-left)" strokeWidth="2" strokeDasharray="4 4" />
              {/* Left Bottom Line */}
              <path d="M 400 400 H 410 V 250 H 420" stroke="url(#gradient-line-left)" strokeWidth="2" strokeDasharray="4 4" />

              {/* Right Top Line */}
              <path d="M 600 100 H 590 V 250 H 580" stroke="url(#gradient-line-right)" strokeWidth="2" strokeDasharray="4 4" />
              {/* Right Middle Line */}
              <path d="M 600 250 H 580" stroke="url(#gradient-line-right)" strokeWidth="2" strokeDasharray="4 4" />
              {/* Right Bottom Line */}
              <path d="M 600 400 H 590 V 250 H 580" stroke="url(#gradient-line-right)" strokeWidth="2" strokeDasharray="4 4" />

              {/* Gradients */}
              <defs>
                <linearGradient id="gradient-line-left" x1="400" y1="250" x2="420" y2="250" gradientUnits="userSpaceOnUse">
                  <stop stopColor="hsl(var(--primary))" stopOpacity="0.3" />
                  <stop offset="1" stopColor="hsl(var(--primary))" stopOpacity="0.8" />
                </linearGradient>
                <linearGradient id="gradient-line-right" x1="600" y1="250" x2="580" y2="250" gradientUnits="userSpaceOnUse">
                  <stop stopColor="hsl(var(--accent))" stopOpacity="0.3" />
                  <stop offset="1" stopColor="hsl(var(--accent))" stopOpacity="0.8" />
                </linearGradient>
              </defs>
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
                className="bg-card border border-border/80 shadow-soft hover:shadow-elevated rounded-[24px] p-6 text-left transition duration-300 hover:border-primary/50 relative group"
              >
                {/* Visual indicator dot */}
                <div className="absolute top-1/2 -right-3 -translate-y-1/2 w-6 h-6 rounded-full bg-background border border-primary flex items-center justify-center shadow-sm z-20 transition group-hover:scale-110">
                  <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-primary to-accent" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition duration-300">
                  {feat.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
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
              className="relative w-48 h-48 rounded-full flex items-center justify-center p-1.5 shadow-2xl bg-white border border-slate-100"
            >
              {/* Outer decorative pulsing ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary via-indigo-500 to-accent animate-[spin_12s_linear_infinite] p-[2.5px]">
                <div className="w-full h-full bg-white rounded-full" />
              </div>

              {/* Inner Circle Container */}
              <div className="relative w-full h-full rounded-full bg-slate-50 flex items-center justify-center p-1 shadow-inner z-10 border border-slate-100/50">
                <BrandLogo size="custom" className="w-[85%] h-auto max-h-[90%] object-contain drop-shadow-sm translate-y-2" />
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
                className="bg-card border border-border/80 shadow-soft hover:shadow-elevated rounded-[24px] p-6 text-left transition duration-300 hover:border-accent/50 relative group"
              >
                {/* Visual indicator dot */}
                <div className="absolute top-1/2 -left-3 -translate-y-1/2 w-6 h-6 rounded-full bg-background border border-accent flex items-center justify-center shadow-sm z-20 transition group-hover:scale-110">
                  <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-primary to-accent" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-accent transition duration-300">
                  {feat.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feat.desc}
                </p>
              </motion.div>
            ))}
          </div>

        </div>

        {/* Mobile Diagram Layout (Stacked) */}
        <div className="lg:hidden flex flex-col items-center gap-10">
          {/* Logo in Center */}
          <div className="relative w-36 h-36 rounded-full flex items-center justify-center p-1 shadow-xl bg-white border border-slate-100">
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary via-indigo-500 to-accent animate-[spin_10s_linear_infinite] p-[2px]">
              <div className="w-full h-full bg-white rounded-full" />
            </div>
            <div className="relative w-full h-full rounded-full bg-slate-50 flex items-center justify-center p-1.5 z-10">
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
                className="bg-card border border-border/80 shadow-soft rounded-[20px] p-6 text-left hover:border-primary/50 transition duration-300"
              >
                <h3 className="text-base font-bold text-foreground mb-2">
                  {feat.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
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

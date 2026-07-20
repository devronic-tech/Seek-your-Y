import React from "react";
import { motion } from "framer-motion";
import { Timer, GraduationCap, ArrowLeftRight } from "lucide-react";

export const GreShortcut = () => {
  const cards = [
    {
      icon: Timer,
      gradient: "from-purple-600 to-orange-400",
      title: "Shorter & simpler",
      description: (
        <>
          1 hr 58 min vs GMAT's 2 hr 15 min — and{" "}
          <strong className="font-bold text-foreground">no Data Insights section</strong>.
          Just Quant, Verbal and one essay. Most students reach their target GRE score in less time.
        </>
      ),
    },
    {
      icon: GraduationCap,
      gradient: "from-indigo-600 to-blue-500",
      title: "Same B-schools",
      description:
        "ISB, all M7, Ivy League, INSEAD, LBS, NUS and NTU Singapore accept GRE scores at par with GMAT for their MBA programs.",
    },
    {
      icon: ArrowLeftRight,
      gradient: "from-blue-500 to-cyan-400",
      title: "One test, two doors",
      description:
        "A single GRE score works for MBA and MS applications — keep both options open with one prep journey.",
    },
  ];

  const schools = [
    { name: "ISB", type: "blue" },
    { name: "Harvard", type: "blue" },
    { name: "Stanford", type: "blue" },
    { name: "Wharton", type: "black" },
    { name: "Kellogg", type: "blue" },
    { name: "Booth", type: "blue" },
    { name: "Columbia", type: "blue" },
    { name: "MIT Sloan", type: "blue" },
    { name: "INSEAD", type: "blue" },
    { name: "LBS", type: "black" },
    { name: "NUS", type: "blue" },
    { name: "NTU", type: "blue" },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-blue-50/10 to-background relative overflow-hidden">
      {/* Background soft glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] rounded-full bg-blue-400/5 blur-3xl pointer-events-none -z-10" />

      <div className="max-w-[1200px] mx-auto text-center">
        {/* Top Text Pill */}
        <motion.span
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-xs md:text-sm font-bold uppercase tracking-[0.15em] text-blue-600 block"
        >
          THE SMART MONEY IS ON GRE
        </motion.span>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl md:text-5xl font-extrabold font-display text-foreground mt-4 mb-2 tracking-tight leading-tight"
        >
          Planning an MBA?{" "}
          <span className="text-blue-600 block sm:inline">The GRE is your shortcut.</span>
        </motion.h2>

        {/* Horizontal Accent Line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-16 h-1 bg-blue-600 rounded-full mx-auto my-5 origin-center"
        />

        {/* Description Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-base md:text-lg text-muted-foreground font-normal leading-relaxed max-w-3xl mx-auto mt-2"
        >
          Over the past 18 months, more and more MBA aspirants have switched from GMAT to GRE —
          largely to skip GMAT's Data Insights section. The same business schools, a shorter and
          friendlier test.
        </motion.p>

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-14 text-left"
        >
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -6, boxShadow: "0 20px 40px -15px rgba(59, 130, 246, 0.12)" }}
                className="bg-card rounded-[24px] border border-blue-500/20 p-8 flex flex-col gap-4 relative overflow-hidden transition-all duration-300 shadow-soft"
              >
                {/* Icon Container */}
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-tr ${card.gradient}`}>
                  <Icon className="w-6 h-6 text-white stroke-[2]" />
                </div>

                {/* Card Title */}
                <h3 className="text-xl font-bold font-display text-foreground">
                  {card.title}
                </h3>

                {/* Card Description */}
                <p className="text-base text-muted-foreground leading-relaxed font-normal">
                  {card.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* School Acceptance Badges */}
        <div className="mt-20">
          <motion.h4
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-6"
          >
            GRE scores are accepted for MBA at
          </motion.h4>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto"
          >
            {schools.map((school, idx) => (
              <motion.span
                key={idx}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className={`px-5 py-2 rounded-full border text-xs md:text-sm font-bold tracking-wide transition-all duration-200 cursor-default ${
                  school.type === "black"
                    ? "border-foreground text-foreground hover:bg-foreground/5 bg-white font-extrabold"
                    : "border-blue-600/40 text-blue-600 hover:bg-blue-50/40 bg-white"
                }`}
              >
                {school.name}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

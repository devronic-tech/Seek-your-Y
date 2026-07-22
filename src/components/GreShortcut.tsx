import React from "react";
import { motion } from "framer-motion";
import { Timer, GraduationCap, ArrowLeftRight } from "lucide-react";

export const GreShortcut = () => {
  const cards = [
    {
      icon: Timer,
      gradient: "from-purple-600 to-orange-400",
      cardBg: "from-purple-50 via-pink-50 to-orange-50",
      borderColor: "border-purple-300/50",
      hoverShadow: "0 20px 40px -15px rgba(147, 51, 234, 0.25)",
      title: "Shorter & simpler",
      description: (
        <>
          1 hr 58 min vs GMAT's 2 hr 15 min — and{" "}
          <strong className="font-bold text-purple-800">no Data Insights section</strong>.
          Just Quant, Verbal and one essay. Most students reach their target GRE score in less time.
        </>
      ),
      descColor: "text-purple-900/80",
      titleColor: "text-purple-900",
    },
    {
      icon: GraduationCap,
      gradient: "from-indigo-600 to-blue-500",
      cardBg: "from-indigo-50 via-blue-50 to-sky-50",
      borderColor: "border-indigo-300/50",
      hoverShadow: "0 20px 40px -15px rgba(99, 102, 241, 0.25)",
      title: "Same B-schools",
      description:
        "ISB, all M7, Ivy League, INSEAD, LBS, NUS and NTU Singapore accept GRE scores at par with GMAT for their MBA programs.",
      descColor: "text-indigo-900/80",
      titleColor: "text-indigo-900",
    },
    {
      icon: ArrowLeftRight,
      gradient: "from-teal-500 to-emerald-400",
      cardBg: "from-teal-50 via-emerald-50 to-cyan-50",
      borderColor: "border-teal-300/50",
      hoverShadow: "0 20px 40px -15px rgba(20, 184, 166, 0.25)",
      title: "One test, two doors",
      description:
        "A single GRE score works for MBA and MS applications — keep both options open with one prep journey.",
      descColor: "text-teal-900/80",
      titleColor: "text-teal-900",
    },
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
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center justify-center gap-2.5 px-6 py-2.5 rounded-full bg-blue-500/10 border border-blue-400/40 text-blue-600 text-base md:text-lg font-extrabold uppercase tracking-[0.14em] shadow-sm mb-4"
        >
          <Timer className="w-4 h-4 text-blue-600 stroke-[2.5]" />
          <span>THE SMART MONEY IS ON GRE</span>
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl md:text-5xl font-extrabold font-display text-foreground mt-4 mb-2 tracking-tight leading-tight"
        >
          Planning an MBA?{" "}
          <span className="text-blue-600 block sm:inline">The GRE is your smartest pathway.</span>
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
          className="text-lg md:text-xl text-muted-foreground font-normal leading-relaxed max-w-3xl mx-auto mt-2"
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
                whileHover={{ y: -6, boxShadow: card.hoverShadow }}
                className={`bg-gradient-to-br ${card.cardBg} rounded-[24px] border ${card.borderColor} p-8 flex flex-col gap-4 relative overflow-hidden transition-all duration-300 shadow-soft`}
              >
                {/* Decorative glow blob */}
                <div className={`absolute -top-6 -right-6 w-28 h-28 rounded-full bg-gradient-to-br ${card.gradient} opacity-15 blur-2xl pointer-events-none`} />

                {/* Icon Container */}
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center bg-gradient-to-tr ${card.gradient} shadow-md`}>
                  <Icon className="w-7 h-7 text-white stroke-[2.2]" />
                </div>

                {/* Card Title */}
                <h3 className={`text-2xl md:text-[26px] font-extrabold font-display leading-tight ${card.titleColor}`}>
                  {card.title}
                </h3>

                {/* Card Description */}
                <p className={`leading-relaxed font-normal ${card.descColor}`} style={{ fontSize: "20px" }}>
                  {card.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

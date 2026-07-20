import React, { useState } from "react";
import { motion } from "framer-motion";
import { Activity, BookOpen, BarChart3, Zap } from "lucide-react";
import { Footer } from "@/components/Footer";
import { ProgramHero } from "@/components/ProgramHero";
import { BookSessionDialog } from "@/components/BookSessionDialog";
import { CustomFAQ } from "@/components/CustomFAQ";
import { CallToAction } from "@/components/CallToAction";

const gmatSelfPacedFaqs = [
  {
    question: "How long is the GMAT Self-Paced course valid for?",
    answer: "The self-paced GMAT Focus program is valid for 6 months from your purchase date, allowing you to prepare thoroughly at your own speed."
  },
  {
    question: "Is the new GMAT Focus Data Insights (DI) section covered?",
    answer: "Yes, our self-paced course features a dedicated comprehensive module covering all GMAT Focus Data Insights (DI) question formats, along with integrated mock practice."
  },
  {
    question: "Can I upgrade my self-paced package to live prep or tutoring?",
    answer: "Yes, you can easily upgrade to our GMAT Live classes or 1-on-1 tutoring sessions at any point during your prep by contacting us."
  },
  {
    question: "Are mock tests and practice question banks included?",
    answer: "Absolutely. You get access to full-length GMAT Focus simulated mocks and a robust question bank with step-by-step logic explanations."
  }
];

const GmatSelfPaced: React.FC = () => {
  const [isBookSessionOpen, setIsBookSessionOpen] = useState(false);
  const [selectedTrack, setSelectedTrack] = useState<"quant" | "verbal" | "mixed">("quant");
  
  const trackOptions = {
    quant: [
      {
        id: "quant-syllabus",
        icon: "📊",
        title: "Full GMAT Quant syllabus",
        description: "Arithmetic and Algebra — every topic, with Data Sufficiency logic and logic-based Problem Solving.",
      },
      {
        id: "quant-logic",
        icon: "🧠",
        title: "Logic over formulas",
        description: "Aman's signature approach: estimation, number sense, and smart substitution that beats the clock.",
      },
      {
        id: "quant-drills",
        icon: "⏱️",
        title: "Timed drills",
        description: "Practice sets under time pressure (21 questions in 45 minutes) that build a target 85+ score pace.",
      },
    ],
    verbal: [
      {
        id: "verbal-rc-cr",
        icon: "📖",
        title: "RC & Critical Reasoning",
        description: "A repeatable, logic-based process for Reading Comprehension and CR questions without Sentence Correction.",
      },
      {
        id: "verbal-structure",
        icon: "✏️",
        title: "Argument structure",
        description: "Learn to map argument components, spot logical fallacies, and pre-think assumptions instantly.",
      },
      {
        id: "verbal-practice",
        icon: "💡",
        title: "Target practice",
        description: "Topic-wise timed sets and sectional quizzes tailored to GMAT's verbal adaptivity.",
      },
    ],
    mixed: [
      {
        id: "mixed-syllabus",
        icon: "📚",
        title: "100+ video lessons",
        description: "Every GMAT Focus concept covered — Arithmetic, Algebra, CR, RC, and the new Data Insights section.",
      },
      {
        id: "mixed-practice",
        icon: "🎯",
        title: "3,000+ practice questions",
        description: "Adaptive question banks, timed quizzes, and full-length test series with detailed solutions.",
      },
      {
        id: "mixed-di",
        icon: "📈",
        title: "Comprehensive DI modules",
        description: "Focused prep for Data Sufficiency, Multi-Source Reasoning, Table Analysis, Graphics Interpretation, and Two-Part Analysis.",
      },
    ],
  };

  const getTrackIcon = (icon: string) => {
    const iconMap: Record<string, React.ReactNode> = {
      "📊": <BookOpen className="h-8 w-8" />,
      "🧠": <Zap className="h-8 w-8" />,
      "⏱️": <Activity className="h-8 w-8" />,
      "📖": <BookOpen className="h-8 w-8" />,
      "✏️": <Activity className="h-8 w-8" />,
      "💡": <Zap className="h-8 w-8" />,
      "📚": <BookOpen className="h-8 w-8" />,
      "🎯": <Activity className="h-8 w-8" />,
      "📈": <BarChart3 className="h-8 w-8" />,
    };
    return iconMap[icon] || null;
  };

  const getCardColors = (index: number) => {
    const colors = [
      { bg: "bg-card", border: "border-border", icon: "bg-primary text-primary-foreground" },
      { bg: "bg-card", border: "border-border", icon: "bg-accent text-accent-foreground" },
      { bg: "bg-card", border: "border-border", icon: "bg-[hsl(var(--exam-gold))] text-foreground" },
    ];
    return colors[index % 3];
  };

  const plans = [
    {
      id: 'sectional',
      title: 'Sectional',
      price: '₹10,999',
      subtitle: 'Any one section • 6 months',
      bullets: [
        'Quant, Verbal or DI module',
        '1,000+ practice questions',
        'Sectional tests included',
        'Doubt forum access',
      ],
    },
    {
      id: 'full',
      title: 'Full Course',
      price: '₹19,999',
      subtitle: 'All 3 sections • 12 months',
      bullets: [
        'Complete Quant + Verbal + DI',
        '3,000+ practice questions',
        'Full GMAT Test Series included',
        'Monthly live strategy session',
      ],
      recommended: true,
    },
    {
      id: 'mentor',
      title: 'Full Course + Mentor',
      price: '₹27,999',
      subtitle: '12 months + mentor check-ins',
      bullets: [
        'Everything in Full Course',
        'Monthly 1-on-1 mentor call',
        'Personalised study plan',
      ],
    },
  ];

  return (
    <div className="bg-background text-foreground flex flex-col gap-8">
      <ProgramHero type="gmat" />

      <section className="py-12">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <div className="w-full">
            <div className="prose max-w-none text-base text-muted-foreground">
              <h2>Self-Paced GMAT Online Prep: An Overview</h2>
              <p className="text-muted-foreground">Learn at your own pace with Seekyoury’s self-paced GMAT online prep program. Anytime, anywhere, and at your leisure – our program ensures you are not bound by a schedule, making it ideal for working professionals and busy students.</p>
              <p className="text-muted-foreground">Get access to world-class preparation material, practice tests, and expert guidance through a dedicated portal designed for high-scoring GMAT aspirants.</p>
              <button 
                onClick={() => setIsBookSessionOpen(true)}
                className="mt-6 rounded-full px-6 py-3 text-sm font-semibold text-primary-foreground bg-primary shadow hover:brightness-95 transition"
              >
                TALK TO A GMAT EXPERT
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-slate-50/30">
        <div className="max-w-[1200px] mx-auto text-center">
          <span className="text-xs md:text-sm font-bold uppercase tracking-[0.15em] text-blue-600 block mb-3">
            CHOOSE YOUR TRACK
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold font-display text-foreground tracking-tight leading-tight">
            Pick your track
          </h2>
          <p className="text-base md:text-lg text-muted-foreground font-normal leading-relaxed max-w-2xl mx-auto mt-4 mb-10">
            Already strong in one section? Prep only what you need — or take the full course.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {[
              { id: "mixed", label: "Mixed (Quant + Verbal)" },
              { id: "quant", label: "Quant Only" },
              { id: "verbal", label: "Verbal Only" },
            ].map((track) => (
              <button
                key={track.id}
                onClick={() => setSelectedTrack(track.id as "quant" | "verbal" | "mixed")}
                className={`px-8 py-3 rounded-full font-semibold text-sm md:text-base transition-all duration-300 border ${
                  selectedTrack === track.id
                    ? "bg-blue-600 border-blue-600 text-white shadow-md"
                    : "bg-white border-slate-200 text-slate-800 hover:bg-slate-50"
                }`}
              >
                {track.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left max-w-6xl mx-auto">
            {trackOptions[selectedTrack].map((option, idx) => {
              const cardColors = getCardColors(idx);
              return (
                <motion.div
                  key={option.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className="bg-card rounded-[28px] border border-slate-200/60 p-8 flex flex-col gap-4 relative overflow-hidden transition-all duration-300 shadow-soft hover:shadow-elevated"
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${cardColors.icon}`}>
                    {getTrackIcon(option.icon)}
                  </div>
                  <h3 className="text-xl font-bold font-display text-slate-900">
                    {option.title}
                  </h3>
                  <p className="text-sm md:text-[14.5px] text-muted-foreground leading-relaxed">
                    {option.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
      
      <section className="py-12 bg-background">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-primary/40" />
            <span className="text-xs font-bold uppercase tracking-[0.14em] text-primary">PRICING</span>
            <div className="h-px w-12 bg-primary/40" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold font-display text-foreground tracking-tight text-center">Plans & pricing</h2>
          <div className="mx-auto mt-4 h-1.5 w-28 rounded-full bg-gradient-to-r from-primary to-accent" />

          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {plans.map((plan) => (
              <div
                key={plan.id}
                className={`relative overflow-hidden rounded-[28px] bg-card p-8 transition-transform hover:translate-y-[-6px] ${plan.recommended ? 'ring-1 ring-primary/20' : 'border border-border'}`}
                style={{ WebkitTapHighlightColor: 'transparent' }}
              >
                <div className="absolute left-6 right-6 -top-3 h-2 rounded-t-[18px] bg-gradient-to-r from-primary to-accent shadow-glow" />

                {plan.recommended && (
                  <div className="absolute left-1/2 top-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-foreground px-4 py-1 text-sm font-semibold text-primary-foreground">Best value</div>
                )}

                <div className="flex flex-col h-full">
                  <h3 className="text-lg font-semibold text-foreground">{plan.title}</h3>

                  <div className="mt-6 flex items-baseline gap-4">
                    <p className="text-4xl font-extrabold text-primary leading-none">{plan.price}</p>
                    <p className="text-sm text-muted-foreground">{plan.subtitle}</p>
                  </div>

                  <ul className="mt-6 space-y-4 flex-1">
                    {plan.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <svg className="mt-1 h-4 w-4 flex-shrink-0 text-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                          <path d="M5 12l4 4L19 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span className="leading-6">{b}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8">
                    <button 
                      onClick={() => setIsBookSessionOpen(true)}
                      className="w-full rounded-[14px] bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg hover:bg-primary/90 transition-colors"
                    >
                      Enroll Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CallToAction />
      <CustomFAQ faqs={gmatSelfPacedFaqs} title="GMAT Self-Paced FAQs" />
      <Footer />
      <BookSessionDialog open={isBookSessionOpen} onOpenChange={setIsBookSessionOpen} />
    </div>
  );
};

export default GmatSelfPaced;

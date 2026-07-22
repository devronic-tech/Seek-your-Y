import React, { useState } from "react";
import { BookOpen, Zap, Activity, Gift, ChevronDown, BarChart3 } from "lucide-react";
import { Footer } from "@/components/Footer";
import { ProgramHero } from "@/components/ProgramHero";
import { BookSessionDialog } from "@/components/BookSessionDialog";
import { CustomFAQ } from "@/components/CustomFAQ";
import { CallToAction } from "@/components/CallToAction";

const selfPacedFaqs = [
  {
    question: "How long is the self-paced course valid for?",
    answer: "Each course comes with 6 months of validity from the date of purchase, giving you plenty of study time."
  },
  {
    question: "Are mock tests included in the self-paced plan?",
    answer: "Yes, our self-paced plans include the full GMAT/GRE Quant test series with simulated full-length mocks."
  },
  {
    question: "Can I upgrade to private tutoring later if I get stuck?",
    answer: "Absolutely. You can upgrade to a private tutoring or live prep tier at any point during your preparation."
  },
  {
    question: "How do I get my doubts resolved?",
    answer: "You get access to our online student doubt forum where you can post queries and receive expert assistance."
  }
];
import analyticsIcon from "@/assets/paced-icon/analytics.webp";
import booksIcon from "@/assets/paced-icon/books.webp";
import qaIcon from "@/assets/paced-icon/qa.webp";
import since1993Icon from "@/assets/paced-icon/since-1993.webp";
import studentIcon from "@/assets/paced-icon/student.webp";
import teacherIcon from "@/assets/paced-icon/teacher.webp";

const SelfPaced = () => {
  const [isBookSessionOpen, setIsBookSessionOpen] = useState(false);

  const [selectedTrack, setSelectedTrack] = useState("quant");

  const topScorers = [
    { name: "Anant Govil", school: "DTU - DELHI TECHNOLOGICAL UNIVERSITY", score: "323" },
    { name: "Shaurya Srivastava", school: "NIIT UNIVERSITY", score: "322" },
    { name: "Eshan Singh", school: "DYPIEMR", score: "321" },
    { name: "Soumojit Dalui", school: "SRM, CHENNAI", score: "320" },
  ];

  const features = [
    "Concept videos: 40+ hours of GRE prep recordings",
    "Sectional and full length tests to simulate exam conditions",
    "Faculty support: personal doubt-clearing sessions",
    "Online study material and app access",
    "Access to local centers for mock tests and labs",
  ];



  const trackOptions = {
    quant: [
      {
        id: "quant-syllabus",
        icon: "📊",
        title: "Full ETS Quant syllabus",
        description: "Arithmetic, Algebra, Geometry and Data Analysis — every topic, with QC, Numeric Entry and multi-answer strategies.",
      },
      {
        id: "quant-logic",
        icon: "🧠",
        title: "Logic over formulas",
        description: "Aman's signature approach: estimation, elimination and number sense that saves minutes.",
      },
      {
        id: "quant-drills",
        icon: "⏱️",
        title: "Timed drills",
        description: "Section-length drills (12Q/21min and 15Q/26min) that build 165+ pace.",
      },
    ],
    verbal: [
      {
        id: "verbal-rc",
        icon: "📖",
        title: "RC + Critical Reasoning",
        description: "A repeatable process for Reading Comprehension and CR questions — assumptions, strengthen/weaken, paradox and conclusion.",
      },
      {
        id: "verbal-tc",
        icon: "✏️",
        title: "TC & SE mastery",
        description: "Text Completion (1–3 blanks) and Sentence Equivalence with logic-based cluing — not blind vocab guessing.",
      },
      {
        id: "verbal-vocab",
        icon: "💡",
        title: "High-frequency vocab",
        description: "Curated word lists with mnemonics, usage and daily quizzes — no 3,500-word grid.",
      },
    ],
    mixed: [
      {
        id: "mixed-syllabus",
        icon: "📚",
        title: "150+ video lessons",
        description: "Every Quant and Verbal concept on the ETS syllabus — arithmetic to data analysis, RC and Critical Reasoning to Sentence Equivalence — taught logic-first.",
      },
      {
        id: "mixed-practice",
        icon: "🎯",
        title: "4,000+ practice questions",
        description: "Topic-wise sets, timed drills and full sectional tests with detailed video solutions.",
      },
      {
        id: "mixed-analytics",
        icon: "📈",
        title: "Smart analytics + AWA",
        description: "Track accuracy, pace and weak topics — plus AWA templates and 2 evaluated essays.",
      },
    ],
  };

  const getTrackIcon = (icon) => {
    const iconMap = {
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

  const getCardColors = (index) => {
    const colors = [
      { bg: "bg-card", border: "border-border", icon: "bg-primary text-primary-foreground" },
      { bg: "bg-card", border: "border-border", icon: "bg-accent text-accent-foreground" },
      { bg: "bg-card", border: "border-border", icon: "bg-[hsl(var(--exam-gold))] text-foreground" },
    ];
    return colors[index % 3];
  };

  return (
    <div className="bg-background text-foreground">
      <ProgramHero type="gre" />

      {/* MAIN CONTENT - Description + Form */}
      <section className="py-16">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <div className="w-full">
            <div className="prose max-w-none text-lg md:text-xl text-slate-800 dark:text-slate-200 font-medium leading-relaxed">
              <p>
                GRE Self-paced coaching allows students to prepare for the GRE at their convenience. These are pre-recorded videos that cover all concepts tested on the GRE with examples of applications of those concepts. GRE online training in a self-paced environment ensures that students can speed up or slow down their preparation based on their schedules.
              </p>

              <ul className="mt-6 space-y-4 list-disc pl-6 text-lg md:text-xl text-slate-800 dark:text-slate-200 font-medium">
                {features.map((f) => (
                  <li key={f} className="text-slate-800 dark:text-slate-200">{f}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Seekyoury - Feature Cards */}
     
    

      {/* Pick Your Track Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-12 bg-primary/40" />
              <span className="text-sm font-bold uppercase tracking-[0.14em] text-primary">CHOOSE YOUR TRACK</span>
              <div className="h-px w-12 bg-primary/40" />
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold font-display text-foreground tracking-tight text-center">Pick your track</h2>
            <p className="mt-4 text-lg md:text-xl font-medium leading-7 text-slate-700">Already strong in one section? Prep only what you need — or take the full course.</p>
          </div>

          {/* Toggle Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button
              onClick={() => setSelectedTrack("mixed")}
              className={`px-9 py-3.5 rounded-full font-bold text-base md:text-lg transition ${
                selectedTrack === "mixed"
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "border border-border bg-card text-foreground hover:border-primary hover:bg-primary/5"
              }`}
            >
              Mixed (Quant + Verbal)
            </button>
            <button
              onClick={() => setSelectedTrack("quant")}
              className={`px-9 py-3.5 rounded-full font-bold text-base md:text-lg transition ${
                selectedTrack === "quant"
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "border border-border bg-card text-foreground hover:border-primary hover:bg-primary/5"
              }`}
            >
              Quant Only
            </button>
            <button
              onClick={() => setSelectedTrack("verbal")}
              className={`px-9 py-3.5 rounded-full font-bold text-base md:text-lg transition ${
                selectedTrack === "verbal"
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "border border-border bg-card text-foreground hover:border-primary hover:bg-primary/5"
              }`}
            >
              Verbal Only
            </button>
          </div>

          {/* Track Cards */}
          <div className="grid gap-6 lg:grid-cols-3">
            {trackOptions[selectedTrack].map((card, index) => {
              const colors = getCardColors(index);
              return (
                <div
                  key={card.id}
                  className={`rounded-[2rem] border-2 ${colors.border} ${colors.bg} p-8 shadow-sm hover:shadow-lg transition-shadow duration-200`}
                >
                  <div className={`mb-6 flex h-16 w-16 items-center justify-center rounded-3xl ${colors.icon}`}>
                    {getTrackIcon(card.icon)}
                  </div>
                  <h3 className="text-2xl font-extrabold text-slate-950">{card.title}</h3>
                  <p className="mt-4 text-base md:text-lg text-slate-600 font-medium leading-relaxed">{card.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-12 bg-primary/40" />
              <span className="text-xs font-bold uppercase tracking-[0.14em] text-primary">PRICING</span>
              <div className="h-px w-12 bg-primary/40" />
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold font-display text-foreground tracking-tight text-center">Plans & pricing</h2>
            <p className="mt-4 text-sm leading-7 text-muted-foreground sm:text-base">Priced below every major alternative — without cutting a single corner.</p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3 mb-12">
            {/* Quant Track Card */}
            <div className="relative rounded-[2rem] border-2 border-border bg-card p-8 shadow-sm hover:shadow-lg transition-shadow duration-200">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-slate-950">Quant Track</h3>
                <div className="mt-4">
                  <p className="text-4xl font-bold text-primary">₹8,999</p>
                  <p className="mt-2 text-sm text-muted-foreground">6-month access</p>
                </div>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <svg className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                  <span className="text-slate-700">80+ Quant video lessons</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                  <span className="text-slate-700">2,000+ practice questions</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                  <span className="text-slate-700">10 Quant sectional tests</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                  <span className="text-slate-700">Doubt forum access</span>
                </li>
              </ul>

              <button 
                onClick={() => setIsBookSessionOpen(true)}
                className="w-full rounded-full px-6 py-3 font-semibold text-primary-foreground bg-primary shadow hover:brightness-95 transition-all duration-200"
              >
                Enroll Now
              </button>
            </div>

            {/* Complete (Mixed) Card - Best Value */}
            <div className="relative rounded-[2rem] border-2 ring-1 ring-primary/20 bg-card p-8 shadow-lg hover:shadow-xl transition-shadow duration-200">
              <div className="absolute left-1/2 top-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-foreground px-4 py-1 text-sm font-semibold text-primary-foreground">Best value</div>
              
              <div className="mb-6 pt-4">
                <h3 className="text-2xl font-bold text-foreground">Complete (Mixed)</h3>
                <div className="mt-4">
                  <p className="text-4xl font-bold text-primary">₹14,999</p>
                  <p className="mt-2 text-sm text-muted-foreground">12-month access</p>
                </div>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <svg className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                  <span className="text-slate-700">Full Quant + Verbal (incl. CR) course</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                  <span className="text-slate-700">4,000+ practice questions</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                  <span className="text-slate-700">Full 30-test GRE Test Series included</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                  <span className="text-slate-700">AWA templates + 2 essay reviews</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                  <span className="text-slate-700">Monthly live strategy session</span>
                </li>
              </ul>

              <button 
                onClick={() => setIsBookSessionOpen(true)}
                className="w-full rounded-full px-6 py-3 font-semibold text-primary-foreground bg-primary shadow hover:brightness-95 transition-all duration-200"
              >
                Enroll Now
              </button>
            </div>

            {/* Verbal Track Card */}
            <div className="relative rounded-[2rem] border-2 border-border bg-card p-8 shadow-sm hover:shadow-lg transition-shadow duration-200">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-slate-950">Verbal Track</h3>
                <div className="mt-4">
                  <p className="text-4xl font-bold text-primary">₹8,999</p>
                  <p className="mt-2 text-sm text-muted-foreground">6-month access</p>
                </div>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <svg className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                  <span className="text-slate-700">70+ Verbal video lessons (RC, CR, SC)</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                  <span className="text-slate-700">Vocab program + app quizzes</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                  <span className="text-slate-700">10 Verbal sectional tests</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                  <span className="text-slate-700">Doubt forum access</span>
                </li>
              </ul>

              <button 
                onClick={() => setIsBookSessionOpen(true)}
                className="w-full rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3 font-semibold text-white shadow hover:opacity-95 transition-all duration-200"
              >
                Enroll Now
              </button>
            </div>
          </div>

          <div className="rounded-xl bg-indigo-50 border border-indigo-200 p-6 text-center">
            <p className="text-sm text-indigo-900">
              <span className="font-semibold">How we compare:</span> Princeton Review/Manya online GRE courses run ₹30,000–40,000, Jamboree ₹30,000–35,000, and Magoosh about ₹16,000 (without India-specific mentoring or a full test series). Our Complete track is ₹14,999 with the 30-test series included.
            </p>
          </div>
        </div>
      </section>



      {/* Comparison Table */}
     
     

      <CallToAction />
      <CustomFAQ faqs={selfPacedFaqs} title="Self-Paced Course FAQs" />
      <Footer />
      <BookSessionDialog open={isBookSessionOpen} onOpenChange={setIsBookSessionOpen} />
    </div>
  );
};

export default SelfPaced;

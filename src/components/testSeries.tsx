import React, { useState } from "react";
import { motion } from "framer-motion";
import { FileText, Calculator, Languages, Mic, BarChart3, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Footer } from "@/components/Footer";
import { BookSessionDialog } from "@/components/BookSessionDialog";

const TestSeriesComponent: React.FC = () => {
  const [isBookSessionOpen, setIsBookSessionOpen] = useState(false);

  const greCards = [
    {
      title: "10 full-length mocks",
      description: "Adaptive, exam-interface mocks matching real difficulty, timing (12Q/18min ... 15Q/26min) and scoring.",
      icon: FileText,
      gradient: "from-blue-600 to-blue-400",
    },
    {
      title: "10 Quant sectionals",
      description: "Arithmetic to Data Analysis — topic-weighted exactly like ETS.",
      icon: Calculator,
      gradient: "from-orange-500 to-pink-500",
    },
    {
      title: "10 Verbal sectionals",
      description: "RC, Critical Reasoning, TC and SE in real section proportions.",
      icon: Languages,
      gradient: "from-cyan-500 to-blue-500",
    },
    {
      title: "Live analysis",
      description: "Group analysis session after each mock weekend + error-log templates.",
      icon: Mic,
      gradient: "from-purple-600 to-indigo-600",
    },
  ];

  const gmatCards = [
    {
      title: "10 full-length mocks",
      description: "Focus interface, 205–805 scoring, and the review-&-edit tool included.",
      icon: FileText,
      gradient: "from-blue-600 to-blue-400",
    },
    {
      title: "10 DI sectionals",
      description: "All five DI types — DS, MSR, tables, graphics, two-part — the section that decides percentiles.",
      icon: BarChart3,
      gradient: "from-purple-600 to-indigo-600",
    },
    {
      title: "10 Quant + Verbal sectionals",
      description: "Five of each, calibrated to GMAC difficulty curves.",
      icon: Calculator,
      gradient: "from-orange-500 to-pink-500",
    },
    {
      title: "Live analysis",
      description: "Faculty-led mock debriefs on strategy, pacing and answer-changing tactics.",
      icon: Mic,
      gradient: "from-purple-600 to-indigo-600",
    },
  ];

  return (
    <div className="bg-background text-foreground">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0052CC] via-[#003A99] to-[#001F5C] pt-16 pb-24 text-white">
        {/* Soft decorative glow */}
        <div className="absolute right-0 top-0 h-[400px] w-[400px] rounded-full bg-blue-500/10 blur-3xl pointer-events-none" />
        <div className="absolute left-1/4 bottom-0 h-[300px] w-[300px] rounded-full bg-indigo-500/15 blur-3xl pointer-events-none" />
        
        <div className="max-w-[1200px] mx-auto px-6 text-left relative z-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-1 text-xs text-blue-200/80 mb-6 font-medium">
            <Link to="/" className="hover:text-white transition">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Test Series</span>
          </div>

          <div className="max-w-3xl">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-display leading-[1.15] tracking-tight mb-6"
            >
              GRE & GMAT Test Series
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg sm:text-xl text-blue-100 font-normal leading-relaxed mb-8"
            >
              30 realistic tests per exam — 10 full-length adaptive mocks plus 20 sectionals — with the analytics to turn every attempt into a score improvement.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <button 
                onClick={() => setIsBookSessionOpen(true)}
                className="inline-flex items-center justify-center rounded-2xl bg-blue-600 px-8 py-4 font-bold text-white shadow-lg shadow-blue-500/25 transition hover:bg-blue-700 hover:shadow-xl hover:scale-[1.02] active:scale-95 duration-200"
              >
                Book a Free Demo
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. GRE TEST SERIES SECTION */}
      <section className="py-20 px-6 bg-slate-50/50">
        <div className="max-w-[1200px] mx-auto text-center">
          <span className="text-xs md:text-sm font-bold uppercase tracking-[0.15em] text-blue-600 block mb-3">GRE</span>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold font-display text-foreground tracking-tight leading-tight">
            GRE Test Series — ₹4,999
          </h2>
          <div className="w-16 h-1 bg-blue-600 rounded-full mx-auto my-5" />
          
          <p className="text-base md:text-lg text-muted-foreground font-normal leading-relaxed max-w-3xl mx-auto mb-14">
            Section-adaptive mocks calibrated to the shorter GRE, with percentile benchmarking against thousands of test-takers.
          </p>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left mb-12">
            {greCards.map((card, idx) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={idx}
                  whileHover={{ y: -6, boxShadow: "0 20px 40px -15px rgba(59, 130, 246, 0.1)" }}
                  className="bg-card rounded-[24px] border border-blue-500/10 p-7 flex flex-col gap-4 relative overflow-hidden transition-all duration-300 shadow-soft"
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-tr ${card.gradient}`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold font-display text-foreground">
                    {card.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {card.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

          <button 
            onClick={() => setIsBookSessionOpen(true)}
            className="inline-flex items-center justify-center rounded-2xl bg-blue-600 px-8 py-4 font-bold text-white shadow-lg shadow-blue-500/25 transition hover:bg-blue-700 hover:shadow-xl duration-200"
          >
            Get GRE Test Series — ₹4,999
          </button>
        </div>
      </section>

      {/* 3. GMAT TEST SERIES SECTION */}
      <section className="py-20 px-6 bg-white border-t border-slate-100">
        <div className="max-w-[1200px] mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold font-display text-foreground tracking-tight leading-tight">
            GMAT Focus Test Series — ₹5,999
          </h2>
          <div className="w-16 h-1 bg-blue-600 rounded-full mx-auto my-5" />
          
          <p className="text-base md:text-lg text-muted-foreground font-normal leading-relaxed max-w-3xl mx-auto mb-14">
            Question-adaptive Focus Edition mocks with sectional and sub-sectional gap analysis across Quant, Verbal and DI.
          </p>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left mb-12">
            {gmatCards.map((card, idx) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={idx}
                  whileHover={{ y: -6, boxShadow: "0 20px 40px -15px rgba(59, 130, 246, 0.1)" }}
                  className="bg-card rounded-[24px] border border-blue-500/10 p-7 flex flex-col gap-4 relative overflow-hidden transition-all duration-300 shadow-soft"
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-tr ${card.gradient}`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold font-display text-foreground">
                    {card.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {card.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

          <button 
            onClick={() => setIsBookSessionOpen(true)}
            className="inline-flex items-center justify-center rounded-2xl bg-blue-600 px-8 py-4 font-bold text-white shadow-lg shadow-blue-500/25 transition hover:bg-blue-700 hover:shadow-xl duration-200"
          >
            Get GMAT Test Series — ₹5,999
          </button>
        </div>
      </section>

      {/* 4. VALUE CHECK SECTION */}
      <section className="py-20 px-6 bg-slate-50/50 border-t border-slate-100">
        <div className="max-w-[1200px] mx-auto text-center">
          <span className="text-xs md:text-sm font-bold uppercase tracking-[0.15em] text-[#0052CC] block">
            VALUE CHECK
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-950 mt-4 mb-3 tracking-tight">
            Why this is the <span className="text-[#0052CC]">best-value</span> series anywhere
          </h2>
          <div className="w-16 h-1 bg-[#0052CC] rounded-full mx-auto my-5" />

          {/* Table Container */}
          <div className="mt-12 overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-soft text-left">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-left text-sm md:text-base">
                <thead>
                  <tr className="border-b border-slate-200">
                    <th className="px-6 py-4 bg-slate-50 w-1/4"></th>
                    <th className="px-6 py-4 bg-[#0052CC] text-white font-bold text-center text-lg rounded-t-none">
                      Seek Your Y
                    </th>
                    <th className="px-6 py-4 bg-slate-950 text-white font-bold text-center text-lg rounded-t-none">
                      Official Mocks
                    </th>
                    <th className="px-6 py-4 bg-slate-600 text-white font-bold text-center text-lg rounded-t-none">
                      Other Prep
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr>
                    <td className="px-6 py-5 font-semibold text-slate-900 bg-slate-50/30">Total tests</td>
                    <td className="px-6 py-5 text-[#0052CC] font-bold text-center bg-blue-50/10">30 tests</td>
                    <td className="px-6 py-5 text-slate-700 text-center">3–4 mocks</td>
                    <td className="px-6 py-5 text-slate-700 text-center">15–25 tests</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-5 font-semibold text-slate-900 bg-slate-50/30">Full-length mocks</td>
                    <td className="px-6 py-5 text-[#0052CC] font-bold text-center bg-blue-50/10">10 adaptive mocks</td>
                    <td className="px-6 py-5 text-slate-700 text-center">3–4 mocks</td>
                    <td className="px-6 py-5 text-slate-700 text-center">5–10 mocks</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-5 font-semibold text-slate-900 bg-slate-50/30">Sectional drills</td>
                    <td className="px-6 py-5 text-[#0052CC] font-bold text-center bg-blue-50/10">20 sectionals</td>
                    <td className="px-6 py-5 text-slate-700 text-center">None</td>
                    <td className="px-6 py-5 text-slate-700 text-center">10–15 sectionals</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-5 font-semibold text-slate-900 bg-slate-50/30">Live mock debriefs</td>
                    <td className="px-6 py-5 text-[#0052CC] font-bold text-center bg-blue-50/10">Faculty-led strategy review</td>
                    <td className="px-6 py-5 text-slate-700 text-center">None</td>
                    <td className="px-6 py-5 text-slate-700 text-center">None / Recorded only</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-5 font-semibold text-slate-900 bg-slate-50/30">Performance tracking</td>
                    <td className="px-6 py-5 text-[#0052CC] font-bold text-center bg-blue-50/10">Advanced gap analysis</td>
                    <td className="px-6 py-5 text-slate-700 text-center">Basic score report</td>
                    <td className="px-6 py-5 text-slate-700 text-center">Standard report</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-5 font-semibold text-slate-900 bg-slate-50/30">Approx. price</td>
                    <td className="px-6 py-5 text-[#0052CC] font-extrabold text-center bg-blue-50/10 text-lg">
                      ₹4,999 (GRE) / ₹5,999 (GMAT)
                    </td>
                    <td className="px-6 py-5 text-slate-700 text-center">
                      ₹9,200 (GMAT) / ₹10,000 (GRE)
                    </td>
                    <td className="px-6 py-5 text-slate-700 text-center">
                      ₹6,000 – ₹12,000
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* 5. DIAGNOSTIC CTA */}
      <section className="py-20 px-6 bg-white border-t border-slate-100">
        <div className="max-w-[800px] mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold font-display text-foreground tracking-tight leading-tight">
            Take a free diagnostic mock
          </h2>
          <div className="w-16 h-1 bg-blue-600 rounded-full mx-auto my-5" />
          
          <p className="text-base md:text-lg text-muted-foreground font-normal leading-relaxed max-w-2xl mx-auto mb-8">
            Not sure where you stand? Start with one free full-length mock — GRE or GMAT — and get a strategy call on your report.
          </p>

          <button 
            onClick={() => setIsBookSessionOpen(true)}
            className="inline-flex items-center justify-center rounded-2xl bg-blue-600 px-8 py-4 font-bold text-white shadow-lg shadow-blue-500/25 transition hover:bg-blue-700 hover:shadow-xl duration-200"
          >
            Take the Free Diagnostic
          </button>
        </div>
      </section>

      {/* 6. READY CTA FOOTER BANNER */}
      <section className="py-20 px-6 bg-slate-50 -mx-6 lg:-mx-8 border-t border-slate-100">
        <div className="mx-auto max-w-[1200px]">
          <div className="rounded-[36px] border border-slate-200 bg-gradient-to-br from-[#0052CC] to-[#003A99] p-12 text-white shadow-soft sm:p-16 text-center">
            <div className="space-y-6">
              <div className="flex justify-center">
                <div className="rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm font-semibold text-blue-100 backdrop-blur">
                  Ready for your next step?
                </div>
              </div>
              <h2 className="text-4xl font-bold sm:text-5xl md:text-6xl">Ready to find your Y?</h2>
              <p className="mx-auto max-w-2xl text-lg leading-8 text-blue-100">
                Book a free demo session and a 1-on-1 strategy call. We'll map your target score, timeline and study plan — no strings attached.
              </p>
              <div className="pt-6">
                <button 
                  onClick={() => setIsBookSessionOpen(true)}
                  className="inline-flex rounded-full bg-white px-8 py-3 text-base font-semibold text-[#0052CC] shadow-lg shadow-white/20 transition hover:shadow-xl hover:bg-slate-50"
                >
                  Book a Free Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <Footer />

      {/* BOOK DEMO MODAL */}
      <BookSessionDialog open={isBookSessionOpen} onOpenChange={setIsBookSessionOpen} />
    </div>
  );
};

export default TestSeriesComponent;

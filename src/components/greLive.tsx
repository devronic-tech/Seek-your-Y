import React, { useState } from "react";
import { CustomFAQ } from "@/components/CustomFAQ";
import { CallToAction } from "@/components/CallToAction";
import { Footer } from "@/components/Footer";
import { BookOpen, Zap, Activity, Gift, ChevronDown } from "lucide-react";
import { ProgramHero } from "@/components/ProgramHero";
import { BookSessionDialog } from "@/components/BookSessionDialog";
import analyticsIcon from "@/assets/paced-icon/analytics.webp";
import booksIcon from "@/assets/paced-icon/books.webp";
import qaIcon from "@/assets/paced-icon/qa.webp";
import since1993Icon from "@/assets/paced-icon/since-1993.webp";
import studentIcon from "@/assets/paced-icon/student.webp";
import teacherIcon from "@/assets/paced-icon/teacher.webp";

const GreLive: React.FC = () => {
  const [isBookSessionOpen, setIsBookSessionOpen] = useState(false);

  const greLiveFaqs = [
    {
      question: "How are the GRE live interactive classes conducted?",
      answer: "Our GRE live classes are conducted online via live video sessions with interactive whiteboards. You can ask questions, engage in chat, and get real-time feedback from your instructor."
    },
    {
      question: "What happens if I miss a live class?",
      answer: "No worries! Every live class is recorded and uploaded to your student dashboard within 24 hours. You will have unlimited access to review them whenever you want."
    },
    {
      question: "Are study materials and practice tests included?",
      answer: "Yes, you get comprehensive prep material, including dedicated GRE Quant/Verbal textbooks, question banks, and 5+ full-length computer-adaptive mock tests."
    },
    {
      question: "How do I get my doubts resolved outside of class hours?",
      answer: "You can post your queries in our interactive student groups. We also host scheduled live doubt-clearing sessions where you can work directly with our expert tutors."
    },
    {
      question: "Can I try a demo session before fully committing?",
      answer: "Absolutely! You can book a free live demo session to experience the portal interface, check our teaching method, and plan your GRE strategy."
    }
  ];

  const topScorers = [
    { name: "Siddhant Tomar", school: "BTECH IT", score: "328" },
    { name: "Manya Sharma", school: "PUNJAB COLLEGE", score: "324" },
    { name: "Anant Govil", school: "DTU - DELHI TECHNOLOGICAL UNIVERSITY", score: "323" },
    { name: "Shaurya Srivastava", school: "NIIT UNIVERSITY", score: "322" },
  ];

  const featureCards = [
    {
      icon: since1993Icon,
      title: "Daily live classes",
      description:
        "Concept sessions covering the full ETS syllabus — Quant, RC, Critical Reasoning, TC/SE and AWA — with same-day recordings.",
    },
    {
      icon: analyticsIcon,
      title: "Live doubt-solving",
      description: "Dedicated doubt hours every week — no question waits more than 24 hours.",
    },
    {
      icon: teacherIcon,
      title: "Timed drills in class",
      description: "Solve under exam pressure with the batch, then break down every trap together.",
    },
    {
      icon: booksIcon,
      title: "Weekly mock analysis",
      description:
        "Full mock every weekend followed by a live analysis session on strategy and pacing.",
    },
    {
      icon: studentIcon,
      title: "Small batches",
      description: "Capped batch size so faculty know your name, weak areas and your target.",
    },
    {
      icon: qaIcon,
      title: "Everything included",
      description: "Self-paced course access, 30-test series and study material bundled with every batch.",
    },
  ];



  return (
    <div className="bg-background text-foreground">
      <ProgramHero type="gre" />

      {/* MAIN CONTENT - Description + Form */}
      <section className="py-16">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <div className="w-full">
            <div className="prose max-w-none text-lg md:text-xl text-slate-800 dark:text-slate-200 font-medium leading-relaxed space-y-4">
              <p>
                GRE online classes are live, scheduled sessions that combine classroom rigor with online convenience. Our live GRE training provides in-depth concept clarity, application practice and continuous doubt resolution so you progress with confidence.
              </p>

              <p>
                Students attending live online classes get access to structured schedules, live doubt-clearing, recordings and an integrated LMS to revise lessons at their own pace.
              </p>

              <ul className="mt-6 space-y-4 list-disc pl-6 text-lg md:text-xl">
                <li className="text-slate-800 dark:text-slate-200"><strong>Comprehensive GRE online course:</strong> 48 hrs of GRE live online classes with faculty for in-depth understanding and practice.</li>
                <li className="text-slate-800 dark:text-slate-200"><strong>Unlimited doubt-clearing sessions:</strong> Schedule live doubt-clearing sessions with faculty from 7am to midnight every day.</li>
                <li className="text-slate-800 dark:text-slate-200"><strong>GRE practice tests and books:</strong> Course includes books, full-length tests and online preparation tools.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Everything, live - Feature Cards Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-blue-600 mb-4">WHAT YOU GET</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-display text-foreground mb-6">Everything, live</h2>
            <div className="flex justify-center">
              <div className="h-1.5 w-24 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full" />
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featureCards.map((card, index) => (
              <div
                key={index}
                className="group relative rounded-2xl border border-slate-200/60 bg-gradient-to-br from-white via-blue-50/30 to-white p-8 shadow-sm transition-all duration-300 hover:shadow-xl hover:border-blue-400 hover:-translate-y-1"
              >
                {/* Gradient accent top-left corner */}
                <div className="absolute -top-0.5 -left-0.5 w-20 h-20 bg-gradient-to-br from-blue-400/20 to-transparent rounded-2xl" />
                <div className="absolute -bottom-0.5 -right-0.5 w-16 h-16 bg-gradient-to-tl from-indigo-300/10 to-transparent rounded-2xl" />
                
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-indigo-400 to-blue-600 rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative">
                  <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 via-blue-400 to-cyan-400 shadow-lg shadow-blue-500/30 group-hover:shadow-2xl group-hover:shadow-blue-500/40 transition-all duration-300">
                    <img src={card.icon} alt={card.title} className="h-8 w-8 object-contain filter drop-shadow-md" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-950 leading-tight">{card.title}</h3>
                  <p className="mt-3 text-base md:text-lg leading-relaxed text-slate-600 group-hover:text-slate-700 transition-colors">{card.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Batches Section */}
      <section className="py-20 bg-slate-50">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-blue-600 mb-4">BATCHES</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-display text-foreground mb-6">Upcoming batches</h2>
            <div className="flex justify-center">
              <div className="h-1.5 w-24 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full" />
            </div>
            <p className="mt-6 text-xl md:text-2xl text-slate-600 font-medium">Sample schedule — to be replaced with live batch data.</p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-200/60 shadow-md bg-white">
            <table className="w-full min-w-[650px]">
              <thead>
                <tr className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 text-white">
                  <th className="px-7 py-6 text-left font-bold text-base md:text-lg">Batch</th>
                  <th className="px-7 py-6 text-left font-bold text-base md:text-lg">Starts</th>
                  <th className="px-7 py-6 text-left font-bold text-base md:text-lg">Schedule</th>
                  <th className="px-7 py-6 text-left font-bold text-base md:text-lg">Duration</th>
                  <th className="px-7 py-6 text-left font-bold text-base md:text-lg">Mode</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b border-slate-100 hover:bg-blue-50/50 transition-colors duration-200 group">
                  <td className="px-7 py-6 text-slate-950 font-extrabold text-base md:text-lg">
                    <span className="inline-flex items-center gap-2.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-blue-500 group-hover:bg-blue-600 transition-colors"></span>
                      Weekday Evening
                    </span>
                  </td>
                  <td className="px-7 py-6 text-slate-800 text-base md:text-lg font-medium">Aug 3, 2026</td>
                  <td className="px-7 py-6 text-slate-800 text-base md:text-lg font-medium">Mon–Fri, 8–9:30 PM IST</td>
                  <td className="px-7 py-6 text-slate-800 text-base md:text-lg"><span className="inline-flex px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 text-sm md:text-base font-bold">10 weeks</span></td>
                  <td className="px-7 py-6 text-slate-800 text-base md:text-lg"><span className="inline-flex px-4 py-1.5 rounded-full bg-green-100 text-green-700 text-sm md:text-base font-bold">Online</span></td>
                </tr>
                <tr className="bg-slate-50/40 border-b border-slate-100 hover:bg-blue-50/50 transition-colors duration-200 group">
                  <td className="px-7 py-6 text-slate-950 font-extrabold text-base md:text-lg">
                    <span className="inline-flex items-center gap-2.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-purple-500 group-hover:bg-purple-600 transition-colors"></span>
                      Weekend Intensive
                    </span>
                  </td>
                  <td className="px-7 py-6 text-slate-800 text-base md:text-lg font-medium">Aug 8, 2026</td>
                  <td className="px-7 py-6 text-slate-800 text-base md:text-lg font-medium">Sat–Sun, 10 AM–1 PM IST</td>
                  <td className="px-7 py-6 text-slate-800 text-base md:text-lg"><span className="inline-flex px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 text-sm md:text-base font-bold">12 weeks</span></td>
                  <td className="px-7 py-6 text-slate-800 text-base md:text-lg"><span className="inline-flex px-4 py-1.5 rounded-full bg-green-100 text-green-700 text-sm md:text-base font-bold">Online</span></td>
                </tr>
                <tr className="bg-white hover:bg-blue-50/50 transition-colors duration-200 group">
                  <td className="px-7 py-6 text-slate-950 font-extrabold text-base md:text-lg">
                    <span className="inline-flex items-center gap-2.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-orange-500 group-hover:bg-orange-600 transition-colors"></span>
                      Fast-Track Crash
                    </span>
                  </td>
                  <td className="px-7 py-6 text-slate-800 text-base md:text-lg font-medium">Sep 1, 2026</td>
                  <td className="px-7 py-6 text-slate-800 text-base md:text-lg font-medium">Daily, 7–9 PM IST</td>
                  <td className="px-7 py-6 text-slate-800 text-base md:text-lg"><span className="inline-flex px-4 py-1.5 rounded-full bg-orange-100 text-orange-700 text-sm md:text-base font-bold">5 weeks</span></td>
                  <td className="px-7 py-6 text-slate-800 text-base md:text-lg"><span className="inline-flex px-4 py-1.5 rounded-full bg-green-100 text-green-700 text-sm md:text-base font-bold">Online</span></td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="text-center mt-12">
            <button 
              onClick={() => setIsBookSessionOpen(true)}
              className="rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-9 py-3.5 text-white font-extrabold text-lg hover:shadow-lg shadow-md hover:scale-105 transform transition-all duration-300"
            >
              Reserve a Seat
            </button>
          </div>
        </div>
      </section>

      {/* Curriculum & Pricing Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1fr_420px]">
            {/* Left: Curriculum */}
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.14em] text-blue-600 mb-4">CURRICULUM</p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-display text-foreground mb-8">10 weeks, fully mapped</h2>
              
              <div className="space-y-5">
                <div className="flex gap-4 items-center group">
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 text-white flex-shrink-0 shadow-md group-hover:shadow-lg transition-all">
                    <svg className="h-4.5 w-4.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-lg md:text-xl text-slate-950 group-hover:text-blue-600 transition-colors">Weeks 1–3: Quant foundations (arithmetic, algebra) + Vocab sprint</p>
                  </div>
                </div>

                <div className="flex gap-4 items-center group">
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 text-white flex-shrink-0 shadow-md group-hover:shadow-lg transition-all">
                    <svg className="h-4.5 w-4.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-lg md:text-xl text-slate-950 group-hover:text-blue-600 transition-colors">Weeks 4–6: Geometry, Data Analysis + RC, Critical Reasoning, TC/SE strategy</p>
                  </div>
                </div>

                <div className="flex gap-4 items-center group">
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 text-white flex-shrink-0 shadow-md group-hover:shadow-lg transition-all">
                    <svg className="h-4.5 w-4.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-lg md:text-xl text-slate-950 group-hover:text-blue-600 transition-colors">Weeks 7–8: Sectional tests + AWA "Analyze an Issue" workshops</p>
                  </div>
                </div>

                <div className="flex gap-4 items-center group">
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 text-white flex-shrink-0 shadow-md group-hover:shadow-lg transition-all">
                    <svg className="h-4.5 w-4.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-lg md:text-xl text-slate-950 group-hover:text-blue-600 transition-colors">Weeks 9–10: Full mocks + personalised revision plan</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Pricing Card */}
            <div className="relative">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-600/20 via-indigo-600/10 to-blue-600/20 blur-2xl" />
              <div className="relative rounded-3xl border-2 border-blue-500/40 bg-gradient-to-br from-white via-blue-50/30 to-indigo-50/20 p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:border-blue-500/60">
                <div className="absolute -top-4 right-8 z-10">
                  <span className="inline-block rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-1.5 text-xs font-bold uppercase tracking-wider shadow-lg shadow-blue-600/40">All-inclusive</span>
                </div>

                <h3 className="mt-6 text-2xl md:text-3xl font-bold bg-gradient-to-r from-slate-950 to-slate-800 bg-clip-text text-transparent">Live Batch Enrollment</h3>
                
                <div className="mt-8 relative">
                  <div className="absolute -left-4 top-0 w-1.5 h-16 bg-gradient-to-b from-blue-600 to-transparent rounded-r-full" />
                  <p className="text-5xl md:text-6xl font-black bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">₹29,999</p>
                  <p className="mt-2 text-sm text-slate-600 font-medium">One-time • all material included</p>
                </div>

                <div className="mt-10 space-y-4 border-t border-slate-200/60 pt-8">
                  <div className="flex gap-3 group">
                    <div className="flex-shrink-0 mt-0.5">
                      <div className="flex items-center justify-center h-5 w-5 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 shadow-md">
                        <svg className="h-3 w-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </div>
                    <p className="text-slate-700 group-hover:text-slate-900 transition-colors font-medium">60+ hours of live classes</p>
                  </div>

                  <div className="flex gap-3 group">
                    <div className="flex-shrink-0 mt-0.5">
                      <div className="flex items-center justify-center h-5 w-5 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 shadow-md">
                        <svg className="h-3 w-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </div>
                    <p className="text-slate-700 group-hover:text-slate-900 transition-colors font-medium">Self-paced course access (12 months)</p>
                  </div>

                  <div className="flex gap-3 group">
                    <div className="flex-shrink-0 mt-0.5">
                      <div className="flex items-center justify-center h-5 w-5 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 shadow-md">
                        <svg className="h-3 w-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </div>
                    <p className="text-slate-700 group-hover:text-slate-900 transition-colors font-medium">Full 30-test GRE series</p>
                  </div>

                  <div className="flex gap-3 group">
                    <div className="flex-shrink-0 mt-0.5">
                      <div className="flex items-center justify-center h-5 w-5 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 shadow-md">
                        <svg className="h-3 w-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </div>
                    <p className="text-slate-700 group-hover:text-slate-900 transition-colors font-medium">Doubt hours + mentor check-ins</p>
                  </div>
                </div>

                <button 
                  onClick={() => setIsBookSessionOpen(true)}
                  className="mt-10 w-full rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 px-6 py-4 text-white font-bold text-lg hover:shadow-2xl hover:shadow-blue-600/50 transition-all duration-300 hover:scale-105 transform"
                >
                  Book a Free Demo Class
                </button>
              </div>
            </div>
          </div>

          {/* Comparison Note */}
          <div className="mt-12 rounded-2xl bg-blue-50 border border-blue-200 p-6">
            <p className="text-sm md:text-base text-muted-foreground">
              <span className="font-semibold text-blue-900">How we compare:</span> comparable live GRE programs cost ₹30,000–60,000 (Princeton Review/Manya ₹30–40k, Jamboree ₹30–35k, premium batches higher) — usually with test series sold separately. Ours is ₹29,999 with everything bundled.
            </p>
          </div>
        </div>
      </section>

      <CallToAction />
      <CustomFAQ faqs={greLiveFaqs} />
      <Footer />
      <BookSessionDialog open={isBookSessionOpen} onOpenChange={setIsBookSessionOpen} />
    </div>
  );
};

export default GreLive;
import React, { useState } from "react";
import { CustomFAQ } from "@/components/CustomFAQ";
import { BookOpen, Zap, Activity, Gift, ChevronDown } from "lucide-react";
import analyticsIcon from "@/assets/paced-icon/analytics.webp";
import booksIcon from "@/assets/paced-icon/books.webp";
import qaIcon from "@/assets/paced-icon/qa.webp";
import since1993Icon from "@/assets/paced-icon/since-1993.webp";
import studentIcon from "@/assets/paced-icon/student.webp";
import teacherIcon from "@/assets/paced-icon/teacher.webp";

const GreLive: React.FC = () => {

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
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50/60 to-indigo-50/40 py-20">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_420px] gap-8 items-start">
            <div className="pt-6">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-blue-600">GRE® ONLINE COACHING</p>
              <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-extrabold font-display leading-tight">LOG IN TO THE BEST GRE COACHING CLASSES ONLINE</h1>
              <p className="mt-4 max-w-2xl text-lg md:text-xl text-muted-foreground font-normal">With the Pioneers of GRE Test Prep</p>

              <div className="mt-8 flex flex-wrap gap-4">
                <button className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow hover:opacity-95">
                  TAKE A FREE CLASS
                </button>
                <button className="inline-flex items-center gap-3 rounded-full border border-blue-600 bg-white px-6 py-3 text-sm font-semibold text-blue-600 hover:bg-blue-50">
                  CALL US
                </button>
              </div>
            </div>

            {/* Top scorers card */}
            <div className="relative">
              <div className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-soft">
                <div className="mb-6 flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm uppercase tracking-[0.24em] text-slate-500">GRE Top Scorers</p>
                    <p className="mt-2 text-sm text-slate-600">Recent achievers from our GRE cohort</p>
                  </div>
                  <div className="rounded-3xl bg-[#EAF3FF] px-4 py-2 text-sm font-semibold text-[#0052CC]">2025</div>
                </div>
                <div className="space-y-4">
                  {topScorers.map((s, index) => (
                    <div key={s.name} className={`rounded-3xl p-4 ${index % 2 === 0 ? 'bg-[#F8FAFF]' : 'bg-[#EFF6FF]'}`}>
                      <div className="flex items-center justify-between gap-4">
                        <div className="flex items-center gap-3">
                          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0052CC]/10 text-[#0052CC] font-semibold">
                            {s.name.charAt(0)}
                          </div>
                          <div>
                            <p className="font-semibold text-slate-950">{s.name}</p>
                            <p className="text-sm text-slate-600">{s.school}</p>
                          </div>
                        </div>
                        <div className="rounded-3xl bg-slate-950 px-4 py-3 text-right text-white shadow-sm">
                          <p className="text-[0.65rem] uppercase tracking-[0.24em] text-slate-300">GRE</p>
                          <p className="mt-1 text-2xl font-bold leading-none">{s.score}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT - Description + Form */}
      <section className="py-16">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1fr_360px] items-start">
            <div className="prose max-w-none text-base md:text-lg text-muted-foreground font-normal leading-relaxed">
              <p>
                GRE online classes are live, scheduled sessions that combine classroom rigor with online convenience. Our live GRE training provides in-depth concept clarity, application practice and continuous doubt resolution so you progress with confidence.
              </p>

              <p>
                Students attending live online classes get access to structured schedules, live doubt-clearing, recordings and an integrated LMS to revise lessons at their own pace.
              </p>

              <ul className="mt-6 space-y-3 list-disc pl-5">
                <li className="text-muted-foreground"><strong>Comprehensive GRE online course:</strong> 48 hrs of GRE live online classes with faculty for in-depth understanding and practice.</li>
                <li className="text-muted-foreground"><strong>Unlimited doubt-clearing sessions:</strong> Schedule live doubt-clearing sessions with faculty from 7am to midnight every day.</li>
                <li className="text-muted-foreground"><strong>GRE practice tests and books:</strong> Course includes books, full-length tests and online preparation tools.</li>
              </ul>
            </div>

            <aside className="rounded-2xl border border-border bg-blue-50/50 p-6">
              <h3 className="text-center text-lg font-semibold text-blue-900">Speak to an Expert</h3>
              <form className="mt-4 space-y-3">
                <input className="w-full rounded-lg border border-slate-200 px-3 py-2" placeholder="Name" />
                <div className="flex gap-2">
                  <select className="w-28 rounded-lg border border-slate-200 px-2"> <option>+91</option> </select>
                  <input className="flex-1 rounded-lg border border-slate-200 px-3 py-2" placeholder="Mobile Number" />
                </div>
                <input className="w-full rounded-lg border border-slate-200 px-3 py-2" placeholder="Email Id" />
                <select className="w-full rounded-lg border border-slate-200 px-3 py-2">
                  <option>Interested in?</option>
                </select>
                <select className="w-full rounded-lg border border-slate-200 px-3 py-2">
                  <option>Your City</option>
                </select>
                <select className="w-full rounded-lg border border-slate-200 px-3 py-2">
                  <option>Nearest Center</option>
                </select>
                <label className="flex items-center gap-2 text-sm">
                  <input type="checkbox" /> Stay informed via SMS & WhatsApp
                </label>
                <button className="w-full rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-2 text-white font-semibold hover:opacity-95">Schedule a Call</button>
              </form>
            </aside>
          </div>
        </div>
      </section>

      {/* Everything, live - Feature Cards Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-blue-600 mb-4">WHAT YOU GET</p>
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
                  <h3 className="text-lg font-bold text-slate-950 leading-tight">{card.title}</h3>
                  <p className="mt-3 text-sm md:text-base leading-6 text-slate-600 group-hover:text-slate-700 transition-colors">{card.description}</p>
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
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-blue-600 mb-4">BATCHES</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-display text-foreground mb-6">Upcoming batches</h2>
            <div className="flex justify-center">
              <div className="h-1.5 w-24 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full" />
            </div>
            <p className="mt-6 text-lg text-muted-foreground">Sample schedule — to be replaced with live batch data.</p>
          </div>

          <div className="overflow-hidden rounded-2xl border border-slate-200/60 shadow-md bg-white">
            <table className="w-full">
              <thead>
                <tr className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 text-white">
                  <th className="px-6 py-5 text-left font-semibold text-sm">Batch</th>
                  <th className="px-6 py-5 text-left font-semibold text-sm">Starts</th>
                  <th className="px-6 py-5 text-left font-semibold text-sm">Schedule</th>
                  <th className="px-6 py-5 text-left font-semibold text-sm">Duration</th>
                  <th className="px-6 py-5 text-left font-semibold text-sm">Mode</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b border-slate-100 hover:bg-blue-50/50 transition-colors duration-200 group">
                  <td className="px-6 py-5 text-slate-900 font-semibold text-sm">
                    <span className="inline-flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-blue-500 group-hover:bg-blue-600 transition-colors"></span>
                      Weekday Evening
                    </span>
                  </td>
                  <td className="px-6 py-5 text-slate-700 text-sm">Aug 3, 2026</td>
                  <td className="px-6 py-5 text-slate-700 text-sm">Mon–Fri, 8–9:30 PM IST</td>
                  <td className="px-6 py-5 text-slate-700 text-sm"><span className="inline-flex px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-semibold">10 weeks</span></td>
                  <td className="px-6 py-5 text-slate-700 text-sm"><span className="inline-flex px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-semibold">Online</span></td>
                </tr>
                <tr className="bg-slate-50/40 border-b border-slate-100 hover:bg-blue-50/50 transition-colors duration-200 group">
                  <td className="px-6 py-5 text-slate-900 font-semibold text-sm">
                    <span className="inline-flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-purple-500 group-hover:bg-purple-600 transition-colors"></span>
                      Weekend Intensive
                    </span>
                  </td>
                  <td className="px-6 py-5 text-slate-700 text-sm">Aug 8, 2026</td>
                  <td className="px-6 py-5 text-slate-700 text-sm">Sat–Sun, 10 AM–1 PM IST</td>
                  <td className="px-6 py-5 text-slate-700 text-sm"><span className="inline-flex px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-semibold">12 weeks</span></td>
                  <td className="px-6 py-5 text-slate-700 text-sm"><span className="inline-flex px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-semibold">Online</span></td>
                </tr>
                <tr className="bg-white hover:bg-blue-50/50 transition-colors duration-200 group">
                  <td className="px-6 py-5 text-slate-900 font-semibold text-sm">
                    <span className="inline-flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-orange-500 group-hover:bg-orange-600 transition-colors"></span>
                      Fast-Track Crash
                    </span>
                  </td>
                  <td className="px-6 py-5 text-slate-700 text-sm">Sep 1, 2026</td>
                  <td className="px-6 py-5 text-slate-700 text-sm">Daily, 7–9 PM IST</td>
                  <td className="px-6 py-5 text-slate-700 text-sm"><span className="inline-flex px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-semibold">5 weeks</span></td>
                  <td className="px-6 py-5 text-slate-700 text-sm"><span className="inline-flex px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-semibold">Online</span></td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="text-center">
            <button className="rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-3 text-white font-semibold hover:shadow-lg shadow-md hover:scale-105 transform transition-all duration-300">
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
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-blue-600 mb-4">CURRICULUM</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold font-display text-foreground mb-8">10 weeks, fully mapped</h2>
              
              <div className="space-y-4">
                <div className="flex gap-4 group">
                  <div className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 text-white flex-shrink-0 shadow-md group-hover:shadow-lg transition-all">
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">Weeks 1–3: Quant foundations (arithmetic, algebra) + Vocab sprint</p>
                  </div>
                </div>

                <div className="flex gap-4 group">
                  <div className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 text-white flex-shrink-0 shadow-md group-hover:shadow-lg transition-all">
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">Weeks 4–6: Geometry, Data Analysis + RC, Critical Reasoning, TC/SE strategy</p>
                  </div>
                </div>

                <div className="flex gap-4 group">
                  <div className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 text-white flex-shrink-0 shadow-md group-hover:shadow-lg transition-all">
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">Weeks 7–8: Sectional tests + AWA "Analyze an Issue" workshops</p>
                  </div>
                </div>

                <div className="flex gap-4 group">
                  <div className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 text-white flex-shrink-0 shadow-md group-hover:shadow-lg transition-all">
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">Weeks 9–10: Full mocks + personalised revision plan</p>
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

                <button className="mt-10 w-full rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 px-6 py-4 text-white font-bold text-lg hover:shadow-2xl hover:shadow-blue-600/50 transition-all duration-300 hover:scale-105 transform">
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

      {/* CTA Section */}
      <section className="bg-slate-50 py-20 px-6">
        <div className="mx-auto max-w-[1200px]">
          <div className="rounded-[36px] border border-slate-200 bg-gradient-to-br from-blue-600 via-blue-500 to-indigo-600 p-12 text-white shadow-soft sm:p-16">
            <div className="text-center space-y-6">
              <div className="flex justify-center">
                <div className="rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm font-semibold text-blue-100 backdrop-blur">
                  Your success journey starts here
                </div>
              </div>
              <h2 className="text-4xl font-bold sm:text-5xl md:text-6xl">Ready to find your Y?</h2>
              <p className="mx-auto max-w-2xl text-lg leading-8 text-blue-100">
                Book a free demo session and a 1-on-1 strategy call. We'll map your target score, timeline and study plan — no strings attached.
              </p>
              <div className="pt-6">
                <button className="inline-flex rounded-full bg-white px-8 py-3 text-base font-semibold text-blue-600 shadow-lg shadow-white/20 transition hover:shadow-xl hover:bg-slate-50">
                  Book a Free Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>



      <CustomFAQ faqs={greLiveFaqs} />

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-300 py-16">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <div className="grid gap-12 md:grid-cols-4 sm:grid-cols-2 mb-12">
            {/* Brand */}
            <div>
              <h3 className="text-white font-bold text-lg mb-4">Seek Your Y</h3>
              <p className="text-sm text-slate-400">Your guide to conquering the GRE. Live classes, expert mentorship, and personalized strategies.</p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">Home</a></li>
                <li><a href="#" className="hover:text-white transition">Programs</a></li>
                <li><a href="#" className="hover:text-white transition">Success Stories</a></li>
                <li><a href="#" className="hover:text-white transition">Contact</a></li>
              </ul>
            </div>

            {/* Programs */}
            <div>
              <h4 className="text-white font-semibold mb-4">Programs</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">GRE Live Coaching</a></li>
                <li><a href="#" className="hover:text-white transition">Self-Paced Course</a></li>
                <li><a href="#" className="hover:text-white transition">GMAT Coaching</a></li>
                <li><a href="#" className="hover:text-white transition">Private Tutoring</a></li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="text-white font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">FAQs</a></li>
                <li><a href="#" className="hover:text-white transition">Terms & Conditions</a></li>
                <li><a href="#" className="hover:text-white transition">Refund Policy</a></li>
                <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-slate-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm text-slate-400">
                © 2026 Seek Your Y. All rights reserved.
              </p>
              <div className="flex gap-6">
                <a href="#" className="text-slate-400 hover:text-white transition">
                  <span className="sr-only">Facebook</span>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.991 22 12z" />
                  </svg>
                </a>
                <a href="#" className="text-slate-400 hover:text-white transition">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-7.104 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-slate-400 hover:text-white transition">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default GreLive;
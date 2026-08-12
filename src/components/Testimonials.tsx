import React, { useState } from "react";
import { Sparkles } from "lucide-react";
import priyaImage from "@/assets/person1.jpg";
import vikramImage from "@/assets/person2.jpg";
import praffulImage from "@/assets/student_pics/testimonial1.avif";
import balagopalImage from "@/assets/student_pics/testimonial2.avif";
import sabhyataImage from "@/assets/student_pics/testimonial3.avif";
import manyaImage from "@/assets/student_pics/testimonial4.avif";

const testimonials = [
  {
    name: "Shreshtha",
    role: "GRE Student",
    quote: "Aman doesn't just teach the syllabus, he mentors me through every doubt and weak area.",
    rating: 4.8,
    accent: "purple",
  },
  {
    name: "Ayushi",
    role: "GMAT Student",
    quote: "The structured practice tests and personalized feedback from Seek Your Y help me stay balanced and confident across every part of my prep.",
    rating: 5.0,
    accent: "blue",
  },
  {
    name: "Vatsalya",
    role: "GRE Student",
    quote: "I was so grateful to be blessed with a mentor like Aman. His guidance shaped not just my prep, but gave me an added perspective on life.",
    rating: 4.9,
    accent: "emerald",
  },
  {
    name: "Moses",
    role: "GRE Student",
    quote: "Aman's live sessions were engaging and practical. Solving questions together in class helped me actually understand how well I'd grasped each topic.",
    rating: 4.5,
    accent: "amber",
  },
  {
    name: "Ayush",
    role: "GRE Student",
    quote: "Aman's structured approach and problem-solving strategies saved me crucial time and made my whole prep so much easier to manage.",
    rating: 5.0,
    accent: "indigo",
  },
  {
    name: "Akshita",
    role: "GRE Student",
    quote: "Aman kept me consistent through months of prep, checking in and adjusting the plan whenever I struggled. That consistency was exactly why I hit my target score.",
    rating: 4.8,
    accent: "rose",
  },
  {
    name: "Manya",
    role: "GMAT Focus 645",
    quote: "The course material at Seek Your Y was incredibly comprehensive, covering every topic with concept videos and mock tests. I felt fully prepared going into my exam.",
    rating: 5.0,
    accent: "purple",
  },
  {
    name: "Aditya",
    role: "GRE Student",
    quote: "I was rusty in my basics before starting, but Seek Your Y's beginner classes rebuilt my fundamentals and gave me a strong start to my prep.",
    rating: 4.5,
    accent: "blue",
  },
  {
    name: "Sabhyata",
    role: "GRE 319",
    quote: "Seek Your Y's constant encouragement and structured guidance kept me motivated throughout my prep. Truly thankful for the support.",
    rating: 4.9,
    accent: "emerald",
  },
  {
    name: "Bala",
    role: "GRE 326",
    quote: "Aman's patience and clarity made even the toughest concepts approachable. I can't thank him enough for the time and effort he put into my prep.",
    rating: 5.0,
    accent: "amber",
  },
  {
    name: "Arjun",
    role: "GRE 328",
    quote: "Aman took time out of his schedule to walk me through my weak areas on calls. That extra guidance made all the difference in my prep.",
    rating: 4.8,
    accent: "indigo",
  },
  {
    name: "Prafful",
    role: "GRE 323",
    quote: "Thanks to Seek Your Y's structured strategy sessions, I felt far more confident tackling my prep by the time test day arrived.",
    rating: 5.0,
    accent: "rose",
  },
  {
    name: "Rahat",
    role: "GRE Student",
    quote: "Aman's mentoring gave me the confidence to approach my prep with a clear strategy. My accuracy and speed both improved dramatically.",
    rating: 4.6,
    accent: "purple",
  },
  {
    name: "Sanah",
    role: "GRE Student",
    quote: "Even with last-minute mock reviews, Aman made sure every small doubt was addressed. His advice made a real difference in my prep.",
    rating: 4.9,
    accent: "blue",
  },
  {
    name: "Anushka",
    role: "GMAT Student",
    quote: "From concept building to mock analysis, Seek Your Y's guidance is thorough at every step. I couldn't ask for better support throughout my prep.",
    rating: 5.0,
    accent: "emerald",
  },
];

const renderStarIcons = (rating: number) => {
  const totalGold = rating >= 4.8 ? 5 : 4;
  return (
    <span className="inline-flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          className={i < totalGold ? "text-amber-400" : "text-slate-300/80"}
        >
          ★
        </span>
      ))}
    </span>
  );
};

const accentStyles: Record<
  string,
  {
    card: string;
    overlay: string;
    glowTop: string;
    glowBottom: string;
    quote: string;
    badge: string;
  }
> = {
  purple: {
    card: "border border-purple-300/90 bg-gradient-to-br from-purple-100/95 via-purple-50 to-pink-100/95 shadow-soft",
    overlay: "from-purple-700/5 to-purple-700/5",
    glowTop: "bg-purple-600/20",
    glowBottom: "bg-purple-600/15",
    quote: "text-purple-500/10",
    badge: "bg-purple-100/80 text-purple-700 border-purple-200",
    stars: "bg-purple-100/95 text-purple-800 border border-purple-200/90",
  },
  blue: {
    card: "border border-blue-300/90 bg-gradient-to-br from-blue-100/95 via-blue-50 to-indigo-100/95 shadow-soft",
    overlay: "from-blue-700/5 to-blue-700/5",
    glowTop: "bg-blue-600/20",
    glowBottom: "bg-blue-600/15",
    quote: "text-blue-500/10",
    badge: "bg-blue-100/80 text-blue-700 border-blue-200",
    stars: "bg-blue-100/95 text-blue-800 border border-blue-200/90",
  },
  emerald: {
    card: "border border-emerald-300/90 bg-gradient-to-br from-emerald-100/95 via-emerald-50 to-teal-100/95 shadow-soft",
    overlay: "from-emerald-700/5 to-emerald-700/5",
    glowTop: "bg-emerald-600/20",
    glowBottom: "bg-emerald-600/15",
    quote: "text-emerald-500/10",
    badge: "bg-emerald-100/80 text-emerald-700 border-emerald-200",
    stars: "bg-emerald-100/95 text-emerald-800 border border-emerald-200/90",
  },
  amber: {
    card: "border border-amber-300/90 bg-gradient-to-br from-amber-100/95 via-amber-50 to-orange-100/95 shadow-soft",
    overlay: "from-amber-700/5 to-amber-700/5",
    glowTop: "bg-amber-600/20",
    glowBottom: "bg-amber-600/15",
    quote: "text-amber-500/10",
    badge: "bg-amber-100/80 text-amber-700 border-amber-200",
    stars: "bg-amber-100/95 text-amber-800 border border-amber-200/90",
  },
  indigo: {
    card: "border border-indigo-300/90 bg-gradient-to-br from-indigo-100/95 via-indigo-50 to-violet-100/95 shadow-soft",
    overlay: "from-indigo-700/5 to-indigo-700/5",
    glowTop: "bg-indigo-600/20",
    glowBottom: "bg-indigo-600/15",
    quote: "text-indigo-500/10",
    badge: "bg-indigo-100/80 text-indigo-700 border-indigo-200",
    stars: "bg-indigo-100/95 text-indigo-800 border border-indigo-200/90",
  },
  rose: {
    card: "border border-rose-300/90 bg-gradient-to-br from-rose-100/95 via-rose-50 to-pink-100/95 shadow-soft",
    overlay: "from-rose-700/5 to-rose-700/5",
    glowTop: "bg-rose-600/20",
    glowBottom: "bg-rose-600/15",
    quote: "text-rose-500/10",
    badge: "bg-rose-100/80 text-rose-700 border-rose-200",
    stars: "bg-rose-100/95 text-rose-800 border border-rose-200/90",
  },
};

export default function Testimonials(): JSX.Element {
  const [activeIndex, setActiveIndex] = useState(2);

  const prev = () => setActiveIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  const next = () => setActiveIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));

  return (
    <section
      id="testimonials"
      className="relative min-h-[680px] overflow-hidden py-16 sm:py-20 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.3),transparent_24%),radial-gradient(circle_at_80%_18%,rgba(59,130,246,0.26),transparent_20%),linear-gradient(180deg,#f4faff_0%,#e7f4ff_55%,#f7fbff_100%)]"
    >
      <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.9),rgba(240,249,255,0.95),rgba(255,255,255,0.92))]" />
      <div className="pointer-events-none absolute inset-x-0 top-20 hidden lg:block">
        <div className="mx-auto h-72 w-72 rounded-full bg-blue-300/20 blur-3xl" />
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-10 hidden lg:block">
        <div className="mx-auto h-52 w-52 rounded-full bg-sky-300/20 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 md:mb-18">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-sm md:text-base font-semibold uppercase tracking-[0.18em] shadow-lg shadow-blue-500/20">
            <Sparkles className="w-4 h-4 text-white stroke-[2.5]" />
            <span>Success stories</span>
          </div>
          <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
            Real students. Real score jumps. Real admits.
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-base sm:text-lg text-slate-600 leading-8">
            Real students, real score jumps, real admits — for MBA and MS alike. Here’s what happens when prep is built on logic and accountability.
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-[40px]">
            <div className="flex transition-transform duration-500" style={{ transform: `translateX(${-activeIndex * 100}%)` }}>
              {testimonials.map((person) => {
                const accent = accentStyles[person.accent] ?? accentStyles.blue;
                return (
                  <article key={person.name} className="flex-[0_0_100%] min-w-0 px-4 py-4 sm:px-8">
                    <div className={`relative overflow-hidden rounded-[32px] p-8 sm:p-10 shadow-[0_24px_60px_rgba(15,23,42,0.1)] hover:shadow-[0_28px_70px_rgba(37,99,235,0.16)] transition-all duration-500 ${accent.card}`}>
                      <div className={`absolute inset-0 rounded-[32px] bg-gradient-to-br ${accent.overlay}`} />
                      <div className={`absolute -top-10 -right-10 h-36 w-36 rounded-full blur-3xl ${accent.glowTop}`} />
                      <div className={`absolute -bottom-10 -left-10 h-28 w-28 rounded-full blur-3xl ${accent.glowBottom}`} />
                      <div className="relative z-10">
                        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between lg:gap-8 mb-8">
                          <div>
                            <p className="text-xl font-extrabold text-slate-900">{person.name}</p>
                            <p className="mt-1 text-sm font-semibold tracking-[0.02em] text-slate-600">{person.role}</p>
                          </div>
                          <span className={`inline-flex items-center rounded-full px-4 py-2 text-xs font-semibold tracking-[0.2em] uppercase ${accent.badge}`}>
                            Top review
                          </span>
                        </div>

                        <div className="mb-8">
                          <div className={`mb-4 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium shadow-sm shadow-slate-200/60 ${accent.stars}`}>
                            <span className="flex items-center">{renderStarIcons(person.rating ?? 5.0)}</span>
                            <span>{(person.rating ?? 5.0).toFixed(1)} rating</span>
                          </div>
                          <p className="text-base sm:text-lg leading-8 text-slate-700 italic">“{person.quote}”</p>
                        </div>

                        <div className="flex flex-wrap gap-3 text-sm text-slate-700 font-medium">
                          <span className="rounded-2xl bg-white/70 px-4 py-2 shadow-md">Study plan clarity</span>
                          <span className="rounded-2xl bg-white/70 px-4 py-2 shadow-md">Personal coaching</span>
                          <span className="rounded-2xl bg-white/70 px-4 py-2 shadow-md">Result-driven prep</span>
                        </div>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>

          <button
            type="button"
            onClick={prev}
            className="hidden md:flex absolute top-1/2 -left-4 -translate-y-1/2 h-12 w-12 items-center justify-center rounded-full bg-white/90 border border-blue-100 text-blue-600 shadow-sm transition-transform duration-300 hover:-translate-x-1 hover:bg-blue-600 hover:text-white lg:-left-8"
            aria-label="Previous testimonial"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>

          <button
            type="button"
            onClick={next}
            className="hidden md:flex absolute top-1/2 -right-4 -translate-y-1/2 h-12 w-12 items-center justify-center rounded-full bg-white/90 border border-blue-100 text-blue-600 shadow-sm transition-transform duration-300 hover:translate-x-1 hover:bg-blue-600 hover:text-white lg:-right-8"
            aria-label="Next testimonial"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>
        </div>

        <div className="mt-10 flex justify-center gap-3">
          {testimonials.map((_, index) => (
            <button
              key={index}
              type="button"
              aria-label={`Go to testimonial ${index + 1}`}
              onClick={() => setActiveIndex(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === activeIndex ? "w-10 bg-blue-600" : "w-2 bg-slate-300 hover:bg-blue-300"
              }`}
            />
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <a
            href="/testimonials"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 px-8 py-3.5 text-sm font-semibold text-white shadow-xl shadow-blue-500/20 transition hover:-translate-y-0.5 hover:shadow-[0_20px_60px_rgba(56,189,248,0.2)]"
          >
            Book a Free Demo
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}


import React from "react";
import ManyaPhoto from "@/assets/student_pics/Manya.jpeg";
import PraffulPhoto from "@/assets/student_pics/Prafful.jpeg";
import ArjunPhoto from "@/assets/student_pics/Arjun M S.jpeg";
import BalagopalPhoto from "@/assets/student_pics/Balagopal Jayakumar.jpeg";
import SabhyataPhoto from "@/assets/student_pics/Sabhyata.jpeg";
import Person1 from "@/assets/person1.jpg";
import Person2 from "@/assets/person2.jpg";

export const TestimonialsPage: React.FC = () => {
  const scores = [
    {
      name: "Priya M.",
      test: "GRE",
      before: "305",
      after: "331",
      program: "MS CS • Georgia Tech",
      avatar: Person1,
      quote: "Quant went from weakness to 168.",
      color: "from-blue-600 to-blue-500",
    },
    {
      name: "Sahil K.",
      test: "GMAT",
      before: "565",
      after: "705",
      program: "MBA • ISB",
      avatar: PraffulPhoto,
      quote: "Weekend batch fit my job perfectly.",
      color: "from-[#0052CC] to-blue-500",
    },
    {
      name: "Riya S.",
      test: "GRE",
      before: "302",
      after: "328",
      program: "MBA • Columbia",
      avatar: ManyaPhoto,
      quote: "Switched from GMAT — best call ever.",
      color: "from-blue-600 to-blue-500",
    },
    {
      name: "Arjun K.",
      test: "GMAT",
      before: "545",
      after: "695",
      program: "MBA • INSEAD",
      avatar: ArjunPhoto,
      quote: "DI module carried my percentile.",
      color: "from-blue-900 to-slate-900",
    },
  ];

  const textTestimonials = [
    {
      name: "Priya M.",
      score: "GRE 331",
      avatar: Person1,
      text: (
        <>
          I'd done two other courses before this. The difference is the way concepts are taught — as logic, not formulas. Quant went from my weakness to a <strong className="font-bold text-slate-950">168</strong>.
        </>
      ),
    },
    {
      name: "Sahil K.",
      score: "GMAT 705",
      avatar: PraffulPhoto,
      text: (
        <>
          Daily live classes meant I couldn't slack off. The weekly mock analysis sessions alone are worth the fee.
        </>
      ),
    },
    {
      name: "Dev J.",
      score: "GRE 334",
      avatar: BalagopalPhoto,
      text: (
        <>
          Aman personally reviewed my error log every week during tutoring. That level of attention is rare anywhere.
        </>
      ),
    },
    {
      name: "Neha G.",
      score: "GMAT 715",
      avatar: SabhyataPhoto,
      text: (
        <>
          The <strong className="font-bold text-slate-950">DI module saved my GMAT</strong>. Nobody else takes Data Insights this seriously.
        </>
      ),
    },
    {
      name: "Riya S.",
      score: "GRE 328",
      avatar: ManyaPhoto,
      text: (
        <>
          They told me honestly that GRE was the smarter route for my MBA target. From diagnostic to <strong className="font-bold text-slate-950">Columbia admit in 9 months</strong> — prep, essays and interviews all in one place.
        </>
      ),
    },
    {
      name: "Vikram T.",
      score: "GRE 319",
      avatar: Person2,
      text: (
        <>
          As a working professional the flexible tutoring slots were a lifesaver. Worth every rupee.
        </>
      ),
    },
  ];

  return (
    <div className="bg-slate-50/50 text-slate-950 min-h-screen">
      {/* Hero Banner */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0B1530] via-[#0F172A] to-[#1E293B] py-20 text-white">
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-blue-500/10 blur-[120px] pointer-events-none" />
        
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-2 text-xs md:text-sm text-slate-400 mb-6 font-medium">
            <a href="/" className="hover:text-white transition">Home</a>
            <span>&gt;</span>
            <span className="text-slate-200">Testimonials</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
            Success stories
          </h1>
          
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl leading-relaxed mb-8">
            Real students, real score jumps, real admits — for MBA and MS alike. Here's what
            happens when prep is built on logic and accountability.
          </p>

          <button className="rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3.5 shadow-lg shadow-blue-500/20 hover:shadow-xl hover:shadow-blue-500/30 transition duration-200">
            Book a Free Demo
          </button>
        </div>
      </section>

      {/* Hear It From Them (Videos) */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8 text-center">
          <span className="text-xs md:text-sm font-bold uppercase tracking-[0.15em] text-[#0052CC] block">
            WATCH
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-950 mt-4 mb-3 tracking-tight">
            Hear it from them
          </h2>
          <div className="w-16 h-1 bg-[#0052CC] rounded-full mx-auto my-5" />
          
          <p className="text-base text-slate-600 max-w-2xl mx-auto leading-relaxed mb-12">
            Two-minute stories from students who made the jump. (10-second demo clips as placeholders.)
          </p>

          <div className="grid gap-8 md:grid-cols-2 max-w-[1000px] mx-auto text-left">
            {/* Video Card 1 */}
            <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-soft flex flex-col">
              <div className="aspect-video w-full bg-slate-950 overflow-hidden">
                <video
                  controls
                  src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-slate-950">Riya S. — GRE 302 → 328</h3>
                <p className="text-sm text-slate-500 mt-1">Columbia MBA admit • switched from GMAT to GRE with us</p>
              </div>
            </div>

            {/* Video Card 2 */}
            <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-soft flex flex-col">
              <div className="aspect-video w-full bg-slate-950 overflow-hidden">
                <video
                  controls
                  src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-slate-950">Sahil K. — GMAT Focus 565 → 705</h3>
                <p className="text-sm text-slate-500 mt-1">ISB admit • working professional, weekend batch</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Score Improvements (Results Grid) */}
      <section className="py-20 bg-slate-50/50">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8 text-center">
          <span className="text-xs md:text-sm font-bold uppercase tracking-[0.15em] text-[#0052CC] block">
            RESULTS
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-950 mt-4 mb-3 tracking-tight">
            Score improvements
          </h2>
          <div className="w-16 h-1 bg-[#0052CC] rounded-full mx-auto my-5" />

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 mt-12 text-center">
            {scores.map((score, idx) => (
              <div
                key={idx}
                className="bg-white rounded-[24px] border border-slate-200/80 shadow-soft overflow-hidden flex flex-col items-center pb-8 transition hover:translate-y-[-4px] hover:shadow-md duration-300"
              >
                {/* Colored Top Band */}
                <div className={`w-full h-20 bg-gradient-to-r ${score.color} relative`}>
                  {/* Avatar centered overlapping the band */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full overflow-hidden border-4 border-white bg-slate-100 shadow-sm">
                    <img src={score.avatar} alt={score.name} className="w-full h-full object-cover" />
                  </div>
                </div>

                {/* Score change */}
                <div className="mt-12 flex items-center justify-center gap-2">
                  <span className="text-sm text-slate-400 font-medium line-through">{score.before}</span>
                  <span className="text-[#0052CC] text-sm font-bold">→</span>
                  <span className="text-3xl font-extrabold text-[#0052CC]">{score.after}</span>
                </div>

                {/* Student Name */}
                <h3 className="text-lg font-bold text-slate-950 mt-3">{score.name} — {score.test}</h3>

                {/* Program Details Badge */}
                <span className="mt-2.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-amber-50 text-amber-700 border border-amber-100">
                  {score.program}
                </span>

                {/* Quote */}
                <p className="mt-4 px-6 text-sm text-slate-500 italic">
                  "{score.quote}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* In Their Own Words (Text Reviews Grid) */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight">
            In their own words
          </h2>
          <div className="w-16 h-1 bg-[#0052CC] rounded-full mx-auto my-5" />

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12 text-left">
            {textTestimonials.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-[24px] border border-slate-200 shadow-soft p-8 flex flex-col justify-between hover:shadow-md hover:border-slate-300 transition duration-300"
              >
                <div>
                  {/* Blue Stars */}
                  <div className="flex gap-1 text-blue-600 text-lg mb-5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>

                  {/* Review Text */}
                  <p className="text-slate-700 text-[15px] leading-relaxed mb-6 font-normal">
                    "{item.text}"
                  </p>
                </div>

                {/* User avatar and name info */}
                <div className="flex items-center gap-4 border-t border-slate-100 pt-5 mt-auto">
                  <div className="w-10 h-10 rounded-full overflow-hidden bg-slate-100 border border-slate-200">
                    <img src={item.avatar} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-[15px]">{item.name}</h4>
                    <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider">{item.score}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

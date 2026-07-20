import React, { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CustomFAQ } from "@/components/CustomFAQ";
import { CallToAction } from "@/components/CallToAction";
import { BookSessionDialog } from "@/components/BookSessionDialog";
import CourseGre from "/assets/gre-asset/course_gre_.webp";
import CourseGmat from "/assets/gre-asset/course_gmat.webp";
import CourseSat from "/assets/gre-asset/course_sat.webp";
import CourseIelts from "/assets/gre-asset/course_ielts.webp";
import GREPREP from "@/assets/svgComponent/GREPREP";
import GMATPREP from "@/assets/svgComponent/GMATPREP";
import { 
  ShieldCheck, 
  CalendarDays, 
  Presentation, 
  MessagesSquare, 
  Trophy, 
  BookOpen 
} from "lucide-react";

const Admission: React.FC = () => {
  const [isBookSessionOpen, setIsBookSessionOpen] = useState(false);

  const admissionsFaqs = [
    {
      question: "What is covered under your admissions consulting services?",
      answer: "We provide end-to-end guidance including profile evaluation, target university shortlisting, essay brainstorming and editing, resume restructuring, letter of recommendation (LOR) strategy, and comprehensive mock interview preparation."
    },
    {
      question: "How do you help with shortlisting target universities?",
      answer: "We analyze your test scores, GPA, professional experience, post-degree career goals, budget, and geographic preferences to curate a balanced list of 'Reach', 'Target', and 'Safe' schools."
    },
    {
      question: "Do you write my statement of purpose (SOP) or essays for me?",
      answer: "No, we do not write essays from scratch. We help you brainstorm personal stories, outline essay structures, edit multiple drafts for clarity, flow, and tone, and ensure your unique voice stands out to admissions committees."
    },
    {
      question: "Can I get assistance with scholarships and financial aid applications?",
      answer: "Yes. We advise you on how to highlight key strengths and leadership experiences within your application essays to maximize your chances of merit-based scholarships."
    },
    {
      question: "How does the interview preparation process work?",
      answer: "We conduct school-specific mock interviews that simulate the actual admissions interview. Tutors provide thorough feedback on your answers, body language, and strategy to build your confidence."
    }
  ];
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* HERO: Blueprint */}
        <section className="overflow-hidden bg-background pt-28 md:pt-32 lg:pt-36 pb-12 md:pb-16 lg:pb-20">
        <div className="max-w-[1440px] mx-auto px-4">
          <div className="text-center">
            <div className="inline-block px-4 py-2 rounded-full border border-primary/15 bg-primary/10 text-xs font-bold uppercase tracking-[0.14em] text-primary shadow-sm mb-6">
              Global Admissions & Profile Building
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-display leading-[1.1] tracking-tight">
              Your Blueprint to a
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-500 to-violet-500">
                World-Class University
              </span>
            </h2>
            <p className="max-w-2xl mx-auto text-muted-foreground mt-6">
              We don't just coach exams. We architect your entire profile — scores, essays,
              recommendations, and positioning — so you walk into any top-ranked program as an unforgettable
              candidate.
            </p>
          </div>

          {/* feature cards */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {[
              { title: "GRE Prep", subtitle: "Top scores for Masters", Icon: GREPREP },
              { title: "GMAT Prep", subtitle: "Elite Business Schools", Icon: GMATPREP },
            ].map((c) => (
              <div key={c.title} className="bg-card rounded-2xl p-8 text-center shadow-soft">
                <div className="w-14 h-14 rounded-md mx-auto bg-sky-50 flex items-center justify-center mb-4">
                  {c.Icon ? <c.Icon /> : "🎯"}
                </div>
                <h4 className="font-bold text-lg">{c.title}</h4>
                <p className="text-sm text-muted-foreground mt-2">{c.subtitle}</p>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-10">
            <button 
              onClick={() => setIsBookSessionOpen(true)}
              className="px-10 py-4 rounded-[14px] bg-gradient-to-r from-blue-600 via-indigo-500 to-violet-500 text-white font-bold shadow-lg shadow-indigo-500/25 hover:opacity-95"
            >
              Start Your Admissions Journey
            </button>
          </div>
        </div>
      </section>

      {/* COURSES GALLERY */}
      <section className="pt-12 pb-16 bg-transparent">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="text-center mb-8">
            <div className="inline-block px-4 py-1 rounded-full bg-white/60 text-sm text-sky-600 mb-4">Test Prep</div>
            <h3 className="text-3xl md:text-4xl font-extrabold">Ace Your <span className="text-primary">Entrance Exams</span></h3>
            <p className="max-w-2xl mx-auto text-muted-foreground mt-4">Expert-led coaching with proven strategies for every major standardized test. Personalized guidance to maximize your scores.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                src: CourseGre,
                badge: "GRE Prep",
                badgeClass: "bg-slate-500/80 text-white",
                title: "GRE Preparation",
                description: "Master verbal reasoning, quantitative reasoning & analytical writing with personalized guidance.",
              },
              {
                src: CourseGmat,
                badge: "GMAT Prep",
                badgeClass: "bg-emerald-700/90 text-white",
                title: "GMAT Preparation",
                description: "Conquer analytical writing, integrated reasoning, quantitative & verbal sections with customized strategies.",
              },
            ].map((course) => (
              <div
                key={course.title}
                className="group relative overflow-hidden rounded-[32px] shadow-elevated h-[520px] bg-slate-900"
              >
                <img
                  src={course.src}
                  alt={course.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent" />
                <div className={`absolute left-6 top-6 rounded-full px-4 py-2 text-sm font-semibold shadow-lg backdrop-blur-sm transition duration-300 ${course.badgeClass}`}>
                  {course.badge}
                </div>
                <div className="absolute left-6 right-6 bottom-6 rounded-[28px] border border-white/20 bg-slate-950/80 p-6 backdrop-blur-md">
                  <h4 className="text-2xl font-extrabold text-white">{course.title}</h4>
                  <p className="mt-3 max-h-0 overflow-hidden text-sm leading-6 text-slate-200 transition-all duration-300 group-hover:max-h-24 group-hover:mt-3">
                    {course.description}
                  </p>
                  <button className="mt-6 inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition duration-300 hover:bg-white/20">
                    Explore Course
                    <span className="ml-2">→</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What You Get Only With Seek Your Y */}
      <section className="py-20 bg-slate-50/50 border-t border-b border-slate-200/50">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            What You Get <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-500 to-violet-500">Only With Seek Your Y</span>
          </h2>
          <p className="text-lg md:text-xl text-slate-600 mt-2 font-normal italic">
            and nowhere else in the world
          </p>

          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3 mt-16 max-w-[1000px] mx-auto">
            {[
              {
                icon: ShieldCheck,
                text: (
                  <>
                    100% score guarantee for{" "}
                    <a href="/gmat" className="underline text-blue-600 font-semibold hover:text-indigo-600 transition-colors">GMAT</a>,{" "}
                    <a href="/gre" className="underline text-blue-600 font-semibold hover:text-indigo-600 transition-colors">GRE</a> and{" "}
                    <span className="underline text-blue-600 font-semibold">SAT</span>
                  </>
                ),
              },
              {
                icon: CalendarDays,
                text: "Daily live classes for accountability",
              },
              {
                icon: Presentation,
                text: "100+ hours of live training (Highest in the world)",
              },
              {
                icon: MessagesSquare,
                text: "Live discussion of all tests with expert faculty",
              },
              {
                icon: Trophy,
                text: "Record holders of GMAT 800, GRE 339, and SAT 1580",
              },
              {
                icon: BookOpen,
                text: (
                  <>
                    18+ unique courses to prepare for{" "}
                    <a href="/gmat" className="underline text-blue-600 font-semibold hover:text-indigo-600 transition-colors">GMAT</a>,{" "}
                    <a href="/gre" className="underline text-blue-600 font-semibold hover:text-indigo-600 transition-colors">GRE</a> and{" "}
                    <span className="underline text-blue-600 font-semibold">SAT</span>
                  </>
                ),
              },
            ].map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <div key={idx} className="flex flex-col items-center text-center p-4">
                  <div className="w-20 h-20 flex items-center justify-center mb-6 text-blue-600">
                    <IconComponent className="w-16 h-16 stroke-[1.25]" />
                  </div>
                  <p className="text-base md:text-lg text-slate-800 font-medium leading-relaxed max-w-[280px]">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* BLUE CTA SECTION */}
      <section className="py-20 bg-gradient-to-r from-sky-600 to-blue-500 text-white">
        <div className="max-w-[1000px] mx-auto px-4 text-center">
          <div className="inline-block px-4 py-1 rounded-full bg-white/10 text-sm text-white mb-4">Expert Guidance</div>
          <h3 className="text-4xl font-extrabold mb-4">Not Sure Which Path Is Right For You?</h3>
          <p className="max-w-2xl mx-auto text-white/90 mb-8">Our expert counselors will evaluate your profile and recommend the perfect program — absolutely free.</p>
          <div className="flex items-center justify-center gap-6">
            <button onClick={() => setIsBookSessionOpen(true)} className="bg-white text-primary px-6 py-3 rounded-xl font-semibold">Get Free Profile Evaluation</button>
            <button onClick={() => setIsBookSessionOpen(true)} className="bg-white/20 border border-white/30 text-white px-6 py-3 rounded-xl">Talk to an Expert</button>
          </div>
        </div>
      </section>

      {/* PROFILE EVALUATION SECTION */}
     
     

      {/* PRICING PACKAGES */}
      <section className="py-12">
        <div className="max-w-[1200px] mx-auto px-4 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary/90 mb-3">Pricing</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-4">Packages</h2>
          <p className="max-w-2xl mx-auto text-muted-foreground text-lg leading-relaxed">
            Market rate for quality 4-school consulting is ₹1.5–2 lakhs; premium firms charge ₹3–5 lakhs.
            We price below market — and far below it if you prep with us.
          </p>
        </div>

        <div className="max-w-[1200px] mx-auto px-4 mt-10 grid gap-6 lg:grid-cols-3">
          <div className="overflow-hidden rounded-[32px] border border-border/80 bg-card shadow-soft transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            <div className="h-1 bg-gradient-to-r from-blue-600 via-indigo-500 to-violet-500" />
            <div className="p-6 flex h-full flex-col justify-between">
              <div>
                <h3 className="text-2xl font-semibold text-foreground">Profile + Shortlist</h3>
                <p className="mt-3 text-sm text-muted-foreground">Evaluation & school strategy</p>
                <div className="mt-6 text-[2.4rem] font-extrabold text-blue-600">₹19,999</div>
                <p className="mt-3 text-sm text-muted-foreground">Profile evaluation report</p>
              </div>

              <div className="mt-6 space-y-3 text-sm text-foreground">
                <div className="flex items-start gap-3"><span className="mt-1 text-blue-600">✓</span> Profile evaluation report</div>
                <div className="flex items-start gap-3"><span className="mt-1 text-blue-600">✓</span> Shortlist of 8–10 schools</div>
                <div className="flex items-start gap-3"><span className="mt-1 text-blue-600">✓</span> Application timeline plan</div>
                <div className="flex items-start gap-3"><span className="mt-1 text-blue-600">✓</span> Fully adjustable against a bigger package</div>
              </div>

              <button 
                onClick={() => setIsBookSessionOpen(true)}
                className="mt-10 w-full rounded-full bg-blue-600 px-6 py-4 text-sm font-semibold text-white transition hover:bg-blue-700"
              >
                Book a Call
              </button>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[32px] border border-blue-600/30 bg-card shadow-soft shadow-blue-500/10 ring-1 ring-blue-600/10 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-600 via-indigo-500 to-violet-500" />
            <div className="p-6 pt-12 flex h-full flex-col justify-between">
              <div className="inline-flex items-center rounded-full bg-slate-950 px-4 py-2 text-xs uppercase tracking-[0.22em] text-white shadow-lg">4 schools · end-to-end</div>

              <div className="mt-6">
                <h3 className="text-2xl font-semibold text-foreground">4-School Package</h3>
                <p className="mt-3 text-sm text-muted-foreground">vs ₹1.5–2L market • ₹3L+ at premium firms</p>
                <div className="mt-6 text-[2.4rem] font-extrabold text-blue-600">₹1,49,999</div>
              </div>

              <div className="mt-6 space-y-3 text-sm text-foreground">
                <div className="flex items-start gap-3"><span className="mt-1 text-blue-600">✓</span> Everything in Profile + Shortlist</div>
                <div className="flex items-start gap-3"><span className="mt-1 text-blue-600">✓</span> Essays & SOP for 4 schools</div>
                <div className="flex items-start gap-3"><span className="mt-1 text-blue-600">✓</span> LOR strategy & review</div>
                <div className="flex items-start gap-3"><span className="mt-1 text-blue-600">✓</span> Unlimited mock interviews</div>
                <div className="flex items-start gap-3"><span className="mt-1 text-blue-600">✓</span> Scholarship & waitlist strategy</div>
              </div>

              <button 
                onClick={() => setIsBookSessionOpen(true)}
                className="mt-10 w-full rounded-full bg-blue-600 px-6 py-4 text-sm font-semibold text-white transition hover:bg-blue-700"
              >
                Book a Call
              </button>
            </div>
          </div>

          <div className="overflow-hidden rounded-[32px] border border-border/80 bg-card shadow-soft transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            <div className="h-1 bg-gradient-to-r from-blue-600 via-indigo-500 to-violet-500" />
            <div className="p-6 flex h-full flex-col justify-between">
              <div>
                <h3 className="text-2xl font-semibold text-foreground">Prep Student Combo</h3>
                <p className="mt-3 text-sm text-muted-foreground">4 schools • exclusively for enrolled students</p>
                <div className="mt-6 text-[2.4rem] font-extrabold text-blue-600">₹99,999</div>
              </div>

              <div className="mt-6 space-y-3 text-sm text-foreground">
                <div className="flex items-start gap-3"><span className="mt-1 text-blue-600">✓</span> Full 4-School Package...</div>
                <div className="flex items-start gap-3"><span className="mt-1 text-blue-600">✓</span> ...at 33% off, because we already know your journey</div>
                <div className="flex items-start gap-3"><span className="mt-1 text-blue-600">✓</span> Add 2 extra schools for ₹19,999 each</div>
                <div className="flex items-start gap-3"><span className="mt-1 text-blue-600">✓</span> Available with any course, batch or tutoring plan</div>
              </div>

              <button 
                onClick={() => setIsBookSessionOpen(true)}
                className="mt-8 w-full rounded-full bg-blue-600 px-6 py-4 text-sm font-semibold text-white transition hover:bg-blue-700"
              >
                Get the Combo
              </button>
            </div>
          </div>
        </div>

        <div className="max-w-[1200px] mx-auto px-4 mt-6">
          <div className="rounded-[28px] border border-blue-200/60 bg-blue-50/80 p-6 md:p-8 text-left">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-900 mb-4">Why the combo is unbeatable:</p>
            <p className="text-base leading-8 text-slate-700">
              A typical Indian applicant pays ₹30,000+ for prep and ₹1.5–2 lakhs for a 4-school consultant — separately, with two teams that never talk to each other. With us, the mentor who watched you earn your score helps tell your story: course + consulting from ~₹1.15 lakhs total.
            </p>
          </div>
        </div>
      </section>

      {/* FINAL CTA CARDS */}
      <section className="py-16">
        <div className="max-w-[1200px] mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-card rounded-2xl p-10 shadow-soft">
            <div className="inline-block px-3 py-1 rounded-full bg-sky-50 text-primary mb-4">For Students</div>
            <h4 className="text-2xl font-extrabold mb-3">Book a Free Counselling Session</h4>
            <p className="text-muted-foreground mb-6">Talk to our admissions experts, evaluate your profile, and map your road to your dream university — at zero cost.</p>
            <button onClick={() => setIsBookSessionOpen(true)} className="bg-sky-600 text-white px-6 py-3 rounded-lg">Book Now →</button>
          </div>

          <div className="bg-card rounded-2xl p-10 shadow-soft">
            <div className="inline-block px-3 py-1 rounded-full bg-emerald-50 text-primary mb-4">For Institutions</div>
            <h4 className="text-2xl font-extrabold mb-3">Request a Collaboration Proposal</h4>
            <p className="text-muted-foreground mb-6">Tell us about your institution and your students' goals — we will design a bespoke employability program that fits your needs.</p>
            <button onClick={() => setIsBookSessionOpen(true)} className="bg-emerald-700 text-white px-6 py-3 rounded-lg">Get in Touch →</button>
          </div>
        </div>
      </section>
      </main>
      <CallToAction />
      <CustomFAQ faqs={admissionsFaqs} />
      <Footer />
      <BookSessionDialog open={isBookSessionOpen} onOpenChange={setIsBookSessionOpen} />
    </div>
  );
};

export default Admission;
import React, { useEffect, useState } from "react";
import { CustomFAQ } from "@/components/CustomFAQ";
import { CallToAction } from "@/components/CallToAction";
import { ArrowRight, BookOpen, Zap, Activity, ShieldCheck, Calculator, BarChart3 } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel";
import { Footer } from "@/components/Footer";
import { ProgramHero } from "@/components/ProgramHero";
import analyticsIcon from "@/assets/paced-icon/analytics.webp";
import booksIcon from "@/assets/paced-icon/books.webp";
import qaIcon from "@/assets/paced-icon/qa.webp";
import since1993Icon from "@/assets/paced-icon/since-1993.webp";
import studentIcon from "@/assets/paced-icon/student.webp";
import teacherIcon from "@/assets/paced-icon/teacher.webp";
import ManyaPhoto from "@/assets/student_pics/Manya.jpeg";
import PraffulPhoto from "@/assets/student_pics/Prafful.jpeg";
import ArjunPhoto from "@/assets/student_pics/Arjun M S.jpeg";
import BalagopalPhoto from "@/assets/student_pics/Balagopal Jayakumar.jpeg";

const AboutGmat: React.FC = () => {
  const [activeMode, setActiveMode] = useState("classroom");
  const [activeGmatFocus, setActiveGmatFocus] = useState("learn");
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [carouselApi, setCarouselApi] = useState<CarouselApi | null>(null);
  const [openSyllabusSection, setOpenSyllabusSection] = useState<string | null>(null);

  const gmatPrepModes = [
    {
      id: "classroom",
      title: "GMAT Classroom Coaching",
      label: "Hybrid",
      description: "Instructor-led sessions with in-person support, targeted mocks, and live doubt clearing.",
      bullets: [
        "60 hours of classroom coaching with expert GMAT faculty",
        "Weekly mock tests and personalized score reports",
        "Hybrid mode for flexible classroom and online attendance",
      ],
      image: "https://www.jamboreeindia.com/assets/version-2/img/product/prep-products/online-coaching.webp",
    },
    {
      id: "online",
      title: "GMAT Online Coaching",
      label: "Online",
      description: "Live online classes with structured lessons, analytics, and flexible access from home.",
      bullets: [
        "Interactive live sessions with GMAT specialists",
        "Online practice tests and section-wise review",
        "Access to lesson recordings and study dashboards",
      ],
      image: "https://www.jamboreeindia.com/assets/version-2/img/product/prep-products/online-coaching.webp",
    },
    {
      id: "self-paced",
      title: "GMAT Self-Paced Coaching",
      label: "Self-Paced",
      description: "Recorded lessons and practice material for learners who want to move at their own pace.",
      bullets: [
        "HD video lessons for every GMAT topic",
        "7 full-length mock tests with explanations",
        "Self-study support and progress tracking",
      ],
      image: "https://www.jamboreeindia.com/assets/version-2/img/product/prep-products/online-coaching.webp",
    },
    {
      id: "private",
      title: "GMAT Private Tutoring",
      label: "Private",
      description: "One-on-one mentoring for score improvement, strategy, and confidence building.",
      bullets: [
        "Customized lesson plans for your target score",
        "Dedicated expert tutor and regular progress reviews",
        "Focused doubt clearing for verbal, quant, and IR",
      ],
      image: "https://www.jamboreeindia.com/assets/version-2/img/product/prep-products/online-coaching.webp",
    },
  ];

  const gmatFocusAreas = [
    {
      id: "learn",
      title: "Concept Mastery",
      short: "Build the fundamentals behind every GMAT question.",
      headline: "Learn the core ideas that drive GMAT success.",
      description: "Structured classes, concept drills, and expert guidance make every topic easy to apply on test day.",
      points: [
        "Foundational training for quantitative and verbal reasoning",
        "Topic-by-topic strategy sessions for every question type",
        "Live doubt clearing and revision blocks",
      ],
      image: "/assets/gre-asset/top-learn.png",
    },
    {
      id: "practice",
      title: "Timed Practice",
      short: "Sharpen accuracy and build pacing under exam conditions.",
      headline: "Practice with real GMAT-style questions and mock tests.",
      description: "Timed drills and sectional tests help you get faster, more confident, and adaptive under pressure.",
      points: [
        "Topic-based practice with analytics",
        "Regular full-length mock tests",
        "Error review sessions to fix weak areas",
      ],
      image: "/assets/gre-asset/top-practice.png",
    },
    {
      id: "apply",
      title: "Score Strategy",
      short: "Convert practice into measurable improvement.",
      headline: "Use analytics and mentoring to improve your GMAT score.",
      description: "Personalised score reports, strategy calls, and study-plan adjustments keep you on track toward your goal.",
      points: [
        "Weekly score analytics and growth tracking",
        "Targeted practice based on your performance",
        "Strategy mentoring for test day readiness",
      ],
      image: "/assets/gre-asset/top-apply.png",
    },
  ];

  const activeFocus = gmatFocusAreas.find((item) => item.id === activeGmatFocus) ?? gmatFocusAreas[0];

  const cards = [
    {
      icon: since1993Icon,
      title: "Proven Success",
      description: "High GMAT scores achieved consistently since 1993.",
    },
    {
      icon: analyticsIcon,
      title: "Smart Analytics",
      description: "Actionable insights to improve your performance every week.",
    },
    {
      icon: teacherIcon,
      title: "Expert Faculty",
      description: "Top GMAT instructors with real admissions coaching experience.",
    },
    {
      icon: booksIcon,
      title: "Practice Modules",
      description: "Extensive mocks, drills, and explanation material.",
    },
    {
      icon: studentIcon,
      title: "Personalized Support",
      description: "Doubt clearing, mentoring, and score planning tailored to you.",
    },
    {
      icon: qaIcon,
      title: "Adaptive Strategy",
      description: "Adjust your plan as your strengths and targets evolve.",
    },
  ];

  const studentReviews = [
    {
      name: "Nishtha",
      title: "GMAT teacher",
      image: ManyaPhoto,
      rating: 5,
      text: "Nishtha ma'am is excellent at explaining concepts in a simple and easy to understand way. She is patient, supportive, and always encourages me to do my best.",
      footer: "Sandeep, 1 week ago",
    },
    {
      name: "Dhruv",
      title: "GMAT teacher",
      image: PraffulPhoto,
      rating: 5,
      text: "Hello Dhruv, thank you for the excellent teaching and support you've given to our 10 years old son Thomas. Your clear explanations and friendly approach have made math enjoyable for him.",
      footer: "Fabio, 2 months ago",
    },
    {
      name: "Pratyush",
      title: "GMAT teacher",
      image: ArjunPhoto,
      rating: 5,
      text: "Pratyush has been an excellent calculus tutor for my son. He explains complex concepts in a clear, patient, and easy-to-understand manner, which has greatly improved my son's confidence.",
      footer: "Devesh, 2 weeks ago",
    },
    {
      name: "Balagopal",
      title: "GMAT teacher",
      image: BalagopalPhoto,
      rating: 5,
      text: "Handling a 5 year old homeschooler with ease. Dhruv is an amazing teacher. I sincerely appreciate his patience with my daughter and the fun learning vibe.",
      footer: "Sreethy, 3 months ago",
    },
  ];

  const gmatFaqs = [
    {
      question: "What is the structure of the GMAT Focus Edition?",
      answer: "The GMAT Focus Edition consists of three 45-minute sections: Quantitative Reasoning (21 questions), Verbal Reasoning (23 questions), and Data Insights (20 questions)."
    },
    {
      question: "What is the scoring scale for the GMAT Focus Edition?",
      answer: "Scores range from 205 to 805, with all three sections (Quant, Verbal, Data Insights) contributing equally to your total score."
    },
    {
      question: "What is a competitive GMAT Focus Edition score?",
      answer: "A score of 645+ is highly competitive (equivalent to a 700+ on the old GMAT exam), placing you in the top 10% of test-takers globally."
    },
    {
      question: "How long is a GMAT score valid?",
      answer: "GMAT scores are valid for 5 years from your test date, allowing you to prepare and take the exam well in advance of your applications."
    },
    {
      question: "Can I choose the section order on the GMAT?",
      answer: "Yes! The GMAT Focus Edition offers total flexibility, allowing you to take the sections in any of the 6 possible orders you prefer."
    },
    {
      question: "Does the GMAT Focus Edition have an essay?",
      answer: "No, the Analytical Writing Assessment (AWA) has been completely removed in the GMAT Focus Edition, making the exam shorter and more focused."
    }
  ];

  useEffect(() => {
    if (!carouselApi) {
      return;
    }

    const interval = window.setInterval(() => {
      carouselApi.scrollNext();
    }, 5000);

    return () => window.clearInterval(interval);
  }, [carouselApi]);

  return (
    <div className="bg-background text-foreground">
      <ProgramHero type="gmat" />

      <section className="bg-background py-20">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <div className="w-full">
            <div className="space-y-8">
              <div className="rounded-[32px] border border-border bg-card p-8 shadow-soft">
                <h2 className="text-3xl font-semibold text-foreground">What is the GMAT?</h2>
                <p className="mt-5 text-lg leading-8 text-muted-foreground">
                  The GMAT is a standardized exam for graduate management programs. It evaluates your verbal, quantitative, and analytical reasoning skills — the core abilities top business schools value.
                </p>
                <p className="mt-4 text-lg leading-8 text-muted-foreground">
                  Our GMAT coaching blends strategy, timed practice, and analytics so you can improve quickly and confidently on test day.
                </p>
              </div>

              <div className="overflow-hidden rounded-[32px] border border-border bg-card shadow-soft">
                <div className="border-b border-border bg-background px-6 py-6">
                  <h3 className="text-xl font-semibold text-foreground">GMAT Exam Pattern</h3>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-sm">
                    <thead>
                      <tr className="bg-gradient-to-r from-blue-600 via-indigo-500 to-violet-500 text-primary-foreground">
                        <th className="px-6 py-4">Section</th>
                        <th className="px-6 py-4">Questions</th>
                        <th className="px-6 py-4">Time</th>
                        <th className="px-6 py-4">Score Scale</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border bg-card">
                      {[
                        { section: "Verbal Reasoning", questions: "36", time: "65 min", score: "6-51" },
                        { section: "Quantitative Reasoning", questions: "31", time: "62 min", score: "6-51" },
                        { section: "Integrated Reasoning", questions: "12", time: "30 min", score: "1-8" },
                        { section: "Analytical Writing", questions: "2", time: "30 min", score: "0-6" },
                      ].map((row) => (
                        <tr key={row.section} className="odd:bg-background">
                          <td className="px-6 py-4 font-medium text-foreground">{row.section}</td>
                          <td className="px-6 py-4 text-muted-foreground">{row.questions}</td>
                          <td className="px-6 py-4 text-muted-foreground">{row.time}</td>
                          <td className="px-6 py-4 text-muted-foreground">{row.score}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="rounded-[32px] border border-border bg-card p-8 shadow-soft">
                <h3 className="text-xl font-semibold text-foreground">Why GMAT matters</h3>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {[
                    "Global business schools use it to compare applicants.",
                    "Strong GMAT scores improve scholarship chances.",
                    "It shows you can think critically under pressure.",
                    "A strong score boosts confidence in your application.",
                  ].map((item) => (
                    <div key={item} className="flex gap-3 rounded-3xl bg-background p-5">
                      <span className="mt-1 h-2.5 w-2.5 rounded-full bg-primary" />
                      <p className="text-sm text-muted-foreground">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GRE FOR MBA Section */}
      <section className="py-20 bg-slate-50/50">
        <div className="mx-auto max-w-[1200px] px-6 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-primary/40" />
            <span className="text-xs font-bold uppercase tracking-[0.14em] text-primary">GRE FOR MBA</span>
            <div className="h-px w-12 bg-primary/40" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold font-display text-foreground tracking-tight text-center mt-4 mb-3">
            The smarter route to your <span className="text-primary">MBA</span>
          </h2>

          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-10">
            Determined to do an MBA from ISB, Singapore, the M7 or the Ivy League? You don't need
            the GMAT for that. Over the last 18 months a growing share of applicants have switched to
            the GRE — here's why.
          </p>

          {/* Comparison Table */}
          <div className="overflow-x-auto rounded-[24px] border border-border bg-card shadow-soft text-left">
            <table className="w-full border-collapse text-sm md:text-base">
              <thead>
                <tr className="border-b border-border">
                  <th className="px-6 py-4 bg-muted/30 w-1/2"></th>
                  <th className="px-6 py-4 bg-slate-900 text-white font-bold text-center text-lg rounded-t-none w-1/2">
                    GMAT Focus
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="px-6 py-5 font-semibold text-foreground bg-muted/10">Total time</td>
                  <td className="px-6 py-5 text-muted-foreground text-center">2 hr 15 min</td>
                </tr>
                <tr>
                  <td className="px-6 py-5 font-semibold text-foreground bg-muted/10">Sections</td>
                  <td className="px-6 py-5 text-muted-foreground text-center">Quant + Verbal + Data Insights</td>
                </tr>
                <tr>
                  <td className="px-6 py-5 font-semibold text-foreground bg-muted/10">Data Insights section</td>
                  <td className="px-6 py-5 text-muted-foreground text-center">20 questions, a full third of your score</td>
                </tr>
                <tr>
                  <td className="px-6 py-5 font-semibold text-foreground bg-muted/10">Quant style</td>
                  <td className="px-6 py-5 text-muted-foreground text-center">Logic-heavy word problems</td>
                </tr>
                <tr>
                  <td className="px-6 py-5 font-semibold text-foreground bg-muted/10">Also usable for MS/PhD</td>
                  <td className="px-6 py-5 text-muted-foreground text-center">Business school only</td>
                </tr>
                <tr>
                  <td className="px-6 py-5 font-semibold text-foreground bg-muted/10">Accepted at ISB, M7, Ivy League, INSEAD, NUS/NTU</td>
                  <td className="px-6 py-5 text-muted-foreground text-center">Yes</td>
                </tr>
                <tr className="bg-muted/10">
                  <td className="px-6 py-5 font-semibold text-foreground bg-muted/10">Retakes</td>
                  <td className="px-6 py-5 text-muted-foreground text-center font-medium">
                    GMAT Focus: up to 5 times/year, 16-day gap
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* GMAT Syllabus Section */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="text-center mb-10">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-12 bg-primary/40" />
              <span className="text-xs font-bold uppercase tracking-[0.14em] text-primary">SYLLABUS</span>
              <div className="h-px w-12 bg-primary/40" />
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold font-display text-foreground tracking-tight text-center mt-4 mb-3">
              The complete GMAT Focus syllabus
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Everything GMAC tests, organised so you never have to dig through the official site. Click any section to expand.
            </p>
          </div>

          <div className="space-y-4 max-w-4xl mx-auto">
            {/* Quantitative Reasoning Accordion */}
            <div className={`rounded-[20px] bg-card shadow-soft transition-all duration-200 overflow-hidden ${
              openSyllabusSection === "quant" 
                ? "border border-border border-l-[6px] border-l-primary" 
                : "border border-border"
            }`}>
              <button
                type="button"
                onClick={() => setOpenSyllabusSection(openSyllabusSection === "quant" ? null : "quant")}
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left transition hover:bg-muted/10"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Calculator className="h-6 w-6 stroke-[2]" />
                  </div>
                  <div>
                    <span className="text-lg font-bold text-foreground block">Quantitative Reasoning</span>
                    <span className="text-xs md:text-sm text-muted-foreground font-medium hidden sm:inline">
                      21 questions • 45 min • no calculator provided
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xs text-muted-foreground font-medium sm:hidden">
                    21 Qs • 45 min
                  </span>
                  <span className="text-primary font-semibold text-2xl leading-none">
                    {openSyllabusSection === "quant" ? "−" : "+"}
                  </span>
                </div>
              </button>
              <div className={`transition-all duration-300 ease-in-out overflow-hidden ${
                openSyllabusSection === "quant" ? "max-h-[1000px] border-t border-border p-6" : "max-h-0 p-0"
              }`}>
                <p className="text-sm md:text-base text-muted-foreground mb-6">
                  Tests arithmetic and algebraic reasoning skills. Two content areas (No Geometry):
                </p>
                
                <div className="space-y-6">
                  {[
                    {
                      title: "Arithmetic",
                      pills: ["Integers & divisibility", "Fractions, decimals & percents", "Ratio, proportion & percent", "Exponents & roots", "Estimation", "Word problems"]
                    },
                    {
                      title: "Algebra",
                      pills: ["Algebraic expressions", "Linear equations", "Quadratic equations", "Inequalities", "Functions", "Absolute value", "Coordinate geometry & graphs"]
                    },
                    {
                      title: "Question types",
                      pills: ["Problem Solving"]
                    }
                  ].map((section) => (
                    <div key={section.title} className="space-y-2">
                      <h4 className="text-sm font-bold text-foreground uppercase tracking-wider">{section.title}</h4>
                      <div className="flex flex-wrap gap-2">
                        {section.pills.map((pill) => (
                          <span key={pill} className="px-3.5 py-1.5 rounded-full text-xs md:text-sm font-semibold bg-primary/10 text-primary cursor-default hover:bg-primary/20 transition-colors">
                            {pill}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Verbal Reasoning Accordion */}
            <div className={`rounded-[20px] bg-card shadow-soft transition-all duration-200 overflow-hidden ${
              openSyllabusSection === "verbal" 
                ? "border border-border border-l-[6px] border-l-primary" 
                : "border border-border"
            }`}>
              <button
                type="button"
                onClick={() => setOpenSyllabusSection(openSyllabusSection === "verbal" ? null : "verbal")}
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left transition hover:bg-muted/10"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                    <BookOpen className="h-6 w-6 stroke-[2]" />
                  </div>
                  <div>
                    <span className="text-lg font-bold text-foreground block">Verbal Reasoning</span>
                    <span className="text-xs md:text-sm text-muted-foreground font-medium hidden sm:inline">
                      23 questions • 45 min • no Sentence Correction
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xs text-muted-foreground font-medium sm:hidden">
                    23 Qs • 45 min
                  </span>
                  <span className="text-primary font-semibold text-2xl leading-none">
                    {openSyllabusSection === "verbal" ? "−" : "+"}
                  </span>
                </div>
              </button>
              <div className={`transition-all duration-300 ease-in-out overflow-hidden ${
                openSyllabusSection === "verbal" ? "max-h-[1000px] border-t border-border p-6" : "max-h-0 p-0"
              }`}>
                <p className="text-sm md:text-base text-muted-foreground mb-6">
                  Tests reading comprehension and critical reasoning skills. Two content areas (Sentence Correction has been removed):
                </p>
                
                <div className="space-y-6">
                  {[
                    {
                      title: "Reading Comprehension",
                      pills: ["Passage reading", "Informational reasoning", "Tone & attitude", "Structure & main idea", "Inference questions"]
                    },
                    {
                      title: "Critical Reasoning",
                      pills: ["Argument structure", "Assumption questions", "Strengthen & weaken", "Inference", "Boldface questions"]
                    },
                    {
                      title: "Question types",
                      pills: ["Reading Comprehension", "Critical Reasoning"]
                    }
                  ].map((section) => (
                    <div key={section.title} className="space-y-2">
                      <h4 className="text-sm font-bold text-foreground uppercase tracking-wider">{section.title}</h4>
                      <div className="flex flex-wrap gap-2">
                        {section.pills.map((pill) => (
                          <span key={pill} className="px-3.5 py-1.5 rounded-full text-xs md:text-sm font-semibold bg-primary/10 text-primary cursor-default hover:bg-primary/20 transition-colors">
                            {pill}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Data Insights Accordion */}
            <div className={`rounded-[20px] bg-card shadow-soft transition-all duration-200 overflow-hidden ${
              openSyllabusSection === "di" 
                ? "border border-border border-l-[6px] border-l-primary" 
                : "border border-border"
            }`}>
              <button
                type="button"
                onClick={() => setOpenSyllabusSection(openSyllabusSection === "di" ? null : "di")}
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left transition hover:bg-muted/10"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-purple-50 text-purple-600">
                    <BarChart3 className="h-6 w-6 stroke-[2]" />
                  </div>
                  <div>
                    <span className="text-lg font-bold text-foreground block">Data Insights (DI)</span>
                    <span className="text-xs md:text-sm text-muted-foreground font-medium hidden sm:inline">
                      20 questions • 45 min • on-screen calculator provided
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xs text-muted-foreground font-medium sm:hidden">
                    20 Qs • 45 min
                  </span>
                  <span className="text-primary font-semibold text-2xl leading-none">
                    {openSyllabusSection === "di" ? "−" : "+"}
                  </span>
                </div>
              </button>
              <div className={`transition-all duration-300 ease-in-out overflow-hidden ${
                openSyllabusSection === "di" ? "max-h-[1000px] border-t border-border p-6" : "max-h-0 p-0"
              }`}>
                <p className="text-sm md:text-base text-muted-foreground mb-6">
                  Tests data analysis and reasoning skills using multiple formats. Five content areas:
                </p>
                
                <div className="space-y-6">
                  {[
                    {
                      title: "Content Areas",
                      pills: ["Data Sufficiency", "Multi-Source Reasoning", "Table Analysis", "Graphics Interpretation", "Two-Part Analysis"]
                    },
                    {
                      title: "Skills Tested",
                      pills: ["Synthesizing verbal & quant data", "Data sorting and spreadsheet logic", "Visual parsing of charts and graphs", "Double-decisional logic"]
                    },
                    {
                      title: "Question types",
                      pills: ["Data Sufficiency", "Multi-Source Reasoning", "Table Analysis", "Graphics Interpretation", "Two-Part Analysis"]
                    }
                  ].map((section) => (
                    <div key={section.title} className="space-y-2">
                      <h4 className="text-sm font-bold text-foreground uppercase tracking-wider">{section.title}</h4>
                      <div className="flex flex-wrap gap-2">
                        {section.pills.map((pill) => (
                          <span key={pill} className="px-3.5 py-1.5 rounded-full text-xs md:text-sm font-semibold bg-primary/10 text-primary cursor-default hover:bg-primary/20 transition-colors">
                            {pill}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-16 px-6">
        <div className="mx-auto max-w-[1200px]">
          <div className="rounded-[36px] border border-border bg-card p-5 sm:p-8 md:p-10 shadow-soft">
            <div className="text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary">GMAT Prep Modes</p>
              <h2 className="mt-4 text-3xl font-semibold text-foreground">Pick the GMAT preparation mode that works best for you</h2>
              <p className="mt-4 mx-auto max-w-2xl text-sm leading-7 text-muted-foreground">
                Choose from classroom, online, self-paced or private tutoring. Each plan is designed to fit your study habits and timeline.
              </p>
            </div>

            <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
              {gmatPrepModes.map((mode) => (
                <button
                  key={mode.id}
                  onClick={() => setActiveMode(mode.id)}
                  className={`group flex h-full flex-col overflow-hidden rounded-[28px] border p-5 sm:p-6 text-left transition duration-300 ${
                    activeMode === mode.id
                      ? "border-primary bg-primary/10 shadow-soft"
                      : "border-border bg-card hover:border-primary/70 hover:bg-background hover:shadow-sm"
                  }`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.14em] sm:tracking-[0.24em] text-muted-foreground truncate">{mode.label}</p>
                    <div className={`flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-2xl ${
                      activeMode === mode.id ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                    }`}>
                      <span className="text-sm font-bold">{mode.title.split(" ")[1]?.charAt(0) ?? mode.title.charAt(0)}</span>
                    </div>
                  </div>
                  <h3 className="mt-6 text-lg font-semibold text-foreground">{mode.title}</h3>
                  <p className="mt-4 text-sm leading-6 text-muted-foreground">{mode.description}</p>
                  <div className="mt-auto pt-6">
                    <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-primary transition group-hover:bg-primary/20">
                      Learn More
                    </span>
                  </div>
                </button>
              ))}
            </div>

            <div className="mt-8 rounded-[32px] border border-border bg-background p-6 shadow-soft">
              {gmatPrepModes.filter((mode) => mode.id === activeMode).map((mode) => (
                <div key={mode.id} className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] items-center">
                  <div>
                    <div className="mb-4 flex flex-wrap items-center gap-3">
                      <span className="text-xl font-semibold text-foreground">{mode.title}</span>
                      <span className="rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold text-primary">{mode.label}</span>
                    </div>
                    <p className="text-muted-foreground">{mode.description}</p>
                    <ul className="mt-6 space-y-3 text-muted-foreground">
                      {mode.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-start gap-3 text-sm leading-6">
                          <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-primary" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-7 flex flex-wrap gap-3">
                      <button className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 via-indigo-500 to-violet-500 px-6 py-3 text-sm font-semibold text-primary-foreground shadow hover:opacity-95 transition">
                        Book a Demo
                      </button>
                      <a href="#" className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground transition hover:bg-background">
                        Know More
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center justify-center rounded-[2rem] bg-card p-4">
                    <img src={mode.image} alt={mode.title} className="h-auto w-full max-w-[320px] rounded-[2rem] object-cover" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      <section className="px-6 pb-20">
        <div className="mx-auto max-w-[1200px]">
          <div className="rounded-[32px] border border-border bg-card p-8 shadow-soft">
            <div className="text-center mb-10">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary">GMAT Tutor Reviews</p>
              <h2 className="mt-4 text-3xl font-semibold text-foreground">What our students say</h2>
              <p className="mt-3 mx-auto max-w-2xl text-sm leading-7 text-muted-foreground">
                Read the experiences of students who improved their GMAT score with Seekyoury coaching.
              </p>
            </div>
            <Carousel
              opts={{
                containScroll: "trimSnaps",
                slidesToScroll: 1,
                loop: true,
                align: "start",
              }}
              setApi={setCarouselApi}
              className="relative"
            >
              <CarouselContent className="flex gap-4">
                {studentReviews.map((review) => (
                  <CarouselItem key={`${review.name}-${review.footer}`} className="min-w-full sm:basis-[calc(50%-1rem)] lg:basis-[calc(33.333%-1rem)]">
                    <div className="rounded-[32px] border border-border bg-background p-6 shadow-soft min-h-full">
                      <div className="flex items-center gap-4">
                        <img src={review.image} alt={review.name} className="h-16 w-16 rounded-full object-cover" />
                        <div>
                          <p className="text-lg font-semibold text-foreground">{review.name}</p>
                          <p className="text-sm text-muted-foreground">{review.title}</p>
                          <div className="mt-2 flex items-center gap-1 text-[hsl(var(--exam-gold))]">
                            {Array.from({ length: review.rating }).map((_, index) => (
                              <span key={index}>★</span>
                            ))}
                          </div>
                        </div>
                      </div>
                      <p className="mt-5 text-sm leading-7 text-muted-foreground">{review.text}</p>
                      <p className="mt-6 text-sm font-semibold text-foreground">{review.footer}</p>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </section>

      <CallToAction />
      <CustomFAQ faqs={gmatFaqs} />
      <Footer />
    </div>
  );
};

export default AboutGmat;

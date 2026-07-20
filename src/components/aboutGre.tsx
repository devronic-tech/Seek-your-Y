import React, { useEffect, useRef, useState } from "react";
import { CustomFAQ } from "@/components/CustomFAQ";
import { CallToAction } from "@/components/CallToAction";
import { Footer } from "@/components/Footer";
import {
  ArrowRight,
  BarChart3,
  Clock3,
  Globe2,
  Play,
  ShieldCheck,
  Trophy,
  Users,
  Calculator,
  BookOpen,
  PenTool,
} from "lucide-react";
import { ProgramHero } from "@/components/ProgramHero";
import ManyaPhoto from "@/assets/student_pics/Manya.jpeg";
import PraffulPhoto from "@/assets/student_pics/Prafful.jpeg";
import ArjunPhoto from "@/assets/student_pics/Arjun M S.jpeg";
import BalagopalPhoto from "@/assets/student_pics/Balagopal Jayakumar.jpeg";
import SabhyataPhoto from "@/assets/student_pics/Sabhyata.jpeg";

const AboutGre = () => {
  const [activeMode, setActiveMode] = useState("classroom");
  const [activeGreFocus, setActiveGreFocus] = useState("concepts");
  const [activeReviewIndex, setActiveReviewIndex] = useState(0);
  const [openSyllabusSection, setOpenSyllabusSection] = useState<string | null>(null);
  const [isReviewPaused, setIsReviewPaused] = useState(false);
  const reviewListRef = useRef<HTMLDivElement | null>(null);
  const reviewCardsRef = useRef<HTMLDivElement[]>([]);
  const hasInitializedReviewCarousel = useRef(false);

  const studentReviews = [
    {
      name: "Nishtha",
      title: "GRE teacher",
      image: ManyaPhoto,
      rating: 5,
      text: "Nishtha ma'am is excellent at explaining concepts in a simple and easy to understand way. She is patient, supportive, and always encourages me to do my best.",
      footer: "Sandeep, 1 week ago",
    },
    {
      name: "Dhruv",
      title: "GRE teacher",
      image: PraffulPhoto,
      rating: 5,
      text: "Hello Dhruv, thank you for the excellent teaching and support you've given to our 10 years old son Thomas. Your clear explanations and friendly approach have made math enjoyable for him.",
      footer: "Fabio, 2 months ago",
    },
    {
      name: "Pratyush",
      title: "GRE teacher",
      image: ArjunPhoto,
      rating: 5,
      text: "Pratyush has been an excellent calculus tutor for my son. He explains complex concepts in a clear, patient, and easy-to-understand manner, which has greatly improved my son's confidence.",
      footer: "Devesh, 2 weeks ago",
    },
    {
      name: "Dhruv",
      title: "GRE teacher",
      image: BalagopalPhoto,
      rating: 5,
      text: "Handling a 5 year old homeschooler with ease. Dhruv is an amazing teacher. I sincerely appreciate his patience with my daughter and the fun learning vibe.",
      footer: "Sreethy, 3 months ago",
    },
  ];

  useEffect(() => {
    if (isReviewPaused || studentReviews.length <= 1) return;

    const timeout = window.setTimeout(() => {
      setActiveReviewIndex((prev) => (prev + 1) % studentReviews.length);
    }, 4500);

    return () => window.clearTimeout(timeout);
  }, [activeReviewIndex, isReviewPaused, studentReviews.length]);

  useEffect(() => {
    if (!hasInitializedReviewCarousel.current) {
      hasInitializedReviewCarousel.current = true;
      return;
    }

    const reviewList = reviewListRef.current;
    if (!reviewList) return;

    const rect = reviewList.getBoundingClientRect();
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
    const isVisible = rect.top < viewportHeight && rect.bottom > 0;
    if (!isVisible) return;

    reviewCardsRef.current[activeReviewIndex]?.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
  }, [activeReviewIndex]);

  const results = [
    {
      name: "Manya Sharma",
      school: "Punjab College",
      score: "324",
      avatar: "M",
    },
    {
      name: "Anant Govil",
      school: "DTU - Delhi Technological University",
      score: "323",
      avatar: "A",
    },
    {
      name: "Shaurya Srivastava",
      school: "NIIT University",
      score: "322",
      avatar: "S",
    },
    {
      name: "Eshan Singh",
      school: "DYPiemr",
      score: "321",
      avatar: "E",
    },
  ];

  const features = [
    {
      title: "Top Results",
      description: "Proven GRE success with 320+ scorers and expert coaching.",
      iconPath: "/assets/gre-icons/since-1993.svg",
    },
    {
      title: "Smart Analytics",
      description: "Actionable progress tracking and score insights for every student.",
      iconPath: "/assets/gre-icons/analytics.svg",
    },
    {
      title: "Hybrid Learning",
      description: "Switch easily between online and offline sessions for flexibility.",
      iconPath: "/assets/gre-icons/teacher.svg",
    },
    {
      title: "Practice Modules",
      description: "Section-based drills and full mocks to sharpen accuracy and speed.",
      iconPath: "/assets/gre-icons/books.svg",
    },
    {
      title: "Expert Faculty",
      description: "Mentorship from GRE experts with years of admissions experience.",
      iconPath: "/assets/gre-icons/student.svg",
    },
    {
      title: "Personalized Attention",
      description: "Dedicated doubt-solving and individualized study planning.",
      iconPath: "/assets/gre-icons/qa.svg",
    },
  ];

  const greFaqs = [
    {
      question: "Do MBA programs really accept the GRE?",
      answer: "Yes! Over 90% of business schools worldwide, including top-tier programs like Harvard, Stanford, Wharton, and ISB, accept GRE scores at par with GMAT scores."
    },
    {
      question: "Is the GRE easier than the GMAT?",
      answer: "Many students find the GRE friendlier because it lacks the complex Data Insights section of the GMAT and has a more straightforward Quant style, though it has a heavier focus on vocabulary."
    },
    {
      question: "What's a good GRE score?",
      answer: "A score of 320+ is generally considered strong for top-tier graduate programs. For elite business schools, a score of 325+ is highly competitive."
    },
    {
      question: "How long should I prepare?",
      answer: "On average, students prepare for 2 to 3 months. A structured plan with 80-120 hours of focused study is typically enough to reach target scores."
    },
    {
      question: "How often can I retake the GRE?",
      answer: "You can take the GRE once every 21 days, up to 5 times within any continuous rolling 12-month period."
    },
    {
      question: "Does the GRE have negative marking?",
      answer: "No, the GRE does not have negative marking. It is always in your best interest to answer every question, even if you have to make an educated guess."
    }
  ];

  const grePrepModes = [
    {
      id: "classroom",
      title: "GRE Classroom Coaching",
      label: "Hybrid",
      description: "Structured GRE classroom prep under the guidance and mentorship of faculty. Ensures high accountability and in-depth understanding of concepts.",
      bullets: [
        "48 hours (24 classes) of classroom training by experienced GRE tutors",
        "7 full-length GRE mock tests and 15 sectional tests",
        "GRE study material, Vocabulary app and webinars (foundation and advanced)",
        "Unlimited doubt-clearing sessions from 7 AM to midnight every day",
      ],
      image: "https://www.jamboreeindia.com/assets/version-2/img/product/prep-products/online-coaching.webp",
      cta: {
        demo: {
          label: "BOOK A DEMO",
          icon: "https://www.jamboreeindia.com/assets/version-2/img/product/call-icon-w.png",
          href: "#",
        },
        knowMore: {
          label: "KNOW MORE",
          icon: "https://www.jamboreeindia.com/assets/version-2/img/product/call-icon-g.png",
          href: "https://www.jamboreeindia.com/gre-online-prep",
        },
      },
    },
    {
      id: "online",
      title: "GRE Online Coaching",
      label: "Online",
      description: "GRE online prep is a comprehensive classroom program with live classes conducted by faculty. Best suited for students who want the best of classes but have difficulty in travelling.",
      bullets: [
        "48 hours (24 classes) of GRE online training from anywhere.",
        "7 full-length GRE practice tests and test review with GRE teachers",
        "Sectional tests and topic-wise exercises",
        "Comprehensive GRE books to cover all areas of learning and practice",
        "Unlimited doubt-clearing sessions from 7 AM to midnight every day",
      ],
      image: "https://www.jamboreeindia.com/assets/version-2/img/product/prep-products/online-coaching.webp",
      cta: {
        demo: {
          label: "BOOK A DEMO",
          icon: "https://www.jamboreeindia.com/assets/version-2/img/product/call-icon-w.png",
          href: "#",
        },
        knowMore: {
          label: "KNOW MORE",
          icon: "https://www.jamboreeindia.com/assets/version-2/img/product/call-icon-g.png",
          href: "https://www.jamboreeindia.com/gre-online-prep",
        },
      },
    },
    {
      id: "self-paced",
      title: "GRE Self-Paced Online Coaching",
      label: "Self-Paced Online",
      description: "GRE Self-paced program consists of detailed concept videos and practice exercises that the student can work with at their own pace. Best suited for highly motivated students who keep track of their performance and regularity.",
      bullets: [
        "48 hours of pre-recorded HD classroom videos",
        "7 full-length GRE mock tests",
        "Sectional tests and topic-wise exercises",
        "GRE study material available on the student portal",
        "5 hours of one-on-one doubt-clearing sessions with GRE tutor",
      ],
      image: "https://www.jamboreeindia.com/assets/version-2/img/product/prep-products/online-coaching.webp",
      cta: {
        demo: {
          label: "BOOK A DEMO",
          icon: "https://www.jamboreeindia.com/assets/version-2/img/product/call-icon-w.png",
          href: "#",
        },
        knowMore: {
          label: "KNOW MORE",
          icon: "https://www.jamboreeindia.com/assets/version-2/img/product/call-icon-g.png",
          href: "https://www.jamboreeindia.com/gre-online-prep",
        },
      },
    },
    {
      id: "private",
      title: "GRE Private Tutoring",
      label: "Hybrid",
      description: "GRE tutor for personalized GRE preparation based on individual requirements. This is best suited for students who have unpredictable schedules or need personalized attention in certain topics or retest takers wanting to improve their GRE scores in a certain area.",
      bullets: [
        "40 hours of one-on-one classes over 3 months with the best GRE tutors in India",
        "Student GRE portal access for 1-year for tests and practice with advanced analytics",
        "Customized GRE roadmap to achieve best GRE score possible",
        "7 full-length GRE mock tests, 15 sectional tests and additional topic-wise exercises",
        "Comprehensive GRE books that covers learning and practice",
      ],
      image: "https://www.jamboreeindia.com/assets/version-2/img/product/prep-products/online-coaching.webp",
      cta: {
        demo: {
          label: "BOOK A DEMO",
          icon: "https://www.jamboreeindia.com/assets/version-2/img/product/call-icon-w.png",
          href: "#",
        },
        knowMore: {
          label: "KNOW MORE",
          icon: "https://www.jamboreeindia.com/assets/version-2/img/product/call-icon-g.png",
          href: "https://www.jamboreeindia.com/gre-online-prep",
        },
      },
    },
  ];

  const greFocusAreas = [
    {
      id: "concepts",
      title: "Concepts Tested on the Exam",
      short: "Master the core GRE concepts that actually appear on the test.",
      image: "/assets/gre-asset/board.webp",
      headline: "Build confidence in the concepts that matter most on the GRE.",
      description:
        "Our GRE coaching teaches you exactly what you need to ace the GRE prep — nothing more, nothing less. Every lesson is designed to strengthen the fundamentals and sharpen the reasoning behind the exam's most tested ideas.",
      points: [
        "Foundation-first teaching for verbal and quantitative reasoning",
        "Concept drills mapped to the latest GRE question patterns",
        "Clear explanations that make tricky topics easy to retain",
      ],
    },
    {
      id: "faculty",
      title: "GRE Courses by Our Expert Faculty",
      short: "Learn from GRE specialists who simplify complex topics and guide your prep.",
      image: "/assets/gre-asset/teacher.webp",
      headline: "Learn from mentors who know how to turn strategy into results.",
      description:
        "GRE test prep with topic-based exercises to help gain mastery of concepts. Our expert faculty keeps each session practical, focused, and aligned with the way the exam is actually structured.",
      points: [
        "Live classes with faculty who teach for clarity and speed",
        "Structured topic-wise practice to build mastery over time",
        "Personalized guidance for weak areas and score improvement",
      ],
    },
    {
      id: "accuracy",
      title: "Accuracy and Speed",
      short: "Improve precision and pacing so you can perform confidently under timing pressure.",
      image: "/assets/gre-asset/plan.png",
      headline: "Train for accuracy and speed without burning out.",
      description:
        "Accuracy and speed are the difference between a good GRE score and a great one. Our practice framework helps you build the rhythm, control, and timing needed to perform with confidence on test day.",
      points: [
        "Timed practice sets that sharpen decision-making under pressure",
        "Error analysis to improve accuracy and reduce avoidable mistakes",
        "Smart pacing strategies for verbal and quantitative sections",
      ],
    },
  ];

  const activeFocus = greFocusAreas.find((item) => item.id === activeGreFocus) ?? greFocusAreas[0];
  reviewCardsRef.current = [];

  const handlePrevReview = () => {
    setActiveReviewIndex((prev) => (prev - 1 + studentReviews.length) % studentReviews.length);
  };

  const handleNextReview = () => {
    setActiveReviewIndex((prev) => (prev + 1) % studentReviews.length);
  };

  return (
    <div className="bg-slate-50 text-foreground">
      <ProgramHero type="gre" />

      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <div className="w-full">
            <div className="space-y-8 flex flex-col">
              <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-soft">
                <h2 className="text-3xl font-semibold text-foreground">What is the GRE?</h2>
                <p className="mt-5 text-lg leading-8 text-muted-foreground">
                  The Graduate Record Examination (GRE) General Test is a multiple-choice exam for applicants seeking advanced study overseas. It helps graduate schools evaluate reasoning, analytical writing, and critical thinking across multiple fields.
                </p>
                <p className="mt-4 text-lg leading-8 text-muted-foreground">
                  Our GRE prep combines targeted strategy, timed practice, and expert mentoring so you can build score-driving confidence for top programs in the US, UK, Canada, and beyond.
                </p>
              </div>

              <div className="overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-soft">
                <div className="border-b border-slate-200 bg-slate-50 px-6 py-6">
                  <h3 className="text-xl font-semibold text-foreground">GRE Exam Pattern</h3>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-slate-200 bg-gradient-to-r from-primary to-[#003A99]">
                        <th className="px-6 py-3 text-left text-base font-semibold text-white">Section</th>
                        <th className="px-6 py-3 text-left text-base font-semibold text-white">Questions</th>
                        <th className="px-6 py-3 text-left text-base font-semibold text-white">Time</th>
                        <th className="px-6 py-3 text-left text-base font-semibold text-white">Score Scale</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      {[
                        {
                          section: "Analytical Writing — \"Analyze an Issue\"",
                          questions: "1 essay task",
                          time: "30 min",
                          scoreScale: "0-6",
                        },
                        {
                          section: "Verbal Reasoning — Section 1",
                          questions: "12",
                          time: "18 min",
                          scoreScale: "130-170",
                        },
                        {
                          section: "Verbal Reasoning — Section 2 (adaptive)",
                          questions: "15",
                          time: "23 min",
                          scoreScale: "130-170",
                        },
                        {
                          section: "Quantitative Reasoning — Section 1",
                          questions: "12",
                          time: "21 min",
                          scoreScale: "130-170",
                        },
                        {
                          section: "Quantitative Reasoning — Section 2 (adaptive)",
                          questions: "15",
                          time: "26 min",
                          scoreScale: "130-170",
                        },
                        {
                          section: "Total",
                          questions: "55",
                          time: "~1 hr 58 min",
                          scoreScale: "260-340",
                          isTotal: true,
                        },
                      ].map((row) => (
                        <tr key={row.section} className={row.isTotal ? "bg-slate-50 font-semibold" : ""}>
                          <td className="px-6 py-3 text-base text-slate-900">{row.section}</td>
                          <td className="px-6 py-3 text-base text-slate-700">{row.questions}</td>
                          <td className="px-6 py-3 text-base text-slate-700">{row.time}</td>
                          <td className="px-6 py-3 text-base text-slate-700">{row.scoreScale}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-soft">
                <div className="relative aspect-auto min-h-[340px] sm:min-h-0 sm:aspect-video overflow-hidden bg-gradient-to-br from-[#EEF2FF] via-[#F8FAFF] to-transparent">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(99,_102,_241,_0.14),_transparent_45%)]" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90 text-primary shadow-lg">
                      <Play className="h-8 w-8" />
                    </div>
                    <div className="mt-4 max-w-[24rem] rounded-3xl border border-white/70 bg-white/90 px-5 py-4 shadow-sm">
                      <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">GRE Overview</p>
                      <p className="mt-2 text-sm leading-7 text-muted-foreground">Watch a crisp preview of our GRE preparation approach and student success stories.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-soft">
                <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] items-center">
                  <div className="space-y-4">
                    <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
                      <Globe2 className="h-4 w-4" />
                      GRE for Global MS
                    </div>
                    <h3 className="text-3xl font-semibold text-foreground">The GRE advantage for your next master’s application</h3>
                    <p className="text-lg leading-8 text-muted-foreground">
                      GRE gives you a flexible, globally accepted score report that works for top MS programs while keeping your application options open across business, engineering and science.
                    </p>
                  </div>

                  <div className="grid gap-4">
                    <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                      <div className="flex items-center gap-3">
                        <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[#EEF2FF] text-primary">
                          <BarChart3 className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-foreground">Accepted worldwide</p>
                          <p className="text-sm text-muted-foreground">GRE is accepted by 1,200+ programs globally.</p>
                        </div>
                      </div>
                    </div>
                    <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                      <div className="flex items-center gap-3">
                        <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[#E0F2FE] text-[#0B69FF]">
                          <Clock3 className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-foreground">Flexible timetable</p>
                          <p className="text-sm text-muted-foreground">Choose the test date that fits your study pace.</p>
                        </div>
                      </div>
                    </div>
                    <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                      <div className="flex items-center gap-3">
                        <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[#ECFDF5] text-[#0F766E]">
                          <ShieldCheck className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-foreground">Send only your best</p>
                          <p className="text-sm text-muted-foreground">Report scores selectively to schools after you decide.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* GRE FOR MBA Section */}
          <div className="mt-20 text-center max-w-[1200px] mx-auto">
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
            <div className="overflow-x-auto rounded-[24px] border border-slate-200 bg-white shadow-soft">
              <table className="w-full border-collapse text-left text-sm md:text-base">
                <thead>
                  <tr className="border-b border-slate-200">
                    <th className="px-6 py-4 bg-slate-50 w-1/2"></th>
                    <th className="px-6 py-4 bg-primary text-white font-bold text-center text-lg rounded-t-none w-1/2">
                      GRE
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr>
                    <td className="px-6 py-5 font-semibold text-slate-900 bg-slate-50/30">Total time</td>
                    <td className="px-6 py-5 text-primary font-bold text-center bg-blue-50/10">1 hr 58 min</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-5 font-semibold text-slate-900 bg-slate-50/30">Sections</td>
                    <td className="px-6 py-5 text-primary font-bold text-center bg-blue-50/10">Quant + Verbal + 1 short essay</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-5 font-semibold text-slate-900 bg-slate-50/30">Data Insights section</td>
                    <td className="px-6 py-5 text-primary font-bold text-center bg-blue-50/10">None — no DS, MSR or graph analysis</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-5 font-semibold text-slate-900 bg-slate-50/30">Quant style</td>
                    <td className="px-6 py-5 text-primary font-bold text-center bg-blue-50/10">More standard, formula-friendly math</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-5 font-semibold text-slate-900 bg-slate-50/30">Also usable for MS/PhD</td>
                    <td className="px-6 py-5 text-primary font-bold text-center bg-blue-50/10">Yes — one score, two doors</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-5 font-semibold text-slate-900 bg-slate-50/30">Accepted at ISB, M7, Ivy League, INSEAD, NUS/NTU</td>
                    <td className="px-6 py-5 text-primary font-bold text-center bg-blue-50/10">Yes</td>
                  </tr>
                  <tr className="bg-slate-50/50">
                    <td className="px-6 py-5 font-semibold text-slate-900 bg-slate-50/30">Retakes</td>
                    <td className="px-6 py-5 text-slate-700 text-center font-medium">
                      GRE: up to 5 times/year, 21-day gap
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Syllabus Section */}
            <div className="mt-24 max-w-[1200px] mx-auto text-left">
              <div className="text-center mb-10">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <div className="h-px w-12 bg-primary/40" />
                  <span className="text-xs font-bold uppercase tracking-[0.14em] text-primary">SYLLABUS</span>
                  <div className="h-px w-12 bg-primary/40" />
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold font-display text-foreground tracking-tight text-center mt-4 mb-3">
                  The complete GRE syllabus
                </h2>
                <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  Everything ETS tests, organised so you never have to dig through the official site. Click any section to expand.
                </p>
              </div>

              <div className="space-y-4 max-w-4xl mx-auto">
                {/* Quantitative Reasoning Accordion */}
                <div className={`rounded-[20px] bg-white shadow-soft transition-all duration-200 overflow-hidden ${
                  openSyllabusSection === "quant" 
                    ? "border border-slate-200 border-l-[6px] border-l-primary" 
                    : "border border-slate-200/80"
                }`}>
                  <button
                    type="button"
                    onClick={() => setOpenSyllabusSection(openSyllabusSection === "quant" ? null : "quant")}
                    className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left transition hover:bg-slate-50/50"
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                        <Calculator className="h-6 w-6 stroke-[2]" />
                      </div>
                      <div>
                        <span className="text-lg font-bold text-foreground block">Quantitative Reasoning</span>
                        <span className="text-xs md:text-sm text-slate-500 font-medium hidden sm:inline">
                          27 questions • 47 min • on-screen calculator provided
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-xs text-slate-500 font-medium sm:hidden">
                        27 Qs • 47 min
                      </span>
                      <span className="text-primary font-semibold text-2xl leading-none">
                        {openSyllabusSection === "quant" ? "−" : "+"}
                      </span>
                    </div>
                  </button>
                  <div className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    openSyllabusSection === "quant" ? "max-h-[1000px] border-t border-slate-100 p-6" : "max-h-0 p-0"
                  }`}>
                    <p className="text-sm md:text-base text-muted-foreground mb-6">
                      Tests basic math skills and the ability to reason quantitatively. Four content areas:
                    </p>
                    
                    <div className="space-y-6">
                      {[
                        {
                          title: "Arithmetic",
                          pills: ["Integers & divisibility", "Primes & factorisation", "Fractions & decimals", "Exponents & roots", "Percent", "Ratio & proportion", "Estimation", "Number lines & absolute value"]
                        },
                        {
                          title: "Algebra",
                          pills: ["Algebraic expressions", "Linear & quadratic equations", "Inequalities", "Functions", "Word problems", "Coordinate geometry & graphs"]
                        },
                        {
                          title: "Geometry",
                          pills: ["Lines & angles", "Triangles (incl. 30-60-90, 45-45-90)", "Circles", "Quadrilaterals & polygons", "3-D figures", "Area, perimeter & volume", "Pythagorean theorem"]
                        },
                        {
                          title: "Data Analysis",
                          pills: ["Mean, median, mode & range", "Standard deviation & percentiles", "Tables, graphs & charts", "Probability", "Permutations & combinations", "Normal distribution basics"]
                        },
                        {
                          title: "Question types",
                          pills: ["Quantitative Comparison", "Multiple choice (one answer)", "Multiple choice (one or more answers)", "Numeric Entry", "Data Interpretation sets"]
                        }
                      ].map((section) => (
                        <div key={section.title} className="space-y-2">
                          <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider">{section.title}</h4>
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
                <div className={`rounded-[20px] bg-white shadow-soft transition-all duration-200 overflow-hidden ${
                  openSyllabusSection === "verbal" 
                    ? "border border-slate-200 border-l-[6px] border-l-primary" 
                    : "border border-slate-200/80"
                }`}>
                  <button
                    type="button"
                    onClick={() => setOpenSyllabusSection(openSyllabusSection === "verbal" ? null : "verbal")}
                    className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left transition hover:bg-slate-50/50"
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                        <BookOpen className="h-6 w-6 stroke-[2]" />
                      </div>
                      <div>
                        <span className="text-lg font-bold text-foreground block">Verbal Reasoning</span>
                        <span className="text-xs md:text-sm text-slate-500 font-medium hidden sm:inline">
                          27 questions • 41 min • includes Critical Reasoning
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-xs text-slate-500 font-medium sm:hidden">
                        27 Qs • 41 min
                      </span>
                      <span className="text-primary font-semibold text-2xl leading-none">
                        {openSyllabusSection === "verbal" ? "−" : "+"}
                      </span>
                    </div>
                  </button>
                  <div className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    openSyllabusSection === "verbal" ? "max-h-[1000px] border-t border-slate-100 p-6" : "max-h-0 p-0"
                  }`}>
                    <p className="text-sm md:text-base text-muted-foreground mb-6">
                      Tests the ability to analyze and evaluate written material, synthesize information, and recognize relationships between words and concepts.
                    </p>
                    
                    <div className="space-y-6">
                      {[
                        {
                          title: "Reading Comprehension",
                          pills: ["Passage reading", "Informational reasoning", "Tone & attitude", "Structure & main idea", "Critical Reasoning"]
                        },
                        {
                          title: "Text Completion",
                          pills: ["Single-blank sentences", "Double-blank sentences", "Triple-blank sentences", "Contextual vocabulary"]
                        },
                        {
                          title: "Sentence Equivalence",
                          pills: ["Synonym pairs", "Sentence context", "Vocabulary in context"]
                        },
                        {
                          title: "Question types",
                          pills: ["Reading Comprehension", "Text Completion", "Sentence Equivalence"]
                        }
                      ].map((section) => (
                        <div key={section.title} className="space-y-2">
                          <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider">{section.title}</h4>
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

                {/* Analytical Writing Accordion */}
                <div className={`rounded-[20px] bg-white shadow-soft transition-all duration-200 overflow-hidden ${
                  openSyllabusSection === "awa" 
                    ? "border border-slate-200 border-l-[6px] border-l-primary" 
                    : "border border-slate-200/80"
                }`}>
                  <button
                    type="button"
                    onClick={() => setOpenSyllabusSection(openSyllabusSection === "awa" ? null : "awa")}
                    className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left transition hover:bg-slate-50/50"
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-50 text-orange-600">
                        <PenTool className="h-6 w-6 stroke-[2]" />
                      </div>
                      <div>
                        <span className="text-lg font-bold text-foreground block">Analytical Writing (AWA)</span>
                        <span className="text-xs md:text-sm text-slate-500 font-medium hidden sm:inline">
                          1 task • 30 min • scored 0-6
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-xs text-slate-500 font-medium sm:hidden">
                        1 task • 30 min
                      </span>
                      <span className="text-primary font-semibold text-2xl leading-none">
                        {openSyllabusSection === "awa" ? "−" : "+"}
                      </span>
                    </div>
                  </button>
                  <div className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    openSyllabusSection === "awa" ? "max-h-[1000px] border-t border-slate-100 p-6" : "max-h-0 p-0"
                  }`}>
                    <p className="text-sm md:text-base text-muted-foreground mb-6">
                      Tests critical thinking and analytical writing skills. Measures your ability to articulate and support complex ideas, construct and evaluate arguments, and sustain a focused and coherent discussion.
                    </p>
                    
                    <div className="space-y-6">
                      {[
                        {
                          title: "Task Details",
                          pills: ["Analyze an Issue task"]
                        },
                        {
                          title: "Skills Tested",
                          pills: ["Constructing a claim", "Supporting with evidence", "Maintaining focus and cohesion", "Standard written English grammar"]
                        }
                      ].map((section) => (
                        <div key={section.title} className="space-y-2">
                          <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider">{section.title}</h4>
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
          </div>

        </div>
      </section>

      <CallToAction />
      <CustomFAQ faqs={greFaqs} />
      <Footer />
    </div>
  );
};

export default AboutGre;

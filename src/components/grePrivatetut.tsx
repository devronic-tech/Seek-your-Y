import React, { useState } from "react";
import { CustomFAQ } from "@/components/CustomFAQ";
import { BookOpen, Zap, Activity, Gift, ChevronDown, CheckCircle2 } from "lucide-react";
import { ProgramHero } from "@/components/ProgramHero";
import { BookSessionDialog } from "@/components/BookSessionDialog";
import { CallToAction } from "@/components/CallToAction";
import { Footer } from "@/components/Footer";
import analyticsIcon from "@/assets/paced-icon/analytics.webp";
import booksIcon from "@/assets/paced-icon/books.webp";
import qaIcon from "@/assets/paced-icon/qa.webp";
import since1993Icon from "@/assets/paced-icon/since-1993.webp";
import studentIcon from "@/assets/paced-icon/student.webp";
import teacherIcon from "@/assets/paced-icon/teacher.webp";

const GrePrivateTut: React.FC = () => {
  const [isBookSessionOpen, setIsBookSessionOpen] = useState(false);

  const grePrivateTutFaqs = [
    {
      question: "How personalized is the GRE private tutoring program?",
      answer: "Extremely personalized. We design a completely custom study plan based on your current score, target score, timeline, strengths, weaknesses, and availability."
    },
    {
      question: "Who will be my mentor?",
      answer: "You will get 1-on-1 direct coaching from Aman, an experienced prep expert with a proven history of helping students score 325+ on the GRE."
    },
    {
      question: "How flexible is the scheduling for sessions?",
      answer: "We offer highly flexible timings. You can schedule sessions in coordination with your tutor to comfortably fit around your work or college commitments."
    },
    {
      question: "Can I choose to focus only on my weak areas?",
      answer: "Yes, absolutely! The entire curriculum can be tailored to focus on your specific areas of improvement, whether it's Quant word problems, Verbal RC, or time management."
    },
    {
      question: "How do we track my progress?",
      answer: "We track your progress through diagnostic tests, section-wise drills, full simulated mock exams, and direct performance reviews with your mentor."
    }
  ];

  const cards = [
    { icon: since1993Icon, title: "Unmatched Scores on the GRE since 1993" },
    { icon: analyticsIcon, title: "Smart Analytics help you track and evaluate your performance" },
    { icon: teacherIcon, title: "Flexibility to move between online and offline mode of learning as per your convenience & availability" },
    { icon: booksIcon, title: "Targeted study plan & exhaustive Full-Length tests to maximize speed and accuracy" },
    { icon: studentIcon, title: "Mentoring and Coaching by the best and most experienced faculty" },
    { icon: qaIcon, title: "Personalized attention through Unlimited Doubt Clearing Sessions" },
  ];

  return (
    <div className="bg-background text-foreground">
      {/* HERO */}
      <ProgramHero type="gre" />

      {/* DESCRIPTION */}
      <section className="py-16">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <div className="w-full">
            <div className="prose max-w-none text-base text-muted-foreground">
              <p>
                GRE private tutoring is the most personalised form of GRE prep which ensures that you work with the best GRE tutors in India, build a customized study plan and learn in a 1-1 classroom setting. These classes can be done in-person or online or hybrid based on availability.
              </p>

              <p>
                Students looking for a very high GRE score or those with uncertain work schedules generally opt for a GRE tutor. The tutor ensures high concept clarity, focused practice and regular test reviews.
              </p>

              <ul className="mt-6 space-y-3 list-disc pl-5">
                <li><strong>Personalized GRE roadmap:</strong> Build a custom GRE prep roadmap to achieve the best GRE scores possible in consultation with GRE faculty.</li>
                <li><strong>Comprehensive study material:</strong> GRE books, sectional tests and full length tests ensure you cover all areas of your prep.</li>
                <li><strong>Flexibility:</strong> Choose classes based on your availability and level of prep.</li>
                <li><strong>Both online & offline:</strong> You can choose in-person or online sessions as per convenience.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE - CARDS */}
      <section className="py-20 bg-background border-t border-border">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-4 tracking-tight">
              Why Choose Seekyoury for <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">GRE Private Tutoring</span>
            </h2>
            
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experience personalized GRE preparation backed by 30+ years of expertise
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {cards.map((card) => (
              <div
                key={card.title}
                className="group rounded-3xl bg-card border border-border p-10 shadow-soft hover:shadow-elevated transition-all duration-300 hover:-translate-y-1"
              >
                {/* Icon Container */}
                <div className="mb-8">
                  <div className="inline-flex h-24 w-24 items-center justify-center rounded-2xl bg-primary/10 shadow-sm transition-transform duration-300 group-hover:scale-105">
                    <img
                      src={card.icon}
                      alt={card.title}
                      className="h-14 w-14 object-contain"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Text Content */}
                <h3 className="text-xl font-bold text-foreground mb-3 leading-tight">
                  {card.title}
                </h3>
                
                <p className="text-base text-muted-foreground leading-relaxed">
                  {card.title}
                </p>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="mt-16 text-center">
            <button 
              onClick={() => setIsBookSessionOpen(true)}
              className="inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-primary to-accent px-8 py-4 text-base font-bold text-primary-foreground shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Talk to a GRE Expert
            </button>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 bg-gradient-to-b from-background via-muted/10 to-background border-t border-border">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-primary mb-2">PRICING</p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-4">Packages</h2>
            <div className="mx-auto w-32 h-1.5 bg-gradient-to-r from-primary to-accent rounded-full"></div>
          </div>

          <div className="mt-16 grid gap-8 lg:grid-cols-3 md:grid-cols-2">
            {/* Booster Card */}
            <div className="relative rounded-3xl border border-border bg-card p-8 shadow-soft hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 group">
              <h3 className="text-2xl font-extrabold text-foreground mb-4">Booster</h3>
              <div className="mb-2">
                <span className="text-5xl font-extrabold text-primary">₹24,999</span>
              </div>
              <p className="text-sm text-muted-foreground mb-6">8 sessions • single section • ~₹3,125/session</p>
              
              <div className="space-y-4 mb-8">
                <div className="flex gap-3">
                  <svg className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-muted-foreground font-medium">8 × 60-min 1-on-1 sessions</span>
                </div>
                <div className="flex gap-3">
                  <svg className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-muted-foreground font-medium">Custom drills & homework</span>
                </div>
                <div className="flex gap-3">
                  <svg className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-muted-foreground font-medium">WhatsApp doubt support</span>
                </div>
              </div>

              <button 
                onClick={() => setIsBookSessionOpen(true)}
                className="w-full rounded-[14px] px-8 py-4 text-sm font-semibold text-primary-foreground bg-primary shadow-lg hover:brightness-105 transition"
              >
                Get Started
              </button>
            </div>

            {/* Complete Card (Recommended) */}
            <div className="relative rounded-3xl border border-border bg-card p-8 shadow-soft hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 group lg:scale-105">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="inline-flex px-4 py-1 rounded-full bg-foreground text-primary-foreground text-xs font-bold">Recommended</span>
              </div>
              <h3 className="text-2xl font-extrabold text-foreground mb-4 mt-2">Complete</h3>
              <div className="mb-2">
                <span className="text-5xl font-extrabold text-primary">₹44,999</span>
              </div>
              <p className="text-sm text-muted-foreground mb-6">16 sessions • full GRE • ~₹2,812/session</p>
              
              <div className="space-y-4 mb-8">
                <div className="flex gap-3">
                  <svg className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-muted-foreground font-medium">16 × 60-min 1-on-1 sessions</span>
                </div>
                <div className="flex gap-3">
                  <svg className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-muted-foreground font-medium">Self-paced course + 30-test series</span>
                </div>
                <div className="flex gap-3">
                  <svg className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-muted-foreground font-medium">Mock reviews after every test</span>
                </div>
                <div className="flex gap-3">
                  <svg className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-muted-foreground font-medium">Priority doubt support</span>
                </div>
              </div>

              <button 
                onClick={() => setIsBookSessionOpen(true)}
                className="w-full rounded-[14px] px-8 py-4 text-sm font-semibold text-primary-foreground bg-primary shadow-lg hover:brightness-105 transition"
              >
                Get Started
              </button>
            </div>

            {/* Elite Card */}
            <div className="relative rounded-3xl border border-border bg-card p-8 shadow-soft hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 group">
              <h3 className="text-2xl font-extrabold text-foreground mb-4">Elite 330+</h3>
              <div className="mb-2">
                <span className="text-5xl font-extrabold text-primary">₹69,999</span>
              </div>
              <p className="text-sm text-muted-foreground mb-6">24 sessions • directly with Aman</p>
              
              <div className="space-y-4 mb-8">
                <div className="flex gap-3">
                  <svg className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-muted-foreground font-medium">24 sessions with Aman himself</span>
                </div>
                <div className="flex gap-3">
                  <svg className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-muted-foreground font-medium">Everything in Complete</span>
                </div>
                <div className="flex gap-3">
                  <svg className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-muted-foreground font-medium">MBA/MS admissions strategy session</span>
                </div>
              </div>

              <button 
                onClick={() => setIsBookSessionOpen(true)}
                className="w-full rounded-[14px] px-8 py-4 text-sm font-semibold text-primary-foreground bg-primary shadow-lg hover:brightness-105 transition"
              >
                Get Started
              </button>
            </div>
          </div>

          <div className="mt-12 rounded-2xl border border-border bg-card/50 p-6 max-w-4xl mx-auto text-muted-foreground text-sm">
            <span className="font-bold text-foreground">How we compare:</span> private GRE tutoring in India typically runs ₹2,500–4,000 per hour (and US firms like Manhattan Prep or Princeton Review charge $200–300/hr). Our Complete package works out to ~₹2,812/session — with course, mocks and mentoring included free.
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-background via-primary/5 to-background py-20 border-t border-border">
        {/* Decorative glows */}
        <div className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full bg-primary/5 blur-3xl pointer-events-none -z-10" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-accent/5 blur-3xl pointer-events-none -z-10" />
        
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                <span className="w-2 h-2 rounded-full bg-primary"></span>
                <span className="text-sm font-bold text-primary uppercase tracking-wide">Ready to Transform Your GRE Prep?</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground mb-6 leading-tight tracking-tight">
                Find Your <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Y</span> Today
              </h2>
              
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-lg">
                Get personalized GRE tutoring with a 1-on-1 strategy session. We'll assess your current level, understand your goals, and create a roadmap to your target score.
              </p>

              <div className="space-y-4 mb-10">
                {[
                  { title: "Free strategy consultation", desc: "30-minute session with GRE experts" },
                  { title: "Personalized study roadmap", desc: "Custom plan tailored to your timeline" },
                  { title: "No commitment required", desc: "Pure guidance, zero obligations" },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-3">
                    <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-primary/10 mt-0.5 flex-shrink-0">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <div className="font-bold text-foreground">{item.title}</div>
                      <div className="text-sm text-muted-foreground">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              <button 
                onClick={() => setIsBookSessionOpen(true)}
                className="inline-flex items-center gap-3 rounded-full bg-primary px-8 py-4 text-base font-bold text-primary-foreground shadow-lg hover:shadow-xl hover:brightness-95 transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
                Book Your Free Demo
              </button>
            </div>

            {/* Right Visual Card */}
            <div className="relative">
              {/* Gradient card background */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-card to-background border border-border shadow-xl"></div>
              
              {/* Accent line at top */}
              <div className="absolute top-0 left-0 right-0 h-1.5 rounded-t-3xl bg-gradient-to-r from-primary to-accent"></div>

              <div className="relative p-10 lg:p-12">
                <div className="space-y-8">
                  {/* Stat cards */}
                  <div className="bg-card rounded-2xl p-6 border border-border shadow-sm">
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className="text-4xl font-extrabold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">80%</span>
                      <span className="text-foreground font-semibold">Success</span>
                    </div>
                    <p className="text-sm text-muted-foreground">Students achieve their target scores with personalized tutoring</p>
                  </div>

                  <div className="bg-card rounded-2xl p-6 border border-border shadow-sm">
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className="text-4xl font-extrabold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">+120</span>
                      <span className="text-foreground font-semibold">Avg. Gain</span>
                    </div>
                    <p className="text-sm text-muted-foreground">Average score improvement with our complete program</p>
                  </div>

                  <div className="bg-card rounded-2xl p-6 border border-border shadow-sm">
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className="text-4xl font-extrabold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">9+</span>
                      <span className="text-foreground font-semibold">Years</span>
                    </div>
                    <p className="text-sm text-muted-foreground">Expert faculty with proven track record since 1993</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CallToAction />
      <CustomFAQ faqs={grePrivateTutFaqs} />
      <Footer />
      <BookSessionDialog open={isBookSessionOpen} onOpenChange={setIsBookSessionOpen} />
    </div>
  );
};

export default GrePrivateTut;

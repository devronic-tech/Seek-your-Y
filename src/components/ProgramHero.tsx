import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import { StudentScoreCarousel } from "./StudentScoreCarousel";
import { BookSessionDialog } from "./BookSessionDialog";

interface ProgramHeroProps {
  type: "gre" | "gmat";
}

export const ProgramHero: React.FC<ProgramHeroProps> = ({ type }) => {
  const isGre = type === "gre";
  const [isBookSessionOpen, setIsBookSessionOpen] = useState(false);

  return (
    <section className={`overflow-hidden pt-28 md:pt-32 pb-16 md:pb-20 relative ${isGre ? "bg-slate-50" : "bg-background"}`}>
      {/* Background Gradients */}
      <div 
        className={`absolute inset-x-0 top-0 h-64 bg-gradient-to-br opacity-40 md:opacity-100 ${
          isGre 
            ? "from-blue-100/40 via-white to-transparent" 
            : "from-blue-600/15 via-indigo-500/5 to-transparent"
        }`} 
      />

      {/* Soft blue/indigo blurred glows at the bottom to blend with the next section */}
      <div className="absolute -bottom-36 left-1/3 w-[500px] h-[300px] rounded-full bg-blue-500/10 blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-indigo-500/10 blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-[1440px] px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] items-center overflow-visible">
          {/* Left Column: Heading and Info */}
          <div className="space-y-6 text-left max-w-[680px]">
            <div className={`inline-flex rounded-full border px-4 py-1.5 text-xs font-bold uppercase tracking-[0.24em] shadow-sm ${
              isGre 
                ? "border-primary/20 bg-primary/10 text-primary" 
                : "border-indigo-200 bg-indigo-50 text-indigo-700"
            }`}>
              {isGre ? "GRE PREP" : "GMAT PREP"}
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold font-display leading-[1.15] tracking-tight text-foreground">
              {isGre ? (
                <>
                  We Deliver the{" "}
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-500 to-violet-500">
                    GRE Scores
                  </span>{" "}
                  that Top Colleges Want
                </>
              ) : (
                <>
                  Achieve GMAT momentum with{" "}
                  <span className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-500 to-violet-500">
                    coaching built for scores.
                  </span>
                </>
              )}
            </h1>

            <p className="text-base sm:text-lg leading-relaxed text-muted-foreground max-w-[580px]">
              {isGre 
                ? "Premium GRE coaching designed for ambitious learners. Build the test skills, speed, and confidence you need to compete for top programs."
                : "Learn faster, practice smarter, and get the exact GMAT strategy you need for your target business school."
              }
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <button 
                onClick={() => setIsBookSessionOpen(true)}
                className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-500 to-violet-500 px-6 sm:px-8 py-3.5 sm:py-4 text-sm font-bold text-white shadow-lg shadow-indigo-500/25 transition-all hover:opacity-95 hover:-translate-y-0.5 active:translate-y-0"
              >
                {isGre ? "Take a Free Class" : "Book a Free Class"}
                <ArrowRight className="h-4 w-4" />
              </button>
              <button 
                onClick={() => setIsBookSessionOpen(true)}
                className={`inline-flex items-center gap-2 rounded-2xl border px-6 sm:px-8 py-3.5 sm:py-4 text-sm font-semibold transition-all hover:-translate-y-0.5 active:translate-y-0 ${
                  isGre 
                    ? "border-indigo-200 bg-white text-indigo-700 hover:border-indigo-400 hover:bg-indigo-50/50" 
                    : "border-border bg-card text-primary hover:border-primary/60 hover:bg-primary/5"
                }`}
              >
                {isGre ? "Call Us" : "Talk to an Expert"}
              </button>
            </div>
          </div>

          {/* Right Column: Beautiful Overlapping Score Cards Carousel */}
          <div className="relative w-full flex items-center justify-center overflow-visible">
            <div className="absolute -left-6 top-10 hidden h-48 w-48 rounded-full bg-primary/5 blur-3xl lg:block" />
            <div className="w-full max-w-[520px] lg:max-w-none overflow-visible">
              <div className="text-center lg:text-left mb-2 md:mb-4 px-2">
                <h3 className="text-xs uppercase tracking-[0.24em] font-bold text-muted-foreground">
                  {isGre ? "Top GRE Achievers" : "Top GMAT Results"}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Real students. Real scores. Verified results.
                </p>
              </div>
              <StudentScoreCarousel type={type} />
            </div>
          </div>
        </div>
      </div>

      <BookSessionDialog open={isBookSessionOpen} onOpenChange={setIsBookSessionOpen} />
    </section>
  );
};

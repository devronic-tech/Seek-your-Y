import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ManyaPhoto from "@/assets/student_pics/Manya.jpeg";
import PraffulPhoto from "@/assets/student_pics/Prafful.jpeg";
import ArjunPhoto from "@/assets/student_pics/Arjun M S.jpeg";
import BalagopalPhoto from "@/assets/student_pics/Balagopal Jayakumar.jpeg";
import SabhyataPhoto from "@/assets/student_pics/Sabhyata.jpeg";

interface StudentScoreCarouselProps {
  type: "gre" | "gmat";
}

export const StudentScoreCarousel: React.FC<StudentScoreCarouselProps> = ({ type }) => {
  const [activeIndex, setActiveIndex] = useState(2); // Start with the middle card active
  const [isMobile, setIsMobile] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const students = [
    {
      name: "Manya",
      school: "Punjab College",
      greStudentLabel: "GRE Student",
      gmatStudentLabel: "GMAT Student",
      greScore: "GRE 312 -> 324",
      gmatScore: "GMAT 690 -> 750",
      image: ManyaPhoto,
    },
    {
      name: "Prafful",
      school: "BITS Pilani",
      greStudentLabel: "GRE Student",
      gmatStudentLabel: "GMAT Student",
      greScore: "GRE 308 -> 323",
      gmatScore: "GMAT 680 -> 740",
      image: PraffulPhoto,
    },
    {
      name: "Arjun",
      school: "DTU Delhi",
      greStudentLabel: "GRE Student",
      gmatStudentLabel: "GMAT Student",
      greScore: "GRE 305 -> 322",
      gmatScore: "GMAT 640 -> 720",
      image: ArjunPhoto,
    },
    {
      name: "Bala",
      school: "College of Engg, Trivandrum",
      greStudentLabel: "GRE Student",
      gmatStudentLabel: "GMAT Student",
      greScore: "Quant 158 -> 166",
      gmatScore: "GMAT 660 -> 715",
      image: BalagopalPhoto,
    },
    {
      name: "Sabhyata",
      school: "NIIT University",
      greStudentLabel: "GRE Student",
      gmatStudentLabel: "GMAT Student",
      greScore: "GRE 310 -> 320",
      gmatScore: "GMAT 630 -> 710",
      image: SabhyataPhoto,
    }
  ];

  // Auto-move interval effect (change card every 2 seconds)
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev === students.length - 1 ? 0 : prev + 1));
    }, 2000); // 2 seconds

    return () => clearInterval(interval);
  }, [isPaused, students.length]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? students.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === students.length - 1 ? 0 : prev + 1));
  };

  return (
    <div 
      className="flex flex-col items-center justify-center w-full py-6 select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Cards Container */}
      <div className="relative w-full h-[400px] md:h-[460px] flex items-center justify-center overflow-visible">
        {students.map((student, index) => {
          const N = students.length;
          let diff = index - activeIndex;

          // Shortest-path circular wrap-around logic for seamless infinite scrolling
          if (diff > N / 2) {
            diff -= N;
          } else if (diff < -N / 2) {
            diff += N;
          }

          const isActive = index === activeIndex;

          // Spacing offset calculations
          const desktopSpacing = 200;
          const mobileSpacing = 65;
          const spacing = isMobile ? mobileSpacing : desktopSpacing;

          // Stack scale and depth
          const scale = isActive ? 1.05 : 0.82;
          const zIndex = 30 - Math.abs(diff);
          
          // Show only 3 cards at a time (active and immediate left/right neighbors)
          const opacity = Math.abs(diff) > 1 ? 0 : isActive ? 1 : 0.7;
          const pointerEvents = Math.abs(diff) > 1 ? "none" : "auto";
          
          // Rotation fan effect
          const rotate = diff * 7;

          return (
            <motion.div
              key={student.name}
              style={{
                zIndex,
                transformOrigin: "bottom center",
                pointerEvents
              }}
              animate={{
                x: diff * spacing,
                scale,
                rotate,
                opacity,
              }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 24,
              }}
              onClick={() => setActiveIndex(index)}
              className={`absolute w-[240px] md:w-[280px] h-[340px] md:h-[400px] rounded-[28px] overflow-hidden cursor-pointer transition-shadow duration-300 ${
                isActive 
                  ? "shadow-2xl ring-4 ring-primary/20" 
                  : "shadow-lg opacity-85"
              }`}
              whileHover={isActive ? { 
                y: -12,
                boxShadow: "0 25px 50px -12px rgba(0,0,0,0.15)"
              } : {}}
            >
              {/* Full-bleed Photo Background */}
              <div className="absolute inset-0 w-full h-full">
                <img
                  src={student.image}
                  alt={student.name}
                  className="w-full h-full object-cover object-center"
                  loading="eager"
                />
                {/* Dark bottom gradient overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/35 to-transparent" />
              </div>

              {/* Foreground Content: Name, Subtitle and Blue Score Pill */}
              <div className="relative z-10 w-full h-full flex flex-col justify-end p-4 md:p-6 pb-6 text-center text-white">
                <div className="space-y-3.5">
                  <div className="space-y-0.5">
                    <h4 className="text-base md:text-lg font-bold tracking-wide text-white drop-shadow-sm">
                      {student.name}
                    </h4>
                    <p className="text-base text-slate-200/90 font-medium tracking-wide">
                      {type === "gre" ? student.greStudentLabel : student.gmatStudentLabel}
                    </p>
                  </div>

                  {/* Score pill styled exactly like the user's reference image */}
                  <div className="flex justify-center w-full">
                    {(() => {
                      const scoreText = type === "gre" ? student.greScore : student.gmatScore;
                      const parts = scoreText.split("->");
                      let parsed = { test: "", before: "", after: scoreText };
                      if (parts.length === 2) {
                        const leftPart = parts[0].trim();
                        const rightPart = parts[1].trim();
                        const leftWords = leftPart.split(" ");
                        if (leftWords.length >= 2) {
                          const test = leftWords[0];
                          const before = leftWords.slice(1).join(" ");
                          parsed = { test, before, after: rightPart };
                        } else if (leftWords.length === 1) {
                          parsed = { test: type.toUpperCase(), before: leftWords[0], after: rightPart };
                        }
                      }
                      return (
                        <div className="flex items-center justify-center gap-2 select-none font-display">
                          <span className="text-[12px] font-bold text-slate-400 uppercase tracking-wider">{parsed.test}</span>
                          <span className="text-sm text-slate-300 font-semibold">{parsed.before}</span>
                          <span className="text-xs text-slate-400">→</span>
                          <span className="bg-blue-600 text-white font-extrabold text-base px-3.5 py-1 rounded-full shadow-md tracking-wider">
                            {parsed.after}
                          </span>
                        </div>
                      );
                    })()}
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Navigation Buttons and Dots (Light themed controls) */}
      <div className="flex items-center gap-6 mt-6">
        <button
          onClick={handlePrev}
          className="w-10 h-10 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-700 hover:bg-slate-50 hover:text-slate-900 active:scale-95 shadow-sm transition-all duration-200"
          aria-label="Previous Student"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2">
          {students.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === activeIndex 
                  ? "w-6 bg-primary" 
                  : "w-2 bg-slate-300 hover:bg-slate-400"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        <button
          onClick={handleNext}
          className="w-10 h-10 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-700 hover:bg-slate-50 hover:text-slate-900 active:scale-95 shadow-sm transition-all duration-200"
          aria-label="Next Student"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

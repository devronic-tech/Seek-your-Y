import React from "react";
import { motion } from "framer-motion";
import { Award, MapPin } from "lucide-react";

interface UniversityCard {
  name: string;
  fullName: string;
  location: string;
  image: string;
}

const universities: UniversityCard[] = [
  {
    name: "Stanford University",
    fullName: "Stanford Graduate School of Business",
    location: "Stanford, California",
    image: "/assets/Universities/stanford.jpg",
  },
  {
    name: "Wharton",
    fullName: "The Wharton School of Pennsylvania",
    location: "Philadelphia, Pennsylvania",
    image: "/assets/Universities/Wharton.jpg",
  },
  {
    name: "Kellogg",
    fullName: "Northwestern Kellogg School of Management",
    location: "Evanston, Illinois",
    image: "/assets/Universities/Kellogg.jpg",
  },
  {
    name: "Chicago Booth",
    fullName: "University of Chicago Booth School of Business",
    location: "Chicago, Illinois",
    image: "/assets/Universities/Booth.avif",
  },
  {
    name: "Columbia University",
    fullName: "Columbia Business School",
    location: "New York, New York",
    image: "/assets/Universities/Columbia.jpg",
  },
  {
    name: "MIT Sloan",
    fullName: "MIT Sloan School of Management",
    location: "Cambridge, Massachusetts",
    image: "/assets/Universities/MIT Sloan.jpg",
  },
  {
    name: "INSEAD",
    fullName: "INSEAD Business School",
    location: "Fontainebleau & Singapore",
    image: "/assets/Universities/INSEAD.jpg",
  },
  {
    name: "London Business School",
    fullName: "London Business School (LBS)",
    location: "London, United Kingdom",
    image: "/assets/Universities/LBS.jpg",
  },
  {
    name: "NUS",
    fullName: "National University of Singapore",
    location: "Singapore",
    image: "/assets/Universities/NUS.jpg",
  },
  {
    name: "NTU",
    fullName: "Nanyang Technological University",
    location: "Singapore",
    image: "/assets/Universities/NTU.jpg",
  },
  {
    name: "ISB",
    fullName: "Indian School of Business",
    location: "Hyderabad & Mohali, India",
    image: "/assets/Universities/ISB.webp",
  },
];

export const UniversityMarquee: React.FC = () => {
  // Quadruple the array for infinite seamless looping ticker
  const marqueeItems = [...universities, ...universities, ...universities, ...universities];

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-background via-blue-50/20 to-background border-t border-b border-border/40 relative overflow-hidden">
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[350px] bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-purple-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Section Header */}
      <div className="max-w-[1250px] mx-auto text-center px-4 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full bg-blue-500/10 border border-blue-400/40 text-blue-600 text-base md:text-lg font-extrabold uppercase tracking-[0.14em] shadow-sm mb-5"
        >
          <Award className="w-4 h-4 text-blue-600 stroke-[2.5]" />
          <span>GLOBAL TOP UNIVERSITIES</span>
        </motion.div>

        <h3 className="text-3xl md:text-4xl lg:text-5xl font-black font-display text-foreground tracking-tight uppercase">
          GRE SCORES ARE ACCEPTED AT
        </h3>
        <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 rounded-full mx-auto mt-5" />
      </div>

      {/* Marquee Track Container with Fade Overlays */}
      <div className="relative w-full overflow-hidden py-4">
        {/* Left Fade Mask (Hidden on mobile) */}
        <div className="hidden md:block absolute left-0 top-0 bottom-0 w-36 lg:w-44 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        {/* Right Fade Mask (Hidden on mobile) */}
        <div className="hidden md:block absolute right-0 top-0 bottom-0 w-36 lg:w-44 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        {/* CSS GPU Hardware Accelerated Smooth Animation */}
        <style>{`
          @keyframes smoothMarqueeTrack {
            0% {
              transform: translate3d(0%, 0, 0);
            }
            100% {
              transform: translate3d(-50%, 0, 0);
            }
          }
          .smooth-marquee-track {
            animation: smoothMarqueeTrack 60s linear infinite;
            will-change: transform;
            backface-visibility: hidden;
            transform-style: preserve-3d;
          }
          .smooth-marquee-track:hover {
            animation-play-state: paused;
          }
        `}</style>

        {/* Continuous Right-to-Left Smooth Running Cards Track */}
        <div className="flex items-center gap-6 sm:gap-8 w-max smooth-marquee-track">
          {marqueeItems.map((uni, idx) => (
            <div
              key={`${uni.name}-${idx}`}
              className="group relative w-[300px] sm:w-[350px] md:w-[400px] h-[220px] md:h-[260px] rounded-[26px] overflow-hidden border border-border/80 shadow-lg hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 shrink-0 cursor-pointer"
            >
              {/* Actual Campus Image Background */}
              <img
                src={uni.image}
                alt={uni.name}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                loading="eager"
                decoding="async"
              />

              {/* Dark Gradient Overlay for Crisp Text Contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/40 to-black/20 group-hover:via-slate-950/50 transition-colors duration-300" />

              {/* Card Header Top Badge */}
              <div className="absolute top-5 left-5 right-5 flex justify-between items-center z-10">
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-white/90 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20">
                  <MapPin className="w-3.5 h-3.5 text-blue-400" />
                  <span>{uni.location}</span>
                </span>
              </div>

              {/* Card Bottom: University Name Only */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-7 z-10 text-left space-y-1">
                <h4 className="text-2xl md:text-3xl font-black text-white tracking-tight drop-shadow-md group-hover:text-blue-300 transition-colors">
                  {uni.name}
                </h4>
                <p className="text-sm md:text-base text-slate-200/90 font-medium truncate leading-relaxed">
                  {uni.fullName}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

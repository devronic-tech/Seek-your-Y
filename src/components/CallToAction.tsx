import React, { useState } from "react";
import { BookSessionDialog } from "./BookSessionDialog";

export const CallToAction: React.FC = () => {
  const [isBookDemoOpen, setIsBookDemoOpen] = useState(false);

  return (
    <>
      <section className="bg-gradient-to-br from-blue-600 via-indigo-500 to-violet-500 py-20 px-6 text-white text-center w-full relative overflow-hidden">
        {/* Subtle decorative glowing background orbs */}
        <div className="absolute top-0 left-0 w-80 h-80 rounded-full bg-white/5 blur-3xl pointer-events-none -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-black/10 blur-3xl pointer-events-none translate-x-1/2 translate-y-1/2" />

        <div className="max-w-[800px] mx-auto space-y-6 relative z-10">
          <div className="flex justify-center">
            <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs sm:text-sm font-bold uppercase tracking-[0.14em] text-white backdrop-blur-sm">
              Ready for your next step?
            </span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold font-display leading-[1.1] tracking-tight">
            Ready to find your Y?
          </h2>
          
          <p className="text-base sm:text-lg md:text-xl text-blue-100/90 leading-relaxed font-normal">
            Book a free demo session and a 1-on-1 strategy call. We'll map your target score, timeline and study plan — no strings attached.
          </p>
          
          <div className="pt-4">
            <button 
              onClick={() => setIsBookDemoOpen(true)}
              className="inline-flex rounded-full bg-white text-indigo-700 font-bold px-8 py-3.5 sm:px-10 sm:py-4 text-sm md:text-base shadow-lg shadow-black/10 hover:shadow-xl hover:bg-slate-50 transition active:scale-95 duration-200 cursor-pointer"
            >
              Book a Free Demo
            </button>
          </div>
        </div>
      </section>

      {/* Book Demo Popup Dialog */}
      <BookSessionDialog
        open={isBookDemoOpen}
        onOpenChange={setIsBookDemoOpen}
        title="Book a free demo"
        description="Share your details and we'll schedule a free 30-minute consultation with Aman."
      />
    </>
  );
};
export default CallToAction;

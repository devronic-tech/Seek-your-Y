import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play } from "lucide-react";

export interface FAQItem {
  question: string;
  answer: string | React.ReactNode;
}

interface CustomFAQProps {
  faqs: FAQItem[];
  title?: string;
}

export const CustomFAQ: React.FC<CustomFAQProps> = ({
  faqs,
  title = "Frequently asked questions",
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-blue-50/5 to-background relative overflow-hidden">
      <div className="max-w-[1000px] mx-auto">
        {/* Centered Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold font-display text-foreground leading-tight tracking-tight">
            {title}
          </h2>
          <div className="w-16 h-1 bg-blue-600 rounded-full mx-auto mt-4" />
        </div>

        {/* FAQ Accordion List */}
        <div className="flex flex-col gap-4 max-w-4xl mx-auto w-full">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className="bg-card border border-border border-l-[6px] border-l-blue-600 rounded-xl shadow-soft overflow-hidden transition-all duration-300"
              >
                {/* Trigger Button */}
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full flex items-center gap-3 text-left font-bold text-foreground text-sm md:text-base py-5 px-6 cursor-pointer focus:outline-none hover:bg-slate-50/40 transition-colors"
                >
                  <Play
                    className={`w-3 h-3 fill-foreground text-foreground transition-transform duration-200 shrink-0 ${
                      isOpen ? "rotate-90" : "rotate-0"
                    }`}
                  />
                  <span className="font-display font-bold tracking-tight">{faq.question}</span>
                </button>

                {/* Collapsible Content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-5 pl-10 md:pl-12 text-sm md:text-[14.5px] text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

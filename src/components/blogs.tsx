import React, { useState } from "react";
import { motion } from "framer-motion";
import { GraduationCap, Coins, Wallet, TrendingUp, BookOpen, Briefcase, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Footer } from "@/components/Footer";
import { BookSessionDialog } from "@/components/BookSessionDialog";

const BlogsComponent: React.FC = () => {
  const [isBookSessionOpen, setIsBookSessionOpen] = useState(false);

  const initialBlogs = [
    {
      category: "MBA STRATEGY",
      title: "GRE vs GMAT for MBA in 2026: why applicants keep switching to GRE",
      description: "Same schools, shorter test, no Data Insights. The data behind the great GRE migration — and when the GMAT is still the right call.",
      icon: GraduationCap,
      meta: "Jul 8, 2026 • 9 min read",
      gradient: "from-[#0A192F] to-[#172A45]",
    },
    {
      category: "MBA ROI",
      title: "Is an MBA abroad worth it? The honest ROI of ISB, M7 and INSEAD",
      description: "Salaries, opportunity cost, payback periods and the intangibles — a numbers-first look at whether the degree pays for itself.",
      icon: Coins,
      meta: "Jul 1, 2026 • 11 min read",
      gradient: "from-[#1E3A8A] to-[#3B82F6]",
    },
    {
      category: "MBA COSTS",
      title: "What an MBA really costs in 2026: ISB vs M7 vs Singapore vs Europe",
      description: "Tuition, living expenses, forex and loans — total cost of attendance compared across the schools Indians target most.",
      icon: Wallet,
      meta: "Jun 24, 2026 • 10 min read",
      gradient: "from-[#2563EB] to-[#60A5FA]",
    },
    {
      category: "SCHOLARSHIPS",
      title: "Scholarship Math Explained",
      description: "Merit aid is score-driven. What each extra GRE/GMAT point is statistically worth in scholarship money.",
      icon: TrendingUp,
      meta: "May 27, 2026 • 7 min read",
      gradient: "from-[#0F172A] to-[#1E293B]",
    },
    {
      category: "ADMISSIONS",
      title: "Test-optional trends, decoded",
      description: "Some programs went test-optional — yet median scores at top schools keep rising. What it means for your application.",
      icon: BookOpen,
      meta: "May 20, 2026 • 8 min read",
      gradient: "from-[#1D4ED8] to-[#2563EB]",
    },
    {
      category: "CAREERS",
      title: "Product, finance — and what pays",
      description: "Where ISB, M7 and European grads actually land, with median comp and visa realities for Indian applicants.",
      icon: Briefcase,
      meta: "May 13, 2026 • 9 min read",
      gradient: "from-[#3B82F6] to-[#1D4ED8]",
    },
  ];

  return (
    <div className="bg-background text-foreground">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0052CC] via-[#003A99] to-[#001F5C] pt-16 pb-24 text-white">
        {/* soft background glow */}
        <div className="absolute right-0 top-0 h-[400px] w-[400px] rounded-full bg-blue-500/10 blur-3xl pointer-events-none" />
        <div className="absolute left-1/4 bottom-0 h-[300px] w-[300px] rounded-full bg-indigo-500/15 blur-3xl pointer-events-none" />

        <div className="max-w-[1200px] mx-auto px-6 text-left relative z-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-1 text-xs text-blue-200/80 mb-6 font-medium">
            <Link to="/" className="hover:text-white transition">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Blogs</span>
          </div>

          <div className="max-w-3xl">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-display leading-[1.15] tracking-tight mb-6"
            >
              The Seek Your Y Blog
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg sm:text-xl text-blue-100 font-normal leading-relaxed mb-8"
            >
              Strategy deep-dives, MBA cost & ROI breakdowns, study plans and admissions trends — written by the people who teach it.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <button 
                onClick={() => setIsBookSessionOpen(true)}
                className="inline-flex items-center justify-center rounded-2xl bg-blue-600 px-8 py-4 font-bold text-white shadow-lg shadow-blue-500/25 transition hover:bg-blue-700 hover:shadow-xl hover:scale-[1.02] active:scale-95 duration-200"
              >
                Book a Free Demo
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. BLOG CARDS GRID SECTION */}
      <section className="py-20 px-6 bg-slate-50/50">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {initialBlogs.map((blog, idx) => {
              const Icon = blog.icon;
              return (
                <motion.div
                  key={idx}
                  whileHover={{ y: -6, boxShadow: "0 20px 40px -15px rgba(0, 82, 204, 0.08)" }}
                  className="bg-card rounded-[24px] border border-blue-500/10 overflow-hidden flex flex-col transition-all duration-300 shadow-soft"
                >
                  {/* Blog Header Image (Gradient box with Icon) */}
                  <div className={`h-48 w-full bg-gradient-to-tr ${blog.gradient} flex items-center justify-center`}>
                    <Icon className="w-14 h-14 text-white" />
                  </div>

                  {/* Blog Details */}
                  <div className="p-7 flex flex-col flex-1 justify-between gap-4">
                    <div className="space-y-3">
                      <span className="text-xs font-bold uppercase tracking-wider text-blue-600 block">
                        {blog.category}
                      </span>
                      <h3 className="text-xl font-bold font-display text-slate-900 leading-snug hover:text-blue-600 transition duration-200">
                        {blog.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {blog.description}
                      </p>
                    </div>

                    <div className="text-xs text-slate-400 font-medium pt-3 border-t border-slate-100">
                      {blog.meta}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Load More Button */}
          <div className="flex justify-center mt-14">
            <button 
              className="inline-flex items-center justify-center rounded-2xl border border-blue-600 px-8 py-4 font-bold text-blue-600 bg-white hover:bg-slate-50 hover:shadow-md transition duration-200"
            >
              Load more articles
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <Footer />

      {/* BOOK DEMO DIALOG */}
      <BookSessionDialog open={isBookSessionOpen} onOpenChange={setIsBookSessionOpen} />
    </div>
  );
};

export default BlogsComponent;

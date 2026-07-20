import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { TestimonialsPage } from "@/components/testimonialsPage";

const Testimonials = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-[96px]">
        <TestimonialsPage />
      </main>
      <Footer />
    </div>
  );
};

export default Testimonials;

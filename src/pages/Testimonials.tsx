import { Navbar } from "@/components/Navbar";
import { TestimonialsPage } from "@/components/testimonialsPage";

const Testimonials = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-[72px]">
        <TestimonialsPage />
      </main>
    </div>
  );
};

export default Testimonials;

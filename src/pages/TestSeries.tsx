import { Navbar } from "@/components/Navbar";
import TestSeriesComponent from "@/components/testSeries";

const TestSeriesPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-[72px]">
        <TestSeriesComponent />
      </main>
    </div>
  );
};

export default TestSeriesPage;

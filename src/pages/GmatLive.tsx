import { Navbar } from "@/components/Navbar";
import GmatLive from "@/components/gmatLive";

const GmatLivePage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-[72px]">
        <GmatLive />
      </main>
    </div>
  );
};

export default GmatLivePage;

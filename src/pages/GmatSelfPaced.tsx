import { Navbar } from "@/components/Navbar";
import GmatSelfPaced from "@/components/gmatSelfPaced";

const GmatSelfPacedPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-[72px]">
        <GmatSelfPaced />
      </main>
    </div>
  );
};

export default GmatSelfPacedPage;

import { Navbar } from "@/components/Navbar";
import SelfPaced from "@/components/selfPaced";

const SelfPacedPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-[72px]">
        <SelfPaced />
      </main>
    </div>
  );
};

export default SelfPacedPage;

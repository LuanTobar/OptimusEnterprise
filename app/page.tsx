import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { Problem } from "@/components/sections/Problem";
import { Services } from "@/components/sections/Services";
import { ROI } from "@/components/sections/ROI";
import { Technology } from "@/components/sections/Technology";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <TrustBar />
      <Problem />
      <Services />
      <ROI />
      <Technology />
      <FinalCTA />
      <Footer />
    </main>
  );
}

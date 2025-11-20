"use client";

import Features from "./components/features";
import Footer from "./components/footer";
import Header from "./components/header";
import HeroSection from "./components/hero-section";
import HowItWorks from "./components/how-it-works";
import Rewards from "./components/rewards";


export default function Home() {
  return (
    <main className="bg-background text-foreground">
      <Header />
      <HeroSection />
      <HowItWorks />
      <Features />
      <Rewards />
      <Footer />
    </main>
  );
}

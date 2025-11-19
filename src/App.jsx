import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import MissionSection from "./components/MissionSection";
import VisionSection from "./components/VisionSection";
import Footer from "./components/Footer";
import ElevateSection from "./components/ElevateSection";
import HowItWorkSection from "./components/HowItWorkSection";
import GrowSection from "./components/GrowSection";
import BuildTemplateSection from "./components/BuildTemplateSection";
import CommunitySection from "./components/CommunitySection";
import ArticleSection from "./components/ArticleSection";
import FaqSection from "./components/FaqSection";

// Main App component
function App() {
  return (
    <div>
      <Navbar />
      <main className='pt-20'>
        <Hero />
        <MissionSection />
        <VisionSection />
        <ElevateSection />
        <HowItWorkSection />
        <GrowSection />
        <BuildTemplateSection />
        <CommunitySection />
        <ArticleSection />
        <FaqSection />
      </main>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}

export default App;

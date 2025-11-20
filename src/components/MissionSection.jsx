import React, { useState } from "react";
import MissionCard from "./MissionCard";
import settingsIcon from "../assets/settings.svg";
import processorIcon from "../assets/processor.svg";
import shieldIcon from "../assets/shield-tick.svg";

const icons = [processorIcon, settingsIcon, shieldIcon];

const cardData = [
  {
    heading: "Accessibility",
    subheading:
      "Work from anywhere, build your career. Your style, your terms.",
  },
  {
    heading: "Functionality",
    subheading:
      "Connect, create and earn with tools that make freelancing seamless.",
  },
  {
    heading: "Security",
    subheading:
      "Transparent systems and reduced service fees that protect your hustle.",
  },
];

const MissionSection = () => {
  // Track which card is expanded; default to 1 (second card)
  const [expandedIdx, setExpandedIdx] = useState(1);
  return (
    <section className='w-full py-12 px-4 md:px-8 lg:px-[100px] bg-white'>
      {/* Tiny text */}
      <span className='text-base text-[#6A0DAD] font-semibold mb-2 text-center block w-full'>
        Our Mission
      </span>
      {/* Heading */}
      <h2 className='text-xl md:text-3xl lg:text-[36px] font-bold text-center mb-2 w-full'>
        Building A Trusted Ecosystem Where
        <br className='hidden sm:inline' />
        Talents Thrive And Opportunities Grow
      </h2>
      {/* Semi-heading */}
      <p className='text-gray-500 text-base md:text-[20px] lg:text-[20px] text-center mb-10 max-w-2xl mx-auto w-full'>
        Secured payments, verified talents and transparent projects
      </p>
      {/* Cards */}
      <div className='flex flex-col md:flex-row gap-2 justify-center items-stretch w-full max-w-full overflow-x-auto'>
        {cardData.map((card, idx) => (
          <MissionCard
            key={card.heading}
            idx={idx}
            heading={card.heading}
            subheading={card.subheading}
            icon={icons[idx]}
            expanded={expandedIdx === idx}
            onHover={() => setExpandedIdx(idx)}
            onLeave={() => setExpandedIdx(1)}
          />
        ))}
      </div>
    </section>
  );
};

export default MissionSection;

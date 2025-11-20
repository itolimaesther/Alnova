// To enable the fade-in effect on images, add the following to your global CSS (e.g., src/index.css or App.css):
// .fade-in {
//   animation: fadeIn 1s ease-in;
// }
// @keyframes fadeIn {
//   from { opacity: 0; }
//   to { opacity: 1; }
// }
import React, { useState, useEffect } from "react";
import left1 from "../assets/anime1.svg";
import left2 from "../assets/anime2.svg";
import right1 from "../assets/anime1.svg";
import right2 from "../assets/anime2.svg";

// Hero section with animated images, search, and tabs
const Hero = () => {
  // Image arrays for left and right
  const leftImages = [left1, left2];
  const rightImages = [right1, right2];
  const [leftIdx, setLeftIdx] = useState(0);
  const [rightIdx, setRightIdx] = useState(0);

  // Fade-in state for images
  const [fadeLeft, setFadeLeft] = useState(true);
  const [fadeRight, setFadeRight] = useState(true);

  useEffect(() => {
    const leftInterval = setInterval(() => {
      setFadeLeft(false);
      setTimeout(() => {
        setLeftIdx((prev) => (prev + 1) % leftImages.length);
        setFadeLeft(true);
      }, 50);
    }, 2000);
    const rightInterval = setInterval(() => {
      setFadeRight(false);
      setTimeout(() => {
        setRightIdx((prev) => (prev + 1) % rightImages.length);
        setFadeRight(true);
      }, 50);
    }, 2000);
    return () => {
      clearInterval(leftInterval);
      clearInterval(rightInterval);
    };
  }, [leftImages.length, rightImages.length]);

  // Popular search tabs
  const tabs = [
    "Graphic Design",
    "Web Development",
    "Programming",
    "UI/UX Design",
    "Presentation Design",
    "Video Editing",
  ];
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className='relative flex flex-col items-center justify-center min-h-[70vh] px-3 sm:px-4 md:px-0 lg:px-[100px] pt-8 md:pt-0 my-4 lg:my-[124px] overflow-hidden'>
      {/* Absolutely positioned images */}
      <img
        src={leftImages[leftIdx]}
        alt='Left visual'
        className={`hidden md:block absolute left-2 md:left-10 top-1/2 -translate-y-1/2 w-32 h-32 md:w-68 md:h-68 object-contain z-0${
          fadeLeft ? " fade-in" : ""
        }`}
      />

      <img
        src={rightImages[rightIdx]}
        alt='Right visual'
        className={`hidden md:block absolute right-2 md:right-0 top-1/2 -translate-y-1/2 w-32 h-32 md:w-68 md:h-68 object-contain z-0${
          fadeRight ? " fade-in" : ""
        }`}
      />

      {/* Tiny text */}
      <span
        className='text-sm sm:text-base text-[#6A0DAD] font-semibold 
          mb-3 text-center block w-full'
      >
        Designed for modern collaboration
      </span>

      {/* Big text, 2 lines, second line colored */}
      <h1 className='font-bold text-center leading-tight mb-5 text-2xl sm:text-4xl md:text-5xl lg:text-6xl'>
        Co-Creating Your Vision,
        <br />
        <span className='text-[#F05658]'>One Step at a Time</span>
      </h1>

      {/* Subtext */}
      <p className='text-gray-500 text-center max-w-md sm:max-w-xl mb-7 text-base sm:text-lg md:text-xl'>
        From concept to final deliverables, we build with transparency at every
        stage, keeping you inspired throughout the journey
      </p>

      {/* Search input with magnifier (icon right, inactive) */}
      <div className='flex items-center w-full max-w-xs sm:max-w-md mb-10 relative'>
        <input
          type='text'
          placeholder='What are you looking for?'
          className='w-full py-3 pl-4 pr-12 rounded-[46px] border border-gray-300 text-lg shadow-sm bg-gray-100 cursor-not-allowed'
          disabled
        />
        {/* Magnifier icon on right */}
        <span
          className='absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-2 flex items-center justify-center'
          style={{ width: 32, height: 32, background: "#F05658" }}
        >
          {/* SVG magnifier */}
          <svg
            className='text-white'
            width='16'
            height='16'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            viewBox='0 0 24 24'
          >
            <circle cx='11' cy='11' r='7' />
            <line x1='21' y1='21' x2='16.65' y2='16.65' />
          </svg>
        </span>
      </div>

      {/* Popular search tabs */}
      <div className='flex flex-col sm:flex-row items-center justify-center w-full mt-2'>
        <span className='text-[#646464] text-sm mr-0 sm:mr-4 font-medium whitespace-nowrap mb-2 sm:mb-0'>
          Popular Search:
        </span>
        <div className='flex flex-wrap sm:flex-nowrap gap-2 sm:space-x-2 justify-center'>
          {tabs.map((tab, idx) => (
            <button
              key={tab}
              className={`px-4 sm:px-5 py-2 rounded-[46px] border text-xs sm:text-sm font-medium transition focus:outline-none ${
                activeTab === idx
                  ? "bg-[#F4F4F4] text-[#0F0F0F] border-[#F4F4F4]"
                  : "bg-[#F4F4F4] text-[#0F0F0F] border-[#F4F4F4] opacity-80"
              }`}
              onClick={() => setActiveTab(idx)}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;

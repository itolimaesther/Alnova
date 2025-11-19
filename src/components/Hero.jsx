import React, { useState } from "react";
import left1 from "../assets/anime1.svg"; // Replace with your image paths
// import left2 from "../assets/anime2.svg";
// import right1 from "../assets/anime1.svg";
import right2 from "../assets/anime2.svg";

// Hero section with animated images, search, and tabs
const Hero = () => {
  // Image arrays for left and right
  const leftImages = [left1];
  const rightImages = [right2];
  // const [leftIdx, setLeftIdx] = useState(0);
  // const [rightIdx, setRightIdx] = useState(0);

  // Cycle images every 3 seconds
  // useEffect(() => {
  //   const leftInterval = setInterval(() => {
  //     setLeftIdx((prev) => (prev + 1) % leftImages.length);
  //   }, 5000);
  //   const rightInterval = setInterval(() => {
  //     setRightIdx((prev) => (prev + 1) % rightImages.length);
  //   }, 5000);
  //   return () => {
  //     clearInterval(leftInterval);
  //     clearInterval(rightInterval);
  //   };
  // }, []);

  // Popular search tabs
  const tabs = ["React", "Tailwind", "Landing", "UI Kit", "Templates"];
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className='relative flex flex-col items-center justify-center min-h-[80vh] px-4 md:px-12 lg:px-[100px] pt-12 overflow-hidden'>
      {/* Absolutely positioned images */}
      <img
        // src={leftImages[leftIdx]}
        src={leftImages}
        alt='Left visual'
        className='hidden md:block absolute left-10 top-[42%] -translate-y-1/2 w-68 h-68 object-contain animate-fade'
      />
      <img
        // src={rightImages[rightIdx]}
        src={rightImages}
        alt='Right visual'
        className='hidden md:block absolute right-0 top-[42%] -translate-y-1/2 w-68 h-68 object-contain animate-fade'
      />

      {/* Tiny text */}
      <span className='text-base text-[#6A0DAD] font-semibold mb-2 text-center block w-full'>
        Designed for modern collaboration
      </span>

      {/* Big text, 2 lines, second line colored */}
      <h1
        className='font-bold text-center leading-tight mb-4'
        style={{ fontSize: "56px" }}
      >
        Co-Creating Your Vision,
        <br />
        <span className='text-[#F05658]'>One Step at a Time</span>
      </h1>

      {/* Subtext */}
      <p
        className='text-gray-500 text-center max-w-xl mb-8'
        style={{ fontSize: "20px" }}
      >
        From concept to final deliverables , we build with transparency at every
        stage, keeping you inspired throughout the journey
      </p>

      {/* Search input with magnifier (icon right, inactive) */}
      <div className='flex items-center w-full max-w-md mb-6 relative'>
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
      <div className='flex flex-row items-center justify-center w-full mt-2'>
        <span className='text-[#0F0F0F] text-sm mr-4 font-medium whitespace-nowrap'>
          Popular Search:
        </span>
        <div className='flex space-x-2'>
          {tabs.map((tab, idx) => (
            <button
              key={tab}
              className={`px-5 py-2 rounded-[46px] border text-sm font-medium transition focus:outline-none ${
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

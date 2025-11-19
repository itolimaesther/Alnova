import React, { useRef, useState } from "react";
import lineCap from "../assets/line-cap.svg";
// import slider1 from "../assets/slider1.png";
import slider2 from "../assets/slider2.png";
import slider3 from "../assets/slider3.png";
import slider4 from "../assets/slider4.png";
import settings from "../assets/slider2.png";
import processor from "../assets/slider4.png";
import shield from "../assets/slider3.png";
import reactLogo from "../assets/slider4.png";
import "../styles/scrollbar-hide.css";

const images = [
  slider2,
  slider3,
  slider4,
  slider2,
  settings,
  processor,
  shield,
  reactLogo,
];

const cardTexts = [
  "UI/UX Designer",
  "Web Development",
  "Mobile App Development",
  "Graphics Design",
  "Video Editing & Animation",
  "illustration & Digital Arts",
  "Programming & Tech",
  "Social Media Design & Mgt",
  "Presentation Design",
];

const VisionSection = () => {
  const [index, setIndex] = useState(0); // index of first visible card
  const cardsToShow = 5;
  // const cardWidthPercent = 100 / cardsToShow; // 20
  const maxIndex = images.length - cardsToShow;
  const sliderRef = useRef(null);

  const handleLeft = () => {
    setIndex((prev) => (prev - 1 < 0 ? 0 : prev - 1));
  };
  const handleRight = () => {
    setIndex((prev) => (prev + 1 > maxIndex ? maxIndex : prev + 1));
  };

  return (
    <section className='w-full py-8 px-2 sm:px-4 md:px-8 lg:px-16 bg-white'>
      <div className='relative w-full flex flex-col items-center'>
        <span className='text-base text-[#6A0DAD] font-semibold mb-2 text-center w-full block'>
          Specialized Niches
        </span>
        <div className='relative w-full flex justify-center'>
          <h2
            className='font-bold text-center mb-8 w-full'
            style={{ fontSize: "36px" }}
          >
            Your vision, Our niche
          </h2>
          {/* line-cap absolutely at top right of heading */}
          <img
            src={lineCap}
            alt='line cap'
            className='absolute right-102 -top-14 w-16 h-16 md:w-20 md:h-20 z-10'
          />
        </div>
        <p
          className='text-gray-500 mb-6 max-w-md text-center w-full'
          style={{ fontSize: "20px" }}
        >
          We connect clients with high-end freelancers across these categories
        </p>
      </div>
      <div className='relative flex items-center justify-center w-full'>
        {/* Left caret with space */}
        <div className='flex items-center'>
          <button
            onClick={handleLeft}
            className='z-10 w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 bg-white text-gray-500 hover:bg-gray-100 shadow mr-4'
            aria-label='Previous'
            disabled={index === 0}
          >
            <svg
              width='20'
              height='20'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              viewBox='0 0 24 24'
            >
              <path d='M15 19l-7-7 7-7' />
            </svg>
          </button>
        </div>
        {/* Slider */}
        <div className='overflow-x-auto w-full scrollbar-hide'>
          <div
            ref={sliderRef}
            className='flex transition-transform duration-500 w-full'
            style={{
              transform: `translateX(-${index * (100 / 5)}%)`,
            }}
          >
            {images.map((img, i) => (
              <div
                key={i}
                className='shrink-0 w-1/5 max-w-[220px] min-w-[160px] h-[260px] bg-white border border-[#F4F4F4] rounded-[30px] mx-1 sm:mx-2 flex flex-col items-stretch shadow-sm'
                style={{
                  boxSizing: "border-box",
                  padding: 0,
                }}
              >
                {/* Image covers the top of the card up to the border */}
                <div
                  className='w-full p-1 rounded-t-[30px] overflow-hidden shrink-0 flex justify-center items-center'
                  style={{ height: "75%" }}
                >
                  <img
                    src={img}
                    alt='vision'
                    className='w-full h-full object-cover rounded-t-[30px]'
                  />
                </div>
                <div className='flex-1 flex flex-col px-2'>
                  <div className='w-full border-t border-[#F4F4F4]' />
                  <div className='pt-2 pb-4 text-center text-gray-700 font-medium text-xs sm:text-sm md:text-[16px] flex items-center justify-center w-full'>
                    {cardTexts[i]}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Right caret with space */}
        <div className='flex items-center'>
          <button
            onClick={handleRight}
            className='z-10 w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 bg-white text-gray-500 hover:bg-gray-100 shadow ml-4'
            aria-label='Next'
            disabled={index === maxIndex}
          >
            <svg
              width='20'
              height='20'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              viewBox='0 0 24 24'
            >
              <path d='M9 5l7 7-7 7' />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;

import React, { useState } from "react";
import img1 from "../assets/carosel1.png";
import img2 from "../assets/carosel2.png";
import img3 from "../assets/carosel3.png";
import img4 from "../assets/carosel4.png";
import img5 from "../assets/carosel5.png";
// import img6 from "../assets/carosel6.png";
import arrow04 from "../assets/arrow-04.svg";
const carouselData = [
  {
    main: img1,
    secondary: [img2, img3, img4, img5],
  },
  {
    main: img2,
    secondary: [img3, img4, img5],
  },
  {
    main: img3,
    secondary: [img4, img5, img1],
  },
  {
    main: img4,
    secondary: [img5, img1, img2],
  },
  {
    main: img5,
    secondary: [img1, img2, img3],
  },
  // {
  //   main:
  //   secondary: [img1, img2, img3, img4],
  // },
];

const gradients = [
  "linear-gradient(140.93deg, #C6E7F0 10.75%, #F0B375 203.59%)",
  "linear-gradient(130.19deg, #345098 -19.48%, #752F24 140.29%)",
  "linear-gradient(106.39deg, #263D4B -31.81%, #B4AC90 203.12%)",
  "linear-gradient(103.65deg, #CCCCCC -133.99%, #00262E 262.72%)",
  "linear-gradient(127.1deg, #1A1A19 -46.53%, #D8D7D3 191.57%)",
];

const BrowseTemplatesButton = () => {
  const [arrowPos, setArrowPos] = useState("left");
  return (
    <button
      className='flex items-center px-8 py-3 font-semibold rounded-[46px] shadow text-white transition relative overflow-hidden'
      style={{ minWidth: 180 }}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        setArrowPos(x < rect.width / 2 ? "left" : "right");
      }}
      onMouseLeave={() => setArrowPos("left")}
    >
      {/* Arrow left */}
      <span
        className={`relative transition-all duration-300 mr-3 ${
          arrowPos === "left"
            ? "opacity-100 translate-x-0"
            : "opacity-0 -translate-x-3"
        }`}
        style={{ pointerEvents: "none" }}
      >
        <svg
          width='18'
          height='18'
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
          viewBox='0 0 24 24'
        >
          <path d='M19 12H5M11 18l-6-6 6-6' />
        </svg>
      </span>
      <span className='transition-all duration-300 mx-2'>Browse Templates</span>
      {/* Arrow right */}
      <span
        className={`relative transition-all duration-300 ml-3 ${
          arrowPos === "right"
            ? "opacity-100 translate-x-0"
            : "opacity-0 translate-x-3"
        }`}
        style={{ pointerEvents: "none" }}
      >
        <svg
          width='18'
          height='18'
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
          viewBox='0 0 24 24'
        >
          <path d='M5 12h14M13 6l6 6-6 6' />
        </svg>
      </span>
    </button>
  );
};

const BuildTemplateSection = () => {
  const [current, setCurrent] = useState(0);
  const { main, secondary } = carouselData[current];
  return (
    <section className='relative w-full py-16 px-4 md:px-12 lg:px-[100px] bg-black'>
      <div className='relative flex flex-col items-center'>
        <h2 className='text-xl md:text-3xl font-bold text-center mb-2 text-white inline-block relative'>
          Build Templates. Download Free. Grow Together
          {/* Down arrow absolutely at end of heading */}
          <img
            src={arrow04}
            alt='arrow down'
            className='absolute right-0 top-[150%] -translate-y-1/2 w-14 h-14 rotate-390'
          />
        </h2>
        <p className='text-md text-gray-300 text-center mb-8'>
          Upload your designs or download free resources.
        </p>
      </div>
      <div className='flex justify-center items-center gap-2 w-full'>
        {/* Carousel Content only */}
        <div className='flex flex-col md:flex-row w-full gap-5'>
          {/* First column (larger) */}
          <div className='flex-1 flex items-center justify-center mb-4 md:mb-0'>
            <div
              className='rounded-2xl w-full max-w-[320px] sm:max-w-[400px] md:max-w-[480px] h-[320px] sm:h-[400px] md:h-[520px] flex items-center justify-center p-0'
              style={{
                background: [
                  "linear-gradient(140.93deg, #C6E7F0 10.75%, #F0B375 203.59%)",
                  "linear-gradient(130.19deg, #345098 -19.48%, #752F24 140.29%)",
                  "linear-gradient(106.39deg, #263D4B -31.81%, #B4AC90 203.12%)",
                  "linear-gradient(103.65deg, #CCCCCC -133.99%, #00262E 262.72%)",
                  "linear-gradient(127.1deg, #1A1A19 -46.53%, #D8D7D3 191.57%)",
                ][current],
              }}
            >
              <img
                src={main}
                alt='Main'
                className='w-full h-full object-cover rounded-2xl pt-6 pl-6'
              />
            </div>
          </div>
          {/* Second column (bigger, 2x2 grid) */}
          <div className='flex-[1.5] grid grid-cols-2 grid-rows-2 gap-2 h-[320px] sm:h-[400px] md:h-[520px]'>
            {secondary.map((img, idx) => (
              <div
                key={idx}
                className='rounded-2xl w-80 h-60 flex items-center justify-end p-0'
                style={{ background: gradients[idx % gradients.length] }}
              >
                <img
                  src={img}
                  alt={`Secondary ${idx + 1}`}
                  className='w-72 h-full object-cover rounded-2xl pt-4 pl-0'
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Button with arrow after carousel */}
      <div className='flex justify-center mt-10'>
        <BrowseTemplatesButton />
      </div>
    </section>
  );
};

export default BuildTemplateSection;

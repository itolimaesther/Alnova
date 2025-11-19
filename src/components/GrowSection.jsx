import React from "react";
import addIcon from "../assets/add.svg";
import growImg from "../assets/grow.png";
import Icon1 from "../assets/icon1.png";
import Icon2 from "../assets/icon2.png";
import Icon3 from "../assets/icon3.png";
import Icon4 from "../assets/icon4.png";

const growList = [
  {
    icon: Icon1,
    heading: "Tutorials by Experts:",
    subheading:
      "Master new techniques with step-by-step guides created by industry leaders.",
  },
  {
    icon: Icon2,
    heading: "Interactive Webinars:",
    subheading:
      "Learn directly from the pros in live sessions, complete with Q&A.",
  },
  {
    icon: Icon3,
    heading: "eBooks and Templates:",
    subheading:
      "Access a library of downloadable resources to enhance your projects.",
  },
  {
    icon: Icon4,
    heading: "Tips and Trends:",
    subheading: "Stay ahead with insights into cutting-edge design trends.",
  },
];

const ExploreFreeResourcesButton = () => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <button
      className='flex text-[13px] items-center justify-center px-6 py-2 bg-[#F05658] text-white font-semibold rounded-[20px] shadow hover:bg-[#F05658] transition w-full sm:w-auto relative overflow-hidden'
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ minWidth: 200 }}
    >
      <span
        className={`transition-all duration-300 mr-2 ${
          hovered ? "opacity-0 -translate-x-3" : "opacity-100 translate-x-0"
        }`}
        style={{ pointerEvents: "none", display: "flex", alignItems: "center" }}
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
      <span className='transition-all duration-300'>
        Explore Free Resources
      </span>
      <span
        className={`transition-all duration-300 ml-2 ${
          hovered ? "opacity-100 translate-x-0" : "opacity-0 translate-x-3"
        }`}
        style={{ pointerEvents: "none", display: "flex", alignItems: "center" }}
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

const RegisterForFreeResourcesButton = () => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <button
      className='flex text-[15px] items-center justify-center px-6 py-2 bg-[#F3F4F6] text-[#F05658] font-semibold rounded-[46px] shadow hover:bg-[#e5e7eb] transition w-full sm:w-auto relative overflow-hidden'
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ minWidth: 200 }}
    >
      <span className='transition-all duration-300'>
        Register for free Resources
      </span>
      <span
        className={`transition-all duration-300 ml-2 flex items-center ${
          hovered ? "opacity-100 translate-x-0" : "opacity-0 translate-x-3"
        }`}
        style={{ pointerEvents: "none" }}
      >
        <img src={addIcon} alt='add' className='w-5 h-5' />
      </span>
    </button>
  );
};

const GrowSection = () => (
  <section className='w-full py-12 px-4 md:px-8 lg:px-[100px] bg-white'>
    <h2 className='text-lg sm:text-xl md:text-3xl font-bold mb-2 text-center'>
      Grow Your Skills With Free Resources From Allnovas
    </h2>
    <p className='text-sm md:text-md text-gray-500 mb-8 text-center'>
      Positioning tech experts to grow with carefully curated tutorials,
      templates and ebooks
    </p>
    <div className='flex flex-col md:flex-row items-center gap-8 md:gap-12 max-w-6xl mx-auto'>
      {/* Image column */}
      <div className='flex-1 flex justify-center items-center w-full mb-8 md:mb-0'>
        <img
          src={growImg}
          alt='Grow'
          className='w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl h-[340px] sm:h-[400px] md:h-[480px] rounded-2xl shadow-lg object-cover'
        />
      </div>
      {/* Text column */}
      <div className='flex-1 flex flex-col justify-center w-full'>
        <div className='space-y-6 mb-8'>
          {growList.map((item, idx) => (
            <div key={idx} className='flex items-center gap-3 sm:gap-4'>
              <img
                src={item.icon}
                alt='icon'
                className='w-6 h-6 text-blue-600'
              />
              <div>
                <h3 className='text-base sm:text-lg font-semibold'>
                  {item.heading}
                </h3>
                <p className='text-gray-500 text-xs sm:text-sm'>
                  {item.subheading}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className='flex flex-col sm:flex-row gap-4 w-full'>
          <ExploreFreeResourcesButton />
          <RegisterForFreeResourcesButton />
        </div>
      </div>
    </div>
  </section>
);

export default GrowSection;

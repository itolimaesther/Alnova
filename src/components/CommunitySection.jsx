import React from "react";
import comSvg from "../assets/com.svg";
import bgCommunity from "../assets/comm.png";
import community from "../assets/community.png";
import starSvg from "../assets/star.svg";

const CommunitySection = () => (
  <section className='w-full py-12 px-4 md:px-8 lg:px-[100px] bg-white'>
    <div className='flex flex-col md:flex-row items-center gap-8 md:gap-12 max-w-6xl mx-auto'>
      {/* Left: Texts */}
      <div className='flex-1 flex flex-col justify-center relative w-full'>
        <span className='text-base text-[#6A0DAD] font-semibold mb-2'>
          Tribe
        </span>
        <h2 className='text-lg sm:text-xl md:text-[36px] font-bold mb-2 inline-block relative pr-12'>
          Unlock Your Full Potential Using Our Community
          {/* Absolutely positioned com svg at end of heading */}
          <img
            src={comSvg}
            alt='com'
            className='absolute right-6 top-1/12 -translate-y-1/2 w-12 h-10 md:w-20 md:h-16'
          />
        </h2>
        <p className='text-base md:text-[20px] text-gray-500 mb-6 max-w-md'>
          Connect, learn, and grow with like-minded individuals and experts from
          around the world.
        </p>
        <button className='w-max flex items-center px-6 md:px-8 py-2 md:py-3 bg-[#F05658] text-white font-semibold rounded-[20px] shadow hover:bg-[#F4F4F4] hover:text-[#F05658] transition mb-8 text-sm md:text-base'>
          Join Community
        </button>
        {/* 3-column stats */}
        <div className='flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full sm:w-max mt-4'>
          {/* 1st column: image */}
          <div className='flex flex-col items-center'>
            <img
              src={community}
              alt='community'
              className='w-24 h-10 md:w-36 md:h-12 mb-2'
            />
          </div>
          {/* 2nd column: users */}
          <div className='flex flex-col items-center px-2 md:px-4'>
            <span className='text-base md:text-xl font-medium'>---M</span>
            <span className='text-xs text-gray-500'>Active users</span>
            {/* Removed horizontal border */}
          </div>
          {/* Vertical border */}
          <div className='h-8 md:h-10 border-l border-[#F4F4F4] mx-2' />
          {/* 3rd column: experts */}
          <div className='flex flex-col items-center px-2 md:px-4'>
            <span className='text-base md:text-xl font-medium'>---+</span>
            <span className='text-xs text-gray-500'>Experts</span>
          </div>
        </div>
      </div>
      {/* Right: Image */}
      <div className='flex-1 flex justify-center items-center w-full mt-8 md:mt-0 relative'>
        <img
          src={bgCommunity}
          alt='Community'
          className='w-full max-w-xs sm:max-w-sm md:max-w-md rounded-2xl shadow-lg object-cover'
        />
        <img
          src={starSvg}
          alt='star'
          className='absolute top-0 right-6 w-8 h-8 md:w-24 md:h-24 -translate-y-1/3 translate-x-1/3'
          style={{ zIndex: 2 }}
        />
      </div>
    </div>
  </section>
);

export default CommunitySection;

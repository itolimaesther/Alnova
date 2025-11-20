import React from "react";
import elevateImg from "../assets/elevate.png";

const listItems = [
  {
    heading: "Verified Freelancers",
    subheading: "Every talent is vetted and reviewd for quality assurance",
  },
  {
    heading: "Smart Matching",
    subheading: "Instantly connect with freelancers tailored to your needs",
  },
  {
    heading: "Secure Payments",
    subheading: "Only release funds when milestones are met",
  },
];

const ElevateSection = () => {
  return (
    <section className='w-full py-12 px-4 md:px-8 lg:px-[100px] bg-white'>
      <div className='flex flex-col md:flex-row items-center gap-8 md:gap-12 max-w-6xl mx-auto'>
        {/* Left: Image */}
        <div className='flex-1 flex justify-center items-center w-full mb-8 md:mb-0'>
          <img
            src={elevateImg}
            alt='Elevate'
            className='w-full max-w-xs sm:max-w-sm md:max-w-lg lg:max-w-xl h-[340px] sm:h-[400px] md:h-[480px] rounded-2xl shadow-lg object-cover'
          />
        </div>
        {/* Right: Texts */}
        <div className='flex-1 flex flex-col justify-center w-full'>
          <h2 className='text-xl md:text-3xl lg:text-[36px] font-bold mb-4'>
            Elevate Your Workflow with Allnovas.
          </h2>
          <p className='text-gray-500 text-base md:text-[20px] lg:text-[20px] mb-8'>
            Here’s how Allnovas can help you do what you do
          </p>
          <div className='space-y-6 sm:space-y-8'>
            {listItems.map((item, idx) => (
              <div key={idx} className='flex items-center gap-3 sm:gap-4'>
                {/* Small number in gradient circle, aligned with heading */}
                <div className='shrink-0 flex items-center'>
                  <div
                    className='w-6 h-6 flex items-center justify-center rounded-full text-white text-xs font-bold'
                    style={{
                      background:
                        "linear-gradient(180deg, #460050 0%, #F05658 100%)",
                    }}
                  >
                    {idx + 1}
                  </div>
                </div>
                {/* Texts */}
                <div className='flex-1 flex flex-col'>
                  <h3 className='text-base sm:text-lg font-semibold mb-1 flex items-center'>
                    {item.heading}
                  </h3>
                  <p className='text-gray-500 text-xs sm:text-sm'>
                    {item.subheading}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ElevateSection;

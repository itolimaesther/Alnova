import React from "react";

const HowItWorkSection = () => (
  <section className='w-full py-16 px-4 md:px-12 lg:px-[200px] bg-white'>
    <h2 className='text-xl md:text-3xl lg:text-[36px] font-bold text-center mb-2'>
      How AllNova Works
    </h2>
    <p className='text-base md:text-[20px] lg:text-[20px] text-gray-500 text-center mb-8'>
      Your Path to Success: From Choosing the Perfect Freelancer to Seamless
      Deliveries at Your Virtual Doorstep!
    </p>
    <div className='w-full aspect-video rounded-2xl overflow-hidden shadow-lg flex'>
      <iframe
        className='w-full h-full'
        src='https://www.youtube.com/embed/dQw4w9WgXcQ'
        title='YouTube video'
        frameBorder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowFullScreen
      />
    </div>
  </section>
);

export default HowItWorkSection;

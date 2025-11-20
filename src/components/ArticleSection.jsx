import React from "react";

import article1 from "../assets/article1.png";
import article2 from "../assets/article2.png";
import article3 from "../assets/article3.png";

const articles = [
  {
    image: article1,
    description:
      "Discover the latest trends in technology and how they impact your business.",
  },
  {
    image: article2,
    description:
      "Explore creative design solutions for modern web applications.",
  },
  {
    image: article3,
    description: "Learn from successful startups and their growth strategies.",
  },
];

const ViewAllPostsButton = () => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <button
      className='flex items-center text-blue-600 font-semibold bg-transparent group relative overflow-hidden'
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ minWidth: 160 }}
    >
      <span
        className={`transition-all duration-300 mr-2 ${
          hovered ? "opacity-0 -translate-x-3" : "opacity-100 translate-x-0"
        }`}
        style={{
          display: "flex",
          alignItems: "center",
          color: "#F05658",
          pointerEvents: "none",
        }}
      >
        <svg
          width='20'
          height='20'
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
          viewBox='0 0 24 24'
        >
          <path d='M5 12h14M13 6l6 6-6 6' />
        </svg>
      </span>
      <span className='text-[#F05658] transition-all duration-300'>
        View All posts
      </span>
      <span
        className={`transition-all duration-300 ml-2 ${
          hovered ? "opacity-100 translate-x-0" : "opacity-0 translate-x-3"
        }`}
        style={{
          display: "flex",
          alignItems: "center",
          color: "#F05658",
          pointerEvents: "none",
        }}
      >
        <svg
          width='20'
          height='20'
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

const ArticleSection = () => (
  <section className='w-full my-4 lg:my-[120px] px-4 md:px-12 lg:px-[100px] bg-white'>
    {/* Header Row */}
    <div className='flex flex-col md:flex-row items-center justify-between mb-10 gap-4'>
      <div>
        <span className='text-base text-[#6A0DAD] font-semibold mb-2'>
          Insights
        </span>
        <h2
          className='text-xl md:text-3xl lg:text-[36px] font-bold mb-5'
          style={{ color: "#0F0F0F" }}
        >
          Latest Articles
        </h2>
        <p
          className='mt-1 text-base md:text-[20px] lg:text-[20px] mb-16'
          style={{ color: "#4B4B4B" }}
        >
          Check out the latest updates and free resources from Allnova.
        </p>
      </div>
      <ViewAllPostsButton />
    </div>
    {/* Articles Grid */}
    <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
      {articles.map((article, idx) => (
        <div
          key={idx}
          className='rounded-xl p-4 flex flex-col h-full items-center'
        >
          <img
            src={article.image}
            alt='Article'
            className='rounded-xl w-full h-48 object-cover mb-4'
          />
          <p className='text-gray-700 flex-1 mb-6 text-center'>
            {article.description}
          </p>
          <button className='flex items-center font-semibold mt-auto mx-auto bg-[#171717] text-white rounded-lg px-5 py-2 transition hover:bg-[#232323]'>
            View post
            <svg
              className='w-4 h-4 ml-2'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              viewBox='0 0 24 24'
            >
              <path d='M5 12h14M13 6l6 6-6 6' />
            </svg>
          </button>
        </div>
      ))}
    </div>
  </section>
);

export default ArticleSection;

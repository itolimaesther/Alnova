import React, { useState } from "react";

// Card gradient backgrounds
const gradients = [
  "bg-[linear-gradient(43.5deg,_#011E40_42.65%,_#014088_59.45%)]",
  "bg-[linear-gradient(0.85deg,_#460050_29.2%,_#630071_46.57%)]",
  "bg-[linear-gradient(314.23deg,_#026813_37.39%,_#003B0A_53.62%)]",
];
// All hover gradients are horizontal (90deg)
const hoverGradients = [
  "bg-[linear-gradient(90deg,_#011E40_0%,_#014088_100%)]",
  "bg-[linear-gradient(90deg,_#460050_0%,_#630071_100%)]",
  "bg-[linear-gradient(90deg,_#026813_0%,_#003B0A_100%)]",
];

const buttonBgColors = ["#012651", "#400049", "#015510"];

const MissionCard = ({
  idx,
  heading,
  subheading,
  icon,
  expanded,
  onHover,
  onLeave,
}) => {
  const [arrowPos, setArrowPos] = useState("right");
  return (
    <div
      className={`relative flex flex-col min-h-[480px] w-full max-w-none mx-0 transition-all duration-500 ease-in-out cursor-pointer ${
        expanded
          ? hoverGradients
            ? hoverGradients[idx]
            : ""
          : gradients
          ? gradients[idx]
          : ""
      } rounded-tr-[30px] rounded-bl-[30px] shadow-lg`}
      style={{
        width: expanded ? "520px" : "320px",
        height: "480px",
        margin: "0 6px",
      }}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      {/* Top: icon, heading, subheading (if expanded) */}
      <div className='w-full flex flex-col items-center px-6 pt-8 pb-2 flex-1'>
        <img src={icon} alt='icon' className='mb-4 w-12 h-12' />
        {expanded && (
          <>
            <h3
              className='text-[40px] font-bold text-white mb-1 text-center'
              style={{ fontFamily: "Mali, sans-serif" }}
            >
              {heading}
            </h3>
            <p
              className='text-white text-sm mb-2 text-center'
              style={{ fontFamily: "Mali, sans-serif" }}
            >
              {subheading}
            </p>
          </>
        )}
      </div>
      {/* Bottom: heading (if not expanded) */}
      {!expanded && (
        <div className='w-full flex flex-col items-center px-6 pb-8 transition-all duration-300 mt-auto mb-4 '>
          <h3
            className='text-[40px] font-bold text-white mb-1 text-center'
            style={{ fontFamily: "Mali, sans-serif" }}
          >
            {heading}
          </h3>
        </div>
      )}
      {/* Get Started button (if expanded) */}
      {expanded && (
        <button
          className='absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center px-6 py-2 font-semibold rounded-[46px] shadow-lg text-white text-base transition-all duration-300 min-w-[140px] justify-center'
          style={{
            background: buttonBgColors[idx],
            boxShadow: "0 4px 24px 0 rgba(0,0,0,0.18)",
            fontFamily: "Mali, sans-serif",
          }}
          onMouseMove={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            const x = e.clientX - rect.left;
            setArrowPos(x < rect.width / 2 ? "left" : "right");
          }}
          onMouseLeave={() => setArrowPos("right")}
        >
          {arrowPos === "left" && (
            <svg
              className='mr-2 transition-all duration-300'
              width='18'
              height='18'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              viewBox='0 0 24 24'
            >
              <path d='M19 12H5M11 18l-6-6 6-6' />
            </svg>
          )}
          <span className='transition-all duration-300'>Get started</span>
          {arrowPos === "right" && (
            <svg
              className='ml-2 transition-all duration-300'
              width='18'
              height='18'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              viewBox='0 0 24 24'
            >
              <path d='M5 12h14M13 6l6 6-6 6' />
            </svg>
          )}
        </button>
      )}
    </div>
  );
};

export default MissionCard;

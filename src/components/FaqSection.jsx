import React, { useState } from "react";
import faqImg from "../assets/faq.svg";

const tabs = [
  {
    label: "General",
    faqs: [
      { q: "What is Alnova?", a: "Alnova is a platform for..." },
      { q: "How do I sign up?", a: "Click the sign up button..." },
    ],
  },
  {
    label: "Freelancing",
    faqs: [
      { q: "Is there a free plan?", a: "Yes, we offer a free plan..." },
      { q: "How do I upgrade?", a: "Go to your account settings..." },
    ],
  },
  {
    label: "Account",
    faqs: [
      { q: "Is my data safe?", a: "We use industry standards..." },
      { q: "Can I delete my data?", a: "Yes, you can delete anytime..." },
    ],
  },
  {
    label: "Transfer",
    faqs: [
      { q: "How do I contact support?", a: "Email us at support@alnova.com" },
      { q: "What is the response time?", a: "We reply within 24 hours." },
    ],
  },
];

const FaqSection = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [openIdx, setOpenIdx] = useState(null);

  return (
    <section className='relative w-full py-16 px-4 md:px-12 lg:px-[100px] bg-white'>
      {/* Heading with absolute image */}
      <div className='relative mb-10'>
        <h2
          className='text-3xl md:text-[36px] font-bold text-center relative lg:mb-8'
          style={{ color: "#0F0F0F" }}
        >
          Frequently asked questions
          <img
            src={faqImg}
            alt='faq'
            className='absolute left-1/2 -translate-x-1/2 -top-20 w-3/6 h-52 '
            style={{ zIndex: 1 }}
          />
        </h2>
        <p
          className='mt-3 text-[20px] text-center'
          style={{ color: "#4B4B4B" }}
        >
          These are the commonly asked questions on Allnovas. Still have some
          questions?{" "}
          <span style={{ color: "#F05658", fontWeight: 500 }}>Email us</span>
        </p>
      </div>
      {/* Tabs */}
      <div className='flex justify-center gap-4 mb-8 flex-wrap'>
        {tabs.map((tab, idx) => (
          <button
            key={tab.label}
            className={`px-5 py-2 rounded-[30px] font-semibold border transition text-[15px] min-w-[110px] ${
              activeTab === idx
                ? "bg-[#F05658] text-white border-[#F05658]"
                : "bg-[#F3F4F6] text-[#0F0F0F] border-[#F3F4F6]"
            }`}
            onClick={() => {
              setActiveTab(idx);
              setOpenIdx(null);
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>
      {/* FAQ List */}
      <div className='w-full'>
        {tabs[activeTab].faqs.map((faq, idx) => (
          <div
            key={idx}
            className='border-b last:border-b-0 border-[#F4F4F4] py-4 w-full'
          >
            <div
              className='flex justify-between items-center cursor-pointer w-full'
              onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
            >
              <span className='font-medium text-[#0F0F0F]'>{faq.q}</span>
              {openIdx === idx ? (
                // Caret up
                <svg
                  className='w-5 h-5 text-[#4D5761]'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  viewBox='0 0 24 24'
                >
                  <path d='M18 15l-6-6-6 6' />
                </svg>
              ) : (
                // Caret down
                <svg
                  className='w-5 h-5 text-[#4D5761]'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  viewBox='0 0 24 24'
                >
                  <path d='M6 9l6 6 6-6' />
                </svg>
              )}
            </div>
            {openIdx === idx && (
              <div className='mt-2 text-gray-600'>{faq.a}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FaqSection;

import React, { useState } from "react";
import faqImg from "../assets/faq.svg";

const tabs = [
  {
    label: "General",
    faqs: [
      {
        q: "How do I get paid as a freelancer?",
        a: "Payments are processed through secure channels like PayPal, bank transfers or other supported methods.",
      },
      {
        q: "Are there transaction fees?",
        a: "Yes, Allnovas charges a small service fee for each transaction. Details can be found in our terms of service.",
      },
      {
        q: "How do I deposit funds as a client?",
        a: "You can deposit funds securely via supported payment methods on your dashboard.",
      },
      {
        q: "What happens if a payment dispute arises?",
        a: "Our team will mediate disputes to ensure a fair resolution based on our terms and conditions.",
      },
    ],
  },
  {
    label: "Freelancing",
    faqs: [
      {
        q: "How do I create an account?",
        a: "Click “Sign Up”, choose your role (freelancer or client) and complete the registration process.",
      },
      {
        q: "Can I switch between being a client and a freelancer?",
        a: "Yes, you can switch roles by updating your profile settings.",
      },
      {
        q: "What if I forget my password?",
        a: "Click “Forgot Password” on the login page and follow the instructions to reset it.",
      },
      {
        q: "How do I update my profile?",
        a: "Go to “Account Settings” and update your personal and professional details.",
      },
    ],
  },
  {
    label: "Account",
    faqs: [
      {
        q: "What is Allnovas about?",
        a: "Allnovas is a platform designed to connect skilled freelancers with clients seeking top-notch design, tech, and creative services.",
      },
      {
        q: "Who can use Allnovas?",
        a: "Anyone! Whether you're a freelancer looking to showcase your skills or a client in need of quality services, Allnovas is for you.",
      },
      {
        q: "How does Allnovas ensure quality?",
        a: "We vet freelancers and provide tools like ratings, reviews and milestone tracking to maintain service quality.",
      },
      {
        q: "Is Allnovas available worldwide?",
        a: "Yes, freelancers and clients from around the globe can use our platform.",
      },
    ],
  },
  {
    label: "Transfer",
    faqs: [
      {
        q: "How do I become a freelancer on Allnovas?",
        a: "Sign up, create a professional profile and showcase your skills by creating gigs that highlight your expertise.",
      },
      {
        q: "How do I get clients?",
        a: "Clients can find your gigs through searches or you can apply for job postings relevant to your skills.",
      },
      {
        q: "Can I work on multiple projects at once?",
        a: "Yes, you can manage multiple projects simultaneously, provided you meet deadlines and maintain quality.",
      },
      {
        q: "How are freelancers rated?",
        a: "Freelancers are rated based on clients' feedback, project delivery time and quality of work.",
      },
    ],
  },
];

const FaqSection = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [openIdx, setOpenIdx] = useState(null);

  return (
    <section className='relative w-full my-4 lg:my-[120px] px-4 md:px-12 lg:px-[100px] bg-white'>
      {/* Heading with absolute image */}
      <div className='relative mb-10'>
        <h2
          className='text-xl md:text-3xl lg:text-[36px] font-bold text-center relative lg:mb-5'
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
          className='mt-3 text-base md:text-[20px] lg:text-[20px] text-center mb-6'
          style={{ color: "#4B4B4B" }}
        >
          These are the commonly asked questions on Allnovas. Still have some
          questions?{" "}
          <span style={{ color: "#F05658", fontWeight: 500 }}>Email us</span>
        </p>
      </div>
      {/* Tabs */}
      <div className='flex justify-center gap-4 mb-[88px] flex-wrap'>
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

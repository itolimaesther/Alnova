import React from "react";
import {
  TwitterIcon,
  FacebookIcon,
  TelegramIcon,
  InstagramIcon,
  YouTubeIcon,
  LinkedInIcon,
} from "../assets/SvgIcons";

// Social icon wrapper (no circle)
const SocialIcon = ({ children, href }) => (
  <a
    href={href}
    className='w-8 h-8 flex items-center justify-center text-[#4D5761] hover:text-[#F05658] transition mr-2 last:mr-0'
    target='_blank'
    rel='noopener noreferrer'
  >
    {children}
  </a>
);

const Footer = () => {
  return (
    <footer className='bg-white pt-10 pb-4 px-4 md:px-12 lg:px-[100px] text-gray-700'>
      {/* First row */}
      <div className='flex flex-col md:flex-row md:justify-between md:items-center mb-8 gap-6'>
        {/* Left: Text and subtext */}
        <div>
          <h2 className='text-[24px] font-bold mb-1 text-[#0F0F0F]'>
            Become the smartest person in the room.
          </h2>
          <p className='text-[18px' style={{ color: "#4B4B4B" }}>
            Subscribe for practical insights and proven strategies straight to
            your inbox.
          </p>
        </div>
        {/* Right: Input and button */}
        <form className='flex flex-col md:flex-row w-full md:w-auto max-w-md gap-3'>
          <input
            type='email'
            placeholder='Enter email'
            className='w-full md:w-auto px-4 py-2 rounded-[15px] border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#F05658] text-sm'
          />
          <button
            type='submit'
            className='w-full md:w-auto px-6 py-2 bg-[#F05658] text-white font-semibold rounded-[15px] hover:bg-[#e04c4e] transition text-sm'
          >
            Unlock Insights
          </button>
        </form>
      </div>

      {/* Second row: 5 columns of links */}
      <div className='grid grid-cols-2 md:grid-cols-5 gap-6 mb-8'>
        <div>
          <h3 className='font-semibold mb-2 text-[#0F0F0F] text-xs'>
            Categories
          </h3>
          <ul className='space-y-1 text-base'>
            <li>
              <a
                href='#'
                className='text-[#0F0F0F] hover:text-[#0F0F0F] hover:underline hover:decoration-[#0F0F0F] decoration-[#0F0F0F] text-[18px]'
              >
                Graphic Design
              </a>
            </li>
            <li>
              <a
                href='#'
                className='text-[#0F0F0F] hover:text-[#0F0F0F] hover:underline hover:decoration-[#0F0F0F] decoration-[#0F0F0F] text-[18px]'
              >
                UI/UX Design
              </a>
            </li>
            <li>
              <a
                href='#'
                className='text-[#0F0F0F] hover:text-[#0F0F0F] hover:underline hover:decoration-[#0F0F0F] decoration-[#0F0F0F] text-[18px]'
              >
                Web Development
              </a>
            </li>
            <li>
              <a
                href='#'
                className='text-[#0F0F0F] hover:text-[#0F0F0F] hover:underline hover:decoration-[#0F0F0F] decoration-[#0F0F0F] text-[18px]'
              >
                Mobile App Development
              </a>
            </li>
            <li>
              <a
                href='#'
                className='text-[#0F0F0F] hover:text-[#0F0F0F] hover:underline hover:decoration-[#0F0F0F] decoration-[#0F0F0F] text-[18px]'
              >
                Programming and Tech
              </a>
            </li>
            <li>
              <a
                href='#'
                className='text-[#0F0F0F] hover:text-[#0F0F0F] hover:underline hover:decoration-[#0F0F0F] decoration-[#0F0F0F] text-[18px]'
              >
                Video Editing
              </a>
            </li>
            <li>
              <a
                href='#'
                className='text-[#0F0F0F] hover:text-[#0F0F0F] hover:underline hover:decoration-[#0F0F0F] decoration-[#0F0F0F] text-[18px]'
              >
                Social Media Design
              </a>
            </li>
            <li>
              <a
                href='#'
                className='text-[#0F0F0F] hover:text-[#0F0F0F] hover:underline hover:decoration-[#0F0F0F] decoration-[#0F0F0F] text-[18px]'
              >
                Social Media Management
              </a>
            </li>
            <li>
              <a
                href='#'
                className='text-[#0F0F0F] hover:text-[#0F0F0F] hover:underline hover:decoration-[#0F0F0F] decoration-[#0F0F0F] text-[18px]'
              >
                Presentation Design
              </a>
            </li>
            <li>
              <a
                href='#'
                className='text-[#0F0F0F] hover:text-[#0F0F0F] hover:underline hover:decoration-[#0F0F0F] decoration-[#0F0F0F] text-[18px]'
              >
                Illustration & Digital Art
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className='font-semibold mb-2 text-[#0F0F0F] text-xs'>Company</h3>
          <ul className='space-y-1 text-sm'>
            <li>
              <a
                href='#'
                className='text-[#0F0F0F] hover:text-[#0F0F0F] hover:underline hover:decoration-[#0F0F0F] decoration-[#0F0F0F] text-[18px]'
              >
                About
              </a>
            </li>
            <li>
              <a
                href='#'
                className='text-[#0F0F0F] hover:text-[#0F0F0F] hover:underline hover:decoration-[#0F0F0F] decoration-[#0F0F0F] text-[18px]'
              >
                Careers
              </a>
            </li>
            <li>
              <a
                href='#'
                className='text-[#0F0F0F] hover:text-[#0F0F0F] hover:underline hover:decoration-[#0F0F0F] decoration-[#0F0F0F] text-[18px]'
              >
                Press
              </a>
            </li>
            <li>
              <a
                href='#'
                className='text-[#0F0F0F] hover:text-[#0F0F0F] hover:underline hover:decoration-[#0F0F0F] decoration-[#0F0F0F] text-[18px]'
              >
                News
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className='font-semibold mb-2 text-[#0F0F0F] text-xs'>
            Resources
          </h3>
          <ul className='space-y-1 text-sm'>
            <li>
              <a
                href='#'
                className='text-[#0F0F0F] hover:text-[#0F0F0F] hover:underline hover:decoration-[#0F0F0F] decoration-[#0F0F0F] text-[18px]'
              >
                Docs
              </a>
            </li>
            <li>
              <a
                href='#'
                className='text-[#0F0F0F] hover:text-[#0F0F0F] hover:underline hover:decoration-[#0F0F0F] decoration-[#0F0F0F] text-[18px]'
              >
                Blog
              </a>
            </li>
            <li>
              <a
                href='#'
                className='text-[#0F0F0F] hover:text-[#0F0F0F] hover:underline hover:decoration-[#0F0F0F] decoration-[#0F0F0F] text-[18px]'
              >
                Guides
              </a>
            </li>
            <li>
              <a
                href='#'
                className='text-[#0F0F0F] hover:text-[#0F0F0F] hover:underline hover:decoration-[#0F0F0F] decoration-[#0F0F0F] text-[18px]'
              >
                Help Center
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className='font-semibold mb-2 text-[#0F0F0F] text-xs'>Legal</h3>
          <ul className='space-y-1 text-sm'>
            <li>
              <a
                href='#'
                className='text-[#0F0F0F] hover:text-[#0F0F0F] hover:underline hover:decoration-[#0F0F0F] decoration-[#0F0F0F] text-[18px]'
              >
                Privacy
              </a>
            </li>
            <li>
              <a
                href='#'
                className='text-[#0F0F0F] hover:text-[#0F0F0F] hover:underline hover:decoration-[#0F0F0F] decoration-[#0F0F0F] text-[18px]'
              >
                Terms
              </a>
            </li>
            <li>
              <a
                href='#'
                className='text-[#0F0F0F] hover:text-[#0F0F0F] hover:underline hover:decoration-[#0F0F0F] decoration-[#0F0F0F] text-[18px]'
              >
                Security
              </a>
            </li>
            <li>
              <a
                href='#'
                className='text-[#0F0F0F] hover:text-[#0F0F0F] hover:underline hover:decoration-[#0F0F0F] decoration-[#0F0F0F] text-[18px]'
              >
                SLA
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className='font-semibold mb-2 text-[#0F0F0F] text-xs'>Contact</h3>
          <ul className='space-y-1 text-sm'>
            <li>
              <a
                href='#'
                className='text-[#0F0F0F] hover:text-[#0F0F0F] hover:underline hover:decoration-[#0F0F0F] decoration-[#0F0F0F] text-[18px]'
              >
                Support
              </a>
            </li>
            <li>
              <a
                href='#'
                className='text-[#0F0F0F] hover:text-[#0F0F0F] hover:underline hover:decoration-[#0F0F0F] decoration-[#0F0F0F] text-[18px]'
              >
                Sales
              </a>
            </li>
            <li>
              <a
                href='#'
                className='text-[#0F0F0F] hover:text-[#0F0F0F] hover:underline hover:decoration-[#0F0F0F] decoration-[#0F0F0F] text-[18px]'
              >
                Partners
              </a>
            </li>
            <li>
              <a
                href='#'
                className='text-[#0F0F0F] hover:text-[#0F0F0F] hover:underline hover:decoration-[#0F0F0F] decoration-[#0F0F0F] text-[18px]'
              >
                Community
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Third row: Social icons and copyright */}
      <div className='flex flex-col md:flex-row md:justify-between md:items-center pt-4'>
        {/* Social icons */}
        <div className='flex mb-4 md:mb-0'>
          <SocialIcon href='#'>
            <TwitterIcon />
          </SocialIcon>
          <SocialIcon href='#'>
            <FacebookIcon />
          </SocialIcon>
          <SocialIcon href='#'>
            <TelegramIcon />
          </SocialIcon>
          <SocialIcon href='#'>
            <InstagramIcon />
          </SocialIcon>
          <SocialIcon href='#'>
            <YouTubeIcon />
          </SocialIcon>
          <SocialIcon href='#'>
            <LinkedInIcon />
          </SocialIcon>
        </div>
        {/* Copyright */}
        <div className='text-[#98A2B3] text-sm text-center md:text-right'>
          © 2024 Allnovas. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

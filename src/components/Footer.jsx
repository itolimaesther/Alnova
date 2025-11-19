import React from "react";

// Social icon wrapper (no circle)
const SocialIcon = ({ children, href }) => (
  <a
    href={href}
    className='w-8 h-8 flex items-center justify-center text-[#0F0F0F] hover:text-[#F05658] transition mr-2 last:mr-0'
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
          <h3 className='font-semibold mb-2 text-[#0F0F0F]'>Product</h3>
          <ul className='space-y-1 text-base'>
            <li>
              <a href='#' className='hover:text-[#F05658] text-[#4D5761]'>
                Features
              </a>
            </li>
            <li>
              <a href='#' className='hover:text-[#F05658]'>
                Pricing
              </a>
            </li>
            <li>
              <a href='#' className='hover:text-blue-600'>
                Integrations
              </a>
            </li>
            <li>
              <a href='#' className='hover:text-blue-600'>
                Demo
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className='font-semibold mb-2 text-[#0F0F0F]'>Company</h3>
          <ul className='space-y-1 text-sm'>
            <li>
              <a href='#' className='hover:text-[#F05658] text-[#4D5761]'>
                About
              </a>
            </li>
            <li>
              <a href='#' className='hover:text-blue-600'>
                Careers
              </a>
            </li>
            <li>
              <a href='#' className='hover:text-blue-600'>
                Press
              </a>
            </li>
            <li>
              <a href='#' className='hover:text-blue-600'>
                News
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className='font-semibold mb-2 text-[#0F0F0F]'>Resources</h3>
          <ul className='space-y-1 text-sm'>
            <li>
              <a href='#' className='hover:text-[#F05658] text-[#4D5761]'>
                Docs
              </a>
            </li>
            <li>
              <a href='#' className='hover:text-blue-600'>
                Blog
              </a>
            </li>
            <li>
              <a href='#' className='hover:text-blue-600'>
                Guides
              </a>
            </li>
            <li>
              <a href='#' className='hover:text-blue-600'>
                Help Center
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className='font-semibold mb-2 text-[#0F0F0F]'>Legal</h3>
          <ul className='space-y-1 text-sm'>
            <li>
              <a href='#' className='hover:text-[#F05658] text-[#4D5761]'>
                Privacy
              </a>
            </li>
            <li>
              <a href='#' className='hover:text-blue-600'>
                Terms
              </a>
            </li>
            <li>
              <a href='#' className='hover:text-blue-600'>
                Security
              </a>
            </li>
            <li>
              <a href='#' className='hover:text-blue-600'>
                SLA
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className='font-semibold mb-2 text-[#0F0F0F]'>Contact</h3>
          <ul className='space-y-1 text-sm'>
            <li>
              <a href='#' className='hover:text-[#F05658] text-[#4D5761]'>
                Support
              </a>
            </li>
            <li>
              <a href='#' className='hover:text-blue-600'>
                Sales
              </a>
            </li>
            <li>
              <a href='#' className='hover:text-blue-600'>
                Partners
              </a>
            </li>
            <li>
              <a href='#' className='hover:text-blue-600'>
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
            {/* Twitter SVG */}
            <svg width='18' height='18' fill='currentColor' viewBox='0 0 24 24'>
              <path d='M22.46 6c-.77.35-1.6.59-2.47.7a4.3 4.3 0 0 0 1.88-2.37 8.59 8.59 0 0 1-2.72 1.04A4.28 4.28 0 0 0 16.11 4c-2.37 0-4.29 1.92-4.29 4.29 0 .34.04.67.11.99C7.69 9.13 4.07 7.38 1.64 4.7c-.37.64-.58 1.38-.58 2.17 0 1.5.76 2.82 1.92 3.6-.71-.02-1.38-.22-1.97-.54v.05c0 2.1 1.5 3.85 3.5 4.25-.36.1-.74.16-1.13.16-.28 0-.54-.03-.8-.08.54 1.7 2.1 2.94 3.95 2.97A8.6 8.6 0 0 1 2 19.54c-.29 0-.57-.02-.85-.05A12.13 12.13 0 0 0 8.29 21.5c7.55 0 11.68-6.26 11.68-11.68 0-.18-.01-.36-.02-.54A8.18 8.18 0 0 0 24 4.59a8.36 8.36 0 0 1-2.54.7z' />
            </svg>
          </SocialIcon>
          <SocialIcon href='#'>
            {/* Facebook SVG */}
            <svg width='18' height='18' fill='currentColor' viewBox='0 0 24 24'>
              <path d='M22.68 0H1.32C.59 0 0 .59 0 1.32v21.36C0 23.41.59 24 1.32 24h11.5v-9.29H9.69v-3.62h3.13V8.41c0-3.1 1.89-4.79 4.65-4.79 1.32 0 2.45.1 2.78.14v3.22h-1.91c-1.5 0-1.79.71-1.79 1.75v2.3h3.58l-.47 3.62h-3.11V24h6.09c.73 0 1.32-.59 1.32-1.32V1.32C24 .59 23.41 0 22.68 0' />
            </svg>
          </SocialIcon>
          <SocialIcon href='#'>
            {/* Telegram SVG */}
            <svg width='18' height='18' fill='currentColor' viewBox='0 0 24 24'>
              <path d='M9.04 17.71c-.39 0-.32-.15-.45-.53l-1.13-3.72 8.7-5.15' />
              <path d='M9.04 17.71c.3 0 .43-.14.6-.3l1.62-1.56 3.37 2.48c.62.34 1.07.16 1.23-.57l2.23-10.44c.23-.94-.36-1.31-.96-1.09L3.5 9.39c-.92.36-.91.87-.16 1.09l2.7.84 10.5-6.62' />
            </svg>
          </SocialIcon>
          <SocialIcon href='#'>
            {/* Instagram SVG */}
            <svg width='18' height='18' fill='currentColor' viewBox='0 0 24 24'>
              <circle cx='12' cy='12' r='3.2' />
              <path d='M16.8 2H7.2A5.2 5.2 0 0 0 2 7.2v9.6A5.2 5.2 0 0 0 7.2 22h9.6A5.2 5.2 0 0 0 22 16.8V7.2A5.2 5.2 0 0 0 16.8 2zM12 17.2A5.2 5.2 0 1 1 17.2 12 5.21 5.21 0 0 1 12 17.2zm6.4-10.4a1.2 1.2 0 1 1-1.2-1.2 1.2 1.2 0 0 1 1.2 1.2z' />
            </svg>
          </SocialIcon>
          <SocialIcon href='#'>
            {/* YouTube SVG */}
            <svg width='18' height='18' fill='currentColor' viewBox='0 0 24 24'>
              <path d='M23.5 6.2a2.94 2.94 0 0 0-2.07-2.08C19.36 3.5 12 3.5 12 3.5s-7.36 0-9.43.62A2.94 2.94 0 0 0 .5 6.2 30.13 30.13 0 0 0 0 12a30.13 30.13 0 0 0 .5 5.8 2.94 2.94 0 0 0 2.07 2.08C4.64 20.5 12 20.5 12 20.5s7.36 0 9.43-.62a2.94 2.94 0 0 0 2.07-2.08A30.13 30.13 0 0 0 24 12a30.13 30.13 0 0 0-.5-5.8zM9.75 15.02V8.98l6.5 3.02z' />
            </svg>
          </SocialIcon>
          <SocialIcon href='#'>
            {/* LinkedIn SVG */}
            <svg width='18' height='18' fill='currentColor' viewBox='0 0 24 24'>
              <path d='M20.45 20.45h-3.55v-5.4c0-1.29-.02-2.95-1.8-2.95-1.8 0-2.08 1.4-2.08 2.85v5.5H9.47V9h3.41v1.56h.05c.48-.91 1.65-1.87 3.4-1.87 3.64 0 4.31 2.4 4.31 5.5v6.26zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.23 0H1.77C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.77 24h20.46c.97 0 1.77-.77 1.77-1.72V1.72C24 .77 23.2 0 22.23 0z' />
            </svg>
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

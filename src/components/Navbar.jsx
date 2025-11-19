import React, { useState } from "react";
// import addIcon from "../assets/add.svg";
import logoImg from "../assets/logo.png";

const navLinks = [
  { label: "Find Freelancers", href: "#" },
  { label: "Services", href: "#" },
  { label: "Resources", href: "#" },
  { label: "About Us", href: "#" },
  { label: "Offshore Services", href: "#" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className='w-full flex items-center justify-between py-4 px-4 md:px-12 lg:px-[100px] bg-white relative'>
      {/* Logo on the left */}
      <div className='shrink-0'>
        <img src={logoImg} alt='Logo' className='h-8 w-auto' />
      </div>

      {/* Nav links in the center */}
      <ul className='hidden md:flex flex-1 justify-center space-x-8'>
        {navLinks.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              className='text-[#0F0F0F] hover:text-[#F05658] transition-colors duration-200 text-[15px] md:text-[16px] font-medium'
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      {/* Buttons on the right */}
      <div className='flex items-center space-x-4'>
        <button className='px-6 py-2 font-semibold rounded-[46px] text-[#F05658] bg-transparent border-none hover:bg-transparent focus:outline-none text-[16px]'>
          Sign in
        </button>
        <button
          className='px-6 py-2 font-semibold relative group overflow-hidden transition-all duration-300'
          style={{
            background: "#F05658",
            borderRadius: 30,
            color: "#fff",
            minWidth: 90,
          }}
        >
          <span className='z-10 relative'>Join</span>
          <span
            className='absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 translate-x-2 transition-all duration-300 flex items-center'
            style={{ pointerEvents: "none" }}
          >
            <svg
              width='20'
              height='20'
              fill='none'
              stroke='white'
              strokeWidth='2'
              viewBox='0 0 20 20'
            >
              <path
                d='M10 5V15'
                stroke='white'
                strokeWidth='2'
                strokeLinecap='round'
              />
              <path
                d='M5 10H15'
                stroke='white'
                strokeWidth='2'
                strokeLinecap='round'
              />
            </svg>
          </span>
          <style jsx>{`
            .group:hover {
              min-width: 110px !important;
            }
          `}</style>
        </button>
      </div>

      {/* Hamburger for mobile/tablet */}
      <div className='md:hidden flex items-center'>
        <button
          onClick={() => setMenuOpen((prev) => !prev)}
          className='focus:outline-none'
          aria-label='Toggle menu'
        >
          <svg
            className='w-7 h-7 text-[#0F0F0F]'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            viewBox='0 0 24 24'
          >
            {menuOpen ? (
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M6 18L18 6M6 6l12 12'
              />
            ) : (
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M4 8h16M4 16h16'
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu dropdown */}
      {menuOpen && (
        <div className='absolute top-full left-0 w-full bg-white shadow-md z-50 md:hidden animate-fade-in'>
          <ul className='flex flex-col items-center py-4 space-y-4'>
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className='text-[#0F0F0F] hover:text-[#F05658] transition text-[15px] md:text-[16px] font-medium'
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <button className='px-6 py-2 font-semibold rounded-[46px] text-[#F05658] bg-transparent border-none hover:bg-transparent focus:outline-none text-[15px] md:text-[16px]'>
                Sign in
              </button>
            </li>
            <li>
              <button
                className='px-6 py-2 font-semibold relative group overflow-hidden transition-all duration-300'
                style={{
                  background: "#F05658",
                  borderRadius: 30,
                  color: "#fff",
                  minWidth: 90,
                }}
              >
                <span className='z-10 relative'>Join</span>
                <span
                  className='absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 translate-x-2 transition-all duration-300 flex items-center'
                  style={{ pointerEvents: "none" }}
                >
                  <svg
                    width='20'
                    height='20'
                    fill='none'
                    stroke='white'
                    strokeWidth='2'
                    viewBox='0 0 20 20'
                  >
                    <path
                      d='M10 5V15'
                      stroke='white'
                      strokeWidth='2'
                      strokeLinecap='round'
                    />
                    <path
                      d='M5 10H15'
                      stroke='white'
                      strokeWidth='2'
                      strokeLinecap='round'
                    />
                  </svg>
                </span>
                <style jsx>{`
                  .group:hover {
                    min-width: 110px !important;
                  }
                `}</style>
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

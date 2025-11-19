import React, { useState } from "react";
import addIcon from "../assets/add.svg";
import logoImg from "../assets/logo.png";

const navLinks = [
  { label: "Find Freelancers", href: "#" },
  { label: "Services", href: "#" },
  { label: "Resources", href: "#" },
  { label: "About Us", href: "#" },
  { label: "Offshore Services", href: "#" },
];

const JoinButton = ({ mobile }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <button
      className={` py-2 text-center font-semibold rounded-[46px] bg-[#F05658] text-white transition-all duration-300 text-[16px] flex items-center justify-center relative overflow-hidden ${
        hovered ? "scale-110 shadow-lg" : "scale-100"
      }`}
      style={{ minWidth: 90, fontSize: mobile ? 15 : 16 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <span className='transition-all duration-300'>Join</span>
      <span
        className={`transition-all duration-300 ml-2 ${
          hovered ? "opacity-100 translate-x-0" : "opacity-0 translate-x-2"
        }`}
        style={{ display: "flex", alignItems: "center" }}
      >
        <img src={addIcon} alt='add' className='w-5 h-5' />
      </span>
    </button>
  );
};

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
        <JoinButton />
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
              <JoinButton mobile />
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

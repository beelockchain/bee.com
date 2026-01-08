"use client";
import { ArrowUpRight } from 'lucide-react';
import { useState } from 'react';
import MegaHover from './NavItem';
import SideMenu from './SideMenu';

const Topnav = () => {
  const [sideMenuOpen, setSideMenuOpen] = useState(false);

  const menuItems = [
    { label: "About us", href: "/about" },
    { label: "Pitch Deck", href: "/pitch-deck" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms & Condition", href: "/terms" },
    { label: "Career", href: "/career" },
    { label: "Contact Us", href: "/contact" },
  ];

  return (
    <>
      <div className="w-full h-20 flex justify-between items-center p-4 bg-white z-50 fixed">
        <div className='w-[25%] h-full'>
          <img src="/Frame 14 1.svg" alt="logo" />
        </div>

        <div className="space-x-10 w-[50%] flex justify-center items-center">
          <MegaHover label="Home">
            <ul className="space-y-3 text-sm">
              <li className="flex gap-3 items-center">
                <span className="w-2 h-2 bg-yellow-400 rounded-full" />
                Digital Transformation
              </li>
              <li className="flex gap-3 items-center">
                <span className="w-2 h-2 bg-yellow-400 rounded-full" />
                Software Development
              </li>
              <li className="flex gap-3 items-center">
                <span className="w-2 h-2 bg-yellow-400 rounded-full" />
                Blockchain Solutions
              </li>
            </ul>
          </MegaHover>

          <MegaHover label="Service">
            <ul className="space-y-3 text-sm">
              <li className="flex gap-3 items-center">
                <span className="w-2 h-2 bg-yellow-400 rounded-full" />
                Digital Transformation
              </li>
              <li className="flex gap-3 items-center">
                <span className="w-2 h-2 bg-yellow-400 rounded-full" />
                Software Development
              </li>
              <li className="flex gap-3 items-center">
                <span className="w-2 h-2 bg-yellow-400 rounded-full" />
                Blockchain Solutions
              </li>
            </ul>
          </MegaHover>

          <MegaHover label="Blog">
            <ul className="space-y-3 text-sm">
              <li className="flex gap-3 items-center">
                <span className="w-2 h-2 bg-yellow-400 rounded-full" />
                Digital Transformation
              </li>
              <li className="flex gap-3 items-center">
                <span className="w-2 h-2 bg-yellow-400 rounded-full" />
                Software Development
              </li>
              <li className="flex gap-3 items-center">
                <span className="w-2 h-2 bg-yellow-400 rounded-full" />
                Blockchain Solutions
              </li>
            </ul>
          </MegaHover>

          <MegaHover label="Contact us">
            <ul className="space-y-3 text-sm">
              <li className="flex gap-3 items-center">
                <span className="w-2 h-2 bg-yellow-400 rounded-full" />
                Digital Transformation
              </li>
              <li className="flex gap-3 items-center">
                <span className="w-2 h-2 bg-yellow-400 rounded-full" />
                Software Development
              </li>
              <li className="flex gap-3 items-center">
                <span className="w-2 h-2 bg-yellow-400 rounded-full" />
                Blockchain Solutions
              </li>
            </ul>
          </MegaHover>
        </div>

        <div className="flex justify-center items-center gap-4 w-[25%]">
          <button className="text-gray-100 bg-black px-4 py-2 rounded-full hover:bg-gray-800 transition">
            Get started <ArrowUpRight className="h-6 w-6 inline text-yellow-500 ml-2" />
          </button>
          <button
            onClick={() => setSideMenuOpen(true)}
            className="flex items-center gap-2 text-black border border-black px-2 py-1 rounded-full font-medium shadow hover:bg-gray-100 transition"
          >
            Menu
            <div className='w-8 h-8 rounded-full flex justify-center items-center bg-yellow-500'>
              <img src="/Background.svg" alt="menu" className="h-8 w-8" />
            </div>
          </button>
        </div>
      </div>

      {/* Side Menu */}
      <SideMenu isOpen={sideMenuOpen} onClose={() => setSideMenuOpen(false)}>
        <div className="space-y-6 flex flex-col items-end pr-8">
          {menuItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-lg font-medium text-black hover:text-yellow-500 transition-colors"
              onClick={() => setSideMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>
      </SideMenu>
    </>
  );
};

export default Topnav;

"use client"

import { useState, useRef } from "react";

import Avatar from "@/app/_assets/icons/Generic_avatar.webp";

import { useClickOutside } from "@/app/_hooks/useClickOutside";

export default function ProfileDropDown() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useClickOutside(isOpen, () => setIsOpen(false), dropdownRef);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Avatar button */}
      <button 
        onClick={toggleDropdown}
        className="flex items-center justify-center rounded-full h-12 w-12 hover:cursor-pointer"
      >
        <img src={Avatar.src} alt="Avatar" className="h-12 w-12 rounded-full" />
      </button>

      {/* Dropdown menu */}
      <div 
        className={`absolute right-0 mt-7 py-4 w-40 px-4 bg-[#f6eee5] rounded-3xl shadow-lg z-10 transform origin-top-right transition-all duration-300 ease-in-out ${
          isOpen 
            ? 'opacity-100 scale-100' 
            : 'opacity-0 scale-95 pointer-events-none'
        }`}
      >
        <div className="flex flex-col gap-6 text-[15px]">
          <button className="w-full text-left text-theme-gold hover:text-yellow-500 transition-colors">
            My profile
          </button>

          <button className="w-full text-left text-theme-black hover:text-slate-950 transition-colors">
            Saved bundles
          </button>

          <button className="w-full text-left text-theme-black hover:text-slate-950 transition-colors">
            Invite friends
          </button>

          <button className="w-full text-left text-theme-black hover:text-slate-950 transition-colors">
            Settings
          </button>

          <button className="w-full text-left text-[#ff3b30] hover:text-red-700 transition-colors">
            Log out
          </button>
        </div>
      </div>
    </div>
  );
}
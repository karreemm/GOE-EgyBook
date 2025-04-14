"use client";

import { useState, useRef } from "react";
import Image from "next/image";

import Search from "@/app/_assets/icons/Search.webp";
import RightArrow from "@/app/_assets/icons/Arrow_right.webp";
import Location from "@/app/_assets/icons/location_black.webp";

import { useClickOutside } from "@/app/_hooks/useClickOutside";

const popularLocations = [
  { name: "Cairo", region: "City in Egypt" },
  { name: "Alexandria", region: "City in Egypt" },
  { name: "Hurghada", region: "City in Egypt" },
];

export default function SearchComponent() {
  const [isActive, setIsActive] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchFocused, setSearchFocused] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const handleClose = () => {
    setIsActive(false);
    setSearchFocused(false);
  };

  useClickOutside(isActive, handleClose, [buttonRef, contentRef]);

  const filteredLocations = popularLocations.filter((location) =>
    location.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleSearch = () => {
    setIsActive(!isActive);
    if (!isActive) {
      setTimeout(() => {
        const inputElement = document.getElementById("search-input");
        if (inputElement) {
          inputElement.focus();
          setSearchFocused(true);
        }
      }, 100);
    }
  };

  const handleInputFocus = () => {
    setSearchFocused(true);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="relative z-10">
      {/* Search Button */}
      <button
        ref={buttonRef}
        onClick={toggleSearch}
        className="cursor-pointer flex items-center justify-center w-[40px] h-[40px] rounded-full bg-[#1e1e1e] hover:scale-[1.2] transition duration-300 ease-in-out"
      >
        <Image
          src={Search}
          alt="Search Icon"
          className="w-[16px]"
          width={16}
          height={16}
        />
      </button>

      {/* Search Layout */}
      <div
        className={`fixed inset-0 bg-black/70 z-50 transition-all duration-300 ease-in-out
        ${isActive ? "opacity-100 visible" : "opacity-0 invisible"}`}
      >
        <div
          ref={contentRef}
          className={`max-w-[500px] mx-auto flex flex-col items-center pt-8 px-4 md:px-8 
          transition-all duration-700 ease-in-out transform
          ${
            isActive ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
          }`}
        >
          {/* Search input container */}
          <div
            className={`w-[95%] max-w-[350px] rounded-full overflow-hidden transition-all duration-300 ${
              searchFocused ? "ring-2 ring-[#444444]" : ""
            }`}
          >
            <div className="flex items-center px-4 py-3 bg-[#444444] rounded-full">
              <Image
                src={Search}
                alt="Search"
                className="w-5 h-5 mr-3"
                width={20}
                height={20}
              />
              <input
                id="search-input"
                type="text"
                placeholder="Search"
                value={searchTerm}
                onChange={handleSearchChange}
                onFocus={handleInputFocus}
                className="text-xl bg-transparent text-white flex-grow outline-none placeholder-theme-gold"
              />
            </div>
          </div>

          {/* Search Result container */}
          <div className="w-[95%] mx-auto max-w-[350px] mt-4 overflow-hidden">
            {/* Search Most Popular Locations */}
            {!searchTerm && (
              <div className="bg-[#444444] rounded-3xl p-4">
                <h3 className="text-[#D2AC71BF] mb-4 text-[16px]">
                  Most popular
                </h3>

                <div className="space-y-2">
                  {popularLocations.map((location, index) => (
                    <button
                      key={index}
                      className="w-full rounded-md p-3 flex items-center cursor-pointer hover:bg-[#555555]"
                    >
                      <div className="w-12 h-12 bg-[#F6EEE5] rounded-full flex items-center justify-center mr-3">
                        <Image
                          src={Location}
                          alt="Location Icon"
                          className="w-6"
                          width={24}
                          height={24}
                        />
                      </div>

                      <div>
                        <p className="text-gray-200 text-left text-[15px]">
                          {location.name}
                        </p>
                        <p className="text-gray-400 text-left text-[12px]">
                          {location.region}
                        </p>
                      </div>
                    </button>
                  ))}
                </div>

                <div className="flex justify-between items-center mt-4 pt-2 shadow-2xl">
                  <span className="text-[#F6EEE5] text-[12px]">
                    See all results for "search"
                  </span>
                  <button className="cursor-pointer">
                    <Image
                      src={RightArrow}
                      alt="See all"
                      className="w-5 h-5"
                      width={20}
                      height={20}
                    />
                  </button>
                </div>
              </div>
            )}

            {/* Search Result */}
            {searchTerm && (
              <div>
                <div className="bg-[#444444] rounded-3xl p-4">
                  <h3 className="text-[#D2AC71BF] mb-4 text-[16px]">
                    Locations
                  </h3>

                  <div className="space-y-2">
                    {filteredLocations.length > 0 ? (
                      filteredLocations.map((location, index) => (
                        <button
                          key={index}
                          className="w-full rounded-md p-3 flex items-center cursor-pointer hover:bg-[#555555]"
                        >
                          <div className="w-12 h-12 bg-[#F6EEE5] rounded-full flex items-center justify-center mr-3">
                            <Image
                              src={Location}
                              alt="Location Icon"
                              className="w-6"
                              width={24}
                              height={24}
                            />
                          </div>

                          <div>
                            <p className="text-gray-200 text-left text-[15px]">
                              {location.name}
                            </p>
                            <p className="text-gray-400 text-left text-[12px]">
                              {location.region}
                            </p>
                          </div>
                        </button>
                      ))
                    ) : (
                      <div className="text-center py-4">
                        <p className="text-gray-400 text-[15px]">
                          No results found for "{searchTerm}"
                        </p>
                      </div>
                    )}
                  </div>

                  {filteredLocations.length > 0 && (
                    <div className="flex justify-between items-center mt-4 pt-2 shadow-2xl">
                      <span className="text-[#F6EEE5] text-[12px]">
                        See all results for "{searchTerm}"
                      </span>
                      <button className="cursor-pointer">
                        <Image
                          src={RightArrow}
                          alt="See all"
                          className="w-5 h-5"
                          width={20}
                          height={20}
                        />
                      </button>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

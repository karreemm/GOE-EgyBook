"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Location from "@/app/_assets/icons/location_light.webp";
import LocationBlack from "@/app/_assets/icons/location_black.webp";
import RightArrow from "@/app/_assets/icons/Arrow_right.webp";
import { usePickerContext } from "../../_context/PickerContext";

const popularLocations = [
  { name: "Cairo", region: "City in Egypt" },
  { name: "Hurghada", region: "City in Egypt" },
];

const allLocations = [
  { name: "Cairo", region: "City in Egypt" },
  { name: "Hurghada", region: "City in Egypt" },
  { name: "Sharm El-Sheikh", region: "City in Egypt" },
  { name: "Luxor & Aswan", region: "City in Egypt" },
  { name: "Alexandria", region: "City in Egypt" },
  { name: "Dahab", region: "City in Egypt" },
  { name: "Marsa Alam", region: "City in Egypt" },
  { name: "Sahl Hasheesh", region: "City in Egypt" },
  { name: "El Gouna", region: "City in Egypt" },
  { name: "Siwa Oasis", region: "City in Egypt" },
  { name: "Nuweiba", region: "City in Egypt" },
  { name: "Taba Heights", region: "City in Egypt" },
];

export default function LocationPicker() {
  const [searchTerm, setSearchTerm] = useState("");
  const buttonRef = useRef<HTMLButtonElement>(null);

  const {
    activePickerType,
    setActivePickerType,
    setPickerPosition,
    selectedLocation,
    setSelectedLocation,
  } = usePickerContext();

  const isActive = activePickerType === "location";

  const togglePicker = () => {
    if (isActive) {
      setActivePickerType(null);
    } else {
      if (buttonRef.current) {
        const rect = buttonRef.current.getBoundingClientRect();
        setPickerPosition({
          top: rect.top,
          left: rect.left,
          width: rect.width,
        });
      }
      setActivePickerType("location");

      setTimeout(() => {
        const inputElement = document.getElementById("location-search-input");
        if (inputElement) {
          inputElement.focus();
        }
      }, 500);
    }
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleLocationSelect = (location: string) => {
    setSelectedLocation(`${location}, Egypt`);
  };

  const getLocationsToShow = () => {
    if (!searchTerm) {
      return popularLocations;
    }
    return allLocations.filter((location) =>
      location.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  const getLocationButtonClass = (locationName: string) => {
    const isSelected = selectedLocation === `${locationName}, Egypt`;
    return `w-full rounded-md p-3 flex items-center cursor-pointer 
      ${isSelected ? "bg-[#555555]" : "hover:bg-[#555555]"}`;
  };

  const locationsToShow = getLocationsToShow();

  return (
    <>
      <button
        ref={buttonRef}
        onClick={togglePicker}
        className="hover:opacity-85 cursor-pointer flex items-center"
      >
        <div className="w-6 h-6 mr-2">
          <Image src={Location} alt="Location icon" width={26} height={26} />
        </div>
        <span className="truncate">{selectedLocation}</span>
      </button>

      {isActive && (
        <div className="fixed top-[15rem] md:top-24 md:left-0 z-50 max-w-[500px] mx-auto px-4 md:px-8">
          <div className="w-[95%] max-w-[500px] mx-auto rounded-full overflow-hidden transition-all duration-300">
            <div className="flex items-center px-4 py-3 bg-[#444444] rounded-full">
              <input
                id="location-search-input"
                type="text"
                placeholder="Search location"
                value={searchTerm}
                onChange={handleSearchChange}
                className="text-xl bg-transparent text-white flex-grow outline-none placeholder-theme-gold"
              />
            </div>
          </div>

          <div className="w-[95%] mx-auto max-w-[350px] mt-4 overflow-hidden">
            <div className="bg-[#444444] rounded-3xl p-4">
              <h3 className="text-[#D2AC71BF] mb-4 text-[16px]">
                {searchTerm ? "Search Results" : "Popular Destinations"}
              </h3>

              <div className="space-y-2">
                {locationsToShow.length > 0 ? (
                  locationsToShow.map((location, index) => (
                    <button
                      key={index}
                      onClick={() => handleLocationSelect(location.name)}
                      className={getLocationButtonClass(location.name)}
                    >
                      <div className="w-12 h-12 bg-[#F6EEE5] rounded-full flex items-center justify-center mr-3">
                        <Image
                          src={LocationBlack}
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

              {searchTerm && locationsToShow.length > 0 && (
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
        </div>
      )}
    </>
  );
}

"use client";

import { useRef, useEffect } from "react";
import LocationPicker from "./_Pickers/LocationPicker";
import DatePicker from "./_Pickers/DatePicker";
import FamilyPicker from "./_Pickers/FamilyPicker";
import { usePickerContext } from "../_context/PickerContext";

export default function Picker() {
  const pickerRef = useRef<HTMLDivElement>(null);
  const initialPosition = useRef<DOMRect | null>(null);
  const { activePickerType, setActivePickerType } =
    usePickerContext();

  useEffect(() => {
    if (pickerRef.current && !initialPosition.current) {
      initialPosition.current = pickerRef.current.getBoundingClientRect();
    }
  }, []);

  useEffect(() => {
    if (!activePickerType) return;

    const handleClickOutside = (e: MouseEvent) => {
      if (pickerRef.current && !pickerRef.current.contains(e.target as Node)) {
        setActivePickerType(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [activePickerType, setActivePickerType]);

  return (
    <>
      <div
        className={`fixed inset-0 bg-black/90 z-30 transition-opacity duration-300 ease-in-out
          ${
            activePickerType
              ? "opacity-100 visible"
              : "opacity-0 invisible pointer-events-none"
          }`}
      />

      <div
        ref={pickerRef}
        style={{
          position: activePickerType ? "fixed" : "relative",
          top: activePickerType ? "40px" : "auto",
          left: activePickerType ? "50%" : "auto",
          transform: activePickerType ? "translateX(-50%)" : "none",
          width: activePickerType ? "90%" : "100%",
          maxWidth: activePickerType ? "1200px" : "none",
          zIndex: activePickerType ? 50 : "auto",
          transition: "all 0.5s ease-in-out",
        }}
        className={`text-white text-sm md:text-[16px] font-semibold p-4 md:p-2 flex flex-col md:flex-row md:items-center md:justify-between gap-5 md:gap-3 mb-4 backdrop-blur-xl bg-white/10 border border-white/30 rounded-b-2xl md:rounded-full shadow-2xl`}
      >
        <div className="px-10 flex flex-col items-center md:flex md:flex-row md:items-baseline md:justify-between w-full md:w-[75%] gap-5">
          {/* Location Picker */}
          <LocationPicker />

          {/* Date Picker */}
          <DatePicker />

          {/* Family Picker */}
          <FamilyPicker />
        </div>

        {/* Search Button */}
        <button
          onClick={() => setActivePickerType("location")}
          className="bg-[#346D52] hover:opacity-85 cursor-pointer font-semibold text-[16px] text-white px-6 py-3 md:px-12 md:py-4 rounded-full transition-colors duration-200 md:ml-2 md:whitespace-nowrap"
        >
          Explore Stays
        </button>
      </div>
    </>
  );
}

"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Card from "./_components/RelevantCard";
import { mostRelevantData } from "./mostRelevantData";
import NextArrow from "@/app/_assets/icons/Slider_right.webp";
import PrevArrow from "@/app/_assets/icons/Slider_left.webp";
import { useIsMobile } from "../_hooks/useIsMobile";

export default function MostRelevant() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);
  const isMobile = useIsMobile();

  const nextSlide = () => {
    if (currentIndex < mostRelevantData.length - 2 && !isMobile) {
      setCurrentIndex(currentIndex + 1);
    } else if (isMobile && currentIndex < mostRelevantData.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(mostRelevantData.length - 1);
    }
  };

  return (
    <div className="w-full bg-theme-black text-white py-8">
      <h1 className="text-2xl md:text-[40px] font-extrabold mb-8">
        The Most Relevant
      </h1>

      <div className="relative">
        <button
          onClick={prevSlide}
          className="absolute cursor-pointer -left-5 top-1/2 -translate-y-1/2 z-10 bg-[#E6E6E6] rounded-full w-10 h-10 flex items-center justify-center shadow-lg"
          aria-label="Previous slide"
        >
          <Image src={PrevArrow} alt="Previous" width={15} />
        </button>

        <div className="overflow-hidden" ref={carouselRef}>
          <div
            className="flex transition-transform duration-300 gap-0"
            style={{
              transform: `translateX(-${
                currentIndex * (isMobile ? 100 : 45)
              }%)`,
            }}
          >
            {mostRelevantData.map((card) => (
              <div
                key={card.id}
                className={`${isMobile ? "w-full" : "w-[42.5%]"} flex-shrink-0`}
              >
                <Card data={card} />
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={nextSlide}
          className="absolute cursor-pointer -right-5 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg"
          aria-label="Next slide"
        >
          <Image src={NextArrow} alt="Next" width={15} />
        </button>
      </div>
    </div>
  );
}

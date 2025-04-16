"use client";

import { useState, useRef, ReactNode } from "react";
import Image from "next/image";
import NextArrow from "@/app/_assets/icons/Slider_right.webp";
import PrevArrow from "@/app/_assets/icons/Slider_left.webp";
import { useIsMobile } from "../_hooks/useIsMobile";

interface CarouselProps {
  data: any[];
  renderCard: (item: any) => ReactNode;
  title: string;
  mobileCardWidth: number;
  desktopCardWidth: number;
  hasMobileGap?: boolean | false;
  slidesToShow: {
    mobile: number;
    desktop: number;
  };
}

export default function Carousel({
  data,
  renderCard,
  title,
  mobileCardWidth,
  desktopCardWidth,
  hasMobileGap = false,
  slidesToShow,
}: CarouselProps) {
    
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);
  const isMobile = useIsMobile();

  const maxIndex = isMobile
    ? data.length - slidesToShow.mobile
    : data.length - slidesToShow.desktop;

  const nextSlide = () => {
    if (currentIndex < maxIndex) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(maxIndex);
    }
  };

  const cardWidth = isMobile ? mobileCardWidth : desktopCardWidth;

  return (
    <div className="w-full bg-theme-black text-white py-8">
      <h1 className="text-2xl md:text-[40px] font-extrabold mb-8">{title}</h1>

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
            className={`flex transition-transform duration-300 ${
              hasMobileGap ? "gap-5" : "md:gap-5"
            }`}
            style={{
              transform: `translateX(-${currentIndex * cardWidth}%)`,
            }}
          >
            {data.map((item) => (
              <div
                key={item.id}
                className="flex-shrink-0"
                style={{ width: `${isMobile ? mobileCardWidth : desktopCardWidth}%` }}
              >
                {renderCard(item)}
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

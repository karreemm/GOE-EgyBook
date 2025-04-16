"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";

import CalenderImage from "@/app/_assets/icons/Calendar.webp";
import Right from "@/app/_assets/icons/Chevron_right.webp";
import Left from "@/app/_assets/icons/Chevron_left.webp";

import { usePickerContext } from "@/app/_context/PickerContext";
import Calendar from "../_components/Calender";

const reservedDays = [
  { day: 7, month: "February" },
  { day: 9, month: "February" },
  { day: 20, month: "March" },
  { day: 21, month: "March" },
  { day: 22, month: "March" },
  { day: 23, month: "March" },
  { day: 24, month: "March" },
];

const februaryDays = Array.from({ length: 29 }, (_, i) => i + 1);
const marchDays = Array.from({ length: 31 }, (_, i) => i + 1);

export default function DatePicker() {
  const buttonRef = useRef<HTMLButtonElement>(null);

  const {
    activePickerType,
    setActivePickerType,
    setPickerPosition,
    selectedDates,
    setSelectedDates,
  } = usePickerContext();

  const [startDate, setStartDate] = useState({ day: 12, month: "February" });
  const [endDate, setEndDate] = useState({ day: 12, month: "March" });
  const [selecting, setSelecting] = useState<"start" | "end" | null>(null);
  const isActive = activePickerType === "date";

  useEffect(() => {
    setSelectedDates({
      start: `${startDate.day} ${startDate.month} 2025`,
      end: `${endDate.day} ${endDate.month} 2025`,
    });
  },[]);

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
      setActivePickerType("date");
    }
  };

  const isReserved = (day: number, month: string) => {
    return reservedDays.some(
      (reserved) => reserved.day === day && reserved.month === month
    );
  };

  const handleDateSelect = (day: number, month: string) => {
    if (isReserved(day, month)) return;

    if (!selecting || selecting === "start") {
      setStartDate({ day, month });
      setSelecting("end");
      setSelectedDates({ ...selectedDates, start: `${day} ${month} 2025` });
    } else {
      setEndDate({ day, month });
      setSelecting(null);
      setSelectedDates({
        ...selectedDates,
        end: `${day} ${month} 2025`,
      });
    }
  };

  const isInRange = (day: number, month: string) => {
    const months = ["February", "March"];
    const startIdx = months.indexOf(startDate.month);
    const endIdx = months.indexOf(endDate.month);
    const currentIdx = months.indexOf(month);

    if (currentIdx === startIdx && currentIdx === endIdx) {
      return day >= startDate.day && day <= endDate.day;
    }

    if (currentIdx === startIdx) return day >= startDate.day;
    if (currentIdx === endIdx) return day <= endDate.day;
    return currentIdx > startIdx && currentIdx < endIdx;
  };

  const getDayClassName = (day: number, month: string) => {
    const isStart = day === startDate.day && month === startDate.month;
    const isEnd = day === endDate.day && month === endDate.month;
    const inRange = isInRange(day, month);
    const reserved = isReserved(day, month);

    return `h-10 w-10 text-[18px] font-medium rounded-lg flex items-center justify-center relative
      ${isStart ? "bg-[#EBDDBD] text-white" : ""}
      ${isEnd ? "bg-[#EBDDBD] text-white" : ""}
      ${!isStart && !isEnd && inRange ? "bg-[#EBDDBD] text-[#C58F4A]" : ""}
      ${
        reserved
          ? "bg-[#DAD2CA] text-[#969696] line-through cursor-not-allowed"
          : !inRange && !isStart && !isEnd
          ? "bg-[#DAD2CA] text-black border border-theme-gold"
          : ""
      }
      ${
        !reserved && !inRange && !isStart && !isEnd
          ? "hover:bg-[#F6EEE5] hover:text-black"
          : ""
      }`;
  };

  return (
    <>
      <button
        ref={buttonRef}
        onClick={togglePicker}
        className="hover:opacity-85 cursor-pointer flex items-center"
      >
        <div className="w-6 h-6 mr-2">
          <Image
            src={CalenderImage}
            alt="Calendar icon"
            width={26}
            height={26}
          />
        </div>
        <span className="truncate">{`${selectedDates.start} - ${selectedDates.end}`}</span>
      </button>

      {isActive && (
        <div className="fixed md:left-52 top-[15rem] md:top-24 z-50 w-full md:w-[70%] md:max-w-[900px] mx-auto px-4 md:px-8">
          <div className="bg-[#444444] rounded-3xl p-4 text-white max-h-[55vh] overflow-y-auto">
            <div className="hidden md:flex justify-between items-center mb-4">
              <button className="cursor-pointer">
                <Image src={Left} alt="Left Arrow" width={37} height={37} />
              </button>

              <div className="flex justify-between w-[70%]">
                <h3 className="text-white text-2xl font-extrabold">
                  February 2025
                </h3>
                <h3 className="text-white text-2xl font-extrabold">
                  March 2025
                </h3>
              </div>

              <button className="cursor-pointer">
                <Image src={Right} alt="Right Arrow" width={37} height={37} />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
              <Calendar
                month="February"
                days={februaryDays}
                emptyDays={4}
                startDate={startDate}
                endDate={endDate}
                onDateSelect={handleDateSelect}
                getDayClassName={getDayClassName}
              />

              <Calendar
                month="March"
                days={marchDays}
                emptyDays={5}
                startDate={startDate}
                endDate={endDate}
                onDateSelect={handleDateSelect}
                getDayClassName={getDayClassName}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

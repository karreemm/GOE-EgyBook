"use client";

import { useRef } from "react";
import Image from "next/image";
import Users from "@/app/_assets/icons/Users.webp";
import Counter from "../_components/Counter";
import { usePickerContext } from "../../_context/PickerContext";

export default function FamilyPicker() {
  const buttonRef = useRef<HTMLButtonElement>(null);

  const {
    activePickerType,
    setActivePickerType,
    setPickerPosition,
    selectedGuests,
    setSelectedGuests,
  } = usePickerContext();

  const isActive = activePickerType === "family";

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
      setActivePickerType("family");
    }
  };

  const handleIncrement = (type: "adults" | "children" | "rooms") => {
    setSelectedGuests({
      ...selectedGuests,
      [type]: selectedGuests[type] + 1,
    });
  };

  const handleDecrement = (type: "adults" | "children" | "rooms") => {
    if (
      selectedGuests[type] > 1 ||
      (type === "children" && selectedGuests[type] > 0)
    ) {
      setSelectedGuests({
        ...selectedGuests,
        [type]: selectedGuests[type] - 1,
      });
    }
  };

  return (
    <>
      <button
        ref={buttonRef}
        onClick={togglePicker}
        className="hover:opacity-85 cursor-pointer flex items-center"
      >
        <div className="w-6 h-6 mr-2">
          <Image src={Users} alt="Users icon" width={26} height={26} />
        </div>

        <span className="truncate">
          {`${selectedGuests.adults} Adults, ${selectedGuests.children} Child, ${selectedGuests.rooms} Room`}
        </span>
      </button>

      {isActive && (
        <div className="fixed top-[15rem] md:top-24 md:right-56 z-50 max-w-[500px] mx-auto px-4 md:px-8">
          <div className="bg-[#444444] rounded-3xl p-6 text-white">
            <Counter
              label="Adults"
              description="Ages 18 or above"
              value={selectedGuests.adults}
              onIncrement={() => handleIncrement("adults")}
              onDecrement={() => handleDecrement("adults")}
            />

            <Counter
              label="Children"
              description="Ages 0-17"
              value={selectedGuests.children}
              onIncrement={() => handleIncrement("children")}
              onDecrement={() => handleDecrement("children")}
            />

            <Counter
              label="Rooms"
              value={selectedGuests.rooms}
              onIncrement={() => handleIncrement("rooms")}
              onDecrement={() => handleDecrement("rooms")}
            />

            <p className="text-gray-400 text-sm mt-6">
              You can search for up to 16 travelers
            </p>
          </div>
        </div>
      )}
    </>
  );
}

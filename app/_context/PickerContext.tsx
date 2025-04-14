"use client";
import { createContext, useContext, useState, ReactNode } from "react";

type PickerType = "location" | "date" | "family" | null;

interface PickerContextProps {
  activePickerType: PickerType;
  setActivePickerType: (type: PickerType) => void;
  pickerPosition: { top: number; left: number; width: number } | null;
  setPickerPosition: (position: { top: number; left: number; width: number } | null) => void;
  selectedLocation: string;
  setSelectedLocation: (location: string) => void;
  selectedDates: { start: string; end: string };
  setSelectedDates: (dates: { start: string; end: string }) => void;
  selectedGuests: { adults: number; children: number; rooms: number };
  setSelectedGuests: (guests: { adults: number; children: number; rooms: number }) => void;
}

const PickerContext = createContext<PickerContextProps | undefined>(undefined);

export const PickerProvider = ({ children }: { children: ReactNode }) => {
  const [activePickerType, setActivePickerType] = useState<PickerType>(null);
  const [pickerPosition, setPickerPosition] = useState<{ top: number; left: number; width: number } | null>(null);
  const [selectedLocation, setSelectedLocation] = useState("Cairo, Egypt");
  const [selectedDates, setSelectedDates] = useState({ start: "19 March 2025", end: "27 March 2025" });
  const [selectedGuests, setSelectedGuests] = useState({ adults: 2, children: 1, rooms: 1 });

  return (
    <PickerContext.Provider
      value={{
        activePickerType,
        setActivePickerType,
        pickerPosition,
        setPickerPosition,
        selectedLocation,
        setSelectedLocation,
        selectedDates,
        setSelectedDates,
        selectedGuests,
        setSelectedGuests,
      }}
    >
      {children}
    </PickerContext.Provider>
  );
};

export const usePickerContext = () => {
  const context = useContext(PickerContext);
  if (context === undefined) {
    throw new Error("usePickerContext must be used within a PickerProvider");
  }
  return context;
};
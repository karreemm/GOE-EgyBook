import Image from "next/image";
import Left from "@/app/_assets/icons/Chevron_left.webp";
import Right from "@/app/_assets/icons/Chevron_right.webp";
import FromMask from "@/app/_assets/icons/From_mask.webp";
import ToMask from "@/app/_assets/icons/To_mask.webp";

interface CalendarProps {
  month: string;
  days: number[];
  emptyDays: number;
  startDate: { day: number; month: string };
  endDate: { day: number; month: string };
  onDateSelect: (day: number, month: string) => void;
  getDayClassName: (day: number, month: string) => string;
}

const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

export default function Calendar({
  month,
  days: monthDays,
  emptyDays,
  startDate,
  endDate,
  onDateSelect,
  getDayClassName,
}: CalendarProps) {
  return (
    <div>
      <div className="flex md:hidden justify-between items-center mb-4">
        
        <button className="cursor-pointer">
          <Image src={Left} alt="Left Arrow" width={37} height={37} />
        </button>
        
        <h3 className="text-white text-2xl font-extrabold">
          {month} 2025
        </h3>
        
        <button className="cursor-pointer">
          <Image src={Right} alt="Right Arrow" width={37} height={37} />
        </button>
      </div>

      <div className="grid grid-cols-7 mb-2">
        {days.map((day) => (
          <div key={`${month}-${day}`} className="text-center text-xs text-gray-400">
            {day}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-3">
        {Array(emptyDays)
          .fill(null)
          .map((_, index) => (
            <div key={`empty-${month}-${index}`} className="h-10 w-10"></div>
          ))}
        {monthDays.map((day) => (
          <button
            key={`${month}-${day}`}
            onClick={() => onDateSelect(day, month)}
            className={`${getDayClassName(day, month)} overflow-hidden`}
          >
            <span className="relative z-10">{day}</span>
            {day === startDate.day && startDate.month === month && (
              <Image
                src={FromMask}
                alt="From"
                className="absolute inset-0 z-0 object-cover"
                width={40}
                height={40}
                priority
              />
            )}
            {day === endDate.day && endDate.month === month && (
              <Image
                src={ToMask}
                alt="To"
                className="absolute inset-0 z-0 object-cover"
                width={40}
                height={40}
                priority
              />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
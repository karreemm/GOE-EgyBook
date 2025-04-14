import Image from "next/image";
import Plus from "@/app/_assets/icons/Plus.webp";
import Minus from "@/app/_assets/icons/Minus.webp";

interface CounterProps {
  label: string;
  description?: string;
  value: number;
  onIncrement: () => void;
  onDecrement: () => void;
}

export default function Counter({
  label,
  description,
  value,
  onIncrement,
  onDecrement,
}: CounterProps) {
  return (
    <div className="flex justify-between items-center mb-6 last:mb-0">
      
      <div>
        <h3 className="font-medium text-lg">{label}</h3>
        {description && <p className="text-gray-400 text-sm">{description}</p>}
      </div>
      
      <div className="flex items-center">
       
        <button
          onClick={onDecrement}
          className="w-8 h-8 rounded-full border border-white flex items-center justify-center"
        >
          <Image src={Minus} alt="Minus icon" width={20} height={20} />
        </button>
        
        <span className="w-10 text-center">{value}</span>
        
        <button
          onClick={onIncrement}
          className="w-8 h-8 rounded-full border border-white flex items-center justify-center"
        >
          <Image src={Plus} alt="Plus icon" width={20} height={20} />
        
        </button>
      </div>
    </div>
  );
}
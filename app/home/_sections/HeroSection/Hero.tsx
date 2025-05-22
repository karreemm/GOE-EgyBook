import Image from "next/image";

import HeroImage from "@/app/_assets/images/Hero_BG.webp";
import Navigation from "@/app/_assets/icons/Navigation.webp";

import { PickerProvider } from "@/app/_context/PickerContext";
import Picker from "./Picker";
import { useAuthContext } from "@/app/_context/AuthContext";

export default function Hero() {

  const { userRole } = useAuthContext();
  const isGuest = userRole === "guest";

  return (
    <div className="relative w-full">
     <div className="relative w-full h-[540px]">
        <Image
          src={HeroImage}
          alt="Luxury hotel room with view of Egyptian pyramids"
          fill
          priority
          className="object-cover brightness-50"
        />
      </div>

      <div className="absolute inset-0 flex flex-col justify-center w-[80%] mx-auto">
        <div className="flex items-center">
          <div className="w-5 h-5 mr-2">
            <Image
              src={Navigation}
              alt="Navigation icon"
              width={48}
              height={48}
            />
          </div>
          <span className="text-white font-semibold text-sm md:text-xl">
            Egypt
          </span>
        </div>

        <div className="flex flex-col mt-2">
          <h1 className="flex flex-col text-2xl md:text-[40px] font-semibold text-white mb-2">
            <p>
              {isGuest ? "Hey!" : "Hey, Kareem!"}
            </p>
            <p className="">Tell us where you want to stay</p>
          </h1>
          <p className="text-white text-sm md:text-[24px] mb-4 font-medium">
            Book 450+ Curated Egyptian Hotels
          </p>

          <div className="mt-3">
            <PickerProvider>
              <Picker />
            </PickerProvider>
          </div>
        </div>
      </div>
    </div>
  );
}

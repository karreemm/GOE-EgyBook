import Link from "next/link";
import Image from "next/image";

import { useAuthContext } from "@/app/_context/AuthContext";

import Logo from "@/app/_assets/icons/LOGO.webp";
import Cart from "@/app/_assets/icons/Shopping_cart.webp";
import Heart from "@/app/_assets/icons/Heart_white.webp";
import Language from "@/app/_assets/icons/language.webp";

import ProfileDropDown from "./ProfileDropDown";
import Search from "./Search";

export default function Navbar() {

  const { userRole, setUserRole } = useAuthContext();
  const isLoggedIn = userRole !== "guest";

  const handleLogin = () => {
    setUserRole("user");
  };

  return (
    <div className="bg-theme-black w-full fixed top-0 shadow-2xl z-20">
      <nav className="w-[80%] mx-auto flex items-center justify-between py-4">

        <div className="flex flex-col items-center">
          <Image
            src={Logo}
            alt="GOE EgyBook Logo"
            className="w-[100px]"
            priority
          />
          <h1 className="text-[22px] font-semibold text-theme-gold">
            Egy
            <span className="text-white font-normal">Book</span>
          </h1>
        </div>

        <div className="flex items-center gap-8">
          <Search />

          <Link
            href=""
            className="font-medium text-lg text-theme-gold hover:underline underline-offset-8"
          >
            GOE
          </Link>

          <Link
            href=""
            className="font-semibold text-lg text-theme-gold hover:underline underline-offset-8"
          >
            Egy
            <span className="text-white font-normal">Book</span>
          </Link>

          <Link
            href=""
            className="font-semibold text-lg text-theme-gold hover:underline underline-offset-8"
          >
            Egy
            <span className="text-white font-normal">Explore</span>
          </Link>

          <Link
            href=""
            className="font-semibold text-lg text-theme-gold hover:underline underline-offset-8"
          >
            Egy
            <span className="text-white font-normal">Tales</span>
          </Link>

          <Link
            href=""
            className="font-semibold text-lg text-theme-gold hover:underline underline-offset-8"
          >
            Egy
            <span className="text-white font-normal">Treasure</span>
          </Link>
        </div>

        <div className="flex justify-between items-center gap-24">
          <div className="flex items-center gap-6">
            <button className="flex items-center justify-center gap-1 cursor-pointer hover:scale-[1.1] transition duration-300 ease-in-out">
              <Image
                src={Language}
                alt="Language Icon"
                className="w-[28px]"
                width={28}
                height={28}
              />
              <span className="text-sm text-white text-[20px]">EN</span>
            </button>

            {!isLoggedIn ? (
              <>
                <div className="flex gap-3">
                  <button
                    className="px-7 py-1 flex items-center justify-center cursor-pointer bg-theme-gold hover:opacity-75 rounded-lg font-medium text-lg transition-colors"
                    onClick={handleLogin}
                  >
                    Login
                  </button>

                  <button
                    className="px-7 py-1 flex items-center justify-center cursor-pointer bg-theme-gold hover:opacity-75 rounded-lg font-medium text-lg transition-colors"
                    onClick={handleLogin}
                  >
                    Sign Up
                  </button>
                </div>
              </>
            ) : (
              <>
                <div className="h-[30px] w-[1px] bg-[#F6EEE5] opacity-20 mx-3"></div>

                <button className="flex items-center justify-center cursor-pointer hover:scale-[1.2] transition duration-300 ease-in-out">
                  <Image
                    src={Heart}
                    alt="Heart Icon"
                    className="w-[26px]"
                    width={26}
                    height={26}
                  />
                </button>

                <button className="flex items-center justify-center cursor-pointer hover:scale-[1.2] transition duration-300 ease-in-out">
                  <Image
                    src={Cart}
                    alt="Cart Icon"
                    className="w-[26px]"
                    width={26}
                    height={26}
                  />
                </button>
                <ProfileDropDown />
              </>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}

import Link from "next/link";

import Logo from "@/app/_assets/icons/LOGO.webp";
import Cart from "@/app/_assets/icons/Shopping_cart.webp";
import Heart from "@/app/_assets/icons/Heart_white.webp";
import Language from "@/app/_assets/icons/language.webp";

import ProfileDropDown from "./ProfileDropDown";
import Search from "./Search";

type NavbarProps = {
    role: string; 
}

export default function Navbar(
    { role }: NavbarProps
) {

    const isLoggedIn = role !== "guest";

    return(
        <nav className="w-[80%] mx-auto flex items-center justify-between py-7">

            {/* Logo and Title */}
            <div className="flex flex-col items-center">
                <img src={Logo.src} alt="GOE EgyBook Logo" className="w-[100px]" />
                <h1 className="text-[22px] font-semibold text-theme-gold">
                     Egy
                    <span className="text-white font-normal">
                        Book
                    </span>
                </h1>
            </div>

            {/* Search & Navigation Links */}
            <div className="flex items-center gap-8">
                <Search />

                <Link href="" className="font-medium text-lg text-theme-gold hover:underline underline-offset-8">
                    GOE
                </Link>

                <Link href="" className="font-semibold text-lg text-theme-gold hover:underline underline-offset-8">
                    Egy
                    <span className="text-white font-normal">
                        Book
                    </span>
                </Link>

                <Link href="" className="font-semibold text-lg text-theme-gold hover:underline underline-offset-8">
                    Egy
                    <span className="text-white font-normal">
                        Explore
                    </span>
                </Link>

                <Link href="" className="font-semibold text-lg text-theme-gold hover:underline underline-offset-8">
                    Egy
                    <span className="text-white font-normal">
                        Tales
                    </span>
                </Link>

                <Link href="" className="font-semibold text-lg text-theme-gold hover:underline underline-offset-8">
                    Egy
                    <span className="text-white font-normal">
                        Treasure
                    </span>
                </Link>
            </div>

            {/* Icons Section */}
            <div className="flex justify-between items-center gap-24">
                <div className="flex items-center gap-6">
                    <button className="flex items-center justify-center gap-1 cursor-pointer hover:scale-[1.1] transition duration-300 ease-in-out">
                        <img src={Language.src} alt="Language Icon" className="w-[28px]"/>
                        <span className="text-sm text-white text-[20px]">EN</span>
                    </button>

                    {/* for signed in users */}
                    {!isLoggedIn ? 
                    <>
                        <div className="flex gap-3">
                            <Link href="" className="px-7 py-1 flex items-center justify-center cursor-pointer bg-theme-gold hover:bg-yellow-600 rounded-lg font-medium text-lg transition-colors">
                                Login
                            </Link>

                            <Link href="" className="px-7 py-1 flex items-center justify-center cursor-pointer bg-theme-gold hover:bg-yellow-600 rounded-lg font-medium text-lg transition-colors">
                                Sign Up
                            </Link>
                        </div>
                    </>
                    :
                    //  for signed in users 
                    <>
                        <div className="h-[30px] w-[1px] bg-[#F6EEE5] opacity-20 mx-3"></div>

                        <button className="flex items-center justify-center cursor-pointer hover:scale-[1.2] transition duration-300 ease-in-out">
                            <img src={Heart.src} alt="Heart Icon" className="w-[26px]"/>
                        </button>

                        <button className="flex items-center justify-center cursor-pointer hover:scale-[1.2] transition duration-300 ease-in-out">
                            <img src={Cart.src} alt="Cart Icon" className="w-[26px]"/>
                        </button>
                        <ProfileDropDown />
                    </>
                    }

                </div>
            </div>

        </nav>
    )
}
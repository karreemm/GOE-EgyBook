"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

import Logo from "@/app/_assets/icons/LOGO.webp";
import Cart from "@/app/_assets/icons/Shopping_cart.webp";
import Heart from "@/app/_assets/icons/Heart_white.webp";
import Language from "@/app/_assets/icons/language.webp";
import Close from "@/app/_assets/icons/X.webp";
import Menu from "@/app/_assets/icons/Menu.webp";

type NavbarMobileProps = {
  role: string;
};

export default function NavbarMobile({ role }: NavbarMobileProps) {
  const isLoggedIn = role !== "guest";
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLogoSeen, setIsLogoSeen] = useState(true);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsLogoSeen(!isLogoSeen);
  };

  return (
    <nav className="relative">
      {/* Main navbar */}
      {isLogoSeen && (
        <div className="flex justify-between items-center py-6 w-[90%] mx-auto bg-theme-black z-50 text-white">
          <Link href="/" className="text-theme-gold text-2xl font-semibold">
            Egy<span className="text-white font-normal">Book</span>
          </Link>
          <button onClick={toggleMenu} className="focus:outline-none">
            <Image
              src={Menu}
              alt="Menu"
              className="w-[31px]"
              width={31}
              height={31}
            />
          </button>
        </div>
      )}

      {/* Not signed in */}
      {isMenuOpen && !isLoggedIn && (
        <div className="fixed top-0 right-0 h-full w-full text-white p-6 bg-theme-black z-50 flex flex-col">
          <div className="flex justify-end mb-8">
            <button onClick={toggleMenu} className="focus:outline-none">
              <Image
                src={Close}
                alt="Close"
                className="w-[31px]"
                width={31}
                height={31}
              />
            </button>
          </div>

          <div className="text-theme-gold text-[32px] font-semibold">
            Egy
            <span className="text-white font-normal">Book</span>
          </div>

          <div className="flex flex-col gap-3 mt-10 text-[32px]">
            <Link
              href="/language"
              className="flex items-center gap-1 hover:opacity-80"
            >
              <Image
                src={Language}
                alt="Language"
                className="w-[28px]"
                width={28}
                height={28}
              />
              <span>EN</span>
            </Link>

            <Link href="/login" className="hover:opacity-80">
              Login
            </Link>

            <Link href="/signup" className="hover:opacity-80">
              Sign up
            </Link>
          </div>

          <div className="mt-auto mb-5 flex justify-center">
            <Image
              src={Logo}
              alt="GOE Logo"
              className="w-[200px]"
              width={200}
              height={100}
              priority
            />
          </div>
        </div>
      )}

      {/* Signed in */}
      {isMenuOpen && isLoggedIn && (
        <div className="fixed top-0 right-0 h-full w-full text-white p-6 bg-theme-black z-50 flex flex-col">
          <div className="flex justify-end mb-8">
            <button onClick={toggleMenu} className="focus:outline-none">
              <Image
                src={Close}
                alt="Close"
                className="w-[31px]"
                width={31}
                height={31}
              />
            </button>
          </div>

          <div className="text-theme-gold text-[32px] font-semibold">
            Egy
            <span className="text-white font-normal">Book</span>
          </div>

          <div className="flex flex-col gap-3 mt-10 text-[32px]">
            <Link
              href="/wishlist"
              className="flex items-center gap-1 hover:opacity-80"
            >
              <Image
                src={Heart}
                alt="Wishlist"
                className="w-[28px]"
                width={28}
                height={28}
              />
              <span>Wishlist</span>
            </Link>

            <Link
              href="/cart"
              className="flex items-center gap-1 hover:opacity-80"
            >
              <Image
                src={Cart}
                alt="Cart"
                className="w-[28px]"
                width={28}
                height={28}
              />
              <span>Cart</span>
            </Link>

            <Link
              href="/language"
              className="flex items-center gap-1 hover:opacity-80"
            >
              <Image
                src={Language}
                alt="Language"
                className="w-[28px]"
                width={28}
                height={28}
              />
              <span>EN</span>
            </Link>

            <div className="flex flex-col gap-1 text-[28px] mt-2">
              <Link
                href="/profile"
                className="text-theme-gold hover:opacity-80"
              >
                My profile
              </Link>

              <Link href="/deals" className="hover:opacity-80">
                Saved deals
              </Link>

              <Link href="/invite" className="hover:opacity-80">
                Invite friends
              </Link>

              <Link href="/settings" className="hover:opacity-80">
                Settings
              </Link>

              <Link href="/logout" className="text-[#ff3b30] hover:opacity-80">
                Log out
              </Link>
            </div>
          </div>

          <div className="mt-auto mb-5 flex justify-center">
            <Image
              src={Logo}
              alt="GOE Logo"
              className="w-[200px]"
              width={200}
              height={100}
              priority
            />
          </div>
        </div>
      )}
    </nav>
  );
}

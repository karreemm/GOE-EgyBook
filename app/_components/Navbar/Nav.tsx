"use client"

import Navbar from "./Navbar";
import NavbarMobile from "./NavbarMobile";

interface NavProps {
  role: string;
}

export default function Nav({ role }: NavProps) {

  return (
    <>
    <div className='lg:hidden'>
      <NavbarMobile role={role} />
    </div>
    <div className='hidden lg:block'>
      <Navbar role={role} />
    </div>
    </>
);
}
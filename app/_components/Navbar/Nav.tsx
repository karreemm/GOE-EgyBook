"use client"

import Navbar from "./Navbar";
import NavbarMobile from "./NavbarMobile";

export default function Nav() {

  return (
    <>
      <div className='lg:hidden'>
        <NavbarMobile />
      </div>
      <div className='hidden lg:block'>
        <Navbar />
      </div>
    </>
  );
}
import Link from "next/link";
import Logo from "@/app/_assets/icons/LOGO.webp";
import Instagram from "@/app/_assets/icons/Instagram.webp";
import Facebook from "@/app/_assets/icons/Facebook.webp";
import Tiktok from "@/app/_assets/icons/TikTok.webp";
import Twitter from "@/app/_assets/icons/TwitterX.webp";
import Linkedin from "@/app/_assets/icons/LinkedIn.webp";
import FooterMask from "@/app/_assets/images/Footer_mask.webp";

export default function Footer() {
    return(
        <footer className="relative w-[90%] lg:w-[80%] mx-auto py-6">

            <div className="absolute inset-0 -z-10 rounded-xl overflow-hidden bg-gradient-to-b from-transparent to-theme-black/90">
                <img
                    src={FooterMask.src}
                    alt=""
                    className="w-full h-full object-cover object-bottom"
                    style={{
                        maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%)',
                        WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%)'
                    }}
                />
            </div>

            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Left column */}
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-4 max-w-lg items-center md:items-start">
                        <img 
                            src={Logo.src} 
                            alt="Gates of Egypt"
                            className="w-[140px] md:w-[180px]"
                        />
                        <p className="text-center md:text-left text-xl md:text-[36px] text-white my-4">
                            Lorem, Ipsum Lorem, Ipsum Lorem, Ipsum or less.
                        </p>
                        <Link href="/discover">
                            <button className="bg-theme-gold text-lg md:text-[20px] font-medium py-2 px-6 rounded-full">
                                Discover More
                            </button>
                        </Link>
                    </div>
                    
                    {/* Navigation links */}
                    <div className="flex justify-center md:justify-normal flex-wrap gap-6 mt-8 text-theme-gold text-lg md:text-[18px] font-semibold">
                        <Link href="/" className="hover:underline underline-offset-8 font-normal text-white">
                            Home
                        </Link>
                        <Link href="/egybook" className="hover:underline underline-offset-8">
                            Egy
                            <span className="text-white font-normal">
                                Book
                            </span>
                        </Link>
                        <Link href="/egyexplore" className="hover:underline underline-offset-8">
                            Egy
                            <span className="text-white font-normal">
                                Explore
                            </span>
                        </Link>
                        <Link href="/egytales" className="hover:underline underline-offset-8">
                            Egy
                            <span className="text-white font-normal">
                                Tales
                            </span>
                        </Link>
                        <Link href="/egytreasure" className="hover:underline underline-offset-8">
                            Egy
                            <span className="text-white font-normal">
                                Treasure
                            </span>
                        </Link>
                    </div>
                </div>

                {/* Right column */}
                <div className="flex flex-col justify-end h-full">
                    <div className="flex flex-col gap-4 items-center md:items-end">
                        <div className="flex gap-2">
                            <Link href="/" className="w-[40px] h-[40px] md:w-[60px] md:h-[60px] rounded-3xl bg-theme-gold flex items-center justify-center border border-[#DEB655]">
                                <img src={Instagram.src} alt="Instagram" className="w-[30px] md:w-[50px]" />
                            </Link>

                            <Link href="/" className="w-[40px] h-[40px] md:w-[60px] md:h-[60px] rounded-3xl bg-theme-gold flex items-center justify-center border border-[#DEB655]">
                                <img src={Facebook.src} alt="Facebook" className="w-[30px] md:w-[50px]" />
                            </Link>

                            <Link href="/" className="w-[40px] h-[40px] md:w-[60px] md:h-[60px] rounded-3xl bg-theme-gold flex items-center justify-center border border-[#DEB655]">
                                <img src={Tiktok.src} alt="TikTok" className="w-[30px] md:w-[50px]" />
                            </Link>

                            <Link href="/" className="w-[40px] h-[40px] md:w-[60px] md:h-[60px] rounded-3xl bg-theme-gold flex items-center justify-center border border-[#DEB655]">
                                <img src={Twitter.src} alt="Twitter" className="w-[30px] md:w-[50px]" />
                            </Link>

                            <Link href="/" className="w-[40px] h-[40px] md:w-[60px] md:h-[60px] rounded-3xl bg-theme-gold flex items-center justify-center border border-[#DEB655]">
                                <img src={Linkedin.src} alt="LinkedIn" className="w-[30px] md:w-[50px]" />
                            </Link>
                        </div>
                        <div className="text-center md:text-right text-sm md:text-[20px] text-white font-medium">
                            <p>Copyright Gates of Egypt © 2024</p>
                            <p>All rights reserved</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
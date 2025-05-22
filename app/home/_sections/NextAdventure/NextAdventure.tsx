import Link from "next/link";
import Image from "next/image";

import BookingImage from "@/app/_assets/images/Ready_to_book.webp";

export default function NextAdventure() {
    return(
        <div className="w-full md:h-[30rem] rounded-2xl flex flex-col md:flex md:flex-row bg-[#bfdbc9] text-[#0F1F18] mt-10">
            <div className="w-full md:w-1/2 md:h-full flex flex-col justify-center p-4 md:px-8">
                <h1 className="text-3xl md:text-5xl font-bold mb-2">Ready to Book Your Next Adventure?</h1>
                <p className="mt-2 mb-2 text-xl md:text-2xl  md:max-w-[90%]">Get exclusive deals and immersive previews with our smart booking platform.</p>
                <Link href="/" className="bg-[#458465] text-xl text-white px-6 py-2 rounded-full hover:opacity-85 text-center mx-auto md:mx-0 max-w-60 md:max-w-80 mt-4">
                    Book Now
                </Link>
            </div>

            <div className="w-full md:w-1/2 md:h-full">
                <Image
                    src={BookingImage}
                    alt="Ready to Book Your Next Adventure"
                    className="w-full h-full object-cover rounded-b-2xl md:rounded-r-2xl"
                    priority={true}
                />
            </div>
        </div>
    )
}
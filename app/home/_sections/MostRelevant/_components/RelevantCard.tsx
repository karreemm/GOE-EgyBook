import Image from "next/image";

import Heart from "@/app/_assets/icons/Heart_black.webp";
import Star from "@/app/_assets/icons/Star.webp";

import { MostRelevantDataType } from "../mostRelevantData";

export default function RelevantCard(
    { data }: { data: MostRelevantDataType } 
) {
    return(
        <div className="w-[100%] mx-auto md:mx-0 flex flex-col gap-5 rounded-4xl bg-white text-theme-black group">
            <div className="relative rounded-2xl">
                <Image
                    src={data.image}
                    alt={data.title}
                    className="rounded-4xl w-full h-80 group-hover:brightness-50 transition-all duration-500 ease-in-out"
                />

                <div className="absolute top-6 left-6 bg-white text-[#346D52] font-medium text-[15px] px-3 py-1 rounded-full">
                    {data.title}
                </div>

                <button className="flex justify-center items-center w-12 h-12 rounded-full bg-[#F6EEE5] border border-theme-gold hover:opacity-95 absolute cursor-pointer top-4 right-4 z-10">
                    <Image
                        src={Heart}
                        alt="Heart icon"
                        width={26}
                        height={26}
                    />
                </button>
            </div>

            <div className="flex flex-col gap-0 px-4 pb-4">
                <div className="flex justify-between items-center">
                    <h3 className="text-lg md:text-[18px] font-semibold">{data.hotel}</h3>
                    <div className="hidden md:flex items-center gap-1">
                        <Image
                            src={Star}
                            alt="Star icon"
                            width={18}
                            height={18}
                        />
                        <span className="text-[18px] font-semibold">{data.rating}</span>
                        <span className="text-[18px] font-semibold text-gray-400">({data.reviews})</span>
                    </div>
                </div>

                    <p className="text-[16px] font-medium">{data.price}</p>
                    <div className="flex md:hidden items-center gap-1 mt-2">
                        <Image
                            src={Star}
                            alt="Star icon"
                            width={18}
                            height={18}
                        />
                        <span className="text-[16px] font-semibold">{data.rating}</span>
                        <span className="text-[16px] font-semibold text-gray-400">({data.reviews})</span>
                    </div>
            </div>
        </div>
    )
}
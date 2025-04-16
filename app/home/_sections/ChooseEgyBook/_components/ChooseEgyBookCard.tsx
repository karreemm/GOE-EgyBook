"use client"

import Image from "next/image";
import { ChooseEgyBookDataType } from "../ChooseEgyBookData";
import { useIsMobile } from "@/app/_hooks/useIsMobile";

export default function ChooseEgyBookCard(
    {data} : {data: ChooseEgyBookDataType} 
) {

    const isMobile = useIsMobile();
    const iconWidth = isMobile ? (data.iconWidth ? data.iconWidth - 10 : 40) : (data.iconWidth || 50);

    return(
        <div className="flex flex-col gap-4 w-[100%] mx-auto">
            <div>
                <Image 
                    src={data.icon} 
                    alt="icon" 
                    className=""
                    width={iconWidth}
                />
            </div>

            <div className="flex flex-col gap-2">  
                <div className="gap-1 flex">
                    {data.title.map((word, index) => (
                        <span key={index} className={`${word.color} text-xl md:text-[24px] font-bold `}>
                            {word.word}
                        </span>
                    ))}
                </div>

                <p className="text-lg md:text-[20px] text-white font-medium">
                    {data.description}
                </p>

            </div>

        </div>
    )
}
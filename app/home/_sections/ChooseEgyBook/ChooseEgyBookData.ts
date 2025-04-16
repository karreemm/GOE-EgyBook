import Navigation from "@/app/_assets/icons/Mouse_click.webp";
import Price from "@/app/_assets/icons/Price.webp";
import Vr from "@/app/_assets/icons/Vr.webp";

import { StaticImageData } from "next/image";

interface WordColorsType {
    word: string;
    color: "text-theme-gold" | "text-theme-green" | "text-white"
}

export interface ChooseEgyBookDataType {
    icon: StaticImageData;
    iconWidth?: number;
    title: (WordColorsType)[];
    description: string;
}

export const ChooseEgyBookData: ChooseEgyBookDataType[] = [
    {
        icon: Navigation,
        iconWidth: 53,
        title: [
            {word: "Seamless", color: "text-theme-gold"},
            {word: "&", color: "text-white"},
            {word: "Smart", color: "text-theme-green"},
            {word:"Booking", color: "text-white"},
        ],
        description: "Quick, user-friendly platform that simplifies the reservation process"
    }, 

    {
        icon: Vr,
        iconWidth: 62,
        title: [
            {word: "Immersive", color: "text-theme-green"},
            {word: "VR Previews", color: "text-white"}
        ],
        description: "Explore hotels and rooms in 360° before you book—giving you total confidence."
    }, 

    {
        icon: Price,
        iconWidth: 63,
        title: [
            {word: "Exclusive", color: "text-theme-green"},
            {word: "Best-Price Deals", color: "text-white"},
        ],
        description: "Save more with special offers and real-time price comparisons."
    }
];
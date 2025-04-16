import Cairo from "@/app/_assets/images/Cairo_mask.webp";
import Hurghada from "@/app/_assets/images/Hurgada_mask.webp";
import Sharm from "@/app/_assets/images/Sharm_ElSheikh_mask.webp";
import Luxor from "@/app/_assets/images/Luxor_Aswan_mask.webp";

import { StaticImageData } from "next/image";

export interface TrendingDestinationsDataType {
    id: number;
    image: StaticImageData;
    title: string;
    description: string;
    colorGredient: string;
    link: string;
}

export const TrendingDestinationsData: TrendingDestinationsDataType[] = [
    {
        id: 1,
        image: Cairo,
        title: "Cairo",
        description: "Unveil secrets of ancient wonders.",
        colorGredient: "linear-gradient(122.62deg, #FC8E50 10%, rgba(252, 142, 80, 0) 80%)",
        link: "#"
    },
    {
        id: 2,
        image: Hurghada,
        title: "Hurghada",
        description: "Sunshine, beaches, and vibrant reefs.",
        colorGredient: "linear-gradient(122.62deg, #6497C4 10%, rgba(100, 151, 196, 0) 80%)",
        link: "#"
    },
    {
        id: 3,
        image: Sharm,
        title: "Sharm El Sheikh",
        description: "Dive into breathtaking underwater vistas.",
        colorGredient: "linear-gradient(122.62deg, #BB5050 10%, rgba(187, 80, 80, 0) 80%)",
        link: "#"
    },
    {
        id: 4,
        image: Luxor,
        title: "Luxor & Aswan",
        description: "Journey through timeless historic treasures.",
        colorGredient: "linear-gradient(122.62deg, #F29E22 10%, rgba(242, 158, 34, 0) 80%)",
        link: "#"
    }
]
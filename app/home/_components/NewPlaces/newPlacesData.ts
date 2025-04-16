import Other from "@/app/_assets/images/other.webp";
import NabqBay from "@/app/_assets/images/Nabq_bay.webp";
import Nile from "@/app/_assets/images/Nile.webp";
import Giza from "@/app/_assets/images/Giza.webp";
import SomaBay from "@/app/_assets/images/Soma_bay.webp";
import RedSea from "@/app/_assets/images/Red_sea.webp";

import { StaticImageData } from "next/image";


export interface newPlaceType {
    id: number;
    image: StaticImageData
    title: string;
    link: string;
}

export const newPlacesData: newPlaceType[] = [
    {
        id: 1,
        image: RedSea,
        title: "Red Sea",
        link: "#"
    },
    {
        id: 2,
        image: SomaBay,
        title: "Soma Bay",
        link: "#"
    },
    {
        id: 3,
        image: Giza,
        title: "Giza",
        link: "#"
    },
    {
        id: 4,
        image: Nile,
        title: "Nile",
        link: "#"
    },
    {
        id: 5,
        image: NabqBay,
        title: "Nabq Bay",
        link: "#"
    },
    {
        id: 6,
        image: Other,
        title: "Other",
        link: "#"
    },
];
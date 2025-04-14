import SomaBay from "@/app/_assets/images/Soma_bay_relevant.webp";
import Cairo from "@/app/_assets/images/Cairo.webp";
import { StaticImageData } from "next/image";

export interface MostRelevantDataType {
    id: number;
    image: StaticImageData;
    title: string;
    hotel: string;
    price: string;
    rating: string;
    reviews: string;
}

export const mostRelevantData = [
    {
        id: 1,
        image: SomaBay,
        title: "Soma Bay",
        hotel: "Kempinski Hotel Soma Bay",
        price: "From $214 per person",
        rating: "4.7",
        reviews: "1,274",
    },
    {
        id: 2,
        image: Cairo,
        title: "Cairo",
        hotel: "JW Marriott Hotel Cairo",
        price: "From $194 per person",
        rating: "4.6",
        reviews: "2,274",
    },
    {
        id: 3,
        image: SomaBay,
        title: "Soma Bay",
        hotel: "Kempinski Hotel Soma Bay",
        price: "From $214 per person",
        rating: "4.7",
        reviews: "1,274",
    },
]
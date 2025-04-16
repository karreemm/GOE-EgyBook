import Image from "next/image"
import Link from "next/link"
import { newPlaceType } from "../newPlacesData"

export default function NewPlaceCard(
    { data }: { data: newPlaceType }
) {
    return(
        <Link href="" className="relative h-80 w-full mx-auto md:mx-0 rounded-4xl text-[20px] font-semibold text-white">
            <Image
                src={data.image}
                alt={data.title}
                className="rounded-4xl"
            />

            <div className="absolute bottom-6 left-6">
                {data.title}
            </div>  

        </Link>
    )
}
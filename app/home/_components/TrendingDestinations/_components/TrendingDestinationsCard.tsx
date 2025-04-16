import Image from "next/image";
import Link from "next/link";
import { TrendingDestinationsDataType } from "../TrendingDestinationsData";

export default function TrendingDestinationsCard(
    {data} : {data: TrendingDestinationsDataType}
){
    return(
        <div className="w-full h-[360px] relative rounded-3xl overflow-hidden">
            <Image
                src={data.image}
                alt={data.title}
                fill
                className="object-cover h-full"
            />
            
            <div 
                className="absolute inset-0"
                style={{ background: data.colorGredient }}
            />
            
            <div className="absolute inset-0 p-6 flex flex-col justify-between">

                <div className="text-white">
                    <h2 className="text-4xl md:text-5xl font-bold mb-1">{data.title}</h2>
                    <p className="text-xl md:text-2xl font-medium">{data.description}</p>
                </div>
                
                <div>
                    <Link 
                        href={data.link} 
                        className="inline-block bg-white text-black font-semibold py-2 px-8 rounded-full hover:opacity-90 transition-opacity"
                    >
                        See Hotels
                    </Link>
                </div>
            </div>
        </div>
    )
}
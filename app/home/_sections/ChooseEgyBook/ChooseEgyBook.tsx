import Card from "./_components/ChooseEgyBookCard";
import { ChooseEgyBookData } from "./ChooseEgyBookData";

export default function ChooseEgyBook() {
    return(
        <div className="w-ful text-white py-8">
            <div className="text-2xl md:text-[40px] font-extrabold mb-8 flex">
                <span>
                    Why Choose
                </span>
                <span className="text-theme-gold ml-2">
                     Egy 
                </span>
                <span className="">
                    Book?
                </span>
            </div>
        <div className="w-full flex flex-col mt-5 md:mt-0 gap-14 md:flex md:flex-row md:justify-between md:gap-5 mx-auto">
            {ChooseEgyBookData.map((data, index) => (
                <div key={index} className="w-full md:w-[30%]">
                    <Card data={data} />
                </div>
            ))}
        </div>
        </div>
    )
}

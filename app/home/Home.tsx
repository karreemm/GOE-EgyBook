"use client";

import Hero from "./_components/HeroSection/Hero";
import MostRelevant from "./_components/MostRelevant/MostRelevant";
import NewPlaces from "./_components/NewPlaces/NewPlaces";
import ChooseEgyBook from "./_components/ChooseEgyBook/ChooseEgyBook";
import TrendingDestinations from "./_components/TrendingDestinations/TrendingDestinations";
import NextAdventure from "./_components/NextAdventure/NextAdventure";

export default function Home() {
    return(
        <>
            <Hero />
            <div className=" w-[80%] mx-auto">
            <MostRelevant />
            <NewPlaces />
            <ChooseEgyBook />
            <TrendingDestinations />
            <NextAdventure />
            </div>
        </>

    )
}
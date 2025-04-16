"use client";

import Hero from "./_sections/HeroSection/Hero";
import MostRelevant from "./_sections/MostRelevant/MostRelevant";
import NewPlaces from "./_sections/NewPlaces/NewPlaces";
import ChooseEgyBook from "./_sections/ChooseEgyBook/ChooseEgyBook";
import TrendingDestinations from "./_sections/TrendingDestinations/TrendingDestinations";
import NextAdventure from "./_sections/NextAdventure/NextAdventure";

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
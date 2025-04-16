"use client";

import Nav from "@/app/_components/Navbar/Nav";
import Hero from "./_components/HeroSection/Hero";
import MostRelevant from "./_components/MostRelevant/MostRelevant";
import NewPlaces from "./_components/NewPlaces/NewPlaces";
import ChooseEgyBook from "./_components/ChooseEgyBook/ChooseEgyBook";
import TrendingDestinations from "./_components/TrendingDestinations/TrendingDestinations";
import NextAdventure from "./_components/NextAdventure/NextAdventure";
import Footer from "@/app/_components/Footer";

export default function Home() {

  return (
    <>
      <Nav role={"user"} />

      <Hero />
      <div className=" w-[80%] mx-auto">
        <MostRelevant />
        <NewPlaces />
        <ChooseEgyBook />
        <TrendingDestinations />
        <NextAdventure />
      </div>

      <Footer />
    </>
  );
}

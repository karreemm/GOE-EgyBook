"use client";

import Nav from "./_components/Navbar/Nav";
import Hero from "./home/_components/HeroSection/Hero";
import MostRelevant from "./home/_components/MostRelevant/MostRelevant";
import NewPlaces from "./home/_components/NewPlaces/NewPlaces";
import ChooseEgyBook from "./home/_components/ChooseEgyBook/ChooseEgyBook";
import TrendingDestinations from "./home/_components/TrendingDestinations/TrendingDestinations";
import NextAdventure from "./home/_components/NextAdventure/NextAdventure";
import Footer from "./_components/Footer";

export default function Home() {

  return (
    <>
      <Nav role="guest" />

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

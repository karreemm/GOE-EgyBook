"use client";

import Card from "./_components/TrendingDestinationsCard";
import { TrendingDestinationsData } from "./TrendingDestinationsData";
import Carousel from "@/app/_components/Carousel";

export default function TrendingDestinations() {
  return (
    <Carousel
      data={TrendingDestinationsData}
      renderCard={(destination) => <Card data={destination} />}
      title="Trending Destinations"
      mobileCardWidth={100}
      desktopCardWidth={40}
      slidesToShow={{
        mobile: 1,
        desktop: 2,
      }}
    />
  );
}
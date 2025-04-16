"use client";

import Card from "./_components/NewPlaceCard";
import { newPlacesData, newPlaceType } from "./newPlacesData";
import Carousel from "@/app/_components/Carousel";

export default function NewPlaces() {
  return (
    <Carousel<newPlaceType>
      data={newPlacesData}
      renderCard={(place) => <Card data={place} />}
      title="Discover New Places"
      mobileCardWidth={66.67}
      desktopCardWidth={17}
      hasMobileGap={true}
      slidesToShow={{
        mobile: 1,
        desktop: 5,
      }}
    />
  );
}
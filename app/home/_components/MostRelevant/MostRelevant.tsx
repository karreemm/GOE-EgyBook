"use client";

import Card from "./_components/RelevantCard";
import { mostRelevantData } from "./mostRelevantData";
import Carousel from "@/app/_components/Carousel";

export default function MostRelevant() {
  return (
    <Carousel
      data={mostRelevantData}
      renderCard={(card) => <Card data={card} />}
      title="The Most Relevant"
      mobileCardWidth={100}
      desktopCardWidth={41.5}
      slidesToShow={{
        mobile: 1,
        desktop: 2,
      }}
    />
  );
}
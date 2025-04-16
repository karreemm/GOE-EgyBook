"use client";

import Card from "./_components/RelevantCard";
import { mostRelevantData, MostRelevantDataType } from "./mostRelevantData";
import Carousel from "@/app/_components/Carousel";

export default function MostRelevant() {
  return (
    <Carousel<MostRelevantDataType>
      data={mostRelevantData}
      renderCard={(card) => <Card data={card} />}
      title="The Most Relevant"
      mobileCardWidth={70}
      desktopCardWidth={41.5}
      hasMobileGap={true}
      slidesToShow={{
        mobile: 1,
        desktop: 2,
      }}
    />
  );
}

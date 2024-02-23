"use client";

import React from "react";
import Image from "next/image";
import Flicking from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking.css";
import { AutoPlay } from "@egjs/flicking-plugins";

export default function TechStackSlider({ allTechStacks }: any) {
  const flickingPlugins = [
    new AutoPlay({ duration: 2000, direction: "NEXT", stopOnHover: false }),
  ];

  return (
    <Flicking
      plugins={flickingPlugins}
      moveType="freeScroll"
      align="center"
      circular={true}
      inputType={["touch", "mouse"]}
      id="carousel-techstack"
      className="w-full"
    >
      {allTechStacks.map((source: any, index: any) => (
        <div key={index} className="panel px-2 sm:px-4 md:px-8">
          <Image
            src={`${source.logo.url}`}
            alt={`${source.logo.basename}`}
            height={100}
            width={100}
            className="w-[50px] h-[50px] md:w-[100px] md:h-[100px] pointer-events-none"
          />
        </div>
      ))}
    </Flicking>
  );
}

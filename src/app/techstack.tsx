"use client";

import React, { useRef, useEffect } from "react";
import { MainContainer } from "@/components/containers";
import CardTechStack from "@/components/cardTechStack";
import Image from "next/image";
import Flicking from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking.css";
import { AutoPlay } from "@egjs/flicking-plugins";

export default function TechStack() {
  const flickingPlugins = [
    new AutoPlay({ duration: 2000, direction: "NEXT", stopOnHover: false }),
  ];

  const logoSources: any[] = [
    "html",
    "css",
    "js",
    "scss",
    "tailwind",
    "bootstrap",
    "react",
    "jquery",
    "nodejs",
    "php",
    "mysql",
    "postgresql",
    "nextjs",
    "laravel",
    "wordpress",
    "git",
    "c++",
    "csharp",
    "java",
    "python",
  ];

  return (
    <section
      id="tech-stack"
      className="w-full h-auto bg-[url('/liquid-cheese.png')] bg-no-repeat bg-center bg-fixed bg-cover py-20"
    >
      <MainContainer>
        <h2 className="w-full text-center text-secondary font-bold text-3xl mb-10 xl:mb-20">
          Tech Stack
        </h2>

        <div id="logo-carousel" className="cursor-pointer flex flex-row gap-8 pb-8">
          <Flicking
            plugins={flickingPlugins}
            moveType="freeScroll"
            align="center"
            circular={true}
            inputType={["touch", "mouse"]}
            id="carousel-techstack"
            className="w-full"
          >
            {logoSources.map((source, index) => (
              <div key={index} className="panel px-2 sm:px-4 md:px-8">
                <Image
                  src={`/techstack-svg/${source}.svg`}
                  alt={`Tech Icon ${index + 1}`}
                  height={100}
                  width={100}
                  className="w-[50px] h-[50px] md:w-[100px] md:h-[100px] pointer-events-none"
                />
              </div>
            ))}
          </Flicking>
        </div>

        {/* <div
          id="card-container"
          className="flex flex-wrap px-10 gap-4 md:gap-8 w-full justify-center items-center xl:mb-10"
        >
          <CardTechStack
            frontTitle="Front End"
            frontImage="/frontend.gif"
            backContent={[
              "HTML",
              "CSS (SCSS, Tailwind, Bootstrap)",
              "JavaScript (ReactJS, jQuery)",
            ]}
          />

          <CardTechStack
            frontTitle="Back End"
            frontImage="/backend.gif"
            backContent={["PHP", "NodeJS"]}
          />

          <CardTechStack
            frontTitle="Database"
            frontImage="/database.gif"
            backContent={["PostgreSQL", "MySQL"]}
          />

          <CardTechStack
            frontTitle="Framework"
            frontImage="/framework.gif"
            backContent={["NextJS", "Laravel", "WordPress"]}
          />

          <CardTechStack
            frontTitle="Others"
            frontImage="/folder.gif"
            backContent={["Git (Gitlab, Github)", "C++", "C#", "JAVA", "Python"]}
          />
        </div> */}
      </MainContainer>
    </section>
  );
}

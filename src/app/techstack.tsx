import React from "react";
import { MainContainer } from "@/components/containers";
import CardTechStack from "@/components/cardTechStack";

export default function TechStack() {
  return (
    <section className="bg-white h-auto py-20">
      <MainContainer>
        <h2 className="w-full text-center text-secondary font-bold text-4xl mb-10">
          Tech Stack
        </h2>

        <div
          id="card-container"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-10 gap-4 md:gap-8 lg:gap-12 w-full justify-center items-center"
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
            backContent={["Git (Gitlab, Github)", ""]}
          />
        </div>
      </MainContainer>
    </section>
  );
}

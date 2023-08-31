import React from "react";
import { MainContainer } from "@/components/containers";
import CardTechStack from "@/components/cardTechStack";

export default function TechStack() {
  return (
    <section id="tech-stack" className="w-full h-auto bg-[url('/liquid-cheese.png')] bg-no-repeat bg-center bg-fixed bg-cover py-20">
      <MainContainer>
        <h2 className="w-full text-center text-secondary font-bold text-3xl mb-10 xl:mb-20">
          Tech Stack
        </h2>

        <div
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
        </div>
      </MainContainer>
    </section>
  );
}

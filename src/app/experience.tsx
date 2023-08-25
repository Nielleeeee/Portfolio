import React from "react";
import { MainContainer } from "@/components/containers";
import ListExperience from "@/components/listExperience";

export default function Experience() {
  return (
    <section className="w-full h-auto bg-[url('/rainbow-vortex.png')] bg-no-repeat bg-center bg-fixed bg-cover py-20">
      <MainContainer>
        <h2 className="w-full text-center text-white font-bold text-3xl mb-10">
          Education
        </h2>
        <ol className="relative border-l border-white mb-20">
          <ListExperience
            date="June 2008 - March 2013"
            jobTitle="San Felipe Neri Catholic School"
            educLevel="Primary Education"
          />
          <ListExperience
            date="June 2014 - March 2020"
            jobTitle="San Felipe Neri Catholic School"
            educLevel="Secondary Education"
            course="Techvoc-ICT"
          />
          <ListExperience
            date="October 2020 - July 2023"
            jobTitle="Polytechnic University of the Philippines"
            educLevel="Tertiary Education"
            course="Diploma in Information Comminication Technology"
          />
        </ol>

        <h2 className="w-full text-center text-white font-bold text-3xl mb-10">
          Experience
        </h2>
        <ol className="relative border-l border-white">
          <ListExperience
            date="April 2023 - July 2023"
            jobTitle="Full Stack Developer Intern (August 99 / TaoCrowd, Inc.)"
            jobDescription="Proficiently contributed to ongoing projects, applying Git, ReactJS, 
            and WordPress skills to transform design concepts into functional code. Collaborated effectively 
            in cross-functional teams, translating ideas into cohesive project execution. Addressed UI 
            enhancements and bug fixes, demonstrating adaptability across diverse technology stacks (NextJS, Laravel, WordPress). 
            Acquired skills proactively, showcasing resourcefulness and consistently recognized for contributing to 
            UI improvements and bug resolution in a dynamic and fast-paced environment."
          />
        </ol>
      </MainContainer>
    </section>
  );
}

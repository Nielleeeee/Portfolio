import React from "react";
import { MainContainer } from "@/components/containers";
import ListExperience from "@/components/listExperience";
import Image from "next/image";

export default function Experience() {
  return (
    <section
      id="experience"
      className="w-full h-auto bg-[url('/rainbow-vortex.png')] bg-no-repeat bg-center bg-fixed bg-cover py-20"
    >
      <MainContainer>
        <h2 className="w-full text-center text-white font-bold text-3xl mb-10">
          Education
        </h2>
        <div className="flex flex-row justify-evenly mb-20 px-4 md:px-0 lg:px-12 gap-4 lg:gap-8 xl:gap-12">
          <ol className="relative border-l border-white h-max w-full md:w-1/3">
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
              achievements="President Lister (2020 - 2023)"
            />
          </ol>

          <div className="hidden md:flex w-1/2">
            <Image
              src="/illus-study.gif"
              width={1000}
              height={1000}
              alt="educ"
              className="w-full mix-blend-multiply"
            />
          </div>
        </div>

        <h2 className="w-full text-center text-white font-bold text-3xl mb-10">
          Experience
        </h2>
        <div className="flex flex-row justify-between px-4 md:px-0 lg:px-12 gap-4 lg:gap-8 xl:gap-12">
          <div className="md:px-4 md:h-[500px] minimal-scrollbar md:overflow-y-auto w-full md:w-[60%]">
            <ol className="relative border-l border-white h-full w-full">
              <ListExperience
                date="September 2022 - November 2022"
                jobTitle="Freelance Web Design"
                jobDescription="Executed four distinct projects for clients, encompassing students and small businesses. 
                Utilized CSS and HTML to craft tailored websites, including personal portfolios, blogs, and landing 
                pages.Managed the entire project lifecycle, from conceptualization to final delivery, to meet clients' specific 
                needs and visions."
              />

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

              <ListExperience
                date="September 2023 - Present"
                jobTitle="Full Stack Developer (PCES Inc.)"
                jobDescription="In my current role, I enhance our WordPress site by developing both front-end and back-end elements. 
                This involves crafting custom plugins to optimize back-end functionality, ensuring efficient and seamless website performance. 
                I also regularly refresh our website's design to align with evolving business needs, showcasing my proficiency in adaptable and effective design. 
                A significant accomplishment in my role was the integration of the PayMongo payment gateway, which notably improved our transaction handling. 
                Beyond technical development, I actively participate in strategic meetings with private companies and government agencies, contributing to the formation of key partnerships. 
                My experience in this role has strengthened my ability to rapidly adapt and innovatively solve challenges in web development."
              />
            </ol>
          </div>

          <div className="hidden md:flex w-[40%]">
            <Image
              src="/illus-work.gif"
              width={1000}
              height={1000}
              alt="educ"
              className="w-full h-max mix-blend-multiply"
            />
          </div>
        </div>
      </MainContainer>
    </section>
  );
}

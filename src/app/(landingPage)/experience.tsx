import React from "react";
import { MainContainer } from "@/components/containers";
import ListExperience from "@/components/listExperience";
import Image from "next/image";
import Transition from "@/components/transition/transition";
import { performRequest } from "@/lib/datocms";

const PAGE_CONTENT_QUERY = `
  query Experience {
    allEducations(orderBy: _createdAt_ASC) {
      id
      date
      schoolName
      educationLevel
      course
      achievement
    }
    allExperiences(orderBy: _createdAt_ASC) {
      id
      date
      jobTitle
      jobDescription
    }
  }`;

export default async function Experience() {
  const {
    data: { allEducations, allExperiences },
  } = await performRequest({ query: PAGE_CONTENT_QUERY });

  console.log(allEducations);

  return (
    <section
      id="experience"
      className="w-full h-auto bg-[url('/rainbow-vortex.png')] bg-no-repeat bg-center bg-fixed bg-cover py-20"
    >
      <Transition>
        <MainContainer>
          <h2 className="w-full text-center text-white font-bold text-3xl mb-10">
            Education
          </h2>
          <div className="flex flex-row justify-evenly mb-20 px-4 md:px-0 lg:px-12 gap-4 lg:gap-8 xl:gap-12">
            <ol className="relative border-l border-white h-max w-full md:w-1/3">
              {allEducations &&
                allEducations.map((education: any, index: any) => (
                  <ListExperience
                    key={index}
                    date={education.date}
                    jobTitle={education.schoolName}
                    educLevel={education.educationLevel}
                    course={education.course}
                    achievements={education.achievement}
                  />
                ))}
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
                {allExperiences &&
                  allExperiences.map((experience: any, index: any) => (
                    <ListExperience
                      key={index}
                      date={experience.date}
                      jobTitle={experience.jobTitle}
                      jobDescription={experience.jobDescription}
                    />
                  ))}
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
      </Transition>
    </section>
  );
}

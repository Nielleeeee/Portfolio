import React from "react";
import { MainContainer } from "@/components/containers";
import Transition from "@/components/transition/transition";
import { performRequest } from "@/lib/datocms";
import ProjectList from "@/components/projectList";

const PAGE_CONTENT_QUERY = `
  query Project {
    allPersonalProjects(orderBy: _createdAt_ASC) {
      name
      description
      projectStatus
      link
      image {
        responsiveImage {
            srcSet
            webpSrcSet
            sizes
            src
            width
            height
            aspectRatio
            alt
            title
            base64
          }
      }
    }
  }`;

export default async function Projects() {
  const {
    data: { allPersonalProjects },
  } = await performRequest({ query: PAGE_CONTENT_QUERY });

  return (
    <section id="projects" className="w-full h-auto bg-white py-10">
      <Transition>
        <MainContainer>
          <div className="py-0 lg:py-10">
            <h2 className="w-full text-center text-secondary font-bold text-3xl mb-10">
              Personal Projects
            </h2>
            <div className="w-full flex flex-col gap-4 md:gap-8">
              <ProjectList projectList={allPersonalProjects} />
            </div>
          </div>
        </MainContainer>
      </Transition>
    </section>
  );
}

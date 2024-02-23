import React from "react";
import NewCard from "@/components/cards/newCard";

export default function ProjectList({ projectList }: any) {
  return (
    <div className="flex flex-wrap flex-row gap-8 w-full justify-center items-center px-0 sm:px-4 md:px-8">
      {projectList.map((project: any, index: any) => (
        <NewCard
          key={index}
          ProjectLink={project.link}
          ProjectImage={project.image.responsiveImage}
          ProjectName={project.name}
          ProjectDescription={project.description}
        />
      ))}
    </div>
  );
}

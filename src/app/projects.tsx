import React from "react";
import Image from "next/image";
import { MainContainer } from "@/components/containers";
import CardProject from "@/components/cardProject";

export default function Projects() {
  return (
    <section className="w-full h-auto bg-white py-10">
      <MainContainer>
        <div className="py-0 lg:py-10">
          <h2 className="w-full text-center text-secondary font-bold text-3xl mb-10">
            Projects
          </h2>
          <div className="w-full flex flex-col gap-4 md:gap-8">
            <div className="flex flex-wrap flex-row gap-8 w-full justify-center items-center">
              <CardProject
                ProjectLink="https://github.com/Nielleeeee/SimpleLibrarySystem"
                ProjectImage="library-sys.png"
                ProjectName="Simple Library System"
                ProjectDescription="Sample description of the project. Sample description of the project. Sample description of the project. Sample description of the project. Sample description of the project. Sample description of the project."
              />

              <CardProject
                ProjectLink="https://github.com/Nielleeeee/myPhotoGallery"
                ProjectImage="photo-gallery.jpg"
                ProjectName="Photo Gallery"
                ProjectDescription="Sample description of the project. Sample description of the project. Sample description of the project. Sample description of the project. Sample description of the project. Sample description of the project."
              />
              <CardProject
                ProjectLink="https://github.com/Nielleeeee/react-calculator"
                ProjectImage="calculator.jpg"
                ProjectName="Calculator"
                ProjectDescription="Sample description of the project. Sample description of the project. Sample description of the project. Sample description of the project. Sample description of the project. Sample description of the project."
              />
              <CardProject
                ProjectLink="https://gitlab.com/dict31/pup-iladderize"
                ProjectImage="pup-iladderize.png"
                ProjectName="PUP I-ladderize"
                ProjectDescription="Sample description of the project. Sample description of the project. Sample description of the project. Sample description of the project. Sample description of the project. Sample description of the project."
              />
            </div>
          </div>
        </div>
      </MainContainer>
    </section>
  );
}

import React from "react";
import { MainContainer } from "@/components/containers";
import CardProject from "@/components/cardProject";

export default function Projects() {
  return (
    <section id="projects" className="w-full h-auto bg-white py-10">
      <MainContainer>
        <div className="py-0 lg:py-10">
          <h2 className="w-full text-center text-secondary font-bold text-3xl mb-10">
            Projects
          </h2>
          <div className="w-full flex flex-col gap-4 md:gap-8">
            <div className="flex flex-wrap flex-row gap-8 w-full justify-center items-center px-4 md:px-8">
              <CardProject
                ProjectLink="https://github.com/Nielleeeee/SimpleLibrarySystem"
                ProjectImage="bg-library.jpg"
                ProjectName="Simple Library System"
                ProjectDescription="Developed an interactive library system allowing students, professors, instructors, and alumni to contribute and share instructional materials. Utilized VB.NET and MySQL for efficient data management."
              />

              <CardProject
                ProjectLink="https://github.com/Nielleeeee/myPhotoGallery"
                ProjectImage="bg-photo-gallery.jpg"
                ProjectName="Photo Gallery"
                ProjectDescription="Created a social photo gallery resembling Instagram, enabling users to upload, share, and engage with images. Implemented using PHP and MySQL."
              />
              <CardProject
                ProjectLink="https://github.com/Nielleeeee/react-calculator"
                ProjectImage="bg-calculator.jpg"
                ProjectName="Calculator"
                ProjectDescription="Crafted a mini calculator using Next.js, utilizing React and JavaScript for smooth interaction."
              />
              <CardProject
                ProjectLink="https://pup-iladderize-iladderize.vercel.app"
                ProjectImage="pup-iladderize-site.png"
                ProjectName="PUP I-ladderize"
                ProjectDescription="Engineered a comprehensive enrollment system, enabling applicants to verify eligibility and receive notifications. Developed with Next.js, TailwindCSS, React, and Node.js for optimal user experience."
              />
            </div>
          </div>
        </div>
      </MainContainer>
    </section>
  );
}

import React from "react";
import Link from "next/link";
import Image from "next/image";

interface CardProject {
  ProjectName?: string;
  ProjectDescription?: string;
  ProjectImage?: string;
  ProjectLink?: string;
}

export default function CardProject({
  ProjectName,
  ProjectDescription,
  ProjectImage,
  ProjectLink,
}: CardProject) {
  return (
    <Link
      href={ProjectLink ? ProjectLink : `#`}
      target="_blank"
      className="w-full basis-full lg:basis-[48%] h-[460px] relative text-[#252525] rounded-lg overflow-hidden shadow-[0px_10px_20px_rgba(80,80,80,0.2)] transition-shadow duration-[0.3s] ease-[ease-in-out] hover:shadow-[0px_15px_30px_rgba(80,80,80,0.3)];"
    >
      <div className="h-full w-full flex items-center justify-center absolute bg-contain bg-center transition-transform duration-[0.3s] ease-[ease-in-out] z-[2] hover:translate-y-[-160px] md:hover:translate-y-[-130px] bg-gradient-to-b from-mainbg to-tertiary">
        <Image
          src={ProjectImage ? `/${ProjectImage}` : "rainbow-vortex.png"}
          alt="Project's Background"
          width={100}
          height={100}
          className="w-[60%] rounded-xl"
        />
      </div>

      <div className="absolute flex flex-col gap-2 w-full max-h-[150px] px-8 pb-6 text-center bottom-0">
        <p className="text-xl text-black font-bold">
          {ProjectName ? ProjectName : "Project Name"}
        </p>
        <p className="text-sm text-black">
          {ProjectDescription
            ? ProjectDescription
            : "Project Description Project Description Project Description Project Description Project Description Project Description Project Description Project Description Project "}
        </p>
      </div>
    </Link>
  );
}

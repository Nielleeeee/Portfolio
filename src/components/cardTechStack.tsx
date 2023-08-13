import React from "react";
import Image from "next/image";

interface CardTechStackProps {
  frontTitle?: React.ReactNode;
  frontImage?: string;
  backContent?: React.ReactNode | React.ReactNode[];
}

export default function CardTechStack({
  frontTitle,
  frontImage,
  backContent,
}: CardTechStackProps) {
  return (
    <>
      <div className="flip-card max-w-full w-[260px] h-[280px] mx-auto cursor-pointer">
        <div className="flip-card-inner relative w-full h-full text-center transition-transform duration-[0.8s]">
          <div className="flip-card-front bg-gradient-to-br from-primary to-secondary shadow-[0_8px_14px_0_rgba(0,0,0,0.2)] absolute flex flex-col justify-center items-center px-10 py-[30px] gap-4 w-full h-full rounded-2xl text-white">
            <p className="text-[1.5em] font-black text-center m-0;">{frontTitle ? frontTitle : "Front Title"}</p>
            {frontImage && <Image src={frontImage} alt={frontImage} width={100} height={100} className="rounded-lg max-w-full w-[180px] h-auto" />}
          </div>

          <div className="flip-card-back bg-[#ffead9] absolute shadow-[0_8px_14px_0_rgba(0,0,0,0.2)] flex flex-col justify-center p-10 w-full h-full border-2 rounded-2xl border-solid border-secondary text-secondary">
            <ul className="py-[10px] flex flex-col gap-4">
            {Array.isArray(backContent) ? (
              backContent.map((content, index) => (
                <li key={index} className="font-semibold text-xl">{content}</li>
              ))
            ) : (
              <li>{backContent || "No Content"}</li>
            )}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

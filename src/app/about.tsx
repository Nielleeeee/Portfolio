import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MainContainer } from "@/components/containers";

export default function About() {
  return (
    <section className="w-full h-auto bg-white py-10">
      <MainContainer>
        <div
          id="row-wrapper"
          className="flex flex-col md:flex-row justify-evenly items-center gap-4 lg:gap-8"
        >
          <Image
            src="/computer-seat.gif"
            width={100}
            height={100}
            alt="About Gif"
            className="w-full sm:w-[75%] md:w-1/2 lg:w-1/3 rounded-[30px]"
          />

          <div className="w-full md:w-1/2 flex flex-col gap-4">
            <p className="font-medium text-justify">
              Greetings! I&apos;m Jan Danielle A. Plaza, a dynamic Full Stack
              Developer and Software Engineer, proficient in a wide array of
              front-end and back-end technologies, including HTML, CSS
              (Bootstrap, Tailwind, SCSS), JavaScript (jQuery), PHP, Node.js,
              and frameworks like NextJS and Laravel. Guided by a solid grasp of
              software engineering principles, I specialize in crafting
              innovative web solutions that elevate user experiences. My
              hands-on experience encompasses versatile technology stacks,
              empowering me to tackle UI enhancements and bug fixes with
              resourcefulness and adaptability. Through my portfolio, I invite you
              to explore my passion for creating impactful web projects.
            </p>

            <Link
              href={"https://github.com/Nielleeeee?tab=repositories"}
              target="_blank"
              className="w-max"
            >
              <button className="learn-more">
                <span className="circle" aria-hidden="true">
                  <span className="icon arrow"></span>
                </span>
                <span className="button-text">Learn More</span>
              </button>
            </Link>
          </div>
        </div>
      </MainContainer>
    </section>
  );
}

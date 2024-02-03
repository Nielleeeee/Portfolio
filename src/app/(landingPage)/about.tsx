import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MainContainer } from "@/components/containers";
import Transition from "@/components/transition/transition";

export default function About() {
  return (
    <section id="about" className="w-full h-auto bg-white py-10">
      <Transition>
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

            <div className="w-full md:w-1/2 flex flex-col gap-4 px-4">
              <p className="font-medium text-justify">
                Hello! I&apos;m Jan Danielle A. Plaza, a versatile Full Stack
                Developer and Software Engineer adept in front-end (HTML, CSS -
                Bootstrap, Tailwind, SCSS) and back-end (JavaScript - jQuery,
                PHP, Node.js) technologies. I&apos;m skilled in frameworks like
                NextJS and Laravel. With a strong foundation in software
                engineering, I excel in crafting creative web solutions for
                enhanced user experiences. My hands-on experience spans diverse
                tech stacks, enabling me to efficiently handle UI enhancements
                and bug fixes. Explore my portfolio to witness my passion for
                impactful web projects!
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
      </Transition>
    </section>
  );
}

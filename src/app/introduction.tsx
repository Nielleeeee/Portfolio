import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MainContainer } from "@/components/containers";
import Header from "./header";
import Socials from "@/components/socials";

export default function introduction() {
  return (
    <section id="introduction" className="w-full h-auto bg-[url('/sun-tornado.png')] bg-no-repeat bg-center bg-fixed bg-cover">
      <MainContainer>
        <Header />
        <div className="flex flex-col-reverse lg:flex-row gap-4 md:gap-8 py-[60px] justify-evenly items-center">
          <div className="flex flex-col gap-2 lg:gap-4 ">
            <h1 className="text-4xl font-bold text-white">
              Hi, I&apos;m Jan Danielle Plaza
            </h1>
            <h2 className="text-2xl font-semibold text-white">
              A Web Developer
            </h2>

            <Link
              href={"https://github.com/Nielleeeee?tab=repositories"}
              target="_blank"
            >
              <button className="learn-more">
                <span className="circle" aria-hidden="true">
                  <span className="icon arrow"></span>
                </span>
                <span className="button-text">Learn More</span>
              </button>
            </Link>

            <div className="w-full flex items-center justify-center mt-10">
              <Socials />
            </div>
          </div>

          <Image
            src={"/laptop-sitting.gif"}
            alt="balancing"
            width={100}
            height={100}
            className="w-full sm:w-[75%] md:w-1/2 lg:w-1/3 rounded-[30px]"
          />
        </div>
      </MainContainer>
    </section>
  );
}

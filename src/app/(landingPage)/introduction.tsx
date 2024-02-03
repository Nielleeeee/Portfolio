import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MainContainer } from "@/components/containers";
import Header from "../../components/header";
import Socials from "@/components/socials";
import Transition from "@/components/transition/transition";

export default function introduction() {
  return (
    <section
      id="introduction"
      className="w-full h-auto bg-[url('/sun-tornado.png')] bg-no-repeat bg-center bg-fixed bg-cover"
    >
      <Transition>
        <MainContainer>
          <Header />
          <div className="flex flex-col-reverse lg:flex-row gap-4 md:gap-8 py-[60px] justify-evenly items-center">
            <div className="flex flex-col gap-4">
              <h1 className="text-4xl font-bold text-white text-center">
                Hi, I&apos;m Jan Danielle Plaza
              </h1>
              <h2 className="text-xl font-medium text-white max-w-lg text-center">
                A Full Stack Developer, It&apos;s a pleasure to have you here as
                we delve into my web development ventures.
              </h2>

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
      </Transition>
    </section>
  );
}

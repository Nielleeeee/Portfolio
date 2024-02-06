"use client";

import React from "react";
import Transition from "@/components/transition/transition";
import { MainContainer } from "@/components/containers";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Certificate() {
  const certificateSources = ["tesda-nc3-webdev", "fcc-javascript", "fcc-frontend-library",];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 8000,
  };

  return (
    <section id="certificate" className="w-full bg-white py-10">
      <Transition>
        <MainContainer>
          <div className="flex flex-col justify-center gap-4 lg:gap-8">
            <h3 className="font-bold text-3xl text-secondary text-center">
              Certificates
            </h3>
            <Slider {...settings}>
              {certificateSources.map((source, index) => (
                <div key={index} className="w-full px-5 mx-auto flex justify-center items-center aspect-video overflow-hidden">
                  <Image
                    src={`/certificates/${source}.png`}
                    alt={`Certificate - ${source}`}
                    width={500}
                    height={500}
                    className="w-full max-w-4xl mx-auto"
                  />
                </div>
              ))}
            </Slider>
          </div>
        </MainContainer>
      </Transition>
    </section>
  );
}

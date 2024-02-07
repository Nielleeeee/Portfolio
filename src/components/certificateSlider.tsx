"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Image as DatoImage } from "react-datocms";

export default function CertificateSlider({ certificateSources }: any) {
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
    <Slider {...settings}>
      {certificateSources.map((certificate: any, index: any) => (
        <div
          key={index}
          className="w-full px-5 mx-auto flex justify-center items-center overflow-hidden"
        >
          <DatoImage
            data={certificate.image.responsiveImage}
            pictureClassName={
              "object-contain w-full max-w-4xl mx-auto aspect-[4/3] text-center rounded-xl"
            }
            className="!max-w-none"
          />
        </div>
      ))}
    </Slider>
  );
}

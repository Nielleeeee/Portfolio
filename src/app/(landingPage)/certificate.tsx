import React from "react";
import Transition from "@/components/transition/transition";
import { MainContainer } from "@/components/containers";
import CertificateSlider from "@/components/certificateSlider";
import { performRequest } from "@/lib/datocms";

const PAGE_CONTENT_QUERY = `
  query Certificate {
    allCertificates {
      name
      image {
        url
        responsiveImage {
          srcSet
          webpSrcSet
          sizes
          src
          width
          height
          aspectRatio
          alt
          title
          base64
        }
      }
    }
  }`;

export default async function Certificate() {
  const {
    data: { allCertificates },
  } = await performRequest({ query: PAGE_CONTENT_QUERY });

  return (
    <section id="certificate" className="w-full py-10 bg-[url('/bg-wave.png')] bg-no-repeat bg-bottom bg-cover">
      <Transition>
        <MainContainer>
          <div className="flex flex-col justify-center gap-4 lg:gap-8 z-10">
            <h3 className="font-bold text-3xl text-secondary text-center">
              Certificates
            </h3>

            <CertificateSlider certificateSources={allCertificates} />
          </div>
        </MainContainer>
      </Transition>
    </section>
  );
}

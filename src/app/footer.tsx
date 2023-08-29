import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const currYear = new Date().getFullYear();

  return (
    <footer className="bg-primary shadow-[0px_2px_4px_rgba(0,0,0,0.2),0px_-2px_4px_rgba(0,0,0,0.2)]">
      <div className="relative mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="lg:flex lg:items-end lg:justify-between">
          <div>
            <div className="flex justify-center text-teal-600 lg:justify-start">
              <Link href={"/"}>
                <Image
                  src={"/logo-footer.png"}
                  width={1000}
                  height={1000}
                  alt="logo"
                  className="max-w-full w-[200px] h-auto"
                />
              </Link>
            </div>

            <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500 lg:text-left">
              Crafting Sleek Digital Experiences with a Dash of Simplicity and
              Code Magic.
            </p>
          </div>

          <div className="flex flex-col">
            <ul className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:mt-0 lg:justify-end lg:gap-12">
              <li>
                <Link
                  className="text-black transition hover:text-white"
                  href="/"
                >
                  About
                </Link>
              </li>

              <li>
                <Link
                  className="text-black transition hover:text-white"
                  href="/"
                >
                  Services
                </Link>
              </li>

              <li>
                <Link
                  className="text-black transition hover:text-white"
                  href="/"
                >
                  Projects
                </Link>
              </li>

              <li>
                <Link
                  className="text-black transition hover:text-white"
                  href="/"
                >
                  Blog
                </Link>
              </li>
            </ul>

            <p className="mt-8 text-center text-sm text-gray-500 lg:text-right">
              &copy; Jan Danielle Plaza {currYear}. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

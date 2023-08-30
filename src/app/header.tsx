import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex flex-row justify-between pt-5 gap-20">
      <div id="logo">
        <Link href={"/"}>
          <Image
            src={"/logo-header.png"}
            width={1000}
            height={1000}
            alt="logo"
            className="max-w-full w-[200px] h-auto"
          />
        </Link>
      </div>

      <nav className="flex w-auto">
        <ul className="flex-row gap-10 w-full items-center justify-end text-white text-lg font-medium lg:flex hidden">
          <li>
            <Link
              className="text-white transition group"
              href="#about"
            >
              About
              <div className="w-auto h-[2px] mt-[2px] bg-white transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
            </Link>
          </li>

          <li>
            <Link
              className="text-white transition group"
              href="#tech-stack"
            >
              Tech Stack
              <div className="w-auto h-[2px] mt-[2px] bg-white transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
            </Link>
          </li>

          <li>
            <Link
              className="text-white transition group"
              href="#projects"
            >
              Projects
              <div className="w-auto h-[2px] mt-[2px] bg-white transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
            </Link>
          </li>

          <li>
            <Link
              className="text-white transition group"
              href="#experience"
            >
              Experience
              <div className="w-auto h-[2px] mt-[2px] bg-white transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
            </Link>
          </li>

          <li>
            <Link
              className="text-white transition group"
              href="#contact"
            >
              Contact
              <div className="w-auto h-[2px] mt-[2px] bg-white transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
            </Link>
          </li>
        </ul>

        <label className="burger lg:hidden block" htmlFor="burger">
          <input type="checkbox" id="burger" />
          <span></span>
          <span></span>
          <span></span>
        </label>
      </nav>
    </header>
  );
}

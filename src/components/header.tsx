"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [isActive, setIsActive] = useState(false);

  const handleActive = () => {
    if (isActive) {
      setIsActive(false);
    } else {
      setIsActive(true);
    }
  };

  useEffect(() => {
    if (isActive) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }

    return () => {
      document.body.style.overflow = "visible";
    };
  }, [isActive]);

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
        {/* Desktop */}
        <ul className="flex-row gap-6 w-full items-center justify-end text-white text-lg font-medium lg:flex hidden">
          <li>
            <Link className="text-white transition group" href="#about">
              About
              <div className="w-auto h-[2px] mt-[2px] bg-white transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
            </Link>
          </li>

          <li>
            <Link className="text-white transition group" href="#tech-stack">
              Tech Stack
              <div className="w-auto h-[2px] mt-[2px] bg-white transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
            </Link>
          </li>

          <li>
            <Link className="text-white transition group" href="#projects">
              Projects
              <div className="w-auto h-[2px] mt-[2px] bg-white transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
            </Link>
          </li>

          <li>
            <Link className="text-white transition group" href="#experience">
              Experience
              <div className="w-auto h-[2px] mt-[2px] bg-white transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
            </Link>
          </li>

          <li>
            <Link className="text-white transition group" href="#certificate">
              Certificates
              <div className="w-auto h-[2px] mt-[2px] bg-white transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
            </Link>
          </li>

          <li>
            <Link className="text-white transition group" href="#contact">
              Contact
              <div className="w-auto h-[2px] mt-[2px] bg-white transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
            </Link>
          </li>
        </ul>

        <label className="burger lg:hidden block z-30" htmlFor="burger">
          <input
            type="checkbox"
            id="burger"
            onChange={handleActive}
            checked={isActive}
          />
          <span></span>
          <span></span>
          <span></span>
        </label>

        {/* Sidebar */}
        {isActive && (
          <div className="fixed inset-0 bg-primary z-20 flex justify-center items-center p-8 transform translate-x-0 transition-transform duration-300 ease-in-out">
            <ul className="text-2xl text-center flex flex-col gap-6">
              <li>
                <Link
                  className="text-white transition group"
                  href="#about"
                  onClick={() => setIsActive(false)}
                >
                  About
                  <div className="w-auto h-[2px] mt-[2px] bg-white transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
                </Link>
              </li>

              <li>
                <Link
                  className="text-white transition group"
                  href="#tech-stack"
                  onClick={() => setIsActive(false)}
                >
                  Tech Stack
                  <div className="w-auto h-[2px] mt-[2px] bg-white transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
                </Link>
              </li>

              <li>
                <Link
                  className="text-white transition group"
                  href="#projects"
                  onClick={() => setIsActive(false)}
                >
                  Projects
                  <div className="w-auto h-[2px] mt-[2px] bg-white transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
                </Link>
              </li>

              <li>
                <Link
                  className="text-white transition group"
                  href="#experience"
                  onClick={() => setIsActive(false)}
                >
                  Experience
                  <div className="w-auto h-[2px] mt-[2px] bg-white transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
                </Link>
              </li>

              <li>
                <Link
                  className="text-white transition group"
                  href="#certificate"
                  onClick={() => setIsActive(false)}
                >
                  Certificates
                  <div className="w-auto h-[2px] mt-[2px] bg-white transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
                </Link>
              </li>

              <li>
                <Link
                  className="text-white transition group"
                  href="#contact"
                  onClick={() => setIsActive(false)}
                >
                  Contact
                  <div className="w-auto h-[2px] mt-[2px] bg-white transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}

"use client";

import React, { useState, useEffect } from "react";

export default function ScrollTop() {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    if (window.scrollY > 500) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);
    return () => {
      window.removeEventListener("scroll", toggleVisible);
    };
  }, []);

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 w-[45px] h-[45px] flex items-center justify-center cursor-pointer rounded-[50%] border-[none] bg-tertiary shadow-lg z-10 group transition-opacity duration-300
      ${visible ? "opcity-100" : "opacity-0 pointer-events-none"}
      `}
    >
      <svg height="1.2em" className="fill-white" viewBox="0 0 512 512">
        <path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"></path>
      </svg>
      <p className="text-[0.8em] w-[100px] absolute text-black flex items-center justify-center bottom-[-24px] opacity-0 duration-[0.7s] group-hover:opacity-100 group-hover:duration-[0.7s]">
        Back to Top
      </p>
    </button>
  );
}

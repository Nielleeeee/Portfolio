import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex flex-row justify-between pt-5">
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

      <nav className="flex w-1/2">
        <ul className="flex flex-row gap-20 px-4 w-full items-center justify-end text-white text-lg font-medium">
          <Link href={""}>
            <li className="hover:border-b-2 hover:border-white">Projects</li>
          </Link>
          <Link href={""}>
            <li className="hover:border-b-2 hover:border-white">About</li>
          </Link>
          <Link href={""}>
            <li className="hover:border-b-2 hover:border-white">Contact</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
}

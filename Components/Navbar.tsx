"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { NAV_LINKS } from "@/constants";
import Sidebar from "./Sidebar";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center max-container padding-container px-4 py-2 relative z-30 bg-white">
      <Link href="/">
        <Image src="/logo-olim-km.ico" alt="logo" width={74} height={29} />
      </Link>

      <ul className="hidden lg:flex h-full gap-12 mx-3">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="text-base font-bonjour text-gray-50 cursor-pointer pb-1.5 transition-all hover:font-bold"
          >
            {link.label}
          </Link>
        ))}
      </ul>
      <Sidebar />
    </nav>
  );
};

export default Navbar;

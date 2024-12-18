"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "@/public/company_logo.svg";
import { usePathname } from "next/navigation";

const Header: React.FC = () => {
  const pathname = usePathname(); // Get the current path

  // Define the navigation menu
  const navMenu = [
    { name: "Home", navURL: "/" },
    { name: "About Us", navURL: "/about_us" },
    { name: "Our Mission", navURL: "#" },
    { name: "Contact Us", navURL: "#" },
  ];

  return (
    <header className="w-full bg-white drop-shadow flex justify-center items-center">
      <main className="max-w-[1440px] w-full margin-auto pt-2 flex justify-between items-center px-10">
        {/* Company Logo */}
        <Image src={logo} alt="Company Logo" width={100} height={50} />

        {/* Navigation Menu */}
        <nav className="flex w-[36%] justify-between items-center">
          {navMenu.map((menu, index) => (
            <Link
              key={index}
              href={menu.navURL}
              className={`text-xl py-5 px-2 border-b-4 ${
                pathname === menu.navURL
                  ? "border-[#FFB100] text-[#FFB100]" // Active link styles
                  : "border-transparent text-black hover:border-[#FFB100] hover:text-[#FFB100] cursor-pointer" // Non-active hover styles
              }`}
            >
              {menu.name}
            </Link>
          ))}
        </nav>

        {/* Join Us Button */}
        <Link
          href="/join_us" // Redirect to the relevant page
          className="px-8 py-2 bg-[#FFB100] text-black text-lg font-semibold rounded-lg hover:bg-[#e69c00]"
        >
          Join Us
        </Link>
      </main>
    </header>
  );
};

export default Header;
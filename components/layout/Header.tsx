"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import logo from "@/public/kbm_cutted_logo.svg";
import { usePathname } from "next/navigation";
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from "react-icons/ai";

const Header: React.FC = () => {

  const [opened, setOpened] = useState(false);

  const pathname = usePathname(); // Get the current path

  // Define the navigation menu
  const navMenu = [
    { name: "About Us", navURL: "/about_us" },
    { name: "Our Team", navURL: "/our-team" },
    { name: "Contact Us", navURL: "/contact_us" },
  ];

  return (
    <header className="w-full flex justify-center items-center z-50 sticky top-0 p-5 md:p-10">
      <main className="max-w-[1440px] w-full margin-auto relative overflow-hidden">
        <div className="w-full flex justify-between bg-[#f0e2b34a] top-0 right-0 sticky rounded-full items-center px-5 md:px-7 py-2 md:py-0 backdrop-blur-sm">
          {/* Company Logo */}
          <Link href="/" >
            <Image src={logo} alt="Company Logo" width={0} height={0} />
          </Link>

          {/* Navigation Menu */}
          <nav className="hidden md:flex justify-center gap-x-5 items-center">
            {navMenu.map((menu, index) => (
              <Link
                key={index}
                href={menu.navURL}
                className={`text-[18px] px-2 py-5 ${
                  pathname === menu.navURL
                    ? "border-[#FFB100] text-[#FFB100] border-b-[4px]" // Active link styles
                    : "border-transparent text-black hover:border-[#FFB100] hover:text-[#FFB100] cursor-pointer" // Non-active hover styles
                }`}
              >
                {menu.name}
              </Link>
            ))}
          </nav>

          {/* Join Us Button */}
          <div className="flex items-center gap-x-5">
            <Link
              href="/" // Redirect to the relevant page
              className="px-4 md:px-8 py-2 bg-gradient-to-r from-[#F8B51C] to-[#FEE539] text-black text-md md:text-lg font-semibold rounded-full hover:bg-[#e69c00]"
            >
              Join Us
            </Link>

            <AiOutlineMenuFold className={`text-4xl md:hidden ${opened && "rotate-180"} duration-300`} onClick={() => setOpened(true)} />
          </div>
        </div>

        <div className={`flex md:hidden h-fit fixed rounded-2xl w-[65%] shadow-xl shadow-[#1f1f1f6d] bg-[#ffe77d17]  z-50 right-0 top-5 ${opened ? "translate-x-[-10%]" : "translate-x-[110%]"} ease-in-out backdrop-blur-sm duration-500`}>
          <nav className="flex flex-col justify-between gap-y-5 px-6 py-4 text-right pb-20 w-full overflow-hidden">
            <span className="flex w-full justify-between">
              <AiOutlineMenuUnfold className={`text-4xl md:hidden mb-5 ${!opened && "rotate-180"} duration-200`} onClick={() => setOpened(false)} />
              <h4 className="font-semibold text-xl">Menu</h4>
            </span>

            {navMenu.map((menu, index) => {

              const delayValue = (index + 1) * 200; 

              return (
                <Link
                  key={index}
                  href={menu.navURL}
                  className={`text-[18px] px-2 ${
                    opened
                      ? "translate-y-0 opacity-100"
                      : "opacity-0 translate-y-28"
                  } ease-in-out duration-500`}
                  style={{ transitionDelay: `${delayValue}ms` }} // Inline style for dynamic delay
                  onClick={() => setOpened(false)}
                >
                  <span
                    className={`${
                      pathname === menu.navURL
                        ? "border-[#FFB100] text-[#FFB100]" // Active link styles
                        : "border-transparent text-black hover:border-[#FFB100] hover:text-[#FFB100] cursor-pointer" // Non-active hover styles
                    }`}
                  >
                    {menu.name}
                  </span>
                </Link>
              );
            })}

          </nav>
        </div>
      </main>
    </header>
  );
};

export default Header;

"use client";
import Link from "next/link";
import { useState } from "react";
import { BiChevronDown } from "react-icons/bi";

const CommunityDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const options = [
    "Dev Community",
    "Non-Dev Community",
    "KBM STEM Circuit Newsletter",
  ];

  return (
    <div className=" inline-block text-left">
      <button
        onClick={toggleDropdown}
        className="inline-flex items-center px-4 py-2 text-lg font-semibold text-yellow-600 hover:text-yellow-700"
      >
        Join our <span className="ml-1 text-yellow-500">Community</span>
        <BiChevronDown className="ml-2 h-4 w-4" />
      </button>

      {isOpen && (
        <div className=" mt-2 w-64 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
          <div className="py-1 border-b">
            {options.map((option, index) => (
              <Link
                key={index}
                href="#"
                className={`block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 ${
                  index !== options.length - 1 ? "border-b" : ""
                }`}
              >
                {option}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CommunityDropdown;

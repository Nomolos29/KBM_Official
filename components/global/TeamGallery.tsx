"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import { team } from "../utils/team";
import Link from "next/link";

const TeamGallery = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const visibleCards = 3;

  const nextCard = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % team.length);
  };

  const prevCard = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? team.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        nextCard();
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isPaused, activeIndex]);

  useEffect(() => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.offsetWidth / visibleCards;
      scrollRef.current.scrollTo({
        left: cardWidth * activeIndex,
        behavior: "smooth",
      });
    }
  }, [activeIndex]);

  return (
    <section className="flex justify-center items-center flex-col px-4 sm:px-8 md:px-14 pt-28 sm:pt-36 md:pt-44 lg:pt-60 pb-8 sm:pb-10 md:pb-20 gap-y-3 sm:gap-y-5 w-full bg-[#FEF8F0]">
      <div className='max-w-[1440px] w-full flex items-center text-[#F8B51C] px-4 sm:px-5 md:px-10 gap-x-1'>
        <HiOutlineArrowLongRight className='text-2xl sm:text-3xl md:text-4xl' />
        <p className='text-base sm:text-lg md:text-xl'>Team Members</p>
      </div>

      <div className="relative max-w-[1440px] w-full px-4 sm:px-5 md:px-10 pb-8 sm:pb-10 pt-12 sm:pt-16 md:pt-6">
        {/* Navigation Arrows */}
        <button
          type="button"
          className="absolute left-0 top-[40%] transform -translate-y-1/2 z-20 bg-black/20 mx-1 sm:mx-2 md:mx-4 text-white rounded-full p-2 sm:p-3 cursor-pointer"
          onClick={prevCard}
          aria-label="Previous team member"
        >
          <FaChevronLeft className="text-xs sm:text-sm md:text-base" />
        </button>
        <button
          type="button"
          className="absolute right-0 top-[40%] transform -translate-y-1/2 z-20 bg-black/20 mx-1 sm:mx-2 md:mx-4 text-white rounded-full p-2 sm:p-3 cursor-pointer"
          onClick={nextCard}
          aria-label="Next team member"
        >
          <FaChevronRight className="text-xs sm:text-sm md:text-base" />
        </button>

        <div
          ref={scrollRef}
          className="flex overflow-hidden gap-x-3 sm:gap-x-5 w-full transition-all"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {team.map((person, index) => (
            <div
              key={index}
              className={`flex flex-col gap-y-4 sm:gap-y-6 md:gap-y-10 justify-evenly transition-transform duration-300 ${
                activeIndex === index
                  ? "bg-gradient-to-r w-[220px] sm:w-[250px] md:w-[280px] lg:w-[301px] h-[280px] sm:h-[300px] md:h-[320px] lg:h-[350px] p-2 sm:p-3 md:p-5 items-center text-center from-[#eedca1] to-[#9e9e9e] absolute -top-2 right-[calc(50%-110px)] sm:right-[calc(50%-125px)] md:right-[calc(50%-140px)] lg:right-[34%] xl:right-[calc(40%)] z-10 shadow-md rounded-lg backdrop-blur-sm scale-[1.05] sm:scale-[1.1] md:scale-[1.2]"
                  : "items-left rounded-lg h-[220px] sm:h-[250px] md:h-[280px] lg:h-[300px] bg-white"
              }`}
              onClick={() => setActiveIndex(index)}
            >
              <Image
                src={person.image}
                width={100}
                height={50}
                alt={`${person.name}'s profile`}
                className={`bg-white w-[180px] sm:w-[200px] md:w-[220px] text-black/60 ${
                  activeIndex === index
                    ? "py-3 sm:py-5 text-[180px] sm:text-[220px] md:text-[240px]"
                    : "pt-3 sm:pt-5 text-[160px] sm:text-[180px] md:text-[200px]"
                }`}
              />
              <div
                className={`flex flex-col text-center justify-center ${
                  activeIndex === index ? "-mt-3 sm:-mt-4 md:-mt-5" : "pt-3 sm:pt-4 md:pt-5 pb-2"
                }`}
              >
                <h1
                  className={`text-base sm:text-lg text-black font-semibold leading-tight ${
                    activeIndex === index ? "line-clamp-2" : ""
                  }`}
                >
                  {person.name}
                </h1>
                <p className="text-[#000000] text-xs sm:text-sm md:text-md">{person.role}</p>

                {activeIndex === index && <div className="flex gap-2 sm:gap-3 justify-center mt-1 sm:mt-2">
                  {person.socials.map(({ id, icon: Icon, link }) => (
                    <Link
                      key={id}
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-6 h-6 sm:w-7 sm:h-7 flex items-center justify-center bg-orange-200 rounded-full hover:bg-orange-300 transition-all"
                      aria-label={`${person.name}'s social media`}
                    >
                      <Icon className="text-black w-2.5 h-2.5 sm:w-3 sm:h-3" />
                    </Link>
                  ))}
                </div>}
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center items-center mt-[100px] sm:mt-[110px] md:mt-[120px] gap-x-1.5 sm:gap-x-2">
          {team.map((_, index) => (
            <button
              type="button"
              key={index}
              className={`rounded-full ${
                activeIndex === index
                  ? "bg-[#F8B51C] w-2 sm:w-2.5 h-2 sm:h-2.5"
                  : "bg-gray-400 w-1 sm:w-1.5 h-1 sm:h-1.5"
              }`}
              onClick={() => setActiveIndex(index)}
              aria-label={`Go to team member ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamGallery;

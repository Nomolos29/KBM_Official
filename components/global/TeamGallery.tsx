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
    <section className="flex justify-center items-center flex-col md:px-14 pt-44 pb-10 md:pt-60 md:pb-20 gap-y-5 w-full bg-[#FEF8F0]">
      <div className='max-w-[1440px] w-full flex items-center text-[#F8B51C] px-5 md:px-10 gap-x-1'>
        <HiOutlineArrowLongRight className='text-4xl' />
        <p className='text-xl'>Team Members</p>
      </div>

      <div className="relative max-w-[1440px] w-full px-5 md:px-10 pb-10 pt-20 md:pt-6">
        {/* Navigation Arrows */}
        <button
          type="button"
          className="absolute left-0 top-[40%] transform -translate-y-1/2 z-20 bg-black/20 mx-1 md:mx-4 text-white rounded-full p-3 cursor-pointer"
          onClick={prevCard}
          aria-label="Previous team member"
        >
          <FaChevronLeft />
        </button>
        <button
          type="button"
          className="absolute right-0 top-[40%] transform -translate-y-1/2 z-20 bg-black/20 mx-1 md:mx-4 text-white rounded-full p-3 cursor-pointer"
          onClick={nextCard}
          aria-label="Next team member"
        >
          <FaChevronRight />
        </button>

        <div
          ref={scrollRef}
          className="flex overflow-hidden gap-x-5 w-full transition-all"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {team.map((person, index) => (
            <div
              key={index}
              className={`flex flex-col gap-y-10 justify-evenly transition-transform duration-300 ${
                activeIndex === index
                  ? "bg-gradient-to-r lg:w-[301px] h-[350px] p-5 items-center text-center from-[#eedca1] to-[#9e9e9e] absolute md:-top-2 right-[calc(100%/5-12px)] md:right-[34%] xl:right-[calc(40%)] z-10 shadow-md rounded-lg backdrop-blur-sm scale-[1.2]"
                  : "items-left rounded-lg h-[300px] bg-white"
              }`}
              onClick={() => setActiveIndex(index)}
            >
              <Image
                src={person.image}
                width={100}
                height={50}
                alt={`${person.name}'s profile`}
                className={`bg-white w-[220px] text-black/60 ${
                  activeIndex === index
                    ? "py-5 text-[240px]"
                    : "pt-5 text-[200px]"
                }`}
              />
              <div
                className={`flex flex-col text-center justify-center ${
                  activeIndex === index ? "-mt-5 " : "pt-5 pb-2"
                }`}
              >
                <h1
                  className={`text-lg text-black font-semibold leading-tight ${
                    activeIndex === index ? "line-clamp-2" : ""
                  }`}
                >
                  {person.name}
                </h1>
                <p className="text-[#000000] text-md">{person.role}</p>

                {activeIndex === index && <div className="flex gap-3 justify-center mt-2">
                  {person.socials.map(({ id, icon: Icon, link }) => (
                    <Link
                      key={id}
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-7 h-7 flex items-center justify-center bg-orange-200 rounded-full hover:bg-orange-300 transition-all"
                      aria-label={`${person.name}'s social media`}
                    >
                      <Icon className="text-black w-3 h-3" />
                    </Link>
                  ))}
                </div>}
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center items-center mt-[120px] gap-x-2">
          {team.map((_, index) => (
            <button
              type="button"
              key={index}
              className={`rounded-full ${
                activeIndex === index
                  ? "bg-[#F8B51C] w-2.5 h-2.5"
                  : "bg-gray-400 w-1.5 h-1.5"
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

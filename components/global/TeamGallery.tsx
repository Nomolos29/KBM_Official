"use client"


import React, { useEffect, useRef, useState } from 'react'
import { FaChevronLeft, FaChevronRight, FaUserSecret } from 'react-icons/fa'
import { HiOutlineArrowLongRight } from "react-icons/hi2";


const TeamGallery = () => {

    const [activeIndex, setActiveIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const scrollRef = useRef<HTMLDivElement | null>(null);

    const visibleCards = 5;

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
        }, 3000); // Adjust scroll interval (in milliseconds)
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


    const team = [
        {
          image: "",
          name: "Ayomide Arowolo-Ayodeji",
          role: "Project Manager"
        },
        {
          image: "",
          name: "Osazee Oghagbon",
          role: "Project Manager"
        },
        {
          image: "",
          name: "Ernest Efe Osazuwa",
          role: "Project Manager"
        },
        {
          image: "",
          name: "Oshioriamen G. Agbomekhe",
          role: "Project Manager"
        },
        {
          image: "",
          name: "Amarachi Ogbu",
          role: "Project Manager"
        },
        {
          image: "",
          name: "Mariam Salami",
          role: "Project Manager"
        },
        {
          image: "",
          name: "Precious Adegbite",
          role: "Project Manager"
        },
        {
          image: "",
          name: "Carl Aaron Lewis",
          role: "Project Manager"
        },
        {
          image: "",
          name: "Solomon Sunday",
          role: "Project Manager"
        },
        {
          image: "",
          name: "Bello Iteoluwakisi",
          role: "Project Manager"
        },
        {
          image: "",
          name: "Happiness Idowu",
          role: "Project Manager"
        }
    ]

  return (
    <section className="flex justify-center items-center flex-col pt-10 pb-10 md:pt-60 md:pb-20 gap-y-5 w-full bg-[#FAFAFA]">
      <div className='max-w-[1440px] w-full flex items-center text-[#F8B51C] px-5 md:px-10 gap-x-1'>
        <HiOutlineArrowLongRight className='text-4xl' />
        <p className='text-xl'>Team Members</p>
      </div>

      <div className="relative max-w-[1440px] w-full px-5 md:px-10 pb-10 pt-6">
        {/* Navigation Arrows */}
        <span
          className="absolute left-0 top-[40%] transform -translate-y-1/2 z-20 bg-black/20 mx-1 md:mx-4 text-white rounded-full p-3 cursor-pointer"
          onClick={prevCard}
        >
          <FaChevronLeft />
        </span>
        <span
          className="absolute right-0 top-[40%] transform -translate-y-1/2 z-20 bg-black/20 mx-1 md:mx-4 text-white rounded-full p-3 cursor-pointer"
          onClick={nextCard}
        >
          <FaChevronRight />
        </span>

        <div
          ref={scrollRef}
          className="flex overflow-hidden gap-x-5 bg-gradient-to-b from-[#ffffff] from-[75%] to-[#fff0] to-[25%]"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {team.map((person, index) => (
            <div
              key={index}
              className={`flex flex-col w-1/2 md:w-1/3 xl:w-1/5 gap-y-10 p-5 transition-transform duration-300 ${
                activeIndex === index
                  ? "bg-gradient-to-r w-auto items-center text-center from-[#F8B51C33] to-[#47474733] absolute -top-2 right-[calc(100%/5-12px)] md:right-[34%] xl:right-[calc(40%)] z-10 border-white border shadow-md rounded-lg backdrop-blur-sm scale-[1.2]"
                  : "opacity-50 items-left"
              }`}
              onClick={() => setActiveIndex(index)}
            >
              <FaUserSecret className={`bg-white text-black/60 ${
                activeIndex === index ? "py-5 text-[240px]" : "pt-5 text-[200px]"}`} />
              <div className={`flex flex-col text-center justify-center ${activeIndex === index ? "-mt-5 h-[70px]" : "pt-5"}`}>
                <h1 className={`text-lg text-black font-semibold leading-tight ${activeIndex === index ? "line-clamp-2" : "line-clamp-1"}`}>
                  {person.name}
                </h1>
                <p className="text-[#000000] text-md">{person.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center items-center mt-10 gap-x-2">
          {team.map((_, index) => (
            <span
              key={index}
              className={`rounded-full ${
                activeIndex === index ? "bg-[#F8B51C] w-2.5 h-2.5" : "bg-gray-400 w-1.5 h-1.5"
              }`}
            ></span>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TeamGallery
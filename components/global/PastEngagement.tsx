"use client"

import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import teamImage from "@/public/team-gallery/teamPhoto1.png"
import teamImage1 from "@/public/team-gallery/image1.png"
import teamImage2 from "@/public/team-gallery/image.png"
const PastEngagement = () => {

    const [activeIndex, setActiveIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const scrollRef = useRef<HTMLDivElement | null>(null);

    const visibleCards = 3;

    const nextCard = () => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % (team.length - visibleCards + 1));
    };

    const prevCard = () => {
        setActiveIndex((prevIndex) =>
        prevIndex === 0 ? team.length - visibleCards : prevIndex - 1
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
      teamImage, teamImage1, teamImage2, teamImage, teamImage1, teamImage2, teamImage, teamImage1, teamImage2, teamImage, teamImage1, teamImage2
    ]

  return (
    <section className="flex justify-center flex-col py-10 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-10 items-center w-full">
        <div className="max-w-[1440px] w-full text-center flex flex-col items-center md:px-16 gap-y-3 sm:gap-y-4 md:gap-y-6">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold">Our <span className="bg-gradient-to-r from-[#F8B51C] to-[#FEE539] bg-clip-text text-transparent">Past Engagements</span></h1>

          <p className='text-base sm:text-lg md:text-xl text-[#777777] px-2 sm:px-4 lg:px-[10%]'>Step into the world of KBM! Our photo gallery captures the energy, innovation, and impact of our training programs, hands-on projects, and community events. See our students in action, industry experts sharing knowledge, and the milestones we&apos;re achieving together.</p>

          <p className="text-base sm:text-lg md:text-xl text-center font-semibold">(Experience KBM through our lens)</p>
        </div>

        <div className="relative flex flex-col max-w-[1440px] w-full px-5 md:px-10 pb-10 pt-20 md:h-[500px] lg:h-[680px]">
          {/* Navigation Arrows */}
          <span
            className="absolute left-0 top-[40%] transform -translate-y-1/2 z-20 bg-black/20 mx-1 sm:mx-2 md:mx-4 text-white rounded-full p-2 sm:p-3 cursor-pointer"
            onClick={prevCard}
          >
            <FaChevronLeft className="text-xs sm:text-sm md:text-base" />
          </span>
          <span
            className="absolute right-0 top-[40%] transform -translate-y-1/2 z-20 bg-black/20 mx-1 sm:mx-2 md:mx-4 text-white rounded-full p-2 sm:p-3 cursor-pointer"
            onClick={nextCard}
          >
            <FaChevronRight className="text-xs sm:text-sm md:text-base" />
          </span>

          <div
            ref={scrollRef}
            className="flex items-center h-full overflow-hidden gap-x-5 w-full"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {team.map((image, index) => (
              <div
                key={index}
                className={`flex-shrink-0 w-auto p-2 sm:p-3 md:p-5 transition-transform duration-700 ${
                  activeIndex === index
                    ? "bg-gradient-to-r from-[#ffe8b68c] to-[#E2E2E24D] absolute right-[2%] sm:right-[3%] md:right-[15%] top-[10%] sm:top-[12%] md:top-[14%] scale-[1.05] sm:scale-[1.1] md:scale-[1.15] w-[85%] sm:w-[80%] md:w-[70%] xl:w-[52%] lg:right-[15%] lg:top-20 xl:top-24 xl:right-[calc(24%)] z-10 border-white border shadow-md"
                    : "opacity-15 h-full lg:top-0 xl:right-0"
                }`}
                onClick={() => setActiveIndex(index)}
              >
                <Image src={image} alt='teams image' width={0} height={0} className="w-full h-[60%] sm:h-[65%] md:h-[70%] lg:h-auto" />
              </div>
            ))}
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center items-center gap-x-1.5 sm:gap-x-2 mt-4 sm:mt-6 md:mt-8">
            {team.slice(0, team.length - visibleCards + 1).map((_, index) => (
              <span
                key={index}
                className={`rounded-full transition-all ${
                  activeIndex === index ? "bg-[#F8B51C] w-2 sm:w-2.5 h-2 sm:h-2.5" : "bg-gray-400 w-1 sm:w-1.5 h-1 sm:h-1.5"
                }`}
                onClick={() => setActiveIndex(index)}
              ></span>
            ))}
          </div>
        </div>

      </section>
  )
}

export default PastEngagement
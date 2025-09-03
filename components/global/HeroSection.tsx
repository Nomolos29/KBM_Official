"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

interface HeroSectionProps {
  title: string;
  decoratedTitle?: string;
  description: string;
  imageUrl?: string;
  backgroundImage?: string;
  button?: boolean | string;
  gradient?: boolean;
  darkThemed?: boolean;
  wide?: boolean;
  maxWidth?: boolean;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  description,
  imageUrl,
  wide,
  maxWidth,
  backgroundImage,
  darkThemed,
  gradient,
  button,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      className={`flex flex-col w-full relative items-center overflow-hidden justify-evenly transition-all duration-500 ease-in-out hover:bg-opacity-80`}
    >
      {gradient && (
        <div className="absolute">
          <div className="relative">
            <div className="h-[600px] w-[1000px] bg-[#F2C94C38] -rotate-[20deg] blur-3xl rounded-[300%] absolute -right-0 bottom-40"></div>
            <div className="h-[500px] w-[820px] bg-[#28616740] -rotate-[30deg] blur-3xl rounded-[300%] absolute -right-20 -top-68"></div>
            <div className="h-[800px] w-[1000px] bg-[#28616740] -rotate-[30deg] blur-3xl rounded-[200%] absolute -bottom-40 -left-24"></div>
          </div>
        </div>
      )}

      <main
        className={`flex w-full flex-col px-4 sm:px-5 md:px-0 ${
          imageUrl && "gap-y-6 sm:gap-y-8 md:gap-y-12"
        } ${backgroundImage} ${
          darkThemed ? "text-white" : gradient ? "" : "  bg-[##F8B51C66] "
        }`}
      >
        <div
          className={`w-full flex flex-col justify-center items-center gap-y-6 sm:gap-y-8 md:gap-y-12 ${
            imageUrl ? "py-8 sm:py-10 md:py-14" : "h-[300px] sm:h-[350px] md:h-[500px] lg:h-[650px]"
          }`}
        >
          <div
            className={`${
              wide ? "w-full sm:w-[800px] md:w-[1000px]" : maxWidth ? "max-w-[1440px]" : "w-full sm:w-[500px] md:w-[720px]"
            } mx-auto flex flex-col pt-16 sm:pt-20 md:pt-24 md:py-5 justify-between items-center gap-4 sm:gap-5 md:gap-6 text-center ${
              isVisible ? "animate-fade-in-up" : "opacity-0"
            }`}
          >
            <h2 className="text-2xl sm:text-3xl w-full text-center md:text-5xl lg:text-[64px] leading-tight font-extrabold transition-colors duration-300 capitalize">
              {title}
            </h2>
            <p className="text-base sm:text-[17px] md:text-xl lg:text-2xl w-full leading-tight md:leading-normal transition-colors duration-300">
              {description}
            </p>
          </div>

          {button && <button type="button">{button}</button>}
        </div>

        <div
          className={`mx-auto ${
            wide ? "w-full px-4 sm:px-6 md:w-[1100px] md:px-0" : maxWidth ? "max-w-[1440px] px-4" : "w-full px-4 sm:w-[700px] md:w-[900px] md:px-0"
          } flex flex-col justify-between items-center gap-4 sm:gap-5 md:gap-6 text-center ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          {imageUrl && (
            <Image
              src={imageUrl}
              alt="Hero demo image"
              width={1440}
              height={500}
            />
          )}
        </div>
      </main>
    </section>
  );
};

export default HeroSection;

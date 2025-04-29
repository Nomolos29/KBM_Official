"use client";

import { FAQs } from "@/lib/faqData";
import Link from "next/link";
import { FaqAccordion, PastEngagement } from "@/components";
import ImageBox from "@/components/global/ImageBox";
import InfiniteSlider from "@/components/utils/infiniteSlider";
import {
  Why,
  // cards,
  keyAchievements,
  logos,
  ourSolution,
} from "@/components/utils/team";
import Subcribe from "@/components/global/subcribe";

export default function Home() {
  return (
    <div className="w-full flex flex-col items-center">
      <section className="section-slider text-white flex w-full h-[500px] md:h-[550px] lg:h-[730px] xl:h-[730px] justify-center items-center px-3 md:px-10 relative">
        <div className="absolute inset-0 bg-[#1616168c] z-0" />
        <div className="relative z-20 max-w-[1440px] w-full flex h-full justify-center items-center gap-y-10 gap-x-20 ">

          <div className="flex flex-col gap-y-5 items-center text-center z-10 pt-[35%] md:pt-[15%]">
            <h1 className="text-3xl md:text-[56px] lg:text-[70px] w-full text-white font-bold leading-tight">
              Launch your career in
              <br />
              <span className="bg-gradient-to-r from-[#F8B51C] to-[#FEE539] bg-clip-text text-transparent">
                Emerging Technologies
              </span>
            </h1>

            <p className="text-[18px] md:text-xl font-medium w-full md:w-full lg:w-[80%] xl:w-[60%]">
              Empowering the next generation of developers through cutting-edge
              training, hands-on experience, and practical exposure to
              real-life projects
            </p>
          </div>
        </div>
      </section>

      <section className="relative w-full flex justify-center items-center">
        <div className="absolute top-[-50]">
          <span className="hidden md:flex justify-center items-center h-[600px] lg:h-[800px] w-[600px] lg:w-[800px] rounded-full border border-[#F8B51C] bg-[#F0E2B33B]">
            <span className="lg:h-[430px] lg:w-[430px] rounded-full border border-[#F8B51C] bg-[#f8b61c1c]"></span>
          </span>

          <span className="flex justify-center md:hidden items-center h-[310px] w-[310px] rounded-full border border-[#F8B51C] bg-[#F0E2B33B]">
            <span className="h-[175px] blur-3xl w-[175px] rounded-full border border-[#F8B51C] bg-[#ffffffc7]"></span>
          </span>
        </div>

        <section className="z-[5] border w-[70%] gap-y-5 py-5 md:w-[90%] flex flex-col md:flex-row h-fit absolute shadow-md md:h-[150px] rounded-lg bg-white bottom-[-410px] md:bottom-[-80px] justify-center items-center gap-x-5 lg:gap-x-16 overflow-x-auto lg:overflow-hidden">
          {keyAchievements.map((achivement, index) => (
            <span
              key={index}
              className="flex flex-col gap-y-1 items-center text-center whitespace-nowrap md:min-w-[100px] lg:min-w-[150px] w-fit"
            >
              <h3 className="text-black text-[36px] font-bold">
                {achivement.number}+
              </h3>
              <p className="text-lg text-black">{achivement.title}</p>
            </span>
          ))}
        </section>
      </section>

      <div className="w-full bg-[#FBDEB533] pt-[400px] px-6 lg:px-0 md:pt-14 lg:pt-28 z-0">
        <div className="w-full">
          <ImageBox
            imgSectionText={
              <div className="text-black flex flex-col gap-y-5">
                <p>
                  At KBM, we deliver intensive training programs designed to
                  transform aspiring tech enthusiasts—including beginners,
                  self-taught developers, and career switchers—into
                  industry-ready professionals.
                </p>
                <p className="flex gap-10 items-start">
                  <span className="pt-2">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="20" height="20" rx="10" fill="#1B1B1B" />
                      <path
                        d="M13.541 6L8.95898 11.5232L6.25 9.04821L5 10.1911L9.16602 14L15 7.14286L13.541 6Z"
                        fill="#F8B51C"
                      />
                    </svg>
                  </span>
                  <span>
                    Our courses, ranging from 1 to 6 months, are tailored to
                    provide a strong foundation in software development, other
                    emerging technologies, and leadership through hands-on
                    projects, live coding sessions, and expert-led workshops.
                  </span>
                </p>
                <p className="flex gap-10 items-start">
                  <span className="pt-2">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="20" height="20" rx="10" fill="#1B1B1B" />
                      <path
                        d="M13.541 6L8.95898 11.5232L6.25 9.04821L5 10.1911L9.16602 14L15 7.14286L13.541 6Z"
                        fill="#F8B51C"
                      />
                    </svg>
                  </span>
                  <span>
                    We go beyond technical training by offering structured
                    mentorship, real-world industry challenges, and direct
                    hiring partnerships...
                  </span>
                </p>
              </div>
            }
            imgSectionTitle="What We Do"
            imageSrc="/images/hackathon-award.jpg"
            gap
            button
            textSize="lg"
            imageSize="lg"
            imageBorder
            alignment="top"
          />
        </div>
      </div>


      <section className="flex justify-center items-center w-full bg-[url('/images/IMG-20250222-WA0005.jpg')] bg- bg-cover py-10 lg:py-20  px-5 md:px-20 lg:px-[70px]">
        <div className="max-w-[1440px] w-full flex flex-col items-center gap-y-5 md:gap-y-10 lg:p-7 rounded-[16px] text-center backdrop-blur-sm md:p-10 bg-[#00000064] text-white">
          <h2 className="text-[28px] md:text-[40px] font-bold">About KBM</h2>
          <p className="text-md md:text-[24px]">
            KBM is an elite platform dedicated to equipping aspiring and
            professional developers with world-class skills in emerging
            technologies and leadership. We empower the next generation of
            developers through...
          </p>
          <Link
            href="/" // Redirect to the relevant page
            className="px-4 md:px-8 py-2 bg-gradient-to-r from-[#F8B51C] to-[#FEE539] text-black text-md md:text-lg font-semibold rounded-lg hover:bg-[#e69c00]"
          >
            Read more...
          </Link>
        </div>
      </section>

      <section className="relative flex justify-center items-center w-full bg-[#FAFAFA] py-10 md:pt-20 pb-44">
        <div className="max-w-[1440px] w-full flex flex-col items-center gap-y-10 px-5">
          <div className="w-full md:w-[600px] lg:w-[800px] text-center flex flex-col items-center gap-y-4 md:gap-y-8">
            <h1 className="text-3xl md:text-5xl font-semibold">
              Our
              <span className="bg-gradient-to-r from-[#F8B51C] to-[#FEE539] bg-clip-text text-transparent pl-3">
                Solution
              </span>
            </h1>
            <p className="text-center w-full text-md md:text-[18px]">
              At Know the Blocks Maven (KBM), we aim to build an educational hub
              where young adults can access top-notch education in emerging
              technologies and gain a deep understanding of the Tech Ecosystem.
            </p>
          </div>

          <div className="flex flex-wrap flex-col md:flex-row w-full justify-center gap-14">
            {ourSolution.map((solution, index) => (
              <div
                key={index}
                className="w-full md:w-2/5 h-[300px] md:h-[350px]"
              >
                <div
                  className="mb-4 rounded-xl "
                  style={{
                    backgroundImage: `url(${solution.bgImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  <div className="rounded-xl h-[250px] lg:h-[250px] z-[1] flex flex-col items-center justify-end gap-y-3 p-10  bg-black opacity-80">
                    <div className="flex items-center justify-center h-16 w-16 rounded-full border-2 border-[#F8B51C] bg-black">
                      {solution.icon}
                    </div>
                    <h4 className="text-[20px] font-semibold mt-3 text-white">
                      {solution.heading}
                    </h4>
                  </div>
                </div>
                <p className="">{solution.description}</p>
              </div>
            ))}
          </div>
          <div className="w-full md:w-[600px] lg:w-[800px] text-center flex flex-col items-center gap-y-4 pt-14 md:pt-10 md:gap-y-8">
            <p className="text-center w-full text-md md:text-[18px]">
              KBM is shaping the future of tech education-empowering young
              adults with the knowledge and skills to thrive in the global Tech
              Ecosystem.
            </p>
          </div>
        </div>


        <div className="z-50 border w-[90%] absolute  shadow-[0_10px_20px_#F8B91E40,0_10px_20px_#F8B91E40] h-[290px] bg-white bottom-[-160px] md:bottom-[-180px] overflow-x-scroll md:overflow-hidden">
          <h1 className="py-14 text-3xl md:text-5xl font-semibold text-center">
            Our
            <span className="bg-gradient-to-r from-[#F8B51C] to-[#FEE539] bg-clip-text text-transparent pl-3">
              Esteemed Partners
            </span>
          </h1>
          <div className=" flex justify-center items-center gap-x-5 px-5 md:gap-x-16 ">
            {logos.map((logo, index) => (
              <span
                key={index}
                className="flex flex-col gap-y-1 items-center text-center md:min-w-[80px] lg:min-w-[200px] w-fit"
              >
                {logo.logo}
              </span>
            ))}
          </div>
        </div>
      </section>


      <section className="pt-[230px] md:pt-[300px] pb-10 flex flex-col justify-center items-center w-full">
        <div className="w-full md:w-[700px] lg:w-[800px] mx-auto text-center flex flex-col justify-center items-center gap-y-4 md:gap-y-8 pb-10">
          <h1 className="text-3xl md:text-5xl font-semibold">
            Why
            <span className="bg-gradient-to-r from-[#F8B51C] to-[#FEE539] bg-clip-text text-transparent pl-3">
              Choose KBM
            </span>
          </h1>
          <p className="text-center w-full text-md md:text-[18px]">
            At Know the Blocks Maven (KBM), we aim to build an educational hub
            where young adults can access top-notch education in emerging
            technologies and gain a deep understanding of the Tech Ecosystem.
          </p>
        </div>
        <div className="flex flex-col md:flex-row w-full justify-center items-center gap-7 pt-5 relative px-[5%]">
          <span className="h-[200px] md:h-[70px] bg-[#ffd268] rounded-full w-full absolute max-w-[1250px] blur-[100px] bottom-[60%] md:bottom-10"></span>
          <span className="h-[200px] md:hidden md:h-[70px] bg-[#ffd268] rounded-full w-full absolute max-w-[1250px] blur-[100px] bottom-[14%] md:bottom-10"></span>

          {Why.map((solution, index) => (
            <div
              key={index}
              className="border-[#F8B51C] rounded-2xl border h-[300px] lg:h-[250px] z-10 "
              style={{
                backgroundImage: `url(${solution.bgImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="flex flex-col gap-y-3 rounded-2xl bg-black bg-opacity-70 p-5 h-full text-white">
                <div className="flex items-center justify-center h-16 w-16 rounded-lg border bg-[#F8B51C] border-transparent">
                  {solution.icon}
                </div>
                <h4 className="text-[20px] font-semibold mt-3">
                  {solution.heading}
                </h4>
                <p>{solution.description}</p>
              </div>
            </div>
          ))}
        </div>

        <Link
            href="/" // Redirect to the relevant page
            className="px-4 mt-10 md:px-8 py-2 bg-gradient-to-r from-[#F8B51C] to-[#FEE539] text-black text-md md:text-lg font-semibold rounded-lg hover:bg-[#e69c00]"
          >
            Read more...
          </Link>
      </section>

      <PastEngagement />
      <InfiniteSlider />
      <section className="flex flex-col justify-center py-10 md:py-20 items-center w-full bg-white">
        <div className="max-w-[1440px] text-center w-full flex flex-col items-center pb-10 px-10 gap-y-5">
          <h1 className="text-3xl md:text-5xl font-semibold">
            Your Questions <span className="bg-gradient-to-r from-[#F8B51C] to-[#FEE539] bg-clip-text text-transparent">
              Answered
            </span>
          </h1>

          <p className="text-lg text-center">Frequently Asked Questions</p>
        </div>

        <div className="max-w-[1440px] w-full flex flex-col items-center px-5 md:px-[70px]">
          <FaqAccordion faqs={FAQs} />
        </div>
      </section>
      <Subcribe />
    </div>
  );
}

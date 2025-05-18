// "use client"

import Image from "next/image";
// import about from "@/public/aboutUs.svg";
// import WhatWeDo from "@/public/WhatWeDo.svg";
import { HeroSection } from "@/components";
import features1 from "@/public/feaures1.svg";
import features2 from "@/public/feaures2.svg";
import features3 from "@/public/feaures3.svg";
import features4 from "@/public/feaures4.svg";
import Link from "next/link";
// import ImageBox from "@/components/global/ImageBox";
import { Why } from "@/components/utils/team";
import image from "@/public/images/Frame 212997.png";
import Subscribe from "@/components/global/subcribe";
import ImageBox from "@/components/global/ImageBox";

const AboutUs = () => {
  // const WhyChooseKBM = [
  //   "Comprehensive Training: Develop in-demand skills in software engineering and blockchain technology.",
  //   "Real-World Projects: Gain hands-on experience with practical, real-world applications.",
  //   "Career-Ready Professionals: Graduate as a highly skilled, competitive entry to mid-level software engineer.",
  //   "At KBM, we’re not just building skills; we’re building futures. Start your journey with us today and be a part of the tech revolution!",
  // ];
  const features = [
    {
      icon: features1,
      color: "bg-[#FFFAD580]",
      heading: "Holistic Approach",
      description:
        "Using both onsite and online training for enhanced learning experiences.",
      link: "#",
      cta: "Learn About This",
    },
    {
      icon: features2,
      color: "bg-[#F8B51C3D]",
      heading: "Collaborative Learning",
      description:
        "Cohort-based learning for shared knowledge and skill enhancement.",
      link: "#",
      cta: "Find Out More",
    },
    {
      icon: features3,
      color: "bg-[#FFFAD5]",
      heading: "Resourceful Hub",
      description:
        "A comprehensive educational hub for blockchain literacy and skills.",
      link: "#",
      cta: "Discover Resources",
    },
    {
      icon: features4,
      color: "bg-[#FFFAD580]",
      heading: "Skill Development",
      description:
        "Providing essential tools to thrive in the blockchain career landscape.",
      link: "#",
      cta: "Enhance Your Skills",
    },
  ];
  return (
    <div className="w-full flex flex-col items-center">
      <HeroSection
        title="About KBM"
        description="KBM is a platform dedicated to equipping aspiring and professional developers with world-class skills in emerging technologies and leadership."
        backgroundImage="bg-[url(/our-projects/tech-club-cohort.png)] bg-cover bg-center text-white bg-[#302204ae] bg-blend-darken"
      />

      <main className="flex flex-col max-w-[1440px] gap-y-20 md:gap-0 pt-10 md:pt-20 w-full justify-between overflow-hidden">
        <section className="relative flex justify-end items-center bg-gray-50 px-[10%]">
          <div className={`${"h-[600px] w-[550px]"} flex`}>
            <div className="w-full relative">
              <div className="w-[304px] h-[279px] bg-[#F8B51C]"></div>

              <Image
                width={1000}
                height={1000}
                src={image}
                alt="Section image"
                className="absolute top-3 left-3"
              />
            </div>
          </div>
          <div className="absolute flex top-16 flex-col md:flex-row bg-white rounded-2xl shadow-lg overflow-hidden max-w-[470px] mr-[20%]">
            <div className="py-14 px-8  flex flex-col justify-center">
              <p className="text-gray-700 mb-4">
                We empower the next generation of developers through
                cutting-edge training, hands-on experience, structured
                mentorship with industry experts, and direct exposure to
                real-life projects and hiring partners.
              </p>
              <p className="text-gray-700 mb-4">
                Unlike traditional coding bootcamps, KBM integrates Web3
                literacy, AI and leadership development, and real-world industry
                challenges...
              </p>
              <p className="text-gray-700">
                Join KBM and transform your potential into a thriving tech
                career.
              </p>
            </div>
          </div>
        </section>

        <section className="w-full bg-[#FBDEB533] pt-[400px] px-6 lg:px-0 md:pt-14 lg:pt-28 z-0">
          <div className="w-full pb-14 md:pb-0">
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
                      mentorship, real-world industry challengelg:p-7 s, and direct
                      hiring partnerships...
                    </span>
                  </p>
                </div>
              }
              imgSectionTitle="What We Do"
              titleSize="lg"
              imageSrc="/images/hackathon-award.jpg"
              gap
              button
              textSize="lg"
              imageSize="lg"
              imageBorder
              alignment="top"
            />
          </div>
        </section>

        <section className="flex justify-between items-center px-4 md:px-0 w-full flex-col-reverse md:flex-row gap-x-10 xl:gap-x-20 relative md:pt-24 gap-y-7">
          <section className="">
            <div className="w-full md:w-[600px] lg:w-[800px] mx-auto text-center flex flex-col justify-center items-center gap-y-4 md:gap-y-8 pb-10">
              <h1 className="text-3xl md:text-5xl font-semibold">
                Why
                <span className="bg-gradient-to-r from-[#F8B51C] to-[#FEE539] bg-clip-text text-transparent pl-3">
                  Choose KBM
                </span>
              </h1>
              <p className="text-center w-full text-md md:text-[18px]">
                At Know the Blocks Maven (KBM), we aim to build an educational
                hub where young adults can access top-notch education in
                emerging technologies and gain a deep understanding of the Tech
                Ecosystem.
              </p>
            </div>
            <div className="flex flex-col md:flex-row w-full items-center gap-7 pt-5 relative px-[5%]">
              {Why.map((solution, index) => (
                <div
                  key={index}
                  className="border-[#F8B51C] rounded-2xl border h-[250px] md:h-[400px] lg:h-[250px] z-10 "
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
          </section>
        </section>
        <section className="flex flex-col justify-center py-10 md:py-20 items-center w-full bg-white">
          <div className="max-w-[1440px] w-full flex flex-col items-center pb-10 px-10 gap-y-5">
            <h1 className="text-3xl md:text-5xl text-center font-semibold">
              Explore Our
              <span className="bg-gradient-to-r from-[#F8B51C] to-[#FEE539] bg-clip-text text-transparent">
                Dynamic Features
              </span>
            </h1>
            {/* <span className="h-[3px] w-20 bg-[#FFB100] rounded-full my-5"></span>   */}
            <p className="text-lg text-center">Learn and Engage</p>
          </div>

          <div className="max-w-[1440px] w-full justify-between items-center flex px-0 md:px-40">
            <div className="flex flex-wrap gap-5 justify-center md:pt-10 md:pb-20 w-full border-b-[1px] border-[#F8B51C]">
              {features.map((feature, index) => (
                <span
                  key={index}
                  className={`py-7 px-5 md:px-10 w-full md:w-[48%] ${feature.color} md:shadow-md md:shadow-[#ffd981e8] justify-between flex flex-col gap-y-2 rounded-lg`}
                >
                  <div className="flex flex-col gap-y-4 w-full">
                    <Image
                      src={feature.icon}
                      alt={`${feature.heading} Image`}
                      width={50}
                      height={50}
                    />
                    <h3 className="font-semibold pt-3 text-xl">
                      {feature.heading}
                    </h3>
                    <p>{feature.description}</p>
                  </div>
                  <Link
                    href={feature.link}
                    className="underline text-[#FFB100] cursor-pointer"
                  >
                    {feature.cta}
                  </Link>
                </span>
              ))}
            </div>
          </div>
        </section>
        <Subscribe />
      </main>
    </div>
  );
};

export default AboutUs;

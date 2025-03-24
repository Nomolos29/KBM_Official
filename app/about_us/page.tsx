// "use client"

import Image from "next/image"
import about from "@/public/aboutUs.svg"
import WhatWeDo from "@/public/WhatWeDo.svg"
import { HeroHeader, PastEngagement } from "@/components"

const AboutUs = () => {

  const WhyChooseKBM = [
    "Comprehensive Training: Develop in-demand skills in software engineering and blockchain technology.",
    "Real-World Projects: Gain hands-on experience with practical, real-world applications.",
    "Career-Ready Professionals: Graduate as a highly skilled, competitive entry to mid-level software engineer.",
    "At KBM, we’re not just building skills; we’re building futures. Start your journey with us today and be a part of the tech revolution!"
  ]

  return (
    <div className="w-full flex flex-col items-center">
      <HeroHeader plainText="About" decoratedText="KBM" description="KBM is an elite training platform dedicated to equipping aspiring and professional developers with world-class skills in emerging technologies and leadership." />


      <main className="flex flex-col max-w-[1440px] gap-y-20 md:gap-0 pb-20 pt-10 md:py-20 w-full justify-between px-3 md:px-10 lg:px-20 overflow-hidden">
        <section className="flex justify-between flex-col-reverse px-4 md:px-0 md:flex-row gap-y-7 items-center w-full relative md:pt-5 lg:pt-12">
          <div className="md:w-[40%] lg:w-[35%] flex flex-col gap-y-4 md:gap-y-7">
            <h2 className="bg-gradient-to-r from-[#F8B51C] to-[#FEE539] bg-clip-text text-transparent text-2xl lg:text-4xl  xl:text-5xl font-semibold">About KBM</h2>
            <p className="text-md lg:text-lg text-[#474747]">KBM is an elite training platform dedicated to equipping individuals with world class software engineering and leadership skills. We empower the next generation of developers through cutting edge training, hands on experience, and practical exposure to real life projects.</p>
          </div>
          <Image src={about} alt="" width={0} height={0} className="z-10 w-full md:w-1/2 xl:w-[47%]" />
          <span className="bg-[#FEE53933] w-[700px] h-[300px] md:-right-[55%] lg:h-[400px] xl:h-[500px] -rotate-[30deg] absolute lg:-right-[38%] xl:-right-[25%] top-10 md:-top-16"></span>
        </section>

        <section className="flex justify-between flex-col md:flex-row items-center gap-y-7 w-full relative px-4 md:px-0 md:pt-24">
          <Image src={WhatWeDo} alt="" width={0} height={0} className="z-10 w-full md:w-1/2" />
          <div className="w-full md:w-[40%] flex flex-col gap-y-7">
            <h2 className="bg-gradient-to-r from-[#F8B51C] to-[#FEE539] bg-clip-text text-transparent text-2xl lg:text-4xl xl:text-5xl font-semibold">What We Do?</h2>
            <p className="text-md lg:text-lg text-[#474747]">At KBM, we deliver intensive training programmes designed to transform aspiring tech enthusiasts into industry ready software engineers. Our courses, ranging from 1 to 6 months, are tailored to provide a strong foundation in software development and leadership, ensuring every participant is prepared to excel in today&apos;s competitive tech landscape.</p>
          </div>
          <span className="bg-[#FEE53933] w-[700px] h-[300px] lg:h-[400px] xl:h-[500px] rotate-[30deg] absolute md:-left-[55%] lg:-left-[45%] xl:-left-[30%] md:top-5 lg:-top-0 xl:-top-[5%]"></span>
        </section>

        <section className="flex justify-between items-center px-4 md:px-0 w-full flex-col-reverse md:flex-row gap-x-10 xl:gap-x-20 relative md:pt-24 gap-y-7">
          <div className="w-full md:w-1/2 xl:w-[35%] flex flex-col gap-y-7">
            <h2 className="bg-gradient-to-r from-[#F8B51C] to-[#FEE539] bg-clip-text text-transparent text-2xl md:text-4xl xl:text-5xl font-semibold">Why Choose KBM?</h2>
            <ul className="flex flex-col gap-y-3 lg:gap-y-7 xl:w-[88%]">
              {WhyChooseKBM.map((point, index) => (
                <li key={index} className="text-md lg:text-lg text-[#474747]">{point}</li>
              ))}
            </ul>
          </div>
          <Image src={about} alt="" width={0} height={0} className="z-10 w-full md:w-1/2 xl:w-[47%]" />
          <span className="bg-[#FEE53933] w-[700px] h-[300px] lg:h-[400px] xl:h-[500px] -rotate-[30deg] absolute md:-right-[55%] lg:-right-[45%] -top-0 lg:-top-10 xl:-right-[25%] xl:-top-2"></span>
        </section>

        {/* <section className="md:pt-32 flex flex-col items-center w-full md:gap-y-10">
          <h1 className="text-2xl md:text-4xl xl:text-5xl font-semibold border-[#F0E2B3] border-b-[3px] xl:w-[34%] pb-1 md:pb-3">Our <span className="bg-gradient-to-r from-[#F8B51C] to-[#FEE539] bg-clip-text text-transparent">Photo Gallery</span></h1>

          <div className="flex w-full gap-4 pt-10 md:py-10">
            <Image src="/galleryImage1.svg" alt="" width={0} height={0} className="w-[32%]" />

            <div className="w-[68%] flex flex-col gap-4">
              <span>
                <Image src="/GalleryImage2.svg" alt="" width={0} height={0} className="w-full h-fit" />
              </span>
              <div className="flex justify-between w-full gap-4">
                <Image src="/GalleryImage3.svg" alt="" width={0} height={0} className="w-[48%]" />
                <Image src="/GalleryImage4.svg" alt="" width={0} height={0} className="w-[48%]" />
              </div>
            </div>
          </div>
        </section> */}

      </main>

        <PastEngagement />
    </div>
  )
}

export default AboutUs
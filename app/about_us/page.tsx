// "use client"

import Image from "next/image"
import about from "@/public/aboutUs.svg"
import WhatWeDo from "@/public/WhatWeDo.svg"

const AboutUs = () => {

  const WhyChooseKBM = [
    "Comprehensive Training: Develop in-demand skills in software engineering and blockchain technology.",
    "Real-World Projects: Gain hands-on experience with practical, real-world applications.",
    "Career-Ready Professionals: Graduate as a highly skilled, competitive entry to mid-level software engineer.",
    "At KBM, we’re not just building skills; we’re building futures. Start your journey with us today and be a part of the tech revolution!"
  ]

  return (
    <div className="w-full flex flex-col items-center">
      <main className="flex flex-col max-w-[1440px] gap-y-20 md:gap-0 pb-20 pt-10 md:py-20 w-full justify-between px-3 md:px-10 lg:px-20 overflow-hidden">
        <section className="flex justify-between items-center w-full relative pt-12">
          <div className="w-[35%] flex flex-col gap-y-7">
            <h2 className="bg-gradient-to-r from-[#F8B51C] to-[#FEE539] bg-clip-text text-transparent text-3xl md:text-5xl font-semibold">About KBM</h2>
            <p className="text-lg text-[#474747]">KBM is an elite training platform dedicated to equipping individuals with world class software engineering and leadership skills. We empower the next generation of developers through cutting edge training, hands on experience, and practical exposure to real life projects.</p>
          </div>
          <Image src={about} alt="" width={0} height={0} className="z-10" />
          <span className="bg-[#FEE53933] w-[700px] h-[500px] -rotate-[30deg] absolute -right-[25%] -top-16"></span>
        </section>

        <section className="flex justify-between items-center w-full relative pt-24">
          <Image src={WhatWeDo} alt="" width={0} height={0} className="z-10" />
          <div className="w-[40%] flex flex-col gap-y-7">
            <h2 className="bg-gradient-to-r from-[#F8B51C] to-[#FEE539] bg-clip-text text-transparent text-3xl md:text-5xl font-semibold">What We Do?</h2>
            <p className="text-lg text-[#474747]">At KBM, we deliver intensive training programmes designed to transform aspiring tech enthusiasts into industry ready software engineers. Our courses, ranging from 1 to 6 months, are tailored to provide a strong foundation in software development and leadership, ensuring every participant is prepared to excel in today&apos;s competitive tech landscape.</p>
          </div>
          <span className="bg-[#FEE53933] w-[700px] h-[500px] rotate-[30deg] absolute -left-[30%] -top-[5%]"></span>
        </section>

        <section className="flex justify-between items-center w-full relative pt-24">
          <div className="w-[35%] flex flex-col gap-y-7">
            <h2 className="bg-gradient-to-r from-[#F8B51C] to-[#FEE539] bg-clip-text text-transparent text-3xl md:text-5xl font-semibold">Why Choose KBM?</h2>
            <ul className="flex flex-col gap-y-7 w-[88%]">
              {WhyChooseKBM.map((point, index) => (
                <li key={index} className="text-lg text-[#474747]">{point}</li>
              ))}
            </ul>
          </div>
          <Image src={about} alt="" width={0} height={0} className="z-10" />
          <span className="bg-[#FEE53933] w-[700px] h-[500px] -rotate-[30deg] absolute -right-[25%] -top-2"></span>
        </section>

        <section className="py-32 flex justify-center w-full gap-y-10">
          <h1 className="text-3xl md:text-5xl font-semibold border-[#F0E2B3] border-b-[3px] w-[34%] pb-3">Our <span className="bg-gradient-to-r from-[#F8B51C] to-[#FEE539] bg-clip-text text-transparent">Photo Gallery</span></h1>

          <div className="">
          </div>
        </section>
      </main>
    </div>
  )
}

export default AboutUs
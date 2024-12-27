"use client"

import Image from "next/image";
import heroImage from "@/public/image.svg"
import icon1 from "@/public/lightening.svg"
import icon2 from "@/public/stars.svg"
import icon3 from "@/public/lock.svg"
import icon4 from "@/public/heart.svg"
import partner2 from "@/public/PL2.svg"
import partner1 from "@/public/PL1.png"
import partner3 from "@/public/PL3.svg"
import partner4 from "@/public/PL4.png"
import features1 from "@/public/feaures1.svg"
import features2 from "@/public/feaures2.svg"
import features3 from "@/public/feaures3.svg"
import features4 from "@/public/feaures4.svg"
import { FAQs } from "@/lib/faqData"
import Link from "next/link";
import FaqAccordion from "@/components/global/faqAccordion";
import { FaUserSecret } from "react-icons/fa6";


export default function Home() {

  const ourSolution = [
    {
      iconURL: icon1,
      heading: "Inclusive Learning",
      description: "Bringing blockchain education to young adults and children with special needs."
    },
    {
      iconURL: icon2,
      heading: "Community Building",
      description: "Creating early blockchain communities to promote engagement and understanding."
    },
    {
      iconURL: icon3,
      heading: "Career Pathways",
      description: "Equipping learners with the skills for sustainable careers in blockchain."
    },
    {
      iconURL: icon4,
      heading: "Innovative Curriculum",
      description: "Integrating blockchain education into primary and secondary school systems."
    },
    
  ]

  const partner = [partner1, partner2, partner3, partner4];

  const features = [
    {
      icon: features1,
      heading: "Holistic Approach",
      description: "Using both onsite and online training for enhanced learning experiences.",
      link: "#",
      cta: "Learn About This"
    },
    {
      icon: features2,
      heading: "Collaborative Learning",
      description: "Cohort-based learning for shared knowledge and skill enhancement.",
      link: "#",
      cta: "Find Out More"
    },
    {
      icon: features3,
      heading: "Resourceful Hub",
      description: "A comprehensive educational hub for blockchain literacy and skills.",
      link: "#",
      cta: "Discover Resources"
    },
    {
      icon: features4,
      heading: "Skill Development",
      description: "Providing essential tools to thrive in the blockchain career landscape.",
      link: "#",
      cta: "Enhance Your Skills"
    }
  ]

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
    <div className="w-full flex flex-col py-10 items-center">
      <section className="flex max-w-[1440px] pb-20 w-full justify-center items-center gap-y-10 gap-x-20 px-10">
        {/* <Image src={heroImage} alt="" width={0} height={0} className="max-w-[55%]" /> */}
        <div className="flex flex-col w-[70%] gap-y-7 pr-5 items-center text-center">
          <h1 className="text-6xl text-black font-semibold leading-tight">Launch your career in
          Blockchain Technology</h1>
          <span className="h-[3px] w-20 bg-[#FFB100] rounded-full"></span>
          <p className="text-[18px]">KBM is an Educational Consult passionate about educating and training young adults and children with Special Needs about the Blockchain ecosystem.  We are taking steps to integrate the blockchain educational curriculum into the formal education system to foster early adaptation and involvement in the blockchain ecosystem, thereby creating unique career paths that eventually mature into experts.</p>
          <span className="py-4 px-8 bg-[#FFB100] w-[200px] text-center text-2xl font-medium cursor-pointer rounded-lg">Get started</span>
        </div>
      </section>

      <section className="flex justify-center items-center w-full bg-yellow-100 py-20">
        <div className="max-w-[1440px] w-full flex flex-col items-center gap-y-10 px-10">
          <section className="w-[800px] flex flex-col items-center gap-y-8">
            <h1 className="text-5xl font-semibold">Our Solution</h1>
            <span className="h-[3px] w-20 bg-[#FFB100] rounded-full"></span>
            <p className="text-center w-3/4 text-[18px]">We aim to build an educational hub where Blockchain education for young adults and children with special needs can have access to top-notch information and education about the Blockchain Ecosystem. What are our core strengths and values</p>
          </section>
          <section className="flex w-full items-center gap-x-7 pt-5">
            {ourSolution.map((solution, index) => (
              <div key={index} className="bg-white h-[250px] flex shadow-[#FFB100] shadow flex-col gap-y-3 px-7 p-4 items-center rounded-2xl">
                <Image src={solution.iconURL} alt="icons" width={50} height={50} className="pt-3" />
                <h4 className="text-[22px] font-extrabold mt-3 text-center text-yellow-600">{solution.heading}</h4>
                <p className="text-center font-medium">{solution.description}</p>
              </div>
            ))}
          </section>
        </div>
      </section>

      <section className="flex gap-y-14 justify-center py-20 items-center w-full bg-white">
        <div className="max-w-[1440px] w-full flex flex-col justify-center gap-y-8 px-10">
          <div className="w-1/2 flex flex-col items-center gap-y-8 px-10">
            <h1 className="text-6xl leading-relaxed font-semibold">Our Esteemed Partners</h1>
            <span className="h-[3px] w-20 bg-[#FFB100] rounded-full"></span>
          </div>

          <div className="flex gap-x-5 items-center justify-center">
            {partner.map((image, index) => (
              <Image key={index} src={image} alt="partner image" width={120} height={100} />
            ))}
          </div>
        </div>
      </section>

      <section className="flex flex-col justify-center py-20 items-center w-full bg-yellow-100">
        <div className="max-w-[1440px] w-full flex flex-col items-center pb-10 px-10">
          <h1 className="text-5xl font-semibold">Explore Our Dynamic Features</h1>
          <span className="h-[3px] w-20 bg-[#FFB100] rounded-full my-5"></span>  
          <p className="text-lg text-center">Learn and Engage</p>
        </div>

        <div className="max-w-[1440px] w-full justify-between items-center flex px-10">
          <main className="w-full bg-white flex items-center justify-between rounded-2xl overflow-hidden">
            <section className="w-[60%] flex justify-between items-center h-full relate">
              <span className="w-[5px] h-[200px] bg-[#ffd062]"></span>
              <div className="flex flex-wrap gap-5 justify-end py-10 w-full mr-[-100px] bg-white px-10 z-10 rounded-tr-xl rounded-br-xl">
                {features.map((feature, index) => (
                  <span key={index} className="py-5 px-6 w-[300px] shadow-sm shadow-[#ffd981e8] justify-between flex flex-col gap-y-2 border rounded-lg">
                    <div className="flex flex-col gap-y-2 w-full">
                      <Image src={feature.icon} alt={`${feature.heading} Image`} width={30} height={30} />
                      <h3 className="font-semibold pt-3">{feature.heading}</h3>
                      <p>{feature.description}</p>
                    </div>
                    <Link href={feature.link} className="underline text-[#FFB100] cursor-pointer">{feature.cta}</Link>
                  </span>
                ))}
              </div>
            </section>
            <Image src={heroImage} alt="" width={0} height={0} className="w-[40%] h-auto" />
          </main>
        </div>
      </section>

      <section className="flex justify-center flex-col py-20 gap-y-5 items-center w-full bg-white">
        <div className="max-w-[1440px] w-full flex flex-col items-center pb-10 px-10">
          <h1 className="text-5xl font-semibold">Visionaries Behind the Initiative</h1>
          <span className="h-[3px] w-20 bg-[#FFB100] rounded-full my-5"></span>  
          <p className="text-lg text-center">Meet Our Team</p>
        </div>

        <div className="flex flex-wrap max-w-[1440px] gap-x-5 gap-y-10 w-full px-10 justify-evenly items-center">
          {team.map((person, index) => (
            <span key={index} className="flex flex-col items-center w-fit gap-y-4">
              <FaUserSecret className="text-[200px] rounded-full bg-white shadow-md shadow-[#000] pt-10 text-black/60" />
              
              <div className="flex flex-col text-center">
                <h1 className="text-2xl text-black font-bold">{person.name}</h1>
                <p className="text-[#FFB100] text-md">{person.role}</p>
              </div>
            </span>
          ))}
        </div>
      </section>

      <section className="flex flex-col justify-center py-20 items-center w-full bg-white">
        <div className="max-w-[1440px] w-full flex flex-col items-center pb-10 px-10">
          <h1 className="text-5xl font-semibold">Frequently Asked Questions</h1>
          <span className="h-[3px] w-20 bg-[#FFB100] rounded-full my-5"></span>  
          <p className="text-lg text-center">Your Questions Answered</p>
        </div>

        <div className="max-w-[1440px] w-full flex flex-col items-center px-10">
          <FaqAccordion faqs={FAQs} />
        </div>
      </section>
    </div>
  );
}

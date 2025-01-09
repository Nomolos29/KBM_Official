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
import { BsFillArrowRightCircleFill } from "react-icons/bs";
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
      color: "bg-[#FFFAD580]",
      heading: "Holistic Approach",
      description: "Using both onsite and online training for enhanced learning experiences.",
      link: "#",
      cta: "Learn About This"
    },
    {
      icon: features2,
      color: "bg-[#F8B51C3D]",
      heading: "Collaborative Learning",
      description: "Cohort-based learning for shared knowledge and skill enhancement.",
      link: "#",
      cta: "Find Out More"
    },
    {
      icon: features3,
      color: "bg-[#FFFAD5]",
      heading: "Resourceful Hub",
      description: "A comprehensive educational hub for blockchain literacy and skills.",
      link: "#",
      cta: "Discover Resources"
    },
    {
      icon: features4,
      color: "bg-[#FFFAD580]",
      heading: "Skill Development",
      description: "Providing essential tools to thrive in the blockchain career landscape.",
      link: "#",
      cta: "Enhance Your Skills"
    }
  ]

  const firstSection = [
    {
      color: "bg-[#E2752533]",
      title: "About KBM",
      content: "KBM is an elite training platform dedicated to equipping individuals with world class software engineering and leadership skills... "
    },
    {
      color: "bg-[#FFF3A070]",
      title: "What We Do",
      content: "At KBM, we deliver intensive training programmes designed to transform aspiring tech enthusiasts into industry-ready software engineers. Our courses, ranging from 1 to 6 months, are tailored to..."
    },
    {
      color: "bg-[#79797926]",
      title: "Why choose KBM?",
      content: "Comprehensive Training: Develop in-demand skills in software engineering and blockchain technology. Real-World Projects: Gain..."
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
      <section className="flex max-w-[1440px] pb-20 h-[530px] w-full justify-center items-center gap-y-10 gap-x-20 px-10 relative">
        <div className="absolute pt-5">
          <span className="flex justify-center items-center h-[528px] w-[528px] rounded-full border border-[#F8B51C] bg-[#F0E2B33B]">
            <span className="h-[282px] w-[282px] rounded-full border border-[#F8B51C] bg-[#F8B51C0D]"></span>
          </span>
        </div>
        
        <div className="flex flex-col w-[55%] gap-y-5 pr-5 items-center text-center z-10">
          <h1 className="text-6xl text-black font-bold leading-tight">Launch your career in
          Blockchain Technology</h1>
          
          <p className="text-[18px]">Empowering the next generation of developers through cutting-edge training, hands-on experience, and practical exposure to real-life projects</p>
          {/* <span className="py-4 px-8 bg-[#FFB100] w-[200px] text-center text-2xl font-medium cursor-pointer rounded-lg">Get started</span> */}
        </div>
        <section className="w-full flex absolute shadow-md h-[100px] bg-white bottom-0">

        </section>
      </section>

      <section className="py-20 flex justify-center items-center gap-x-10 max-w-[1440px] w-full px-[60px]">
        {firstSection.map((card, index) => (
          <div key={index} className={`flex p-6 flex-col items-center h-fit ${card.color} rounded-2xl text-center gap-y-10 w-[300px]`}>
            <span className="flex flex-col gap-y-5">
              <h4 className="font-semibold text-xl">{card.title}</h4>
              <p className="text-md text-[#636363]">{card.content}</p> 
            </span>
            <BsFillArrowRightCircleFill className="text-3xl bg-[#e9e9e9] border border-[#f5f5f5] rounded-full text-[#ffffff98] cursor-pointer" />
          </div>
        ))}
      </section>


      <section className="flex justify-center items-center w-full bg-[#FAFAFA] py-20">
        <div className="max-w-[1440px] w-full flex flex-col items-center gap-y-10 px-10">
          <section className="w-[800px] flex flex-col items-center gap-y-8">
            <h1 className="text-5xl font-semibold">Our <span className="text-[#F8B51C]">Solution</span></h1>
            {/* <span className="h-[3px] w-20 bg-[#FFB100] rounded-full"></span> */}
            <p className="text-center w-full text-[18px]">We aim to build an educational hub where Blockchain education for young adults and children with special needs can have access to top-notch information and education about the Blockchain Ecosystem. What are our core strengths and values</p>
          </section>
          <section className="flex w-full items-center gap-x-7 pt-5">
            <span className="h-[60px] bg-[#ffd575cb] rounded-full w-full absolute max-w-[1250px] blur-3xl"></span>
            {ourSolution.map((solution, index) => (
              <div key={index} className="bg-[#E2E2E24D] border-white border h-[250px] flex flex-col gap-y-3 px-7 p-4 rounded-2xl">
                <Image src={solution.iconURL} alt="icons" width={50} height={50} className="pt-3" />
                <h4 className="text-[20px] font-semibold mt-3 text-yellow-600">{solution.heading}</h4>
                <p className="">{solution.description}</p>
              </div>
            ))}
          </section>
        </div>
      </section>

      <section className="flex flex-col justify-center py-20 items-center w-full bg-white">
        <div className="max-w-[1440px] w-full flex flex-col items-center pb-10 px-10">
          <h1 className="text-5xl font-semibold">Explore Our Dynamic Features</h1>
          <span className="h-[3px] w-20 bg-[#FFB100] rounded-full my-5"></span>  
          <p className="text-lg text-center">Learn and Engage</p>
        </div>

        <div className="max-w-[1440px] w-full justify-between items-center flex px-10">
          <div className="flex flex-wrap gap-5 justify-center py-10 w-full px-10 rounded-tr-xl rounded-br-xl">
            {features.map((feature, index) => (
              <span key={index} className={`py-7 px-10 w-[48%] ${feature.color} shadow-md shadow-[#ffd981e8] justify-between flex flex-col gap-y-2 rounded-lg`}>
                <div className="flex flex-col gap-y-4 w-full">
                  <Image src={feature.icon} alt={`${feature.heading} Image`} width={50} height={50} />
                  <h3 className="font-semibold pt-3 text-xl">{feature.heading}</h3>
                  <p>{feature.description}</p>
                </div>
                <Link href={feature.link} className="underline text-[#FFB100] cursor-pointer">{feature.cta}</Link>
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="flex justify-center flex-col py-20 gap-y-5 items-center w-full bg-white">
        <div className="max-w-[1440px] w-full flex flex-col items-center pb-10 px-10">
          <h1 className="text-5xl font-semibold">Visionaries Behind the Initiative</h1>
          <span className="h-[3px] w-20 bg-[#FFB100] rounded-full my-5"></span>  
          <p className="text-lg text-center">Meet Our Team</p>
        </div>

        <div className="flex flex-wrap max-w-[1440px] gap-x-5 gap-y-10 w-full px-10 justify-evenly items-center">
            <div className="flex gap-x-20 w-full overflow-x-scroll px-10">
              {team.map((person, index) => (
                <span key={index} className="flex flex-col items-center w-fit gap-y-4">
                  <FaUserSecret className="text-[200px] rounded-full bg-white shadow-md shadow-[#000] pt-10 text-black/60" />
                  
                  <div className="flex flex-col text-center w-fit flex-nowrap">
                    <h1 className="text-2xl text-black font-bold">{person.name}</h1>
                    <p className="text-[#FFB100] text-md">{person.role}</p>
                  </div>
                </span>
              ))}
            </div>
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

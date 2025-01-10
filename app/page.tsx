"use client"

import Image from "next/image";
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
      link: "/about_us",
      color: "bg-[#E2752533]",
      title: "About KBM",
      content: "KBM is an elite training platform dedicated to equipping individuals with world class software engineering and leadership skills... "
    },
    {
      link: "",
      color: "bg-[#FFF3A070]",
      title: "What We Do",
      content: "At KBM, we deliver intensive training programmes designed to transform aspiring tech enthusiasts into industry-ready software engineers. Our courses, ranging from 1 to 6 months, are tailored to..."
    },
    {
      link: "",
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
    <div className="w-full flex flex-col items-center">
      <section className="flex max-w-[1440px] py-20 mb-20 md:mb-0 h-[350px] md:h-[530px] w-full justify-center items-center gap-y-10 gap-x-20 px-3 md:px-10 relative">
        <div className="absolute pt-5 -z-10">
          <span className="hidden md:flex justify-center items-center h-[528px] w-[528px] rounded-full border border-[#F8B51C] bg-[#F0E2B33B]">
            <span className="h-[282px] w-[282px] rounded-full border border-[#F8B51C] bg-[#F8B51C0D]"></span>
          </span>

          <span className="flex justify-center md:hidden items-center h-[328px] w-[328px] rounded-full border border-[#F8B51C] bg-[#F0E2B33B]">
            <span className="h-[182px] blur-3xl w-[182px] rounded-full border border-[#F8B51C] bg-[#ffffffc7]"></span>
          </span>
        </div>
        
        <div className="flex flex-col gap-y-5 items-center text-center">
          <h1 className="text-3xl md:text-6xl w-full text-black font-bold leading-tight">Launch your career in<br />
          Blockchain Technology</h1>
          
          <p className="text-[18px] w-full md:w-[90%] lg:w-[75%] xl:w-[55%]">Empowering the next generation of developers through cutting-edge training, hands-on experience, and practical exposure to real-life projects</p>
          {/* <span className="py-4 px-8 bg-[#FFB100] w-[200px] text-center text-2xl font-medium cursor-pointer rounded-lg">Get started</span> */}
        </div>

        <section className="w-full flex absolute shadow-md h-[100px] bg-white bottom-[-80px] md:bottom-[-20px] py-2 justify-center items-center gap-x-5 md:gap-x-10">
          {partner.map((image, index) => (
            <Image key={index} src={image} alt="partners logo" width={0} height={0} className="w-[60px] h-fit md:w-[80px]" />
          ))}
        </section>
      </section>

      <section className="py-10 md:py-20 flex flex-col md:flex-row justify-center items-center gap-10 max-w-[1440px] w-full px-5 md:px-[60px]">
        {firstSection.map((card, index) => (
          <div key={index} className={`flex p-6 flex-col items-center h-fit ${card.color} rounded-2xl text-center gap-y-10 w-[300px]`}>
            <span className="flex flex-col gap-y-5">
              <h4 className="font-semibold text-xl">{card.title}</h4>
              <p className="text-md text-[#636363]">{card.content}</p> 
            </span>
            <Link href={card.link}><BsFillArrowRightCircleFill className="text-3xl bg-[#e9e9e9] border border-[#f5f5f5] rounded-full text-[#ffffff98] cursor-pointer" /></Link>
          </div>
        ))}
      </section>


      <section className="flex justify-center items-center w-full bg-[#FAFAFA] py-10 md:py-20">
        <div className="max-w-[1440px] w-full flex flex-col items-center gap-y-10 px-5 md:px-10">
          <section className="w-full md:w-[800px] text-center flex flex-col items-center gap-y-4 md:gap-y-8">
            <h1 className="text-3xl md:text-5xl font-semibold">Our <span className="bg-gradient-to-r from-[#F8B51C] to-[#FEE539] bg-clip-text text-transparent">Solution</span></h1>
            {/* <span className="h-[3px] w-20 bg-[#FFB100] rounded-full"></span> */}
            <p className="text-center w-full text-md md:text-[18px]">We aim to build an educational hub where Blockchain education for young adults and children with special needs can have access to top-notch information and education about the Blockchain Ecosystem. What are our core strengths and values</p>
          </section>
          <section className="flex flex-col md:flex-row w-full items-center gap-7 pt-5 relative">
            <span className="h-[200px] md:h-[70px] bg-[#ffd268] rounded-full w-full absolute max-w-[1250px] blur-[100px] bottom-[60%] md:bottom-10"></span>
            <span className="h-[200px] md:hidden md:h-[70px] bg-[#ffd268] rounded-full w-full absolute max-w-[1250px] blur-[100px] bottom-[14%] md:bottom-10"></span>
            {ourSolution.map((solution, index) => (
              <div key={index} className="bg-[#E2E2E24D] border-white border h-[250px] z-10 flex flex-col gap-y-3 px-7 p-4 rounded-2xl">
                <Image src={solution.iconURL} alt="icons" width={50} height={50} className="pt-3" />
                <h4 className="text-[20px] font-semibold mt-3 text-yellow-600">{solution.heading}</h4>
                <p className="">{solution.description}</p>
              </div>
            ))}
          </section>
        </div>
      </section>

      <section className="flex flex-col justify-center py-10 md:py-20 items-center w-full bg-white">
        <div className="max-w-[1440px] w-full flex flex-col items-center pb-10 px-10 gap-y-5">
          <h1 className="text-3xl md:text-5xl text-center font-semibold">Explore Our <span className="bg-gradient-to-r from-[#F8B51C] to-[#FEE539] bg-clip-text text-transparent">Dynamic Features</span></h1>
          {/* <span className="h-[3px] w-20 bg-[#FFB100] rounded-full my-5"></span>   */}
          <p className="text-lg text-center">Learn and Engage</p>
        </div>

        <div className="max-w-[1440px] w-full justify-between items-center flex px-0 md:px-10">
          <div className="flex flex-wrap gap-5 justify-center md:py-10 w-full px-5 md:px-10 rounded-tr-xl rounded-br-xl">
            {features.map((feature, index) => (
              <span key={index} className={`py-7 px-5 md:px-10 w-full md:w-[48%] ${feature.color} md:shadow-md md:shadow-[#ffd981e8] justify-between flex flex-col gap-y-2 rounded-lg`}>
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

      <section className="flex justify-center flex-col py-10 md:py-20 gap-y-5 items-center w-full bg-[#FAFAFA]">
        <div className="max-w-[1440px] w-full text-center flex flex-col items-center px-10 gap-y-5">
          <h1 className="text-3xl md:text-5xl font-semibold">Meet  <span className="bg-gradient-to-r from-[#F8B51C] to-[#FEE539] bg-clip-text text-transparent">Our Team</span></h1>
          <p className="text-lg text-center">Visionaries Behind the Initiative</p>
        </div>

        <div className="flex flex-wrap max-w-[1440px] gap-x-5 w-full px-5 md:px-10 justify-evenly items-center">
            <div className="flex w-full gap-x-5 overflow-x-scroll p-10">
              {team.map((person, index) => (
                <div key={index} className="flex flex-col items-left w-fit gap-y-4 hover:bg-gradient-to-r from-[#ffe8b68c] to-[#E2E2E24D] hover:border-white border-[#FAFAFA] border hover:backdrop-blur-lg hover:shadow-md hover:scale-110 duration-300 shadow-[#e2e2e2] p-5">
                  <FaUserSecret className="text-[200px] bg-white pt-10 text-black/60" />
                  
                  <div className="flex flex-col text-left w-fit flex-nowrap">
                    <h1 className="text-md text-black font-bold line-clamp-1 hover:line-clamp-none">{person.name}</h1>
                    <p className="text-[#adadad] font-medium text-sm">{person.role}</p>
                  </div>
                </div>
              ))}
            </div>
        </div>
      </section>

      <section className="flex flex-col justify-center py-10 md:py-20 items-center w-full bg-white">
        <div className="max-w-[1440px] text-center w-full flex flex-col items-center pb-10 px-10 gap-y-5">
          <h1 className="text-3xl md:text-5xl font-semibold">Your Questions <span className="bg-gradient-to-r from-[#F8B51C] to-[#FEE539] bg-clip-text text-transparent">Answered</span></h1>
          
          <p className="text-lg text-center">Frequently Asked Questions</p>
        </div>

        <div className="max-w-[1440px] w-full flex flex-col items-center px-5 md:px-10">
          <FaqAccordion faqs={FAQs} />
        </div>
      </section>
    </div>
  );
}

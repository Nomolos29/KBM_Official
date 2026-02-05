import { HeroSection } from '@/components'
import ImageBox, { ImageBoxProps } from '@/components/global/ImageBox'
import React from 'react'


const sectionData: ImageBoxProps[] = [
    {
      imgSectionTitle: "DAOit",
      imgSectionText: `DAOit is a blockchain-powered platform designed to collect and analyze a robust system of data through interactions with students, educators, and parents. DAOit is designed to empower these key players in education, by democratizing school governance. 
      Students, educators, parents, and management can vote on policies, propose school initiatives, and debate issues through DAO (Decentralised Autonomous Organisation) styled system of school governance; creating an inclusive learning experience for young learners. `,
      imageSrc: "/our-projects/daoit.png",
    },
    {
      imgSectionTitle: "Tech Club Cohort",
      imgSectionText: "Tech Club Cohort engages senior secondary school students from underserved communities, conducting coding workshops that teach both technical and business skills. By the end of the program, students are equipped to build scalable products and solutions, empowering them to become creators, not just consumers, of technology. We believe in the power of young minds to innovate and drive change.",
      imageSrc: "/our-projects/tech-club-cohort.png",
    },
    {
      imgSectionTitle: "University Internship Program",
      imgSectionText: "In partnership with universities across Nigeria, we organize internship programs for undergraduate students to fill the gaps in the outdated curriculum. These programs teach students real-world skills in building blockchain-based products, allowing them to work directly with industry experts and gain hands-on experience.",
      imageSrc: "/our-projects/internship-program.png",
    },
    {
      imgSectionTitle: "AI Literacy and Ethics Workshops",
      imgSectionText: "We are ensuring that youths are prepared for the evolving future of work, we offer workshops for both university students and senior secondary (High school) schoolers. These workshops cover AI technologies, their applications, and the ethical considerations surrounding them. The goal is to ensure students can effectively engage with AI and understand its societal impact, positioning them to thrive in the digital future.",
      imageSrc: "/our-projects/ai-workshop.png",
    },
    {
      imgSectionTitle: "KBM Circuit STEM Newsletter Team",
      imgSectionText: "KBM Circuit STEM Editorial Newsletter Club is a cross-border collaboration between Nigerian students in our Tech Clubs and students from the LA School District, this initiative gives young minds a platform to educate their peers on Web3 technologies. Through insightful newsletters, students explore how emerging technologies shape their lives, covering topics such as accessibility, affordability, and real-world applications of blockchain and AI. More than just writing, this project fosters global learning, digital literacy, and authentic storytelling from students, for students.",
      imageSrc: "/our-projects/newsletter-team.png",
    },
    {
      imgSectionTitle: "KBM Tech Scholarship Program",
      imgSectionText: "KBM Tech Scholarship Program is breaking financial barriers, one student at a time. The KBM Tech Scholarship Program supports students from underprivileged backgrounds, helping them achieve their academic dreams through financial aid. Since 2023, we’ve provided 15 students with scholarships for three consecutive school terms, ensuring they stay on track to build a better future. ",
      imageSrc: "/our-projects/tech-scholarship.png",
    },
    {
      imgSectionTitle: "Yearly KBM Web3 Expo",
      imgSectionText: `KBM Web3 Expo is an annual event designed to introduce young tech enthusiasts to the vast opportunities in Web3, blockchain, and emerging technologies. Through expert-led discussions, workshops, and networking opportunities, attendees gain insights into career paths, skill development, and real-world applications of Web3. 

      Since its inception in 2023, the KBM Web3 Expo has impacted over 2,000 young people across Nigeria, equipping them with the knowledge and resources to kickstart careers in the tech industry.`,
      imageSrc: "/our-projects/web3-expo.png",
    }
]


const OurProjects = () => {
  return (
    <main className='w-full flex flex-col justify-center items-center pb-20'>
        <HeroSection
            title='Our Projects'
            description='Turning ideas into impact. From tech education in schools to Web3 solutions and hands-on learning experiences, explore how KBM is driving innovation across Nigeria and beyond.'
            backgroundImage="bg-[url(/our-projects/tech-club-cohort.png)] bg-cover bg-center text-white bg-[#30220499] bg-blend-darken"
        />


        <div className='flex flex-col px-5'>
          {sectionData.map((section, index) => (
            <ImageBox key={index} imgSectionText={section.imgSectionText} imgSectionTitle={section.imgSectionTitle} titleBorder imageSrc={section.imageSrc} reverse={index % 2 === 1} gap textSize='lg' imageSize='lg' imageBorder={index != 0} alignment='center' />
          ))}
        </div>
    </main>
    // 
  )
}

export default OurProjects
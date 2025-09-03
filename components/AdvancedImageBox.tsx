import Image from 'next/image'
import React from 'react'
import { HiOutlineArrowLongRight } from 'react-icons/hi2'
import founderImage from "@/public/founderImage.png"

const AdvancedImageBox = () => {
  return (
    <section className='w-full flex justify-center'>
        <div className='max-w-[1440px] flex flex-col w-full px-4 sm:px-5 md:px-20'>
            <div className='flex flex-col sm:flex-row w-full justify-between items-center sm:items-start mt-10 sm:mt-20 pt-10 sm:pt-20'>
                <div className='w-full sm:w-2/5 items-center flex text-[#F8B51C] gap-x-1 mb-6 sm:mb-0'>
                    <HiOutlineArrowLongRight className='text-2xl sm:text-4xl' />
                    <p className='text-lg sm:text-xl'>Our Founder</p>
                </div>
                <div className='w-full sm:w-3/5 bg-[url("/founderBG.png")] bg-cover h-[220px] sm:h-[280px] relative'>
                    <div className='absolute -right-2 sm:-right-4 -bottom-8'>
                        <Image src={founderImage} alt='founder image' width={350} className='w-[280px] sm:w-[320px] md:w-[350px]' />
                    </div>
                </div>
            </div>

            <article className='flex flex-col gap-y-6 sm:gap-y-10 py-10 sm:py-14 px-5 sm:px-7 md:px-10 shadow-md bg-white w-[95%] sm:w-[90%] md:w-[70%] -mt-16 sm:-my-28 z-10'>
                <h2 className='text-[24px] sm:text-[32px] font-bold text-black'>Ayomide Arowolo</h2>
                <div className='flex flex-col gap-y-3 sm:gap-y-5 text-base sm:text-lg'>
                    <p>
                        Ayo is an EdTech innovator, AI literacy advocate, instructional designer for corporations, and blockchain developer  dedicated to expanding access to emerging technologies for underserved communities.
                    </p>
                    <p>
                        As the founder of Know the Blocks Maven (KBM), she has empowered over 10,500 students(and counting) across Africa by integrating AI, blockchain, and Web3 literacy into education. She collaborates with key institutions, including the Nigerian government and the Los Angeles School District, and organized the first self-funded Web3 Educational Exposition for underserved schools.
                    </p>
                    <p>
                        Ayo holds an Ed.M. (2025) in Learning Design, Innovation, and Technology at Harvard GSE, where she pioneered the Harvard GSE Blockchain Club and led its inaugural conference in 2024. She conducted research on School Data Management Systems in Africa in collaboration with Rwanda&apos;s Ministry of Education and focuses on instructional design, decentralized education, and AI-driven learning.
                    </p>
                    <p>
                        Beyond academia, she contributes to decentralized organizations like Aragon, researching DAO governance models. She and her team developed DAOit, an AI-powered decentralized application for educational governance. As an EthGlobal Community Moderator in 2024, she actively shapes Web3 policies and ethical technology adoption.
                    </p>
                    <p>
                        Ayo&apos;s expertise spans curriculum design, tech education, and digital transformation, consulting for corporations like ExxonMobil and the Center for Practice Innovations. She also serves as a board member for various NGOs working to improve various systems like governance and health through educational programs.
                    A visionary educator and social investment influencer, Ayo is committed to making AI and blockchain literacy accessible to all, transforming education through technology, one step at a time.
                    </p>
                </div>
            </article>
        </div>
    </section>
  )
}

export default AdvancedImageBox
import { AdvancedImageBox, HeroSection, PastEngagement, TeamGallery } from '@/components'
import Subscribe from '@/components/global/subcribe';
import React from 'react'

const OurTeam = () => {
  return (
    <main className='w-full flex flex-col justify-center items-center'>
        <HeroSection 
          title='Meet Our Team' 
          description='Behind every milestone at KBM is a team of passionate innovators, educators, and problem-solvers' 
          backgroundImage="bg-[url(/our-projects/tech-club-cohort.png)] bg-cover bg-center text-white bg-[#302204ae] bg-blend-overlay"
        />
        <AdvancedImageBox />
        <TeamGallery />
        <PastEngagement />
        <Subscribe />
    </main>
  );
};

export default OurTeam;

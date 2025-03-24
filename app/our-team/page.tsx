import { AdvancedImageBox, HeroHeader, PastEngagement, TeamGallery } from '@/components'
import React from 'react'

const OurTeam = () => {
  return (
    <main className='w-full flex flex-col justify-center items-center'>
        <HeroHeader plainText='Meet' decoratedText='Our Team' />
        <AdvancedImageBox />
        <TeamGallery />
        <PastEngagement />
    </main>
  )
}

export default OurTeam
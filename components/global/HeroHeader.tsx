import React from 'react'

interface HeroHeaderProps {
    plainText: string;
    decoratedText?: string;
    description?: string;
}

const HeroHeader:React.FC<HeroHeaderProps> = ({plainText, decoratedText, description}) => {
  return (
    <section className='w-full flex justify-center items-center pt-14 pb-5'>
        <div className='max-w-[790px] flex flex-col justify-center items-center gap-y-5 text-center'>
            <h1 className='text-[48px] font-bold text-[#474747]'>{plainText} <span className='bg-gradient-to-r from-[#F8B51C] to-[#FEE539] text-transparent bg-clip-text'>{decoratedText}</span></h1>
            <p className='text-lg text-[#474747]'>{description}</p>
        </div>
    </section>
  )
}

export default HeroHeader
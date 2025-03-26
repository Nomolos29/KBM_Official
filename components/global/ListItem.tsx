import Link from 'next/link'
import React from 'react'


export interface ListItemProps {
    icon?: React.ReactNode
    hrefUrl?: string
    title?: string
    gap?: boolean;
    textSize?: "sm" | "lg" | "xl";
    iconPosition?: "top-center" | "side-l-center" | "side-r-center" | "top-left" | "top-right" | "side-left" | "side-right"
    description?: string
    className?: string
}


const ListItem: React.FC<ListItemProps> = ({icon, hrefUrl, gap, title, textSize, description}) => {
  return (
    <div className={`flex gap-x-5 w-full `}>
      <div className='w-[8%]'>
        {icon}
      </div>

      <Link href={hrefUrl ? hrefUrl : "#"} className={`w-full flex flex-col ${gap && "gap-y-8"}`}>
        <h4 className={`font-semibold ${textSize == "sm" ? "text-[16px]" : textSize == "lg" ? "text-[22px]" : "text-xl"}`}>{title}</h4>
        <p className={`font-medium ${textSize == "sm" ? "text-[12px]" : textSize == "lg" ? "text-xl" : textSize == "xl" ? "text-2xl" : "text-lg"}`}>{description}</p>
      </Link>
    </div>
  )
}

export default ListItem
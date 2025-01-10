import Image from 'next/image'
import logo from "@/public/company_logo_light.svg";
import footerBg from "@/public/footer_bg.svg";
import Link from 'next/link';

const Footer = () => {

  const navMenu = [
    {
      name: "Resources",
      menu: [
        {
          name: "Home",
          url: "/"
        },
        {
          name: "About us ",
          url: "/about_us"
        }
      ]
    },
    {
      name: "Community",
      menu: [
        {
          name: "Devlopers",
          url: ""
        },
        {
          name: "How it works",
          url: ""
        },
        {
          name: "FAQs",
          url: ""
        }
      ]
    },
    {
      name: "Company",
      menu: [
        {
          name: "Privacy policy",
          url: ""
        },
        {
          name: "Term of Use",
          url: ""
        },
        {
          name: "Contact",
          url: "/contact_us"
        }
      ]
    }
  ]

  return (
    <footer className='w-full bg-black flex justify-center h-fit py-10 md:h-[250px] pl-10 items-center overflow-hidden relative'>
        <main className='max-w-[1440px] w-full margin-auto pt-2 flex justify-between items-center text-white'>
          <section className='flex flex-col w-full md:w-[50%] md:flex-row justify-between md:items-center gap-10 md:gap-x-20'>
            <Image src={logo} alt='KBM Logo' width={0} height={0} className='w-[50%] md:w-[40%]' />

            <div className='flex flex-col md:flex-row w-full pt-5 md:pt-0 gap-7 md:gap-16'>
              {navMenu.map((Category, index) => (
                <div key={index}>
                  <h4 className='font-semibold text-lg pb-2'>{Category.name}</h4>
                  <div className='flex flex-col gap-y-3 w-full'>
                    {Category.menu.map((nav, index) => (
                      <Link key={index} href={nav.url} className='text-sm cursor-pointer text-[#d2d2d2]'>{nav.name}</Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
          <section className='flex absolute top-0 md:relative'>
            <Image src={footerBg} alt="Footer Background Image" width={0} height={0} className='' />
          </section>
        </main>
    </footer>
  )
}

export default Footer
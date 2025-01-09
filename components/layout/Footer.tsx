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
    <footer className='w-full bg-black flex justify-center h-[250px] pl-10 items-center overflow-hidden'>
        <main className='max-w-[1440px] w-full margin-auto pt-2 flex justify-between items-center text-white'>
          <section className='flex justify-between items-center gap-x-20'>
            <Image src={logo} alt='KBM Logo' width={0} height={0} className='' />

            <div className='flex gap-x-20'>
              {navMenu.map((Category, index) => (
                <div key={index}>
                  <h4 className='font-semibold text-lg pb-2'>{Category.name}</h4>
                  <div className='flex flex-col gap-y-3'>
                    {Category.menu.map((nav, index) => (
                      <Link key={index} href={nav.url} className='text-sm cursor-pointer'>{nav.name}</Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
          <section>
            <Image src={footerBg} alt="Footer Background Image" width={0} height={0} className='w-full' />
          </section>
        </main>
    </footer>
  )
}

export default Footer
import Image from 'next/image'
import logo from "@/public/company_logo_light.svg";
import Link from 'next/link';

const Footer = () => {

  const navMenu = [
    {
      name: "Resources",
      menu: [
        {
          name: "Home",
          url: ""
        },
        {
          name: "About us ",
          url: ""
        }
      ]
    },
    {
      name: "Community",
      menu: [
        {
          name: "Home",
          url: ""
        },
        {
          name: "Home",
          url: ""
        },
        {
          name: "Home",
          url: ""
        }
      ]
    },
    {
      name: "Company",
      menu: [
        {
          name: "Home",
          url: ""
        },
        {
          name: "Home",
          url: ""
        },
        {
          name: "Home",
          url: ""
        }
      ]
    }
  ]

  return (
    <footer className='w-full bg-black flex justify-center h-[150px] items-center'>
        <main className='max-w-[1440px] w-full margin-auto pt-2 px-10 flex justify-between items-center text-white'>
          <section className='flex justify-between items-center'>
            <Image src={logo} alt='KBM Logo' width={0} height={0} className='' />

            <div className='flex gap-x-10'>
              {navMenu.map((Category, index) => (
                <div key={index}>
                  <h4>{Category.name}</h4>
                  {Category.menu.map((nav, index) => (
                    <div key={index}>
                      <Link href={nav.url}>{nav.name}</Link>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </section>
          <section></section>
        </main>
    </footer>
  )
}

export default Footer
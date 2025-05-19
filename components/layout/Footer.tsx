import Image from "next/image";
import logo from "@/public/company_logo_light.svg";
import footerBg from "@/public/footer_bg.svg";
import Link from "next/link";

const Footer = () => {
  const navMenu = [
    {
      name: "Resources",
      menu: [
        {
          name: "Home",
          url: "/",
        },
        {
          name: "About us ",
          url: "/about_us",
        },
      ],
    },
    {
      name: "Community",
      menu: [
        {
          name: "Devlopers",
          url: "",
        },
        {
          name: "How it works",
          url: "",
        },
        {
          name: "FAQs",
          url: "",
        },
      ],
    },
    {
      name: "Company",
      menu: [
        {
          name: "Privacy policy",
          url: "",
        },
        {
          name: "Term of use",
          url: "",
        },
        {
          name: "Contact us",
          url: "/contact_us",
        },
      ],
    },
  ];

  return (
    <footer className="bg-black w-full">
      <main className="max-w-[1440px] w-full mx-auto margin-auto py-10 md:py-0 pt-8 md:pt-0 pl-5 flex justify-between items-center text-white">
        <section className="flex flex-col w-full md:w-[55%] md:flex-row justify-between md:items-center gap-10 md:gap-x-20">
          <Link href="/" className="w-[50%] md:w-[40%]">
            <Image
              src={logo}
              alt="KBM Logo"
              width={0}
              height={0}
              className="w-full"
            />
          </Link>

          <div className="flex flex-col md:flex-row w-full gap-7 md:gap-10">
            {navMenu.map((Category, index) => (
              <div key={index} className="flex flex-col gap-y-3">
                <h4 className="font-semibold text-xl md:text-2xl pb-2">{Category.name}</h4>
                <div className="flex flex-col gap-y-3 w-full">
                  {Category.menu.map((nav, index) => (
                    <Link
                      key={index}
                      href={nav.url}
                      className="text-lg md:text-md cursor-pointer text-[#d2d2d2]"
                    >
                      {nav.name}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className="flex absolute top-0 md:relative">
          <Image
            src={footerBg}
            alt="Footer Background Image"
            width={600}
            height={500}
            className=""
          />
        </section>
      </main>
    </footer>
  );
};

export default Footer;
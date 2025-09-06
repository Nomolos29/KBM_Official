import { TfiLocationPin } from "react-icons/tfi";
import { CiLinkedin, CiFacebook, CiInstagram } from "react-icons/ci";
import { RiTwitterXFill } from "react-icons/ri";
// import * as Yup from "yup";
// import { useFormik } from "formik";
import React from "react";
import { HeroSection } from "@/components";
import CommunityDropdown from "@/components/global/community";

const ContactUs = () => {
  //   const validationSchema = Yup.object().shape({
  //     userName: Yup.string().required("Name field cannot be left blank.").min(3,"Minimum of 3 characters"),
  //     userEmail: Yup.string().email("Invalid Email Address").required("Please provide your email address."),
  //     number: Yup.string().matches(/^\d{8,}$/, "Phone number must have at least 8 digits").required("Please provide your phone number."),
  //     message: Yup.string().required("This field cannot be left blank").min(10, "Minimum of 10 characters").max(250, "You've reached the maximum allowed")
  //   });

  //   const Formik = useFormik({
  //     initialValues: {
  //       userName: "",
  //       userEmail: "",
  //       number: "",
  //       message: ""
  //     },
  //     validationSchema,
  //     onSubmit:values => alert(JSON.stringify(values, null, 2)),
  //   })

  const contactInfo = [
    {
      icon: <TfiLocationPin />,
      title: "Physical Address",
      description:
        "Zone 4, 1 Lakota St, Wuse, Abuja 904101, Federal Capital Territory",
      link: "",
    },
    {
      icon: <TfiLocationPin />,
      title: "Gmail Address",
      description: "knowtheblocksmaven@gmail.com",
      link: "",
    },
    {
      icon: <TfiLocationPin />,
      title: "Phone number",
      description: "(+234) 7035081460 ",
      link: "",
    },
  ];

  const socialLinks = [
    {
      link: "",
      icon: <CiInstagram />,
    },
    {
      link: "",
      icon: <CiLinkedin />,
    },
    {
      link: "",
      icon: <CiFacebook />,
    },
    {
      link: "",
      icon: <RiTwitterXFill />,
    },
  ];

  const inputStyling =
    "w-full px-4 rounded-[5px] border py-2 h-[60px] outline-0 focus:border-[#6495ED] bg-transparent";

  return (
    <div className="w-full flex flex-col items-center overflow-hidden">
      <HeroSection
        title="Contact Us"
        description="Have a question, idea, or partnership in mind? We’d love to hear from you! Whether you want to learn with us, collaborate, or volunteer, let’s connect."
        backgroundImage="bg-[url(/our-projects/tech-club-cohort.png)] bg-cover bg-center text-white bg-[#302204ae] bg-blend-darken"
      />

      <main className="flex flex-col md:flex-row max-w-[1440px] gap-y-20 md:gap-0 pb-20 pt-10 md:py-20 w-full justify-between px-3 md:px-16">
        <section className="flex flex-col gap-y-10 md:gap-y-16 w-full md:w-[55%]">
          <h1 className="font-semibold text-5xl leading-none">Contact Us</h1>

          <div className="flex flex-col gap-10 md:gap-12 w-full px-5 md:px-0 md:w-[90%]">
            {contactInfo.map((contact, index) => (
              <div
                key={index}
                className="flex text-left gap-3 "
              >
                <span className="text-2xl">{contact.icon}</span>
                <div className="flex flex-col gap-y-2">
                  <h4 className="font-medium text-2xl">{contact.title}</h4>
                  <p className="text-lg md:text-xl text-[#777777]">
                    {contact.description}
                  </p>
                </div>
              </div>
            ))}
            <CommunityDropdown />
          </div>

          <div className="flex pl-5 gap-x-3">
            {socialLinks.map((social, index) => (
              <div
                key={index}
                className="text-2xl w-14 h-14 bg-[#FBDEB5] flex justify-center items-center rounded-full font-medium"
              >
                {social.icon}
              </div>
            ))}
          </div>
        </section>

        <section className="w-full flex flex-col px-2 items-center">
          <div className="w-full flex md:w-[65%] flex-col gap-y-7 relative">
            <h1 className="font-semibold text-4xl">Get in touch</h1>

            <div className="w-full flex flex-col gap-y-20 blur-[80px] absolute max-w-[1250px] bottom-0 right-[-70px] z-0">
              <span className="h-[80px] bg-[#b4ff4363] rounded-full z-10 rotate-12"></span>
              <span className="h-[70px] bg-[#C6042E42] rounded-full z-10 rotate-12"></span>
              <span className="h-[500px] w-[200px] bg-[#ffe96a5e] rounded-[200%] z-0 absolute left-0"></span>
              <span className="h-[70px] bg-[#C6042E42] rounded-full z-10 rotate-12"></span>
              <span className="h-[80px] bg-[#80c913b0] rounded-full z-10 rotate-12"></span>
            </div>

            <form className="w-full md:w-[380px] xl:w-full p-8 bg-white rounded-lg flex flex-col gap-y-5 z-10">
              <span className="w-full flex flex-col gap-2">
                <label htmlFor="userName" className="font-medium text-lg">
                  Enter you name
                </label>
                <input
                  className={`${inputStyling} `}
                  type="text"
                  name="userName"
                  id="userName"
                  // value={}
                  placeholder="Name"
                  // onChange={
                  // onBlur={
                  required
                />
                <p className="text-red-400">{}</p>
              </span>

              <span className="w-full flex flex-col gap-2">
                <label htmlFor="userName" className="font-medium text-lg">
                  Enter you email
                </label>
                <input
                  className={`${inputStyling} `}
                  type="text"
                  name="userName"
                  id="userName"
                  // value={}
                  placeholder="Email"
                  // onChange={}
                  // onBlur={}
                  required
                />
                <p className="text-red-400">{}</p>
              </span>

              <span className="w-full flex flex-col gap-2">
                <label htmlFor="userName" className="font-medium text-lg">
                  Enter your phone number
                </label>
                <input
                  className={`${inputStyling} `}
                  type="text"
                  name="userName"
                  id="userName"
                  // value={}
                  placeholder="Phone number"
                  // onChange={}
                  // onBlur={}
                  required
                />
                <p className="text-red-400">{}</p>
              </span>

              <span className="w-full flex flex-col gap-2">
                <label htmlFor="userName" className="font-medium text-lg">
                  Enter your message
                </label>
                <textarea
                  className={`${inputStyling} `}
                  // type="text"
                  name="userName"
                  id="userName"
                  // value={}
                  placeholder="Your message"
                  // onChange={}
                  // onBlur={}
                  required
                />
                <p className="text-red-400">{}</p>
              </span>

              <button
                type="submit"
                className="px-4 md:px-8 py-2 bg-gradient-to-r from-[#F8B51C] to-[#FEE539] text-black text-md md:text-lg font-semibold rounded-lg hover:bg-[#e69c00]"
              >
                Join Us
              </button>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ContactUs;

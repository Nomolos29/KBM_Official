import { TfiLocationPin } from "react-icons/tfi";
import { CiLinkedin, CiFacebook, CiInstagram } from "react-icons/ci";
import { RiTwitterXFill } from "react-icons/ri";
// import * as Yup from "yup";
// import { useFormik } from "formik";
import React from 'react';


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
      description: "Empower the next generation of developers through cutting edge",
      link: ""
    },
    {
      icon: <TfiLocationPin />,
      title: "Gmail Address",
      description: "Empower the next generation of developers through cutting edge",
      link: ""
    },
    {
      icon: <TfiLocationPin />,
      title: "Support Team",
      description: "Empower the next generation of developers through cutting edge",
      link: ""
    }
  ]

  const socialLinks = [
    {
      link: "",
      icon: <CiInstagram />
    },
    {
      link: "",
      icon: <CiLinkedin />
    },
    {
      link: "",
      icon: <CiFacebook />
    },
    {
      link: "",
      icon: <RiTwitterXFill />
    }
  ]

  const inputStyling = "w-full px-4 rounded-[5px] border py-2 h-[60px] outline-0 focus:border-[#6495ED] bg-transparent";

  return (
    <div className="w-full flex flex-col items-center overflow-hidden">
      <main className="flex flex-col md:flex-row max-w-[1440px] gap-y-20 md:gap-0 pb-20 pt-10 md:py-20 w-full justify-between px-3 md:px-10">
        <section className="flex flex-col items-center md:items-start gap-y-16 w-full md:w-2/5">
          <h1 className="font-semibold text-5xl leading-none">Contact Us</h1>
          
          <div className="flex flex-col w-full items-center md:items-start gap-16">
            {contactInfo.map((contact, index) => (
              <div key={index} className="flex text-center md:text-left justify-center md:gap-3 w-[70%] md:w-[65%] lg:w-[40%]">
                <span className="text-2xl">{contact.icon}</span>
                <div className="flex flex-col gap-y-2">
                  <h4 className="font-medium text-xl">{contact.title}</h4>
                  <p className="text-sm text-[#777777]">{contact.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex gap-x-5 pl-5">
            {socialLinks.map((social, index) => (
              <div key={index} className="text-2xl w-10 h-10 bg-[#FBDEB5] flex justify-center items-center rounded-full font-medium">
                {social.icon}
              </div>
            ))}
          </div>
        </section>

        <section className="w-full md:w-3/5 flex flex-col gap-y-7 relative px-2 xl:pl-28">
          <h1 className="font-semibold text-4xl">Get in touch</h1>

          <div className="w-full flex flex-col gap-y-20 blur-[80px] absolute max-w-[1250px] bottom-0 right-[-70px] z-0">
            <span className="h-[80px] bg-[#b4ff4363] rounded-full z-10 rotate-12"></span>
            <span className="h-[70px] bg-[#C6042E42] rounded-full z-10 rotate-12"></span>
            <span className="h-[500px] w-[200px] bg-[#ffe96a5e] rounded-[200%] z-0 absolute left-0"></span>
            <span className="h-[70px] bg-[#C6042E42] rounded-full z-10 rotate-12"></span>
            <span className="h-[80px] bg-[#80c913b0] rounded-full z-10 rotate-12"></span>
          </div>

          <form className="w-full md:w-[380px] lg:w-[480px] xl:w-[540px] p-8 bg-white rounded-lg flex flex-col gap-y-5 z-10">
            <span className="w-full flex flex-col gap-2">
              <label htmlFor="userName" className="font-medium text-lg">Enter you name</label>
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
              <label htmlFor="userName" className="font-medium text-lg"> Enter you email</label>
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
              <label htmlFor="userName" className="font-medium text-lg">Enter your phone number</label>
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
              <label htmlFor="userName" className="font-medium text-lg">Enter your message</label>
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

            <button type="submit" className="px-4 md:px-8 py-2 bg-gradient-to-r from-[#F8B51C] to-[#FEE539] text-black text-md md:text-lg font-semibold rounded-lg hover:bg-[#e69c00]">Join Us</button>
          </form>
        </section>
      </main>
    </div>
  )
}

export default ContactUs
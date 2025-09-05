import {
  Career,
  Experience,
  Innovation,
  Knowledge,
  Learning,
  Rtl,
  Scrib,
  Seb,
  Skills,
  Tech,
  Techy,
} from "@/public/svgs/homePage";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
export interface CardProps {
  name: string;
  role: string;
  review: string;
  color: string;
}

export const team = [
  {
    image: "/images/team/Ayomide1.png",
    name: "Ayomide Arowolo-Ayodeji",
    socials: [
      {
        id: "linkedin",
        icon: FaLinkedinIn,
        link: "https://www.linkedin.com/in/ayomidearowoloayodeji/",
      },
      // {
      //   id: "facebook",
      //   icon: FaFacebookF,
      //   link: "https://www.facebook.com/ayomide",
      // },
      // {
      //   id: "twitter",
      //   icon: FaXTwitter,
      //   link: "https://twitter.com/ayomide",
      // },
    ],
    role: "CEO/Founder",
  },
  {
    image: "/images/team/Osazee.png",
    name: "  Osazee Oghagbon ",
    socials: [
      {
        id: "linkedin",
        icon: FaLinkedinIn,
        link: "https://www.linkedin.com/in/osazee-oghagbon/",
      },
      // {
      //   id: "facebook",
      //   icon: FaFacebookF,
      //   link: "https://www.facebook.com/ayomide",
      // },
      // {
      //   id: "twitter",
      //   icon: FaXTwitter,
      //   link: "https://twitter.com/ayomide",
      // },
    ],
    role: "Lead Educator, Blockchain Development",
  },
  {
    image: "/images/team/Efe.jpg",
    name: "Ernest Efe Osazuwa",
    socials: [
      {
        id: "linkedin",
        icon: FaLinkedinIn,
        link: "https://www.linkedin.com/in/ernest-osazuwa-8a79a4260/",
      },
      // {
      //   id: "facebook",
      //   icon: FaFacebookF,
      //   link: "https://www.facebook.com/ayomide",
      // },
      // {
      //   id: "twitter",
      //   icon: FaXTwitter,
      //   link: "https://twitter.com/ayomide",
      // },
    ],
    role: "Lead, Educator, Web2 Development",
  },
  {
    image: "/images/team/Oshioriamen.jpg",
    name: "Oshioriamen G. Agbomekhe",
    socials: [
      {
        id: "linkedin",
        icon: FaLinkedinIn,
        link: "https://www.linkedin.com/in/godsgiftagbomekhe/",
      },
      // {
      //   id: "facebook",
      //   icon: FaFacebookF,
      //   link: "https://www.facebook.com/ayomide",
      // },
      // {
      //   id: "twitter",
      //   icon: FaXTwitter,
      //   link: "https://twitter.com/ayomide",
      // },
    ],
    role: "Head of Operations",
  },
  {
    image: "/images/team/Amarachi.jpg",
    name: "Amarachi Ogbu",
    socials: [
      {
        id: "linkedin",
        icon: FaLinkedinIn,
        link: "https://www.linkedin.com/in/amarachiogbu/",
      },
      // {
      //   id: "facebook",
      //   icon: FaFacebookF,
      //   link: "https://www.facebook.com/ayomide",
      // },
      // {
      //   id: "twitter",
      //   icon: FaXTwitter,
      //   link: "https://twitter.com/ayomide",
      // },
    ],
    role: "Programs & Operations Officer",
  },
  {
    image: "/images/team/Donald.png",
    name: "Donald Nwokoro",
    socials: [
      {
        id: "linkedin",
        icon: FaLinkedinIn,
        link: "https://www.linkedin.com/in/donald-nwokoro/",
      },
      // {
      //   id: "facebook",
      //   icon: FaFacebookF,
      //   link: "https://www.facebook.com/ayomide",
      // },
      // {
      //   id: "twitter",
      //   icon: FaXTwitter,
      //   link: "https://twitter.com/ayomide",
      // },
    ],
    role: "AI Engineer",
  },
  {
    image: "/images/team/Precious.jpg",
    name: "Precious Adegbite",
    socials: [
      {
        id: "linkedin",
        icon: FaLinkedinIn,
        link: "https://www.linkedin.com/in/precious-adegbite-547b1523b/",
      },
      // {
      //   id: "facebook",
      //   icon: FaFacebookF,
      //   link: "https://www.facebook.com/ayomide",
      // },
      // {
      //   id: "twitter",
      //   icon: FaXTwitter,
      //   link: "https://twitter.com/ayomide",
      // },
    ],
    role: "Product Designer",
  },
  // {
  //   image: "",
  //   name: "Emmanuel Agbomekhe",
  //   socials: [
  //     {
  //       id: "linkedin",
  //       icon: FaLinkedinIn,
  //       link: "#",
  //     },
  //     {
  //       id: "facebook",
  //       icon: FaFacebookF,
  //       link: "#",
  //     },
  //     {
  //       id: "twitter",
  //       icon: FaXTwitter,
  //       link: "#",
  //     },
  //   ],
  //   role: "Graphics Designer",
  // },
  {
    image: "/images/team/Solomon.jpg",
    name: "Solomon Sunday",
    socials: [
      {
        id: "linkedin",
        icon: FaLinkedinIn,
        link: "https://www.linkedin.com/in/solomon-sunday-0a0a26361/",
      },
      // {
      //   id: "facebook",
      //   icon: FaFacebookF,
      //   link: "https://www.facebook.com/ayomide",
      // },
      // {
      //   id: "twitter",
      //   icon: FaXTwitter,
      //   link: "https://twitter.com/ayomide",
      // },
    ],
    role: "Frontend Developer",
  },
  {
    image: "/images/team/Bello.jpg",
    name: "Bello Iteoluwakisi",
    socials: [
      {
        id: "linkedin",
        icon: FaLinkedinIn,
        link: "https://www.linkedin.com/in/iteoluwakisi-bello/",
      },
      // {
      //   id: "facebook",
      //   icon: FaFacebookF,
      //   link: "https://www.facebook.com/ayomide",
      // },
      // {
      //   id: "twitter",
      //   icon: FaXTwitter,
      //   link: "https://twitter.com/ayomide",
      // },
    ],
    role: "Blockchain Developer",
  },
  {
    image: "/images/team/Ayomide.png",
    name: "Olubaju Ayodeji",
    socials: [
      {
        id: "linkedin",
        icon: FaLinkedinIn,
        link: "https://www.linkedin.com/in/olubaju-ayodeji-642988282/",
      },
      // {
      //   id: "facebook",
      //   icon: FaFacebookF,
      //   link: "https://www.facebook.com/ayomide",
      // },
      // {
      //   id: "twitter",
      //   icon: FaXTwitter,
      //   link: "https://twitter.com/ayomide",
      // },
    ],
    role: "Social Media Manager ",
  },
];
export const keyAchievements = [
  {
    number: 15000,
    title: "Community members",
  },
  {
    number: 2000,
    title: "Students across 6 schools",
  },
  {
    number: 3000,
    title: "Students",
  },
  {
    number: 15,
    title: "Scholarships",
  },
];

export const logos = [
  {
    logo: <Seb />,
  },
  {
    logo: <Rtl />,
  },

  {
    logo: <Techy />,
  },
  {
    logo: <Scrib />,
  },
];


export const cards: CardProps[] = [
  {
    name: "Dawodu Abayomi",
    role: "Graphics Designer/Front End Developer",
    color: "bg-red-100",
    review:
      "Starting this course was challenging, but the supportive community and passionate teaching helped me commit.",
  },
  {
    name: "Hakeemat",
    role: "KBM Tech Club Member",
    color: "bg-green-100",
    review:
      "The coding class exceeded my expectations. The instructors ensured we learned HTML and CSS effectively.",
  },
  {
    name: "Dorcas",
    role: "Student",
    color: "bg-blue-100",
    review:
      "I'm thrilled about the Blockchain training. Excited for more blockchain courses ahead!",
  },
  {
    name: "James",
    role: "Backend Developer",
    color: "bg-gray-200",
    review:
      "The hands-on experience made all the difference. Highly recommended!",
  },
  {
    name: "Amina",
    role: "Data Scientist",
    color: "bg-yellow-100",
    review: "This training opened new doors for me in AI and machine learning.",
  },
];

export const colors: string[] = [
  "bg-yellow-100",
  "bg-gray-200",
  "bg-blue-100",
  "bg-green-100",
  "bg-red-100",
];

export const ourSolution = [
  {
    icon: <Knowledge />,
    heading: "Bridging the Knowledge Gap",
    description:
      "We provide structured courses that transform tech enthusiasts into industry-ready professionals.",
    bgImage: "/images/know.jpg",
  },
  {
    icon: <Learning />,
    heading: "Hands-On Learning",
    description:
      "Our programs offer practical experience, mentorship, and real-world projects to prepare students for the evolving digital landscape.",
    bgImage: "/images//FLK_2449.jpg",
  },
  {
    icon: <Career />,
    heading: "Career Empowerment",
    description:
      "Through job placement support, networking, and hiring partnerships, we help learners transition into the tech industry.",
    bgImage: "/images/FLK_2445.jpg",
  },
  {
    icon: <Tech />,
    heading: "Accessible & Inclusive Tech Education",
    description:
      "We ensure that learning opportunities in AI, Web3, and blockchain are available to all, regardless of background.",
    bgImage: "/images/tech.jpg",
  },
];


export const Why = [
  {
    icon: <Skills />,
    heading: "Industry-Relevant Skills",
    description:
      "Learn from expert instructors using real-world projects and cutting-edge technology.",
    bgImage: "/images/know.jpg",
  },
  {
    icon: <Experience />,
    heading: "Hands-On Experience",
    description:
      "Gain practical exposure through live coding sessions, mentorship, and internship opportunities.",
    bgImage: "/images//FLK_2449.jpg",
  },
  {
    icon: <Innovation />,
    heading: " Innovative Curriculum",
    description:
      "Master Web3, AI, and blockchain literacy, ensuring you stay ahead in the evolving tech landscape.",
    bgImage: "/images/FLK_2445.jpg",
  },
];

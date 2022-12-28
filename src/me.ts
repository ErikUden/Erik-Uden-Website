import {
  FaDocker,
  FaGithub,
  FaLinkedin,
  FaNewspaper,
  FaNode,
  FaPager,
  FaReact,
} from "react-icons/fa";
import {
  SiC,
  SiGooglecloud,
  SiJavascript,
  SiKubernetes,
  SiPython,
  SiTypescript,
} from "react-icons/si";

import { IMe } from "./me.interface";

export const me = {
  name: "Erik Uden",
  subtitle: "CEO of Uden AI and Full Stack MERN Developer",
  tagline:
    "I am a Fediverse developer who fights for software freedom and privacy rights!",
  about:
    "I contribute to and self-host decentralized communication networks such as the Fediverse (Mastodon, Pleroma, Diaspora...). I fight for digital rights and believe in freedom of information and FOSS.",
  location: "Norden, Germany",
  image: "/assets/erikuden3.png",
  education: [
    {
      degree: "Abitur (General Certificate of Education)",
      major: "Scientific Focus",
      school: "Ulrichsgymnasium Norden",
      graduation: "2022.07.02",
      awards: ["Angelus Sala-Prize of Chemistry"],
    },
	{
      degree: "High School Diploma",
      major: "AP Comp Sci A, AP Chem, AP Physics 1, AP Macro",
      school: "Willow Glen High School",
      graduation: "2022.06.02",
      awards: ["Treasurer of the Robotics Club"],
    },
  ],
  experience: [
    {
      company: "Uden AI",
      location: "Norden, Germany",
      position: "Co-Founder & CEO",
      duration: "Feb 2021 - Present",
      bullets: [
        "Wrote Cyberattack-Reports for Nations under Attack",
        "Developed Fediverse Software and Published it FOSS",
        "Pen-Tested Various Local Companies",
        "Deployed Self-Hosted Cloud and Streaming Platforms",
		"AI as a Service for Live-Processing",
      ],
    },
    {
      company: "Wasco GmbH",
      location: "Upgant-Schott, Germany",
      position: "Artificial Intelligence Developer",
      duration: "Feb 2019 - Aug 2020",
      bullets: [
        "Built AI Models in TensorFlow",
        "Recovered Crashed Servers",
        "Developed and Maintained WordPress Site",
      ],
    },
    {
      company: "DFKI (German Research Center for Artificial Intelligence)",
      location: "Bremen, Germany",
      position: "Intern",
      duration: "Oct 2018 - Nov 2018",
      bullets: [
        "Learned from LiDAR Systems",
        "Built and 3D Printed a Solar-Tracker",
      ],
    },
    {
      company: "Heinrich Döpke GmbH",
      location: "Norden, Germany",
      position: "Intern",
      duration: "Feb 2018 - Mar 2018",
      bullets: [
        "Welded Metal Parts",
        "Painted and Coated a Small Ferry",
        "Learned Basic Mechatronics",
      ],
    },
  ],
  projects: [
    {
      name: "The Internet Portal",
      description:
        "With the press of a button, you will be transported to a random website out of over 219 million in our database.",
      contribution:
        "I downloaded all of the internet's domains via ICANN's CZDS API, imported them into a SQL database, open-sourced the source code (AGPLv3), self-hosted it on Uden AI servers.",
      technologies: [
	    "AGPLv3",
        "HTML",
        "CSS",
        "JS",
        "PHP",
        "MySQL",
        "Docker",
        "Docker",
        "Self-Hosted",
      ],
      links: [
        {
          name: "Website",
          uri: "https://theinternetportal.net/",
        },
        {
          name: "Github",
          uri: "https://github.com/Uden-AI/theinternetportal",
        },
      ],
      image: "/assets/the-internet-portal-logo-black.svg",
    },
    {
      name: "Fediverse Share",
      description:
        "A simple static web button akin to the 'Share on Twitter' button but for the Fediverse. Allows visitors of your webpage to share it on the Fediverse! Works on 19 different social media networks including, but not limited to: Mastodon, Pleroma, GNUSocial",
      contribution:
        "I forked a similar project called 'Share on Mastodon' and edited its source code to be compatible with most Fediverse software, additionally I designed 32+ new logos that the Share on Fediverse buttons use.",
      image: "/assets/Fediverse-Logo.svg",
      technologies: ["AGPLv3", "HTML", "CSS", "JS"],
      links: [
        {
          name: "GitHub",
          uri: "https://github.com/Uden-AI/fediverse-share",
        },
        { name: "Demo", uri: "https://fediverse-share.uden.ai" },
      ],
      
    },
    {
      name: "Croissant.one (This Website)",
      description: "A website to showcase my projects and resume",
      contribution:
        "I built the entire website from scratch using React.js, TypeScript, and Chakra UI and deployed it on Vercel.",
      technologies: ["React", "Typescript", "Chakra-UI", "Vercel"],
      links: [
        {
          name: "Website",
          uri: "https://croissant.one",
        },
        {
          name: "Github",
          uri: "https://github.com/arhammusheer/croissant.one",
        },
      ],
      image: "/assets/croissant.svg",
    },
    {
      name: "AudioShelf",
      description:
        "A mobile app with over 2k users to discover audiobooks in 30 languages and summarize them in 5 minutes",
      contribution:
        "I built the backend infrastructure for the app including authentication systems, OAuth Scope and a REST API. I also built an internal CMS dashboard to manage content publishing and translations.",
      technologies: [
        "Node.js",
        "Express",
        "MongoDB",
        "Google Cloud",
        "Docker",
        "OAuth2",
      ],
      links: [
        {
          name: "Website",
          uri: "https://getaudioshelf.com",
        },
        {
          name: "Play Store",
          uri: "https://play.google.com/store/apps/details?id=com.audioshelfapp",
        },
      ],
      image: "https://content.getaudioshelf.com/logo.png",
    },
    {
      name: "Dad API",
      description: "A REST API to get dad jokes and pickup lines",
      contribution:
        "I built the entire API from scratch using Node.js and Express and deployed it on Google Cloud Run.",
      technologies: ["Node.js", "Express", "Google Cloud", "Docker"],
      links: [
        {
          name: "Joke Endpoint",
          uri: "https://dad.croissant.one/api/joke",
        },
        {
          name: "Pickup Line Endpoint",
          uri: "https://dad.croissant.one/api/pickup",
        },
        {
          name: "Github",
          uri: "https://github.com/arhammusheer/dad-api",
        },
      ],
      image: "/assets/dad.png",
    },
    {
      name: "Loud Noises",
      description:
        "A web app to play loud noises when you're in the same chat room as them. Press the big red button to play a list of sounds on their device. No registration required.",
      contribution:
        "Built a full stack app with socket.io and deployed it on Heroku.",
      technologies: ["Node.js", "Express", "Socket.io", "Heroku", "Bootstrap"],
      links: [
        {
          name: "Website",
          uri: "https://loudnoises.herokuapp.com/",
        },
      ],
      image: "/assets/big-red-button.svg",
    },
  ],
  skills: [

    {
      name: "JavaScript",
      icon: SiJavascript,
    },
    {
      name: "Python",
      icon: SiPython,
    },
    {
      name: "Clang",
      icon: SiC,
    
	},
	{
      name: "Arduino",
      icon: SiC,
    
	},
    {
      name: "React",
      icon: FaReact,
    },
    {
      name: "Node.js",
      icon: FaNode,
    },
    {
      name: "Docker",
      icon: FaDocker,
    },

    {
      name: "Google Cloud",
      icon: SiGooglecloud,
    },
    {
      name: "Kubernetes",
      icon: SiKubernetes,
    },
	{
      name: "Typescript",
      icon: SiTypescript,
    }
  ],
  social: [
    {
      name: "Resume",
      icon: FaNewspaper,
      uri: "Erik-Uden-Resume.pdf",
      hover: {
        bg: "red.500",
        color: "white",
      },
    },
    {
      name: "Github",
      icon: FaGithub,
      uri: "https://github.com/erikuden",
      hover: {
        bg: "gray.900",
        color: "white",
      },
    },
    {
      name: "LinkedIn",
      icon: FaLinkedin,
      uri: "https://www.linkedin.com/in/erikuden",
      hover: {
        bg: "blue.500",
        color: "white",
      },
    },
  ],

  contact: {
    email: "erik@uden.ai",
	phone: "+49 176 83883250",
  },
} as IMe;

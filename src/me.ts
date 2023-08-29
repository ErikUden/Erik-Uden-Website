import {
  FaDocker,
  FaGithub,
  FaLinkedin,
  FaNewspaper,
  FaNode,
  FaPager,
  FaReact,
  FaAws,
  FaDatabase,
  FaJava
} from "react-icons/fa";
import {
  DiAndroid,
  DiApple,
  DiDebian,
} from "react-icons/di";
import {
  SiC,
  SiGooglecloud,
  SiJavascript,
  SiKubernetes,
  SiPython,
  SiTypescript,
  SiTensorflow,
  SiArduino,
  SiMongodb,
  SiExpress,
  SiPytorch,
  SiCsharp,
  SiCplusplus,
  SiAngularjs,
  SiRuby,
  SiRubyonrails,
  SiRaspberrypi,
  SiFreebsd,
  SiLinux,
  SiKalilinux,
  SiUbuntu,
  SiLinuxmint,
  SiWordpress,
  SiMysql,
  SiWindows,
  SiMacos,
  SiKdenlive,
  SiOracle,
  SiElixir,
  SiElasticsearch,
  SiPleroma,
  SiMastodon,
  SiDiaspora,
  SiGnusocial,
  SiPostgresql,
  
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
  image: "/assets/erikuden4.png",
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
      name: "MastodonDE",
      description:
        "A decentralized social network entirely self-hosted with no ads, algorithms, or data harvesting!",
      contribution:
        "Transported hardware in November 2022, transferred domain in February 2023, transported rack and more server hardware in June 2023, built the physical server & connected them with networking devices with Nick for the first two weeks in July 2023, during the same time I setup the Mastodon software and NGINX.",
      technologies: [
	    "AGPLv3",
        "Fediverse",
        "Mastodon",
        "Ruby on Rails",
        "Networking",
        "Self-Hosted",
      ],
      links: [
        {
          name: "Website",
          uri: "https://mastodon.de/",
        },
		{
          name: "My Account",
          uri: 'https://mastodon.de/@ErikUden',
		  link: '<a rel="me" href="https://mastodon.de/@ErikUden">Mastodon</a>'
        },
        {
          name: "Glitch-Soc",
          uri: "https://github.com/glitch-soc/mastodon",
        },
		{
          name: "Update Thread",
          uri: "https://mastodon.de/@Erik@social.uden.ai/110592449230695626",
        },
		{
          name: "Patreon",
          uri: "https://patreon.com/MastodonDE",
        }
      ],
      image: "/assets/mastodonDE-logo-purple.png",
    },
	{
      name: "The Uden AI Federated Network",
      description:
        "A social media, cloud/web-hosting and direct communication network that aims to mainly increase user privacy and bring forward the decentralization of the modern Internet. Based on Pleroma + Soapbox which was chosen due to being lightweight.",
      contribution:
        "Modified the source code to allow quote posts, editing posts, and a smoother more minimalist frontend as well as modularity. Recompiled for ARM devices such as a Raspberry Pi.",
      technologies: [
	    "AGPLv3",
        "Fediverse",
        "Elixir",
        "PostgreSQL",
        "Docker",
        "Self-Hosted",
      ],
      links: [
        {
          name: "Website",
          uri: "https://social.uden.ai/",
        },
		{
          name: "My Account",
          uri: "https://social.uden.ai/@Erik",
        },
        {
          name: "GitLab (FE)",
          uri: "https://gitlab.com/soapbox-pub/soapbox-fe",
        },
		{
          name: "GitLab (BE)",
          uri: "https://gitlab.com/soapbox-pub/rebased",
        }
      ],
      image: "/assets/Uden-AI-Logo-Edge.svg",
    },
	{
      name: "The Internet Portal",
      description:
        "With the press of a button, you will be transported to a random website out of over 219 million in our database.",
      contribution:
        "I downloaded all of the internet's domains via ICANN's CZDS API, imported them into a SQL database, open-sourced the source code (AGPLv3) written by Samuel Berman, self-hosted it on Uden AI servers.",
      technologies: [
	    "AGPLv3",
        "HTML",
        "CSS",
        "JS",
        "PHP",
        "MySQL",
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
		{
          name: "Samuel Berman",
          uri: "https://sberman.me/",
        },
      ],
      image: "/assets/the-internet-portal-logo-white.svg",
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
      
    }
	
    
  ],
  skills: [
	{
      name: "TensorFlow",
      icon: SiTensorflow,
    },
	{
      name: "Java",
      icon: FaJava,
    },
    {
      name: "Python",
      icon: SiPython,
    },
	{
      name: "PyTorch",
      icon: SiPytorch,
    },
    {
      name: "Clang",
      icon: SiC,
    
	},
	{
      name: "C++",
      icon: SiCplusplus,
    
	},
	{
      name: "C#",
      icon: SiCsharp,
    
	},
	{
      name: "Elixir",
      icon: SiElixir,
    
	},
	{
      name: "Arduino",
      icon: SiArduino,
    
	},
	{
      name: "Raspberry Pi",
      icon: SiRaspberrypi,
    
	},
	{
      name: "TypeScript",
      icon: SiTypescript,
    },
	{
      name: "JavaScript",
      icon: SiJavascript,
    },
	{
      name: "PostgreSQL",
      icon: SiPostgresql,
    },
	{
      name: "MongoDB",
      icon: SiMongodb,
    
	},
	{
      name: "Express.js",
      icon: SiExpress,
    
	},
    {
      name: "React.js",
      icon: FaReact,
    },
	{
      name: "Angular.js",
      icon: SiAngularjs,
    },
    {
      name: "Node.js",
      icon: FaNode,
    },
	{
      name: "Elasticsearch",
      icon: SiElasticsearch,
    },
    {
      name: "Docker",
      icon: FaDocker,
    },
    {
      name: "Kubernetes",
      icon: SiKubernetes,
    },
	{
      name: "AWS",
      icon: FaAws,
    },
	{
      name: "Oracle",
      icon: SiOracle,
    },
	{
      name: "WordPress",
      icon: SiWordpress,
    },
	{
      name: "Ruby",
      icon: SiRuby,
    },
	{
      name: "Ruby on Rails",
      icon: SiRubyonrails,
    },
	{
      name: "Mastodon",
      icon: SiMastodon,
    },
	{
      name: "Pleroma",
      icon: SiPleroma,
    },
	{
      name: "Diaspora",
      icon: SiDiaspora,
    },
	{
      name: "GNUSocial",
      icon: SiGnusocial,
    },
	{
      name: "Android",
      icon: DiAndroid,
    },
	{
      name: "iOS",
      icon: DiApple,
    },
	{
      name: "Linux",
      icon: SiLinux,
    },
	{
      name: "Kali",
      icon: SiKalilinux,
    },
	{
      name: "Ubuntu",
      icon: SiUbuntu,
    },
	{
      name: "Debian",
      icon: DiDebian,
    },
	{
      name: "BSD",
      icon: SiFreebsd,
    },
	{
      name: "Windows",
      icon: SiWindows,
    },
	{
      name: "Video Editing",
      icon: SiKdenlive,
    },
  ],
  social: [
    {
      name: "Resume",
      icon: FaNewspaper,
      uri: "/assets/Erik-Uden-Resume-EN-2023-01-11.pdf",
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
  },
} as IMe;

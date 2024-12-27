import { link } from "fs";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
  { name: "Blog", link: "/blog" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: {
      src: "/b1.svg",
      height: 541,
      width: 689,
      alt: "Project 2",
    },
    spareImg: {
      src: "",
      height: 300,
      width: 464,
      alt: "",
    },
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: {
      src: "",
      height: 0,
      width: 0,
      alt: "",
    },
    spareImg: {
      src: "",
      height: 0,
      width: 0,
      alt: "",
    },
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: {
      src: "",
      height: 0,
      width: 0,
      alt: "",
    },
    spareImg: {
      src: "",
      height: 0,
      width: 0,
      alt: "",
    },
  },
  {
    id: 4,
    title: "Tech enthusiast with immense passion for development.",
    description: "Living to change the world",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: {
      src: "/grid.svg",
      height: 180,
      width: 351,
      alt: "grid",
    },
    spareImg: {
      src: "/b4.svg",
      height: 96,
      width: 208,
      alt: "B4",
    },
  },

  {
    id: 5,
    title: "Making real world changes via the keyboard!!!",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: {
      src: "/b5.svg",
      height: 383,
      width: 500,
      alt: "B5",
    },
    spareImg: {
      src: "/grid.svg",
      height: 185,
      width: 351,
      alt: "",
    },
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: {
      src: "",
      height: 0,
      width: 0,
      alt: "",
    },
    spareImg: {
      src: "",
      height: 0,
      width: 0,
      alt: "",
    },
  },
];

export const projects = [
  {
    id: 1,
    title: "Bankerr.com - the all-in-one fiancial service provider",
    des: "A platform where people can create and manage all of their bank accounts.",
    img: {
      src: "/akerr.png",
      height: 300,
      width: 464,
      alt: "Project 1",
    },
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "https://bankerr-solutions.vercel.app/",
    isRepoBased: false,
  },
  {
    id: 2,
    title: "Collabor8 - a realtime collaborative whiteboard",
    des: "Built with Go (Golang), gRPC, and WebRTC, Collaor8 is web application where multiple users can draw on a shared whiteboard in real time, with low latency and high reliability.",
    img: {
      src: "/p2.svg",
      height: 300,
      width: 464,
      alt: "Project 2",
    },
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "https://github.com/dawitel/collabor8_backend",
    isRepoBased: true,
  },
  {
    id: 1,
    title: "Booking.com clone",
    des: "My first ever fullstack project using the MERN stack.",
    img: {
      src: "/ookig.png",
      height: 300,
      width: 464,
      alt: "Project 1",
    },
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "https://booking-x1wd.onrender.com/",
    isRepoBased: false,
  },
  {
    id: 2,
    title: "Discord-clone - Full fledged dicord clone",
    des: "The project where i learned the most, Next JS, CI/CD using circle ci and much more",
    img: {
      src: "/p2.svg",
      height: 300,
      width: 464,
      alt: "Project 2",
    },
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "https://discord-clone.vercel.app/",
    isRepoBased: false,
  },
  {
    id: 3,
    title: "An OS level file system",
    des: "This is where I leared a lot about computers and low level programming. I built this project using GO and it was really hardd...",
    img: {
      src: "",
      height: 300,
      width: 464,
      alt: "Project 3",
    },
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "https://github.com/dawitel/file-system",
    isRepoBased: true,
  },
  {
    id: 4,
    title: "Fully fledged REDIS - in memory database",
    des: "The secnod time I suffered the most... Basically I flet like the God of coding at this point until I realized the first time it was uilt using C (I did it using typescript, yeah) ",
    img: {
      src: "",
      height: 300,
      width: 464,
      alt: "Project 4",
    },
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://github.com/dawitel/redis-clone",
    isRepoBased: true,
  },
  {
    id: 5,
    title: "A vercel clone - yeah vercel!",
    des: "The most famous platform for deploymet, vercel got clonned by me. I built it after I read aout its underlying architecture from a random blog",
    img: {
      src: "/vercel.png",
      height: 300,
      width: 464,
      alt: "Project 5",
    },
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://vercel.vercel.com",
    isRepoBased: false,
  },
  {
    id: 6,
    title: "AI based workflow automation tool",
    des: "I built this tool thinking that I could be the next AI billioniare but was wrong. There are lots of things worth considering to make a product successful such as marketing, user feedback loop, and much more.",
    img: {
      src: "/p2.svg",
      height: 300,
      width: 464,
      alt: "Project 6",
    },
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://streamlineAI.vercel.com",
    isRepoBased: false,
  },
];

export const testimonials = [
  {
    quote:
      "How do you give someone six stars? This is the only question I have since this developer displayed exceptional competence and skill. There is no better Go dev here...... well done.",
    name: "Christopher Jennings",
    title: "CEO, NextLayer Technologies",
    img: {
      link: "/user.png",
      alt: "BK",
      width: 50,
      height: 50,
    },
  },
  {
    quote:
      "Collaborating with Dawit was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Dawit's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Dawit is the ideal partner.",
    name: "Harun Pravan",
    title: "Director @ Progigy infotech",
    img: {
      link: "/user.png",
      alt: "HP",
      width: 50,
      height: 50,
    },
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: {
      nameImg: "/cloudName.svg",
      link: "/cloud.svg",
      height: 10,
      width: 150,
    },
  },
  {
    id: 2,
    name: "appwrite",
    img: {
      nameImg: "/cloudName.svg",
      link: "/app.svg",
      height: 10,
      width: 150,
    },
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: {
      nameImg: "/hostName.svg",
      link: "/host.svg",
      height: 10,
      width: 150,
    },
  },
  {
    id: 4,
    name: "stream",
    img: {
      nameImg: "/streamName.svg",
      link: "/s.svg",
      height: 10,
      width: 100,
    },
  },
  {
    id: 5,
    name: "docker.",
    img: {
      nameImg: "/dockerName.svg",
      link: "/dock.svg",
      height: 10,
      width: 100,
    },
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Backend Engineer Intern - Camara Education",
    desc: "Assisted in the development of a web-based platform using Next JS, enhancing interactivity & performace.",
    className: "md:col-span-2",
    thumbnail: {
      height: 87,
      width: 95,
      link: "/exp1.svg",
    },
  },
  {
    id: 4,
    title: "Fullstack Enginneering Intern - Prodigy InfoTech",
    desc: "Developed and maintained user-facing and backend features for a workflows automation tool using modern technologies like Next JS and gRPC.",
    className: "md:col-span-2",
    thumbnail: {
      height: 87,
      width: 123,
      link: "/exp4.svg",
    },
  },
  {
    id: 3,
    title: "Freelancing",
    desc: "Landed multiple contracts that span range of projects, ranging from simple wesbcrapers to highly sophisticated crypto betting systesm",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: {
      height: 98,
      width: 103,
      link: "/exp3.svg",
    },
  },
  {
    id: 2,
    title:
      "Senior Golang backend engineer - Addispay Financial Tecbologies SC.",
    desc: "Designing, Building and Maintaining multiple  micro-services that require extreme levels of request processing and error tolerance.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: {
      height: 97,
      width: 98,
      link: "/download.jpg",
    },
  },
  {
    id: 2,
    title: "Solidity and Golang developer - Hire Armada",
    desc: "Collaborating senior software engineers, we are currently engaged in building a solution to safeguard the projects that Ethiopian freelancers land with escrow service.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: {
      height: 97,
      width: 98,
      link: "/exp1.svg",
    },
  },
];

export const socialMedia = [
  {
    id: 1,
    img: {
      alt: "GH",
      link: "/git.svg",
      height: 18,
      width: 19,
    },
    link: "https://github.com/dawitel",
  },
  {
    id: 2,
    img: {
      alt: "X",
      link: "/twitter.svg",
      height: 20,
      width: 23,
    },
    link: "https://x.com/DawitEliasge",
  },
  {
    id: 3,
    img: {
      alt: "Ln",
      link: "/link.svg",
      height: 18,
      width: 19,
    },
    link: "https://www.linkedin.com/in/dawit-gebremariam-36bb8b2a6/",
  },

  {
    id: 3,
    img: {
      alt: "In",
      link: "/insta.svg",
      height: 18,
      width: 19,
    },
    link: "https://www.linkedin.com/in/dawit-gebremariam-36bb8b2a6/",
  },
  {
    id: 3,
    img: {
      alt: "UP",
      link: "/upwork-1.svg",
      height: 18,
      width: 19,
    },
    link: "https://www.upwork.com/freelancers/~01424fe0344391f815",
  },
  {
    id: 3,
    img: {
      alt: "TG",
      link: "/telegram-1.svg",
      height: 18,
      width: 19,
    },
    link: "https://t.me/dawiteliaskassaye",
  },
];

import { FaNodeJs, FaReact, FaSass } from "react-icons/fa";
import {
  SiExpressServer,
  SiNextdotjs,
  SiMongodb,
  SiRedux,
  SiPostgresql,
  SiSocketdotio,
  SiJest,
  SiCss3,
  SiHtml5,
} from "react-icons/si";
import { Icon } from "@chakra-ui/react";

export const Skills = [
  {
    icon: (
      <Icon
        _hover={{
          transform: "scale(1.05)",
        }}
        as={FaReact}
        w={10}
        h={10}
        color="blue"
      />
    ),
    title: "React",
    description:
      "React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications.",
    work: "I have used  react in my projects and have experience in using it in atleast 20 different learning  projects",
  },

  {
    icon: (
      <Icon
        _hover={{
          transform: "scale(1.05)",
        }}
        as={FaNodeJs}
        w={10}
        h={10}
        color="green"
      />
    ),
    title: "NodeJS",
    description:
      "Node.js is an open-source, cross-platform JavaScript run-time environment that executes JavaScript code outside of a browser. Node.js lets developers use JavaScript to write command line tools and for server-side scripting—running scripts server-side to produce dynamic web page content before the page is sent to the user.",
    work: "I have used Node in my projects and have experience in using it in atleast 15 different learning  projects",
  },

  {
    icon: (
      <Icon
        _hover={{
          transform: "scale(1.05)",
        }}
        as={SiExpressServer}
        w={10}
        h={10}
        color="green"
      />
    ),
    title: "Express",
    description:
      "Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.",
    work: "I have used Express in my projects and have experience in using it in atleast 15 different learning  projects",
  },

  {
    icon: (
      <Icon
        _hover={{
          transform: "scale(1.05)",
        }}
        as={SiMongodb}
        w={10}
        h={10}
        color="green"
      />
    ),
    title: "MongoDB",
    description:
      "MongoDB is a cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB eschews the use of tables and implements data as flat documents with efficient storage and retrieval.",
    work: "I have used MongoDB in my projects and have experience in using it in atleast 5 different learning  projects",
  },

  {
    icon: (
      <Icon
        _hover={{
          transform: "scale(1.05)",
        }}
        as={FaReact}
        w={10}
        h={10}
        color="blue"
      />
    ),
    title: "React Native",
    description:
      "React Native is an open-source mobile application framework created by Facebook. It is designed to make it easier to build native apps using React. It is based on React, the open-source JavaScript library for building user interfaces.",
    work: `I have used React Native and i know the defrence between native and web apps and with that i'm able to build native apps`,
  },

  {
    icon: (
      <Icon
        _hover={{
          transform: "scale(1.05)",
        }}
        as={SiRedux}
        w={10}
        h={10}
        color="purple"
      />
    ),
    title: "Redux",
    description:
      "Redux is an open-source JavaScript library for managing application state. It is most commonly used with libraries such as React or Angular for building user interfaces. With Redux, your applications can use a predictable state container to manage their UI and data.",
    work: "I have used Redux in my projects and have experience in using it in atleast 3 different learning  projects",
  },

  {
    icon: (
      <Icon
        _hover={{
          transform: "scale(1.05)",
        }}
        as={SiNextdotjs}
        w={10}
        h={10}
        color="grey"
      />
    ),
    title: "NextJS",
    description:
      "Next.js is a JavaScript framework for building efficient and accessible websites and applications. It is maintained by the React community and the open-source ecosystem.",
    work: "I have used Next.js in my projects and have experience in using it in atleast 2 different projects",
  },
  {
    icon: (
      <Icon
        _hover={{
          transform: "scale(1.05)",
        }}
        as={SiPostgresql}
        w={10}
        h={10}
        color="blue"
      />
    ),
    title: "Postgres",
    description:
      "PostgreSQL is a powerful, open source object-relational database system. It has more than 15 years of active development and a proven architecture that has earned it a strong reputation for reliability, data integrity, and correctness.",
    work: "I have used Postgres in my projects and have experience in using it in atleast 10 different projects",
  },

  {
    icon: (
      <Icon
        _hover={{
          transform: "scale(1.05)",
        }}
        as={SiSocketdotio}
        w={10}
        h={10}
        color="grey"
      />
    ),
    title: "Socket.io",
    description:
      "Socket.io is a JavaScript library for real-time applications. It is maintained by the Node.js Foundation and a community of individual developers and companies. Socket.io can be used as a base in the development of single-page or mobile applications.",
    work: "I have used Socket.io in my projects and have experience in using it in atleast 5 different projects",
  },
  {
    icon: (
      <Icon
        _hover={{
          transform: "scale(1.05)",
        }}
        as={SiJest}
        w={10}
        h={10}
        color="orange"
      />
    ),
    title: "Jest",
    description:
      "Jest is a JavaScript testing framework. It is maintained by Facebook and a community of individual developers and companies. Jest can be used as a base in the development of single-page or mobile applications.",
    work: "I have used Jest and i have the knowledge of the testing environment",
  },

  {
    icon: (
      <Icon
        _hover={{
          transform: "scale(1.05)",
        }}
        as={FaSass}
        w={10}
        h={10}
        color="red"
      />
    ),
    title: "Sass",
    description:
      "Sass is an extension of CSS that adds nested rules, variables, mixins, selector inheritance, and more. Sass is maintained by Twitter and a community of individual developers and companies. Sass can be used as a base in the development of single-page or mobile applications.",
    work: "I have used Sass along side CSS in all my projects   ",
  },

  {
    icon: (
      <Icon
        _hover={{
          transform: "scale(1.05)",
        }}
        as={FaReact}
        w={10}
        h={10}
        color="orange"
      />
    ),
    title: "React Testing Library",
    description:
      "React Testing Library is a testing library for React. It is designed to make it easier to build user interfaces. It is based on React, the open-source JavaScript library for building user interfaces.",
    work: "I have used React Testing Library and i have the knowledge of the testing environment",
  },

  {
    icon: "",
    title: "JWT",
    description:
      "JWT is a JSON Web Token. It is maintained by the Node.js Foundation and a community of individual developers and companies. JWT can be used as a base in the development of single-page or mobile applications.",
    work: "I have used JWT in my projects for authentication and have experience in using it in atleast 5 different projects",
  },
  {
    icon: (
      <Icon
        _hover={{
          transform: "scale(1.05)",
        }}
        as={SiHtml5}
        w={10}
        h={10}
        color="orange"
      />
    ),
    title: "HTML",
    description:
      "HTML is the standard markup language for creating web pages. It is maintained by the World Wide Web Consortium (W3C). HTML can be used as a base in the development of single-page or mobile applications.",
    work: "I have used HTML in my projects and have experience in using it in atleast 5 different projects ",
  },
  {
    icon: (
      <Icon
        _hover={{
          transform: "scale(1.05)",
        }}
        as={SiCss3}
        w={10}
        h={10}
        color="blue"
      />
    ),
    title: "CSS",
    description:
      "CSS is a style sheet language used for describing the presentation of a document written in a markup language. CSS is maintained by the World Wide Web Consortium (W3C). CSS can be used as a base in the development of single-page or mobile applications.",

    work: "I have used Sass along side CSS in all my projects  ",
  },
];

export const porjects = [
  {
    title: "Funter",
    description: ` A react application that lets people contribute to 2021 
        trends, specifically games, movies, and cryptocurrencies`,
    image: "https://i.imgur.com/f0wWOPt.png",
    tags: ["React", "NodeJS", "Express", "MongoDB"],
    link: "https://funter.netlify.app/",
    github: "https://github.com/Code-stalkers",
  },
  {
    title: "Tangled",
    description: `A next js application Tangled is an everyday customer 
      relationship management system to help you keep track of 
      your customers, tasks, appointments, etc. The Tangled is 
      offered as an open-source`,
    image: "https://i.imgur.com/BIul5mu.png",
    tags: ["Nextjs", "NodeJS", "Express", "Postgres", "socket.io", "Redux"],
    link: "https://tangeld11.netlify.app/",
    github: "https://github.com/support-team-codefellows",
  },
  {
    title: "PART HUNT",
    description: `A vanilla JavaScript app that finds part-time jobs`,
    image: "https://i.imgur.com/L4PczDy.png",
    tags: ["Vanilla JS", "CSS", "HTML"],
    link: "https://vteam-201.github.io/PartHunt/",
    github: "https://github.com/Vteam-201/PartHunt",
  },

  {
    title: "Store",
    description: `A react application that lets users  look for items they are interested in, and add them to their cart. it also lets users checkout and pay for their cart. in the project we learnd redux, redux tool-kit and redux-thunk`,
    image: "https://i.imgur.com/qn7qZPA.png",
    tags: ["React", "NodeJS", "Express", "Postgres", "Redux"],
    link: "https://store401front.netlify.app/",
    github: "https://github.com/Marwan-Zakia/storefront-",
  },
];

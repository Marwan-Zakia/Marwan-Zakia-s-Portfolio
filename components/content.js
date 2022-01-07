import React from "react";
import {
  Box,
  Heading,
  Link,
  Image,
  Text,
  Divider,
  HStack,
  Tag,
  Wrap,
  WrapItem,
  SpaceProps,
  useColorModeValue,
  Container,
  VStack,
  Button,
  IconButton,
  Icon,
} from "@chakra-ui/react";
import Linkn from "next/link";
//import github and linkedin icons
import { FaGithub, FaLinkedin } from "react-icons/fa";
const porjects = [
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
    image: "https://i.imgur.com/f0wWOPt.png",
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

const BlogTags = (props) => {
  return (
    <HStack spacing={1} marginTop={props.marginTop}>
      {props.tags.map((tag) => {
        return (
          <Tag
            width="auto"
            variant="solid"
            bg="red.600"
            fontSize="sm"
            backgroundSize="30px 40px"
            opacity="0.4"
            height="100%"
            key={tag}
          >
            {tag}
          </Tag>
        );
      })}
    </HStack>
  );
};

export function BlogAuthor(props) {
  return (
    <HStack marginTop="2" spacing="2" display="flex" alignItems="center">
      <Image
        borderRadius="full"
        boxSize="40px"
        src="https://100k-faces.glitch.me/random-image"
        alt={`Avatar of ${props.name}`}
      />
      <Text fontWeight="medium">{props.name}</Text>
      <Text>—</Text>
      <Text>{props.date.toLocaleDateString()}</Text>
    </HStack>
  );
}

const ArticleList = () => {
  return (
    <>
      <Container maxW={"7xl"} p="12">
        <Box
          marginTop={{ base: "1", sm: "5" }}
          display="flex"
          flexDirection={{ base: "column", sm: "row" }}
          justifyContent="space-between"
        >
          <Box
            display="flex"
            flex="1"
            marginRight="3"
            position="relative"
            alignItems="center"
          >
            <Box
              width={{ base: "100%", sm: "85%" }}
              zIndex="2"
              marginLeft={{ base: "0", sm: "5%" }}
              marginTop="5%"
            >
              <Link textDecoration="none" _hover={{ textDecoration: "none" }}>
                <Image
                  borderRadius="lg"
                  src={"https://i.imgur.com/zIlyva9.jpg"}
                  alt="some good alt text"
                  objectFit="contain"
                />
              </Link>
            </Box>
          </Box>
          <Box
            display="flex"
            flex="1"
            flexDirection="column"
            justifyContent="center"
            marginTop={{ base: "3", sm: "0" }}
          >
            <BlogTags tags={["whoami"]} />

            <Heading marginTop="1 ">
              <Link textDecoration="none" _hover={{ textDecoration: "none" }}>
                My name is Marwan Zakia
              </Link>
            </Heading>
            <Text
              as="p"
              marginTop="2"
              color={useColorModeValue("gray.700", "gray.200")}
              fontSize="lg"
            >
              I am a full stack developer. I am passionate about learning new
              technologies and building things that make a difference. I am
              currently looking for an opportunity to contribute and grow my
              skills and knowledge.
              <Link
                textDecoration="none"
                _hover={{ textDecoration: "none" }}
                href=""
              ></Link>
            </Text>
          </Box>
        </Box>
        <Heading as="h2" marginTop="5">
          Here are some of my recent projects
        </Heading>
        <Divider marginTop="5" />
        {/* {"start"} */}

        {porjects.map((item, i) => {
          return (
            <Wrap key={i} spacing="30px" marginTop="5">
              <WrapItem
                width={{ base: "100%", sm: "45%", md: "45%", lg: "30%" }}
              >
                <Box w="100%">
                  <Box borderRadius="lg" overflow="hidden">
                    <Link
                      textDecoration="none"
                      _hover={{ textDecoration: "none" }}
                    >
                      <Image
                        transform="scale(1.0)"
                        src={item.image}
                        alt="some text"
                        objectFit="contain"
                        width="100%"
                        transition="0.3s ease-in-out"
                        _hover={{
                          transform: "scale(1.05)",
                        }}
                      />
                    </Link>
                  </Box>

                  <BlogTags tags={item.tags} marginTop="3" />
                  <Heading fontSize="xl" marginTop="2">
                    <Link
                      textDecoration="none"
                      _hover={{ textDecoration: "none" }}
                    >
                      {item.title}
                    </Link>
                  </Heading>
                  <Text as="p" fontSize="md" marginTop="2">
                    {item.description}
                  </Text>
                  <HStack>
                    <Button
                      variantColor="blue"
                      marginRight="2"
                      onClick={() =>
                        window === undefined
                          ? console.log("window is undefined")
                          : (window.location.href = `${item.github}`)
                      }
                    />
                    <Linkn href={item.github}>
                      <Icon as={FaGithub} />
                    </Linkn>
                  </HStack>
                </Box>
              </WrapItem>
            </Wrap>
          );
        })}

        <VStack paddingTop="40px" spacing="2" alignItems="flex-start">
          <Heading as="h2">More about me</Heading>
          <Text as="p" fontSize="lg"></Text>
          <Text as="p" fontSize="lg">
            I interested about technology, design, and video games. and
            currently looking for a job in the field of software development.
            <Link href="https://www.linkedin.com/in/marwan-zakia/" textDecoration="none" _hover={{ textDecoration: "none" }}>
              {" "}
              here is my{" "}

            </Link>
          </Text>
          <Text as="p" fontSize="lg"></Text>
        </VStack>
      </Container>
    </>
  );
};

export default ArticleList;

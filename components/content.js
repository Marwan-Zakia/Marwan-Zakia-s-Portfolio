import React from "react";
import {
  Box,
  Heading,
  Image,
  Text,
  Divider,
  HStack,
  Tag,
  Wrap,
  WrapItem,
  useColorModeValue,
  Container,
  VStack,
  Icon,
  Button,
} from "@chakra-ui/react";

import Link from "next/link";
import SimpleThreeColumns from "./skills";
import { porjects } from "./data";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { AiOutlineDownload } from "react-icons/ai";

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
            _hover={{
              transform: "scale(1.06)",
              opacity: "0.8",
              color: "white",
            }}
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
              <Box>
                <Image
                  borderRadius="lg"
                  src={"https://i.imgur.com/zIlyva9.jpg"}
                  alt="some good alt text"
                  objectFit="contain"
                />
              </Box>
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
              My name is
              <HStack>
                <div>
                  <div className="diva">Marwan Zakia</div>
                </div>
              </HStack>
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
              <br />
              Follow Me on
              {"  "}
              <Link href="https://www.linkedin.com/in/marwan-zakia/" passHref>
                <Icon
                  as={FaLinkedin}
                  _hover={{
                    transform: "scale(1.5)",
                  }}
                />
              </Link>
              {"  "}
              {"  "}
              and
              {"  "}
              {"  "}
              <Link
                href="https://github.com/Marwan-Zakia?tab=repositories"
                passHref
              >
                <Icon
                  as={FaGithub}
                  _hover={{
                    transform: "scale(1.5)",
                  }}
                />
              </Link>
              {"  "}
              {"  "}
              and be sure download my resume
              {"  "}
              <Link
                href={
                  "https://drive.google.com/uc?id=1kiHZTwUgKphbtjT4omAwlvaoGTNrCl-u&export=download"
                }
                download={`https://drive.google.com/uc?id=1kiHZTwUgKphbtjT4omAwlvaoGTNrCl-u&export=download`}
                title="Marwan Zakia Resume"
                target="_blank"
                passHref
              >
                <Icon
                  as={AiOutlineDownload}
                  _hover={{
                    transform: "scale(1.5)",
                  }}
                />
              </Link>
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
            <Wrap key={i} spacing="30px" marginTop="5" w="200">
              <WrapItem w="200">
                <Box w="100%">
                  <HStack marginTop="3">
                    <BlogTags tags={item.tags} marginTop="3" />
                    <Icon
                      _hover={{
                        transform: "scale(1.5)",
                      }}
                      name="github"
                      as={FaGithub}
                      onClick={() => {
                        window.open(item.github, "_blank");
                      }}
                      Pointer="cursor"
                    />
                  </HStack>
                  <Heading fontSize="xl" marginTop="2">
                    <Heading>{item.title}</Heading>
                  </Heading>
                  <Text as="p" fontSize="md" marginTop="2">
                    {item.description}
                  </Text>

                  <Box borderRadius="lg" overflow="hidden">
                    <Box>
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
                        onClick={() => {
                          window.open(item.link, "_blank");
                        }}
                      />
                    </Box>
                  </Box>
                </Box>
              </WrapItem>
            </Wrap>
          );
        })}
        <VStack paddingTop="40px" spacing="2" alignItems="flex-start">
          <Heading>Technologies I`ve used </Heading>
          <SimpleThreeColumns />
        </VStack>

        <VStack paddingTop="40px" spacing="2" alignItems="flex-start">
          <Heading as="h2">More about me</Heading>
          <Text as="p" fontSize="lg"></Text>
          <Text as="p" fontSize="lg">
            I interested about technology, design, and video games. and
            currently looking for a job in the field of software development.
            {"  "}
            <Link href="https://www.linkedin.com/in/marwan-zakia/" passHref>
              <Icon
                as={FaLinkedin}
                _hover={{
                  transform: "scale(1.5)",
                }}
              />
            </Link>
            {"  "} {"  "}
            and theres a lot more here
            {"  "}
            {"  "}
            <Link
              href="https://github.com/Marwan-Zakia?tab=repositories"
              passHref
            >
              <Icon
                as={FaGithub}
                _hover={{
                  transform: "scale(1.5)",
                }}
              />
            </Link>
            {"  "}
            {"  "}
            Download my resume
            {"  "}
            <Link
              href={
                "https://drive.google.com/uc?id=1kiHZTwUgKphbtjT4omAwlvaoGTNrCl-u&export=download"
              }
              download={`https://drive.google.com/uc?id=1kiHZTwUgKphbtjT4omAwlvaoGTNrCl-u&export=download`}
              title="Marwan Zakia Resume"
              target="_blank"
              passHref
            >
              <Icon
                as={AiOutlineDownload}
                _hover={{
                  transform: "scale(1.5)",
                }}
              />
            </Link>
          </Text>
        </VStack>
      </Container>
    </>
  );
};

export default ArticleList;

import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  Icon,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import ArticleList from "..//components/content";
import { ReactElement } from "react";
import Head from "next/head";

export default function Home() {
  return (
		<>

			<ArticleList />
		</>
	);
}

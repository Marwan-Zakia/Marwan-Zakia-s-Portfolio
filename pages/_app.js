import "../styles/globals.css";
import {
  extendTheme,
  ChakraProvider,
  Box,
  useColorModeValue,
} from "@chakra-ui/react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ArticleList from "../components/content";
import Head from "next/head";
function App({ Component, pageProps }) {
  return (
		<>
			<ChakraProvider>
				<Head>
					<title>Marwan Zakia`s portfolio</title>
					<meta
						property="og:title"
						content="Marwan Zakia's portfolio"
						key="title"
					/>
					<meta
						property="og:image"
						content="Marwan Zakia image"
						key="image"
					/>
					<meta
						property="og:title"
						content="Marwan Zakia "
						key="marwan"
					/>
					<meta property="og:title" content="Marwan" key="name" />
					<meta
						name="viewport"
						content="initial-scale=1.0, width=device-width"
					/>
					<meta
						name="description"
						content="Marwan Zakia is a full stack developer. I am passionate about
							learning new technologies and building things that make
							a difference. I am currently looking for an opportunity
							to contribute and grow my skills and knowledge."
						key="description"
					/>
				</Head>
				<Box
					zIndex="-1"
					position="absolute"
					width="100%"
					height="100%"
				>
					<Box
						bgGradient={{
							lg: useColorModeValue(
								"radial(blue.600 1px, transparent 1px)",
								"radial(green.600 1px, transparent 1px)",
							),
							md: useColorModeValue(
								"radial(blue.600 1.5px, transparent 1.5px)",
								"radial(green.600 1.5px, transparent 1.5px)",
							),
							sm: useColorModeValue(
								"radial(blue.600 1px, transparent 1px)",
								"radial(green.600 1px, transparent 1px)",
							),
						}}
						backgroundSize="20px 20px"
						opacity="0.4"
						height={{ lg: "100%", sm: "100%" }}
					/>
				</Box>
				<Header />
				<Component {...pageProps} />

				<Footer />
			</ChakraProvider>
		</>
	);
}

export default App;

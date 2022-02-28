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
function App({ Component, pageProps }) {
  return (
    <>
      <ChakraProvider>
        <Box zIndex="-1" position="absolute" width="100%" height="100%">
          <Box
            bgGradient={{
              lg: useColorModeValue(
                "radial(blue.600 1px, transparent 1px)",
                "radial(green.600 1px, transparent 1px)"
              ),
              md: useColorModeValue(
                "radial(blue.600 1.5px, transparent 1.5px)",
                "radial(green.600 1.5px, transparent 1.5px)"
              ),
              sm: useColorModeValue(
                "radial(blue.600 1px, transparent 1px)",
                "radial(green.600 1px, transparent 1px)"
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

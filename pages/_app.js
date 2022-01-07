import "../styles/globals.css";
import {
  extendTheme,
  ChakraProvider,
  Box,
  useColorModeValue,
} from "@chakra-ui/react";
import Footer from "../components/Footer";
import Header from "../components/Header";
const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
};

const theme = extendTheme({ colors });

function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <>
        <Box zIndex="1" width="100%" position="absolute" height="100%">
          <Box
            bgGradient={useColorModeValue(
              "radial(green.600 1px, transparent 1px)",
              "radial(green.600 1px, transparent 1px)"
            )}
            backgroundSize="20px 20px"
            opacity="0.4"
            height="100%"
          />
        </Box>
      </>

      <Component {...pageProps} />
      <Footer />
    </ChakraProvider>
  );
}

export default App;

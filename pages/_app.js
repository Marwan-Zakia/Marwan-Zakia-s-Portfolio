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
      <Header  />
      <>
  
      </>

      <Component {...pageProps} />
      <Footer />
    </ChakraProvider>
  );
}

export default App;

import "../styles/globals.css";
import { extendTheme, ChakraProvider } from "@chakra-ui/react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ArticleList from '../components/content'



function App({ Component, pageProps }) {
  return (
    <>
      <ChakraProvider >
        <Header   />
        <Component {...pageProps} />
        <ArticleList />
        <Footer />
      </ChakraProvider>
    </>
  );
}

export default App;

// export const getStaticProps = async () => {
//   const content = await import("../content/articles.json");
//   return {
//     props: {
//       articles: content.default,
//     },
//   };
// }
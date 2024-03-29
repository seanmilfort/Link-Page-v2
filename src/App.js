import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import Header from './components/Header';
import SocialLinks from  './components/SocialLinks';
import SocialButtons from './components/SocialButtons';

import { extendTheme } from "@chakra-ui/react";
// import "@fontsource/roboto";
// import "@fontsource/montserrat/300.css"
import "@fontsource/lato";

const customTheme = extendTheme({
  fonts: {
      heading: "Lato",
      body: "Lato"
  }
})


function App() {
  return (
    <ChakraProvider theme={customTheme}>
      <main>
        <Header />
        <SocialLinks />
        <SocialButtons />
      </main>
    </ChakraProvider>
  );
}

export default App;

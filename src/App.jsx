import React from "react";
import About from "./components/About";
import Cta from "./components/Cta";
import Footer from "./components/Footer";
import Responsive from "./components/nav/Responsive";
import Section from "./components/Section ";
import Showcase from "./components/Showcase";

const App = () => {
  return (
    <>
      <Responsive />
      <Showcase />
      <Section />
      <About />
      <Cta />
      <Footer />
    </>
  );
};

export default App;

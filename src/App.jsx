import React from "react";
import Nav from "../src/components/Nav/Nav";
import Home from "../src/components/Home/Home";
import About from "../src/components/About/About";
import Project from "../src/components/Project/Project";
import Contact from "../src/components/Contact/Contact";

const App = () => {
  return (
    <>
      <Nav />
      <Home />
      <About />
      <Project />
      <Contact />
    </>
  );
};

export default App;

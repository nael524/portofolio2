import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import AboutPages from "./pages/AboutPages";
 import Contact from "./components/Contact";
 import Skills from "./components/Skills";
  const App = () => {
  return (
    <>
      <Header />
      <div id="home">
        <About />
      </div>

      {/* Scroll target: hanya bagian ini */}
      <div id="about">
        <AboutPages />
      </div>

      <div id="skills">
        <Skills/>
      </div>
    
      <div id="contact">
        <Contact />
      </div>
    </>
  );
};

export default App;

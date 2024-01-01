import React, { useState } from "react";

import "./App.css";
import Header from "./components/header";
import TopComp from "./components/topComp";
import Skills from "./components/skills";
import Profile from "./components/profile";
import Projects from "./components/projects";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <Header />
      <TopComp />
      <Skills />
      <Profile />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;

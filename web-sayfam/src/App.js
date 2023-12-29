import React from "react";

import "./App.css";
import Header from "./components/header";
import TopComp from "./components/topComp";
import Skills from "./components/skills";
import Profile from "./components/profile";

function App() {
  return (
    <div className="App">
      <Header />
      <TopComp />
      <Skills />
      <Profile />
    </div>
  );
}

export default App;

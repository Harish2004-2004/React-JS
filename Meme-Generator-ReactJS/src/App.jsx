import React from "react";
import Navbar from "./components/Navbar";
import Meme from "./components/Meme";
import Count from "./components/Count";
import { useState } from "react";

const App = () => {

  return(
    <div className="main-container">
      <Navbar />
      <Meme /> 
    </div>
  );
}

export default App;
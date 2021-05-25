import { useState } from "react";

import shoppingIcon from "./assets/shopping-icon.svg";

import "./App.css";

function App() {
  return (
    <>
      <nav className="nav">
        <img className="nav-icon" src={shoppingIcon} alt="shopping icon" />
        <h1 className="nav-title">Shopping List</h1>
      </nav>

      <section className="container">
        
      </section>
    </>
  );
}

export default App;

import React from "react";
import Home from "./components/Home";
import Destinations from "./components/Destinations";
import Packages from "./components/Packages";
import Booking from "./components/Booking";
import Contact from "./components/Contact";
import "./App.css";

function App() {
  return (
    <div>
      <nav>
        <h2>TravelGo</h2>

        <a href="#home">Home</a>
        <a href="#destinations">Destinations</a>
        <a href="#packages">Packages</a>
        <a href="#booking">Booking</a>
        <a href="#contact">Contact</a>
      </nav>

      <Home />
      <Destinations />
      <Packages />
      <Booking />
      <Contact />

    </div>
  );
}

export default App;
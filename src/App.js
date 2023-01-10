import logo from "./logo.svg";
import "./App.css";

import Home from "./comp/home/Home";
import About from "./comp/aboutUs/About";

// import Gallery from './comp/Gallery';
import Footer from "./comp/footer/Footer";
import Team from "./comp/team/Team";
import Events from "./comp/events/Events";

import styled from "styled-components";
import ButtonAppBar from "./comp/nav/navbar";
import Menu from "./comp/menu/menu";
import Gallery from "./comp/Gallery/Gallery";

function App() {
  return (
    <div className="App">
      <Menu id="menu"/>
      <Home id="home"/>
      <About id="about" />
      <Events id="events" />

      <Gallery id="gallery" />
      <Team id="team"/>
      <Footer />
    </div>
  );
}

export default App;

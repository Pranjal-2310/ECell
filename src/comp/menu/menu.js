import React from "react";
import "./menu.css"
import Swwe from "./menulogic";
import { useEffect } from "react";

// import Footer from "./comp/footer/Footer";
// import Team from "./comp/team/Team";
// import Events from "./comp/events/Events";

// import styled from "styled-components";
// import ButtonAppBar from "./comp/nav/navbar";
// import Menu from "./comp/menu/menu";
// import Gallery from "./comp/Gallery/Gallery";



const Menu = () => {
    useEffect(()=>{
        Swwe();
    },[])
    
  return (
    <div>
      <header className="cd-header">
        <div className="header-wrapper">
          <div className="logo-wrap">
            <a href="#" className="hover-target">
              <span></span>
            </a>
          </div>
          <div className="nav-but-wrap">
            <div className="menu-icon hover-target">
              <span className="menu-icon__line menu-icon__line-left"></span>
              <span className="menu-icon__line"></span>
              <span className="menu-icon__line menu-icon__line-right"></span>
            </div>
          </div>
        </div>
      </header>
      <div className="nav">
        <div className="nav__content">
          <ul className="nav__list">
          <li className="nav__list-item">
              <a href="#" className="hover-target" >
                Home.
              </a>
            </li><li className="nav__list-item">
              <a href="#about" className="hover-target">
                About.
              </a>
            </li><li className="nav__list-item">
              <a href="#event" className="hover-target" >
                Events.
              </a>
            </li><li className="nav__list-item">
              <a href="#gallery" className="hover-target">
                Gallery.
              </a>
            </li><li className="nav__list-item">
              <a href="#team" className="hover-target">
                Team
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="cursor" id="cursor"></div>
      <div className="cursor2" id="cursor2"></div>
      <div className="cursor3" id="cursor3"></div>

      
    </div>
  );
};

export default Menu;

import React from "react";
import "./menu.css"
import Swwe from "./menulogic";
import { useEffect } from "react";
import Logo from './logo.png'

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
            <li className="nav__list-item active-nav">
              <a href="#" className="hover-target">
                Home
              </a>
            </li>
            <li className="nav__list-item">
              <a href="#" className="hover-target">
                About 
              </a>
            </li>
            <li className="nav__list-item">
              <a href="#" className="hover-target">
                Event
              </a>
            </li>
            <li className="nav__list-item">
              <a href="#" className="hover-target">
                Gallery
              </a>
            </li>
            <li className="nav__list-item">
              <a href="#" className="hover-target">
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

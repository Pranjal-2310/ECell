import { Margin } from "@mui/icons-material";
import React from "react";
import "./AboutStyle.css";
const About = () => {
  return (
    <div>
      <div class="about-section">
        <div class="inner-container">
          <h1 style={{ color: "#000" ,paddingTop:"1.5px" }}>About</h1>
          
          <p class="text" style={{ margin: "16px", lineHeight: "1" }}>
            The Entrepreneurship Cell ,LNMIIT is a group of passionate and
            exuberant students at LNMIIT, Jaipur working on promoting the start
            up culture and a spirit of entrepreneurship among the youngsters.
            Being one of the most active E-Cells , we attend events related to
            entrepreneurship on a frequent basis in or outside Jaipur. Not just
            this, we ourselves organize a wide variety of events and
            competitions for brain storming the budding entrepreneurs.
          </p>
          <div class="skills">
            <span style={{ color: "#000" ,width:"60%", margin:"auto"}}>
              "If people haven't laughed at your dreams, then you aren't
              dreaming big enough, just keep pushing forward" 
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

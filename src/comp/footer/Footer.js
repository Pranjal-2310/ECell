import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyle.js";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";
import MessageIcon from "@mui/icons-material/Message";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";

import { color } from "@mui/system";
const Footer = () => {
  return (
    <Box>
      <h1 style={{ color: "#ceefff", textAlign: "center", marginTop: "-50px", fontFamily:"Arial, Helvetica, sans-serif" }}>
        E-Cell LNMIIT
      </h1>
      <Container>
        <Row style={{marginLeft: "190px"}}>
          <Column>
            <Heading>Important Links</Heading>
            <FooterLink href="#"><span style={{ marginLeft: "10px" ,color:"#fff"}}>Home</span></FooterLink>
			<FooterLink href="#"><span style={{ marginLeft: "10px" ,color:"#fff"}}>About Us</span></FooterLink>
            <FooterLink href="#"><span style={{ marginLeft: "10px" ,color:"#fff"}}>Events</span></FooterLink>
			<FooterLink href="#"><span style={{ marginLeft: "10px" ,color:"#fff"}}>Gallery</span></FooterLink>
		
			<FooterLink href="#"><span style={{ marginLeft: "10px" ,color:"#fff"}}>Team</span></FooterLink>
		
          </Column>

          <Column>
            <Heading>Contact Us</Heading>
            <FooterLink href="#">
			<span style={{ marginLeft: "10px" ,color:"#fff"}}>
              <LocationOnIcon />
              Address
			  </span>
            </FooterLink>
            <FooterLink href="#">
			<span style={{ marginLeft: "10px" ,color:"#fff"}}>
              <EmailIcon />
              Email
			  </span>
            </FooterLink>
            <FooterLink href="#">
			<span style={{ marginLeft: "10px" ,color:"#fff"}}>
              <CallIcon />
              Contact
			  </span>
            </FooterLink>
            <FooterLink href="#">
			<span style={{ marginLeft: "10px" ,color:"#fff"}}>
              <MessageIcon />
              Messenger
			  </span>
            </FooterLink>
			
          </Column>
          <Column>
            <Heading>Social Media</Heading>
            <FooterLink href="#">
              <i className="fab fa-facebook-f">
                <span style={{ marginLeft: "10px", color: "#fff" }}>
                  <FacebookIcon />
                  Facebook
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-instagram">
                <span style={{ marginLeft: "10px", color: "#fff" }}>
                  <InstagramIcon />
                  Instagram
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-twitter">
                <span style={{ marginLeft: "10px", color: "#fff" }}>
                  <TwitterIcon />
                  Twitter
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-youtube">
                <span style={{ marginLeft: "10px", color: "#fff" }}>
                  <YouTubeIcon />
                  Youtube
                </span>
              </i>
            </FooterLink>
          </Column>
        </Row>
      </Container>
    </Box>
  );
};
export default Footer;

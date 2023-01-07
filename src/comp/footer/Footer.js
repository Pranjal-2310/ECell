import React from "react";
import {
Box,
Container,
Row,
Column,
FooterLink,
Heading,
} from "./FooterStyle.js";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import MessageIcon from '@mui/icons-material/Message';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
const Footer = () => {
return (
	<Box>
	<h1 style={{ color: "#ceefff",
				textAlign: "center",
				marginTop: "-50px" }}>
		E-Cell LNMIIT
	</h1>
	<Container>
		<Row>
            
		<Column>
			<Heading>Important Links</Heading>
			<FooterLink href="#">Home</FooterLink>
			<FooterLink href="#">About Us</FooterLink>
			<FooterLink href="#">Events</FooterLink>
		</Column>
		
		<Column>
			<Heading>Contact Us</Heading>
			<FooterLink href="#"><LocationOnIcon/>Address</FooterLink>
			<FooterLink href="#"><EmailIcon/>Email</FooterLink>
			<FooterLink href="#"><CallIcon/>Contact</FooterLink>
			<FooterLink href="#"><MessageIcon/>Messenger</FooterLink>
		</Column>
		<Column>
			<Heading>Social Media</Heading>
			<FooterLink href="#">
			<i className="fab fa-facebook-f">
				<span style={{ marginLeft: "10px" }}>
				<FacebookIcon/>Facebook
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-instagram">
				<span style={{ marginLeft: "10px" }}>
				<InstagramIcon/>Instagram
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-twitter">
				<span style={{ marginLeft: "10px" }}>
				<TwitterIcon/>Twitter
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-youtube">
				<span style={{ marginLeft: "10px" }}>
				<YouTubeIcon/>Youtube
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

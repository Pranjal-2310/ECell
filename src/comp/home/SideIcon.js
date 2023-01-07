import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import styled from 'styled-components';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';

function SideIcon() {
  return (
    <Tape>
        
    
    <Cake>
        <div>
      <InstagramIcon sx={{color:"#ceefff"}} fontSize="large"/>
      <FacebookIcon sx={{color:"#ceefff"}} fontSize='large'/>
      <LinkedInIcon sx={{color:"#ceefff"}}fontSize='large'/>
      <YouTubeIcon sx={{color:"#ceefff"}} fontSize='large'/>
      <TwitterIcon sx={{color:"#ceefff"}} fontSize='large'/>
      <EmailIcon sx={{color:"#ceefff"}} fontSize='large'/>
      </div>
      
    </Cake>
   
    </Tape>
  )
}
const Tape= styled.div`
    
    display: flex;
    justify-content:flex-end;
    width: 60%;


`;
const Cake= styled.div`
    display: flex;
    justify-content: space-around;
    width: 27%;
    margin-left: 1rem;
    margin-right: 1rem;

`;

const Make= styled.div`

width: 20%;
border: 1.5px solid #ceefff;
height: 1.5%;
position: relative;
top: 14px;


`;

export default SideIcon

import React, { useEffect, useRef } from "react";
import "../assets/css/About.css";
import {
  FaFacebookF,
  FaInstagram,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaGithub,
  FaTwitter,
} from "react-icons/fa";
 import senja from "../assets/images/senja.jpg" 
const About = () => {
   
  return (
    <div  >
      <div>
        <div className="about">
          <p className="coverr">-</p>
          <li className="ab1">MY NAME IS</li>
          <li className="ab3">SENJA APRILLA HA<span style={{color:"black"}}>NDRINA SETIA</span>  </li>
          <li className="ab2" >UI/UX DESIGNER AND WEB DEVELOPER</li>
          <li className="sosmed">
            <a href="#Instagram" rel="noopener noreferrer">
              <FaInstagram color="rgb(255, 255, 255)"  />
            </a>
            <a href="#facebook" target="_blank" rel="noopener noreferrer">
              <FaFacebookF color="rgb(255, 255, 255)"  />
            </a>
            <a href="#Github" target="_blank" rel="noopener noreferrer">
              <FaGithub color="rgb(255, 255, 255)" />
            </a>
            <a href="#twiter" target="_blank" rel="noopener noreferrer">
              <FaTwitter color="rgb(255, 255, 255)"  />
            </a>
          </li>
        </div>
        <div>
         
          <img className="senja" src={senja}/>
        </div>
      </div>
    </div>
  );
};
export default About;

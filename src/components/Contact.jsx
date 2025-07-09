 import React from "react";
import "../assets/css/Contact.css";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import senja from "../assets/images/senjaa89.jpg";

const Contact = () => {
  return (
    <div className="envelope-wrapper">
      <div className="envelope">
        <div className="envelope-flap"  />
        <div className="card-overlay" style={{position:"relative",top:"30px"}}>
          <div className="contact-title">contact me</div>

          <div className="photo-box">
            <img src={senja} alt="Senja" className="photo-img" />
             
          </div>

          <div className="icon-box">
            <div className="icon-item">
              <FaWhatsapp className="icon" />
              <div className="icon-label">085789195571</div>
            </div>
            <div className="icon-item">
              <FaInstagram className="icon" />
              <div className="icon-label">@senjaaprilla</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
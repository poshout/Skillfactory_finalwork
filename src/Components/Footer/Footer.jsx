import React from "react";
import "./footer.css";
import { FaTelegram, FaWhatsapp, FaPhone } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="footer">
      <div className="kontact">
        
      </div>
      <div className="contact">
        <span><FaPhone size="1.2rem" /></span>
        <span><FaTelegram size="1.6rem" /></span> 
        <span><FaWhatsapp size="1.6rem" /></span>
          </div>
      </div>
    </footer>
  );
};

export default Footer;
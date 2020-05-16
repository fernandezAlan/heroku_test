import React from "react";
import {Link} from 'react-router-dom'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWhatsapp,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";

export default () => {

  const footerStyles = {

    position: "fixed",
    
    left: 0,
    bottom: 0,
    width: "100%",
    backgroundColor: "rgba(255, 254, 251, 1)",
    color: "#102f51",
    textAlign: "center",
    zIndex:3,
    boxShadow: '0px -8px 15px -10px rgba(0, 0, 0, 0.25)',


    
  }





  return (


    <div style={footerStyles}>
      <p style={{display:'inline-block', marginRight:'10px'}} >UnderTheSky © 2020   </p> 
      <a target="_blank" href='https://www.instagram.com/undertheskydeco/'>
      <FontAwesomeIcon icon={faInstagram}  />{'    '} 
      
      {'    '}
      {'    '}
      {'    '}
      </a>
      <a target="_blank" href='https://api.whatsapp.com/send?phone=5491164180402'>
      <FontAwesomeIcon icon={faWhatsapp}  />
      

      </a>
    </div>
  );
};

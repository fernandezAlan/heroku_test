import React from "react";
import { Button, Carousel, Container } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart
} from "@fortawesome/free-solid-svg-icons";



export default ({ handleClick }) => {
  const landingStyle = {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "flex-start",
    position: "fixed",
    backgroundImage: "url(./src/img/fondolanding.png)",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    height: "100vh",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: 0,
    color: "#bfbebe",
  };

  const landingImgStyle = {
    width: "150px",
    height: "auto",
  };

  return (
    <div id="landing" style={landingStyle}>
      <Container>
        <h1 className={"titulo-display"}>
          {" "}
          La posición de las estrellas <br />
          ese día especial
        </h1>
        <p>Hecho con <FontAwesomeIcon style={{color:'#c04040'}} icon={faHeart} /></p>
        <Button onClick={handleClick} className="boton-outline">
          {" "}
          Nuestros productos
        </Button>
      </Container>
    </div>
  );
};

import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Slide3 from "../../assets/img/carousal/Me4.png";


import ScrollDown from "../scroll-down/scroll-down.component";
import "./my-carousal.styles.css";

const MyCarousal = () => {
  return (
    <div id="home">
      <img style={{filter:'brightness(70%)'}} src={Slide3} />
    </div>
  );
};

export default MyCarousal;

import React from "react";
import Slide3 from "../../assets/img/carousal/Me4.png";
import "./my-carousal.styles.css";

const MyCarousal = () => {
  return (
    <div id="home">
      <img style={{ width:'100%', filter:'brightness(70%)'}} src={Slide3} alt="cover" />
    </div>
  );
};

export default MyCarousal;

import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Slide1 from "../../assets/img/carousal/Me2.jpeg";
import Slide2 from "../../assets/img/carousal/Me3.jpeg";
import Slide3 from "../../assets/img/carousal/Me4.jpeg";
import Slide4 from "../../assets/img/carousal/Me5.jpeg";
import Slide5 from "../../assets/img/carousal/Me7.jpeg";
import Slide6 from "../../assets/img/carousal/Me8.jpeg";
import ScrollDown from "../scroll-down/scroll-down.component";
import "./my-carousal.styles.css";

const MyCarousal = () => {
  return (
    <div id="home">
      <Carousel controls={false} indicators interval={2500} pause={false}>
        <Carousel.Item>
          <img className="d-block w-100 custom-img" src={Slide2} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 custom-img" src={Slide3} alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 custom-img" src={Slide1} alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 custom-img" src={Slide5} alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 custom-img" src={Slide4} alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 custom-img" src={Slide6} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
      <ScrollDown />
    </div>
  );
};

export default MyCarousal;

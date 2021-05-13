import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./about.styles.css";
import img from "../../assets/img/profile/me.png";

import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";


const About = () => {

  return (
    <div id="about">
      <div className="about">
        <h1 className="pt-3 text-center font-details pb-3">ABOUT ME</h1>
        <Container>
          <Row className="pt-3 pb-5 align-items-center">
            <Col xs={12} md={6}>
              <Row className="justify-content-center mb-2 mr-2 ">
                <Image className="profile justify-content-end"
                   alt="profile" 
                   src={img}                   
                   thumbnail fluid />
              </Row>
            </Col>
            <Col xs={12} md={6}>
              <Row
      

              className=" align-items-start p-2 my-details rounded">
                Hi there! I am <strong>&nbsp;Hamza Bellamine</strong>
                <br />A passionate Mobile and Web developer and Industrial Engineer.
                <br />
                <br />
                In 2007, I successfully completed my Technical Diploma with specialization in 'Electrical Engineering and Computer Science' and in 2010 i have got my Masters degree with specialization in 'Industrial Engineering'
                <br />
              
                <br />
                Since then, i developed many saas projects in the manufacturing field but also some sides projects related to my hobbies 
                <br /> <br />
                <Col className="d-flex justify-content-center flex-wrap">
                  <div>
                    <a href="https://wa.me/+33638118229">
                      <Button className="m-2" variant="outline-primary">
                        Let's Talk
                        
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://drive.google.com/file/d/1AZv2D97gNplswK3qA3Pi7BBzEM_CBSDf/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-success">
                        My Resume
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://github.com/hbellamine" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-dark">
                        GitHub
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://www.linkedin.com/in/hamza-bellamine/" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-info">
                        LinkedIn
                      </Button>
                    </a>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default About;

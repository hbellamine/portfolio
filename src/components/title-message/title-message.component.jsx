import React from "react";
import Typewriter from "typewriter-effect";
import styled from "styled-components";

const MyTitleMessage = styled.h1`
  position: absolute;
  width: 100%;
  top: 5rem;
  z-index: 1;
  //margin-top: -125px;
  text-align: center;

  strong {
    font-size: 60%;
  }
  div {
    color: ${props => props.theme.textColor};

    text-shadow: 0px 2px 5px rgba(0, 0, 0, 0.4);
    font-weight: 100;
    letter-spacing: 3px;

    .main {
      font-size: 30px;
    }

    .sub {
      font-size: 40%;
      letter-spacing: 2px;
    }
  }
`;

const TitleMessage = () => (
  <MyTitleMessage>
    <div className="titleMessage">
      <div className="heading">
        {/* <div className="main text-center mb-3">
          Hi, I am
          <br />
          <span>
            <strong>Hamza Bellamine</strong>
          </span>
        </div> */}
        <div className="sub">
          <Typewriter
            options={{
              strings: ["Full stack developer"],
              autoStart: true,
              loop: true,
              delay: 50
            }}
          />
        </div>
      </div>
    </div>
  </MyTitleMessage>
);

export default TitleMessage;

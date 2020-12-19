import React from "react";
import { Timeline, Events, UrlButton, ImageEvent } from "@merc/react-timeline";

// projects
import L_LEWAGON from "../../assets/img/projects/LeWagon.jpg";
import L_SWIRTATE from "../../assets/img/projects/Swirtate.png";
import L_ECRSAPP from "../../assets/img/projects/ECRSAPP.jpeg";
import L_SQUADFACTORY from "../../assets/img/projects/SquadFactory.png";
import L_LIVESALES from "../../assets/img/projects/livesales.png";
import L_PATIENTMANAGER from "../../assets/img/projects/patients.png";
import L_QWIZARD from "../../assets/img/projects/qwizard.png";
import L_OPEXAPP from "../../assets/img/projects/Opexapp.jpg";

import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";

// skills
import L_RAILS from "../../assets/img/skills/Rails.png";
import L_REACT from "../../assets/img/skills/react.svg";
import L_NODE_JS from "../../assets/img/skills/nodejs.svg";
import L_FIREBASE from "../../assets/img/skills/firebase.png";
import L_POSTGRESQL from "../../assets/img/skills/postgresql.svg";
import L_CLOUDINARY from "../../assets/img/skills/cloudinary.png";
import Image from "react-bootstrap/Image";
import L_REDUX from "../../assets/img/skills/redux.svg";
import L_NATIVE from "../../assets/img/skills/native.png";
import L_HTML5 from "../../assets/img/skills/html-5.svg";
import L_CSS3 from "../../assets/img/skills/css3.svg";
import L_BOOTSTRAP4 from "../../assets/img/skills/bootstrap-4.svg";
import L_WOOCOMMERCE from "../../assets/img/skills/woocommerce.png";
import L_WORDPRESS from "../../assets/img/skills/wordpress.png";
import L_GRAVITY from "../../assets/img/skills/gravityforms.png";
import L_ZAPIER from "../../assets/img/skills/zapier.png";
import L_HEROKU from "../../assets/img/skills/heroku.png";
import L_GIT from "../../assets/img/skills/github-api.svg";


import "./projects-timeline.styles.css";

const TimeLine = () => {
  return (
    <div id="projects">
      <h1 className="pt-3 text-center font-details-b pb-3">PROJECTS</h1>
      <Timeline>
        <Events>
        {/* Project: Swirtate */}
        <ImageEvent
            date="10/04/2014"
            className="text-center"
            text="Swirtate.com - Promotional gifts company"
            src={L_SWIRTATE}
            alt="Swirtate.com - Promotional gifts company"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> A website for a leading startup in Morocco that provides promotional gifts
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Get in touch with the company through whatsapp</li>
                          <li>Request for a cotation</li>
                          <li>Hability to send invoices through the platform and add to a google sheet using zapier</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_HTML5}
                                alt="HTML 5"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              HTML5
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_WORDPRESS}
                                alt="CSS 3"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              WordPress
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_ZAPIER}
                                alt="React"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Zapier
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_GRAVITY}
                                alt="Material-UI"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Gravity Forms
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_WOOCOMMERCE}
                                alt="Material-UI"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Woocommerce
                            </span>
                          </li>
                          
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="http://www.swirtate.com"
                  target="_blank"
                >
                  SEE LIVE
                </UrlButton>
                
              </div>
            </div>
          </ImageEvent>

        {/* Project: Le Wagon Full Stack Bootcamp */}
        <ImageEvent
            date="13/03/2020"
            className="text-center"
            text="LeWagon Full-Stack Web Developer Bootcamp - Lisbon"
            src={L_LEWAGON}
            alt="LeWagon Full-Stack Web Developer Bootcamp - Lisbon"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> 9-week intensive coding bootcamp 
                        <hr />
                        <strong>What i learned : </strong>
                        <ul className="list-styles pt-1">
                          <li>HTML, CSS, Bootstrap, JavaScript ES2015,
SQL, git, GitHub, Heroku and Ruby on Rails.</li>
                         
                          <li>Designed, implemented and shipped to
production a clone of AirBnB and a Rails prototype called mylivesales.com that allows anyone to create a virtual store, create a livecast to showcase its products and start selling right away.</li>
                        </ul>
                        <hr />
                        <strong>Tech learned:</strong>
                        <ul>
                        <li>
                            <span className="p-2">
                              <Image
                                src={L_RAILS}
                                alt="React"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Ruby on Rails
                            </span>
                          </li>

                          <li>
                            <span className="p-2">
                              <Image
                                src={L_HTML5}
                                alt="HTML 5"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              HTML5
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_NODE_JS}
                                alt="CSS 3"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              Node.js
                            </span>
                          </li>

                          <li>
                            <span className="p-2">
                              <Image
                                src={L_CSS3}
                                alt="Material-UI"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              CSS
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_HEROKU}
                                alt="Material-UI"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              HerokuAPP
                            </span>
                          </li>

                          <li>
                            <span className="p-2">
                              <Image
                                src={L_POSTGRESQL}
                                alt="Material-UI"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              POSTGRESQL
                            </span>
                          </li>

                          <li>
                            <span className="p-2">
                              <Image
                                src={L_GIT}
                                alt="Material-UI"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              GitHub
                            </span>
                          </li>
                          
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">

                
              </div>
            </div>
          </ImageEvent>


          {/* Project: My Live Sales */}
          <ImageEvent
            date="10/03/2020"
            className="text-center"
            text="My Live Sales"
            src={L_LIVESALES}
            alt="My Live Sales"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> My Live Sales is a live streaming marketplace 
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Plan a live sale</li>
                          <li>Create a store as a seller</li>
                          <li>Access to the store as a buyer or seller</li>
                          <li>Create your store as a seller</li>
                          <li>Customer can ask live questions through chat</li>
                          <li>Seller can stream a live sale</li>
                          <li>Seller can track the live amount of sales he made </li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_RAILS}
                                alt="Ruby On Rails"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Ruby On Rails
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_NODE_JS}
                                alt="Node.js"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Node.js
                            </span>
                          </li>
                         
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_POSTGRESQL}
                                alt="POSTGRESQL"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              POSTGRESQL
                            </span>
                          </li>

                          <li>
                            <span className="p-2">
                              <Image
                                src={L_HEROKU}
                                alt="Heroku"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              HerokuAPP
                            </span>
                          </li>

                        </ul>
                        <em>
                          <strong>SignUp/ Signin:</strong>
                          <br />
                          <br />
                          You can <strong>sign in</strong> with facebook and create your store as a seller  
                        </em>
                      </Card.Body>

                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://github.com/hbellamine/livesell"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
                <UrlButton
                  href="https://youtu.be/6LAoQzzWfbc?t=1738"
                  target="_blank"
                >
                  WATCH VIDEO
                </UrlButton>
              </div>
            </div>
          </ImageEvent>

          {/* Project: Patient Manager */}
          <ImageEvent
            date="19/07/2020"
            className="text-center"
            text="Patient Manager"
            src={L_PATIENTMANAGER}
            alt="Patient Manager"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> A Web App that allows doctors to follow their patients and write a report for each consultation
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Create a doctor profile</li>
                          <li>Create - Read - Update - Delete a patient</li>
                          <li>Search for a patient by -ID Card / Name / Surname</li>
                          <li>Upload pictures and add them to the patient folder</li>
                          <li>Write a prescription using a pre-set database of medicines</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_RAILS}
                                alt="Ruby On Rails"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              Ruby On Rails
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_POSTGRESQL}
                                alt="Postgress"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              POSTGRESS
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_BOOTSTRAP4}
                                alt="Bootstrap"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Bootstrap
                            </span>
                          </li>

                          <li>
                            <span className="p-2">
                              <Image
                                src={L_HEROKU}
                                alt="React"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Heroku
                            </span>
                          </li>

                          <li>
                            <span className="p-2">
                              <Image
                                src={L_CLOUDINARY}
                                alt="Cloudinary"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Cloudinary
                            </span>
                          </li>
                         
                        </ul>
                        <em>
                          <strong>SignUp/ Signin:</strong>
                          <br />
                          <br />
                          You can <strong>register</strong> as new doctor 
                        </em>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="http://cabinetgestion.herokuapp.com"
                  target="_blank"
                >
                  SEE LIVE
                </UrlButton>
                <UrlButton
                  href="https://github.com/hbellamine/gestioncabinet"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>

              </div>
            </div>
          </ImageEvent>

          {/* Project: Ecrs App */}

          <ImageEvent
            date="05/08/2020"
            className="text-center"
            text="Tasks productivity measurement"
            src={L_ECRSAPP}
            alt="Tasks productivity measurement"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> Mobile / Web App that allows the measurement of each task done by a operator in order to insure a better coordination and optimize the overall leadtime of the coordinated action
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Register as new user</li>
                          <li>Signin as existing user</li>
                          <li>Create a new session of coordinated action</li>
                          <li>Put the operators name</li>
                          <li>Time each task the operator is doing and add a comment</li>
                          <li>Join the session to measure another operator tasks</li>
                          <li>Create a gantt chart of the coordinated action session using the session number</li>
                          <li>Simulate different optimisation scenarios and check visually on the 'after gantt' the overall leadtime reduction </li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_REACT}
                                alt="React"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              REACT
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_REDUX}
                                alt="Redux"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              Redux
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_NATIVE}
                                alt="Bootstrap 4"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                             React Native
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_NODE_JS}
                                alt="Django"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              Node.js
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_FIREBASE}
                                alt="Firebase"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Firebase
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://github.com/hbellamine/ECRSAPP"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
              </div>
            </div>
          </ImageEvent>


          {/* Project: Qwizard */}
          <ImageEvent
            date="21/08/2020"
            className="text-center"
            text="Qwizard - Make the most of your reading"
            src={L_QWIZARD}
            alt="Qwizard - Make the most of your reading"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> A Web app for Book Lovers. 
                        It allows the book lovers to create a quizz or pass a quizz of their favorites books
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Register new user</li>
                          <li>Signin exiting user</li>
                          <li>Search for a book</li>
                          <li>Add a new book</li>
                          <li>Add a quizz to the plateform</li>
                          <li>Pass a quizz </li>
                          <li>Cumulate points for each quizz passed </li>
                          <li>Get a certificate if you get a quizz </li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_REACT}
                                alt="React"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              React
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_NODE_JS}
                                alt="Node.js"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Node.js
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_FIREBASE}
                                alt="Firebase"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Firebase
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_REDUX}
                                alt="Redux"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Redux
                            </span>
                          </li>
                        </ul>
                        <hr />
                        <em>
                          <strong>SignUp/ Signin:</strong>
                          <br />
                          <br />
                          You can <strong>register</strong> as new user 
                        </em>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="http://qwizard.netlify.app/"
                  target="_blank"
                >
                  SEE LIVE
                </UrlButton>
                <UrlButton
                  href="https://github.com/hbellamine/Qwizards"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
               
              </div>
            </div>
          </ImageEvent>

          {/* Project: SquadFactory */}

          <ImageEvent
            date="25/09/2020"
            className="text-center"
            text="SquadFactory"
            src={L_SQUADFACTORY}
            alt="SquadFactory"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> Squadfactory is a web application that allows employees to suggest projects or ideas to improve their companies performance, it also helps in managing continuous improvement projects.

By suggesting a project/idea or by participating in a continuous improvement project, the employee get a certain amount of points.

Each employee has a wallet of points that can be used to order gifts through the web app.
A ranking is also available based on the number of points earned. It shows the employees commitment to continuous improvement.
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Login as a employee</li>
                          <li>Login as a Manager</li>
                          <li>Suggest a project/improvement idea</li>
                          <li>Check the points of the employee account</li>
                          <li>Manager access :Accept/Refuse ( with a justification) the improvement idea and dispatch automatically the right amount of points to the employee</li>
                          <li>Manager access :Configure the gifts related to a certain amount of points</li>
                          <li>Manager access :Check the ranking of the most comitted employees</li>
                          <li>Employee access : Order a gift through the platform using the points account</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_REACT}
                                alt="REACT"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              REACT
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_REDUX}
                                alt="CSS 3"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              REDUX
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_FIREBASE}
                                alt="Bootstrap 4"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              Firebase
                            </span>
                          </li>
                         
                        </ul>

                        <em>
                          <strong> Signin:</strong>
                          <br />
                          <br />
                          You can <strong>use the credentials</strong>: 
                          Id: user / Password: adminadmin
                        </em>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://app.squadfactory.com/test"
                  target="_blank"
                >
                  SEE LIVE
                </UrlButton>
                
              </div>
            </div>
          </ImageEvent>


          {/* Project: Opex App */}
          <ImageEvent
            date="10/11/2020"
            className="text-center"
            text="OPEX App"
            src={L_OPEXAPP}
            alt="OPEX App"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> Tablet App - Web App : Live Tracking of the production lines yields.
                          SMS escalation alerts in case of machine breakdown
                          Breakdown analysis and Overall Equipement Efficiency live reporting
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Operator declare a breakdown through the tablet </li>
                          <li>SMS automatically sent to the technicians after 20 minutes of breakdown</li>
                          <li>SMS Escalation after 40 minutes of breakdown to the maintenance manager</li>
                          <li>
                            Managers are able to check Overall equipement Efficiency of the production through a web app
                          </li>
                          <li>BreakDown analysis on the Web app ( Pareto Diagram and OEE follow up )</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_REACT}
                                alt="HTML 5"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              REACT
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_NODE_JS}
                                alt="CSS 3"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              Node.js
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_NATIVE}
                                alt="Bootstrap 4"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              React Native
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_FIREBASE}
                                alt="Django"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              Firebase
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_REDUX}
                                alt="PostgreSQL"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Redux
                            </span>
                          </li>
                        </ul>
                        <hr />
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>

            </div>
          </ImageEvent>
        </Events>
      </Timeline>
    </div>
  );
};

export default TimeLine;

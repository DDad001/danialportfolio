import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import "./Projects.css";
import test from "../Assets/book1.jpg";
import BusinessPic from "../Assets/BusinessWebPic.png";
import KobePic from "../Assets/KobePic.png";
import WeatherPic from "../Assets/WeatherPic.png";
import AllForOnePic from "../Assets/AllForOnePic.png";
import video from "../Assets/PUGApp.mp4"

function Projects() {
  return (
    <div className="b-projectsPage">
      <Container>
        <Row>
          <Col lg={12} className="mt-4">
            <h2 className="mt-5">Projects</h2>
          </Col>
        </Row>
        <Row className="g-5">
          <Col lg={4} className="d-flex justify-content-center">
            <Card style={{ width: "50rem" }}>
            <video width="400" height="235" controls >
              <source src={video} type="video/mp4"/>
            </video>

              <Card.Body>
                <Card.Title>PUG App</Card.Title>
                <Card.Text>
                 Languages / Frameworks used:<br/>
                 <ul className="px-3">
                    <li>
                        JavaScript
                    </li>
                    <li>
                        C#
                    </li>
                    <li>
                        TypeScript
                    </li>
                    <li>
                        HTML
                    </li>
                    <li>
                        CSS
                    </li>
                    <li>
                        Node.js
                    </li>
                    <li>
                        SQL
                    </li>
                    <li>
                        React-Native
                    </li>
                 </ul>
                 IN PROGRESS
                </Card.Text>
              </Card.Body>
                <Row>
                    <Col lg={12} className="d-flex justify-content-center mb-3">
                    <a href="https://github.com/DDad001/PUG-APP.git" rel="noreferrer" target="_blank">
                       <Button variant="success" style={{borderRadius:'30px', width:'10vw'}}>Visit Repo</Button>
                    </a>
                    </Col>
                </Row>
            </Card>
          </Col>

          <Col lg={4} className="d-flex justify-content-center">
            <Card style={{ width: "50rem" }}>
              <Card.Img variant="top" src={test}/>
              <Card.Body>
                <Card.Title>Task Tracker</Card.Title>
                <Card.Text>
                Languages / Frameworks used:<br/>
                 <ul className="px-3">
                    <li>
                        React.js
                    </li>
                    <li>
                        JavaScript
                    </li>
                    <li>
                        HTML
                    </li>
                    <li>
                        CSS
                    </li>
                    <li>
                        Node.js
                    </li>
                    <li>
                        C#
                    </li>
                    <li>
                        SQL
                    </li>
                 </ul>
                </Card.Text>
              </Card.Body>
                <Row>
                    <Col lg={12} className="d-flex justify-content-center mb-3">
                       <Button variant="success" style={{borderRadius:'30px', width:'10vw'}}>Visit Site</Button>
                    </Col>
                </Row>
            </Card>
          </Col>

          <Col lg={4} className="d-flex justify-content-center">
            <Card style={{ width: "50rem" }}>
              <Card.Img variant="top" src={WeatherPic}/>
              <Card.Body>
                <Card.Title>Weather App</Card.Title>
                <Card.Text>
                Languages used:<br/>
                 <ul className="px-3">
                    <li>
                        HTML
                    </li>
                    <li>
                        CSS
                    </li>
                    <li>
                        JavaScript
                    </li>
                 </ul>
                </Card.Text>
              </Card.Body>
                <Row>
                    <Col lg={12} className="d-flex justify-content-center mb-3">
                    <a href="https://daddweatherappproject.azurewebsites.net" rel="noreferrer" target="_blank">
                       <Button variant="success" style={{borderRadius:'30px', width:'10vw'}}>Visit Site</Button>
                    </a>
                    </Col>
                </Row>
            </Card>
          </Col>
        </Row>

        <Row className="g-5 mt-2">
          <Col lg={4} className="d-flex justify-content-center mb-5">
            <Card style={{ width: "50rem" }}>
              <Card.Img variant="top" src={AllForOnePic}/>
              <Card.Body>
                <Card.Title>All For One</Card.Title>
                <Card.Text>
                Languages / Framework used:<br/>
                 <ul className="px-3">
                    <li>
                        HTML
                    </li>
                    <li>
                        CSS
                    </li>
                    <li>
                        C#
                    </li>
                    <li>
                        JavaScript
                    </li>
                 </ul>
                </Card.Text>
              </Card.Body>
                <Row>
                    <Col lg={12} className="d-flex justify-content-center mb-3">
                   <a href="https://daddallforonesprint.azurewebsites.net" rel="noreferrer" target="_blank">
                       <Button variant="success" style={{borderRadius:'30px', width:'10vw'}}>Visit Site</Button>
                   </a>
                    </Col>
                </Row>
            </Card>
          </Col>

          <Col lg={4} className="d-flex justify-content-center mb-5">
            <Card style={{ width: "50rem" }}>
              <Card.Img variant="top" src={BusinessPic}/>
              <Card.Body>
                <Card.Title>Business Redevelopment</Card.Title>
                <Card.Text>
                 Languages used:<br/>
                 <ul className="px-3">
                    <li>
                        HTML
                    </li>
                    <li>
                        CSS
                    </li>
                    <li>
                        JavaScript
                    </li>
                 </ul>
                </Card.Text>
              </Card.Body>
                <Row>
                    <Col lg={12} className="d-flex justify-content-center mb-3">
                    <a href="https://daddbusinessredevelopmentproject.azurewebsites.net" rel="noreferrer" target="_blank">
                       <Button variant="success" style={{borderRadius:'30px', width:'10vw'}}>Visit Site</Button>
                    </a>
                    </Col>
                </Row>
            </Card>
          </Col>

          <Col lg={4} className="d-flex justify-content-center mb-5">
            <Card style={{ width: "50rem" }}>
              <Card.Img variant="top" src={KobePic}/>
              <Card.Body>
                <Card.Title>Influential Person Project</Card.Title>
                <Card.Text>
                Languages / Framework used:<br/>
                 <ul className="px-3">
                    <li>
                        React.js
                    </li>
                    <li>
                        JavaScript
                    </li>
                    <li>
                        Node.js
                    </li>
                    <li>
                        HTML
                    </li>
                    <li>
                        CSS
                    </li>
                 </ul>
                </Card.Text>
              </Card.Body>
                <Row>
                    <Col lg={12} className="d-flex justify-content-center mb-3">
                    <a href="https://daddinfluentialperson.azurewebsites.net" rel="noreferrer" target="_blank" >
                       <Button variant="success" style={{borderRadius:'30px', width:'10vw'}}>Visit Site</Button>
                      </a>
                    </Col>
                </Row>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Projects;

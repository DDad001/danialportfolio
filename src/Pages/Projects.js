import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import "./Projects.css";
import BusinessPic from "../Assets/BusinessWebPic.png";
import KobePic from "../Assets/KobePic.png";
import WeatherPic from "../Assets/WeatherPic.png";
import AllForOnePic from "../Assets/AllForOnePic.png";
import video from "../Assets/PUGApp.mp4"
import portfolioPic from "../Assets/portfolioPic.png";

function Projects() {
  return (
    <div className="b-projectsPage" id="projectsPage">
      <Container>
        <Row>
          <Col lg={12} className="mt-4">
            <h2 className="mt-5">Projects</h2>
          </Col>
        </Row>
        <Row className="g-5">
          <Col lg={4} className="d-flex justify-content-center">
            <Card style={{ width: "50rem" }}>
            <video width="400" height="195" controls className="video1">
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
                    <Col lg={12} className="d-flex justify-content-center mb-3">
                    <a href="https://github.com/DDad001/PUG-APP.git" rel="noreferrer" target="_blank">
                       <Button variant="success" className="buttonCustomProject">Visit repo</Button>
                    </a>
                    </Col>
            </Card>
          </Col>

          <Col lg={4} className="d-flex justify-content-center">
            <Card style={{ width: "50rem" }}>
              <Card.Img variant="top" src={portfolioPic} alt="Danial's Portfolio Site Image"/>
              <Card.Body>
                <Card.Title>Portfolio Site</Card.Title>
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
                 </ul>
                </Card.Text>
              </Card.Body>         
                    <Col lg={12} className="d-flex justify-content-center mb-3">
                       <Button variant="success" className="buttonCustomProject">Visit Site</Button>
                    </Col>      
            </Card>
          </Col>

          <Col lg={4} className="d-flex justify-content-center">
            <Card style={{ width: "50rem" }}>
              <Card.Img variant="top" src={WeatherPic} alt="Danial's Weather App Image"/>
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
                    <Col lg={12} className="d-flex justify-content-center mb-3">
                    <a href="https://daddweatherappproject.azurewebsites.net" rel="noreferrer" target="_blank">
                       <Button variant="success" className="buttonCustomProject">Visit Site</Button>
                    </a>
                    </Col>
            </Card>
          </Col>
        </Row>

        <Row className="g-5 mt-2">
          <Col lg={4} className="d-flex justify-content-center mb-5">
            <Card style={{ width: "50rem" }}>
              <Card.Img variant="top" src={AllForOnePic} alt="Danial's All For One Site Image"/>
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
                    <Col lg={12} className="d-flex justify-content-center mb-3">
                   <a href="https://daddallforonesprint.azurewebsites.net" rel="noreferrer" target="_blank">
                       <Button variant="success" className="buttonCustomProject">Visit Site</Button>
                   </a>
                    </Col>
            </Card>
          </Col>

          <Col lg={4} className="d-flex justify-content-center mb-5">
            <Card style={{ width: "50rem" }}>
              <Card.Img variant="top" src={BusinessPic} alt="Danial's Buisness ReDevelopment Site Image"/>
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
                    <Col lg={12} className="d-flex justify-content-center mb-3">
                    <a href="https://daddbusinessredevelopmentproject.azurewebsites.net" rel="noreferrer" target="_blank">
                       <Button variant="success" className="buttonCustomProject">Visit Site</Button>
                    </a>
                    </Col>
            </Card>
          </Col>

          <Col lg={4} className="d-flex justify-content-center mb-5">
            <Card style={{ width: "50rem" }}>
              <Card.Img variant="top" src={KobePic} alt="Danial's Influential Person Site Image"/>
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
                    <Col lg={12} className="d-flex justify-content-center mb-3">
                    <a href="https://daddinfluentialperson.azurewebsites.net" rel="noreferrer" target="_blank" >
                       <Button variant="success" className="buttonCustomProject">Visit Site</Button>
                      </a>
                    </Col>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Projects;

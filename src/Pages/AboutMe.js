import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import "./AboutMe.css";
import DanCirclePic from "../Assets/DanCirclePic.png";
function AboutMe() {
  return (
    <div className='b-AboutMePage' id="aboutMe">
        <Container>
            <Row>
            <Col lg={12} className="mt-5">
                <h3 className='mt-3'>About Me</h3>
            </Col>
            </Row>
            <Row>
                <Col lg={6} className="d-flex justify-content-center mb-custom">
                <img
                    className='mt-2 danImage'
                    src = {DanCirclePic}
                    width = "728rem"
                    alt="Danial's Image"
                    />
                </Col>
                <Col lg={6} className="d-flex justify-content-center mt-5">
                     <p className='aboutMeTextStyle'> A Software Engineer that codes <br/>awesome things and evolves<br/> everyday to become a better <br/>programmer.
                     <br/>
                     <br/>
                      In my freetime, I build and contribute<br/> to coding projects and expand my<br/> knowledge in engineering with<br/>  personal development.
                     <br/>
                     <br/>
                      I also love playing sports and listening<br/> to music. Some of my favorite sports <br/> are Soccer, Basketball, and Football. <br/> 
                     </p>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default AboutMe
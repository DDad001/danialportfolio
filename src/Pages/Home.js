import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import NavbarComponent from '../Components/NavbarComponent'
import './Home.css'
import computerImage from '../Assets/computer.png';
import linkedin from '../Assets/linkedin.png';
import github from '../Assets/github.png';

function Home() {
  return (
    <Container fluid className='p-0'>
        <NavbarComponent/>
    <div className='bg-homePage'>
    <Container fluid>
    <Row>
      <Col lg={6} className='d-flex justify-content-center'>
        <Row>
          <Col lg={12}>
            <h1>Hi, I'm Danial.</h1>
             <p className='homepage-text'>
              loremdfn erfiwer owerifgwerifghiowehgijwriogwerigiwrgiowrjijwerip<br/>
              dhjfgiowrerigjioerjgioheriogiorgjioerhjgioeriogherijgifkg3wrjgjerg<br/>
              grejgioherioghjioerjgiojeiogtjioerjgioejrigjergjknerger nm gjerjugnjoerh<br/>
              </p>
             <Row>
              <Col lg={3}>
              <a className="linkStyle" href="https://www.linkedin.com/in/danial-dad-814b09224" rel="noreferrer" target="_blank" >
                <div className='customButton'>
                  <p className='customBtnTxt'><img src = {linkedin} width = "20rem" alt="Computer Image" className='mx-2'/>Linkedln</p>              
                </div>
              </a>
              </Col>
              <Col lg={3}>
              <a className="linkStyle" href="https://github.com/DDad001" rel="noreferrer" target="_blank" >
                <div className='customButton'>
                <p className='customBtnTxt'><img src = {github} width = "20rem" alt="Computer Image" className='mx-2'/>Github</p>                 
                </div>
                </a>
              </Col>
             </Row>
          </Col>
        </Row>
      </Col>
      <Col lg={6} className='d-flex justify-content-center mt-5 m-bottomHompage'>
      <img
         className='mt-5'
         src = {computerImage}
         width = "728rem"
         alt="Computer Image"
         />
      </Col>
    </Row>
    </Container>
    </div>
    </Container>
  )
}

export default Home
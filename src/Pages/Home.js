import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import NavbarComponent from '../Components/NavbarComponent'
import './Home.css'
import computerImage from '../Assets/computer.png';
import linkedin from '../Assets/linkedin.png';
import github from '../Assets/github.png';

function Home() {
  return (
    <div className='bg-homePage'>
    <Container fluid>
    <Row>
      <Col lg={6} className='d-flex justify-content-center'>
        <Row>
          <Col lg={12}>
            <h1 className='mx-4'>Hi, I'm Danial.</h1>
            <Row className='mx-3'>
              <Col lg={12}>
             <p className='homepage-text'>
             Passionate software engineer that loves creating and contributing to different projects.
             I enjoy doing various activities, such as playing basketball, listening to music, and watching movies.
              </p>
              </Col>
            </Row>
             <Row>
              <Col lg={3} className='mx-4'>
              <a className="linkStyle" href="https://www.linkedin.com/in/danial-dad-814b09224" rel="noreferrer" target="_blank" >
                <div className='customButton mb-4'>
                  <p className='customBtnTxt'><img src = {linkedin} width = "20rem" alt="Linkedin Logo" className='mx-2'/>Linkedln</p>              
                </div>
              </a>
              </Col>
              <Col lg={3} className='mx-4'>
              <a className="linkStyle" href="https://github.com/DDad001" rel="noreferrer" target="_blank" >
                <div className='customButton githubBtn'>
                <p className='customBtnTxt'><img src = {github} width = "20rem" alt="Github Logo" className='mx-2'/>Github</p>                 
                </div>
                </a>
              </Col>
             </Row>
          </Col>
        </Row>
      </Col>
      <Col lg={6} className='d-flex justify-content-center mt-5 m-bottomHompage'>
      <img
         className='mt-5 computerImg'
         src = {computerImage}
         width = "728rem"
         alt="Computer Image"
         />
      </Col>
    </Row>
    </Container>
    </div>
  )
}

export default Home
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import NavbarComponent from '../Components/NavbarComponent'
import './Home.css'
import computerImage from '../Assets/computer.png';

function Home() {
  return (
    <Container fluid className='p-0'>
        <NavbarComponent/>
    <div className='bg-homePage'>
    <Container fluid>
    <Row>
      <Col lg={6} className='d-flex justify-content-center'>
      <h1>Hi, I'm Danial.</h1>
      </Col>
      <Col lg={6} className='d-flex justify-content-center mt-5'>
      <img
         className='mt-5'
         src = {computerImage}
         width = "700rem"
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
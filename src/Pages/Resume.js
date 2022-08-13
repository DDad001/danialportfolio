import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import arrowRight from '../Assets/arrowRight.png';
import download from '../Assets/download.png';
import './Resume.css';
import resumePic from "../Assets/DanialDadResume.png";
import resume from "../Assets/DanialDadResume.pdf";
import { Document, pdfjs, Page} from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`

function Resume() {
  return (
    <div className='b-resumePage' id="resume">
      <Container>
        <Row className='p-4'>
            <Col lg={6}>
            <h2>Resume.</h2>
                <Row className='mt-3 d-flex justify-content-center'> 
                <Col lg={6}>
            <div className='mb-3'>
            <a href={resume} download>
                <div className='customButton1'>
                <p className='customBtnTxt1'>Download<img src = {download} width = "20rem" alt="Download Logo" className='mx-2'/></p>                 
                </div>
                </a>
            </div>
                </Col>
                </Row>
                <Row className='d-flex justify-content-center'>
                  <Col lg={6}>
                <div>
            <a className="linkStyle" href="https://drive.google.com/file/d/1EyLVh-N7kvAAclsTP_pRVxzY21v-d0yN/view?usp=sharing" rel="noreferrer" target="_blank" >
                <div className='customButton2'>
                <p className='customBtnTxt1'>View<img src = {arrowRight} width = "20rem" alt="View Logo" className='mx-2'/></p>                 
                </div>
                </a>
            </div>
                  </Col>
                </Row>
            </Col>
            <Col lg={6} className='mt-5 d-flex justify-content-center'>
            <a href={resume} download>
            <img src = {resumePic} width = "500rem" alt="Danial's Resume" className='mt-5 mb-custom'/>
            </a>
            </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Resume
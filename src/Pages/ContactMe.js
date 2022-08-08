import emailjs from "emailjs-com";
import React, { useState } from 'react'
import { Container, Row, Col, Button, Toast } from 'react-bootstrap';
import "./ContactMe.css";
import {  ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import man from "../Assets/man.png";

function ContactMe() {

    const [showToast, setShowToast] = useState(false);
    const [showError, setShowError] = useState(false);

    const notifySuccess = () => {
        toast.success('Successfully Submitted 👍  Thanks for Reaching out!', {
            theme:"colored",
            position: "bottom-right",
            autoClose: 3000,
            hideProgressBar:true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: 0,
            });
    };
    const notifyAlert = () => {
        toast.error('Error: Please fill in all the fields above!', {
            theme:"colored",
            position: "bottom-right",
            autoClose: 3000,
            hideProgressBar:true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: 0,
            });
    };

    const sendEmail = (e) => {
        e.preventDefault();
        if(e.target.value == null){
            notifyAlert();
            console.log("error");
        }
        else{
            console.log("success");
                emailjs.sendForm('service_mkz421p', 'portfolio_template', e.target,'Pvx9QuV1v8BOO0tPA')
                  .then((result) => {
                      console.log(result.text);
                  }, (error) => {
                      console.log(error.text);
                  });
                  e.target.reset();
                  notifySuccess();
        }
    }

  return (
    <div className='bg-ContactMe' id="contactMe">
        <Container>
            <Row>
                <Col lg={12} className="mt-5">
                    <h3 className='mt-4'>Contact me</h3>
                </Col>
            </Row>
            <Row>
                <Col lg={6} className="d-flex justify-content-center">
                <img
                    className='mt-5'
                    src = {man}
                    width = "628rem"
                    height = "500rem"
                    alt="Man Standing"
                    />
                </Col>
                <Col lg={6} className="d-flex justify-content-center">
                    <Row>
                        <Col lg={12}>
                    <div>
                        <form onSubmit={sendEmail}>
                            <div className="row pt-5 mx-auto">
                                <div className="row">
                                <div className="col-4 form-group mx-auto mb-3">
                                    <input type="text" className="form-control smallInputStyle" placeholder="First name" name="name"/>
                                </div>
                                <div className="col-4 form-group mb-3">
                                    <input type="text" className="form-control smallInputStyle" placeholder="Last name" name="name"/>
                                </div>                                   
                                 </div>
                                <div className="col-8 form-group pt-2 mx-auto mb-3">
                                    <input type="email" className="form-control mediumInputStyle" placeholder="Email address" name="email"/>
                                </div>
                                <div className="col-8 form-group pt-2 mx-auto mb-3">
                                    <input type="text" className="form-control mediumInputStyle" placeholder="Subject" name="subject"/>
                                </div>
                                <div className="col-8 form-group pt-2 mx-auto">
                                    <textarea className="form-control largeInputStyle" id="" cols="30" rows="8" placeholder="Your message" name="message"></textarea>
                                </div>
                                <div className="col-8 pt-3 mx-auto">
                                    <input type="submit" className="btn btn-info submitBtnStyle" value="Send Message"></input>
                                    <button onClick={notifyAlert}>Notify!</button>
                                    <ToastContainer
                                    closeButton={false}
                                    position="bottom-right"
                                    autoClose={3000}
                                    hideProgressBar
                                    newestOnTop={false}
                                    closeOnClick
                                    rtl={false}
                                    pauseOnFocusLoss
                                    draggable
                                    pauseOnHover
                                    />
                                </div>
                            </div>
                        </form>
                    </div>
                        </Col>
                    </Row>
                </Col>
            </Row> 
        </Container>
    </div>
  )
}

export default ContactMe
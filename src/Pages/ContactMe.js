import emailjs from "emailjs-com";
import React, { useState } from "react";
import { Container, Row, Col, Button, Toast } from "react-bootstrap";
import "./ContactMe.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import contactPic from "../Assets/contactPic.png";
import linkedin from "../Assets/linkedin.png";
import github from "../Assets/github.png";

function ContactMe() {
  const notifySuccess = () => {
    toast.success("Successfully Submitted 👍 ✉️ Thanks for Reaching out!", {
      theme: "colored",
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: 0,
    });
  };
  const notifyAlert = () => {
    toast.error("Error: Please fill in all the fields above!", {
      theme: "colored",
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: 0,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    // if (e.target.value == null) {
    //   notifyAlert();
    //   console.log("error");
    // } else {
    //   console.log("success");
      emailjs
        .sendForm(
          "service_mkz421p",
          "portfolio_template",
          e.target,
          "Pvx9QuV1v8BOO0tPA"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
      e.target.reset();
      notifySuccess();
    // }
  };

  return (
    <>
      <div className="bg-ContactMe">
        <Container fluid>
          <Row>
            <Col lg={12} className="mt-5">
              <h3 className="mt-4">Contact me</h3>
            </Col>
          </Row>
          <Row>
            <Col lg={6} className="d-flex justify-content-center">
              <img
                className="mt-5 ContactImg"
                src={contactPic}
                width="628rem"
                height="400rem"
                alt="Contact Image"
              />
            </Col>
            <Col lg={6} className="d-flex justify-content-center">
              <Row>
                <Col lg={12}>
                  <div>
                    <form onSubmit={sendEmail}>
                      <div className="row pt-5">
                        <div className="col-8 form-group mx-auto mb-3 ">
                          <input
                            type="text"
                            className="form-control smallInputStyle"
                            placeholder="Name"
                            name="name"
                            />
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto mb-3">
                          <input
                            type="email"
                            className="form-control mediumInputStyle"
                            placeholder="Email address"
                            name="email"
                            />
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto mb-3">
                          <input
                            type="text"
                            className="form-control mediumInputStyle"
                            placeholder="Subject"
                            name="subject"
                            />
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                          <textarea
                            className="form-control largeInputStyle"
                            id=""
                            cols="30"
                            rows="8"
                            placeholder="Your message"
                            name="message"
                            ></textarea>
                        </div>
                        <div className="col-8 pt-3 mx-auto">
                          <input
                            type="submit"
                            className="btn btn-info submitBtnStyle"
                            value="Send Message"
                            ></input>
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
      <div className="footerColor" id="contactMe">
        <Container>
          <Row>
            <Col lg={6} className="d-flex justify-content-center mt-3">
              <Row>
                <Col lg={12}>
                  <h6>Contact Info:</h6>
                  <p className="footerText">Danial.dad248@gmail.com</p>
                </Col>
              </Row>
            </Col>
            <Col lg={6} className="d-flex justify-content-center mt-3">
              <Row>
                <Col lg={12}>
                  <h6>Website Links:</h6>
                  <Col lg={12} className="d-flex justify-content-center">
                    <a
                      className="linkStyle"
                      href="https://github.com/DDad001"
                      rel="noreferrer"
                      target="_blank"
                    >
                      <p className="mx-3 footerText2">
                        <img
                          src={github}
                          width="20rem"
                          alt="Github Logo"
                          className="mx-2"
                        />
                        Github
                      </p>
                    </a>
                    <a
                      className="linkStyle"
                      href="https://www.linkedin.com/in/danial-dad-814b09224"
                      rel="noreferrer"
                      target="_blank"
                    >
                      <p className="footerText2">
                        <img
                          src={linkedin}
                          width="20rem"
                          alt="Linkedin Logo"
                          className="mx-2"
                        />
                        Linkedln
                      </p>
                    </a>
                  </Col>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default ContactMe;

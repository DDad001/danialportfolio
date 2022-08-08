import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import  myLogo  from "../Assets/myLogo.png";
import  Home  from "../Pages/Home"; 
import  AboutMe  from "../Pages/AboutMe";
import  Resume  from "../Pages/Resume";
import Projects  from "../Pages/Projects";
import  ContactMe  from "../Pages/ContactMe";
import './NavbarComponent.css';
import { HashLink as Link } from 'react-router-hash-link';


function NavbarComponent() {
  return (
   <BrowserRouter>
   <div className='bg-homePage' id="home">
   <Navbar bg = "bg-homePage" expand="lg">
     <Container fluid>
          <Navbar.Brand className='mx-3 pt-4'>
         <img
         src = {myLogo}
         width = "40rem"
         alt="My Logo"
         />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav"/>
          <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
            <Nav className = "mx-3 pt-4" id="parent">
               <Link to={{ pathname: "/Main", hash: "#home" }} className="mx-4 mt-3 link p-2">Home</Link> 
               <Link to={{ pathname: "/Main", hash: "#aboutMe" }} className="mx-4 mt-3 link p-2">About me</Link> 
               <Link to={{ pathname: "/Main", hash: "#resume" }} className="mx-4 mt-3 link p-2">Resume</Link> 
               <Link to={{ pathname: "/Main", hash: "#projects" }} className="mx-4 mt-3 link p-2">Projects</Link> 
               <Link to={{ pathname: "/Main", hash: "#contactMe" }} className="mx-4 mt-2 contactBtn">Contact me</Link> 
            </Nav>
          </Navbar.Collapse>
      </Container>
      </Navbar>
    </div>
   </BrowserRouter>
  )
}
export default NavbarComponent
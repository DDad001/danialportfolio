import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import  myLogo  from "../Assets/myLogo.png";
import  Home  from "../Pages/Home"; 
import  AboutMe  from "../Pages/AboutMe";
import  Resume  from "../Pages/Resume";
import Projects  from "../Pages/Projects";
import  ContactMe  from "../Pages/ContactMe";
import './NavbarComponent.css';

function NavbarComponent() {
  return (
   <BrowserRouter>
   <div className='bg-homePage'>
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
              
              <Nav.Link  className = "mx-4 mt-3" as={Link} to={"/home"}>Home</Nav.Link>
              <Nav.Link className =  "mx-4 mt-3" as={Link} to={"/aboutMe"}>About me</Nav.Link>
              <Nav.Link className =  "mx-4 mt-3" as={Link} to={"/resume"}>Resume</Nav.Link>
              <Nav.Link className =  "mx-4 mt-3" as={Link} to={"/projects"}>Projects</Nav.Link>
              <Nav.Link className =  "mx-4" as={Link} to={"/contactMe"}><div className='contactBtn'>Contact me</div></Nav.Link>
   
            </Nav>
          </Navbar.Collapse>
      </Container>
      </Navbar>
    </div>
    <div>
        <Routes>
            <Route path = "/home" element={<Home/>}></Route>
            <Route path = "/aboutMe" element={<AboutMe/>}></Route>
            <Route path = "/resume" element={<Resume/>}></Route>
            <Route path = "/projects" element={<Projects/>}></Route>
            <Route path = "/contactMe" element={<ContactMe/>}></Route>
        </Routes>
    </div>
   </BrowserRouter>
  )
}
export default NavbarComponent
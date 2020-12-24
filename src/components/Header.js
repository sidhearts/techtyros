import React, {useState} from "react";
import { Navbar, Nav} from "react-bootstrap";
import '../stylesheets/home.css';

export default function Header() {
    const [navbar, setNavbar] = useState(false);
    const changeBackground = () => {
        if (window.scrollY >= 80) {
          setNavbar(true);
        } else {
          setNavbar(false);
        }
      };
    
      window.addEventListener("scroll", changeBackground);
  return (
    <div className="container-fluid">
      <Navbar
        fixed="top"
        variant="light"
        expand="lg"
        className={
          navbar ? "landing-navbar active mb-5" : "landing-navbar mb-5"
        }
      >
        <Navbar.Brand href="#home" className="ml-md-5">
          <img src="images/logo.png" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto mr-md-5">
            <Nav.Link href="#home" className="links">
              HOME
            </Nav.Link>
            <Nav.Link href="#link" className="links">
              COURSES
            </Nav.Link>
            <Nav.Link className="links">
              BOOK DEMO
            </Nav.Link>
            <Nav.Link className="links">
              ABOUT US
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
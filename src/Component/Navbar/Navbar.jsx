import React, { useState, useEffect } from "react";
import {
  Button,
  Container,
  Form,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";
import "./Navbar.css";

const Navbars = () => {
  const [nav, setNav] = useState(false);
  useEffect(() => {
    const changeValueOnScroll = () => {
      const scrollValue = document?.documentElement?.scrollTop || 0;
      setNav(scrollValue > 100);
    };

    window.addEventListener("scroll", changeValueOnScroll);
    return () => {
      window.removeEventListener("scroll", changeValueOnScroll);
    };
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <header>
        <Navbar
          collapseOnSelect
          expand="lg"
          className={`${nav ? "sticky" : ""}`}
        >
          <Container>
            <Navbar.Brand>
              <Link to="/" className="logo" onClick={scrollTop}>
                <img src={Logo} alt="Logo" className="img-fluid" />
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="ms-auto">
                <Link to="/" onClick={scrollTop}>
                  Home
                </Link>
                <a href="#app-download">Mobile-app</a>
                <a href="#contact-us">Contact-us</a>

                <NavDropdown
                  title={<span className="custom-dropdown-title">Menu</span>}
                  id="collapsible-nav-dropdown"
                  className="custom-dropdown"
                >
                  <NavDropdown.Item href="#action/3.1" >Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Something
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>

                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-6 search"
                    aria-label="Search"
                  />
                  <i class="bi bi-search"></i>
                </Form>
                <Nav.Link as={Link} to="/cart">
                  <div className="cart">
                    <i className="bi bi-cart"></i>
                  </div>
                </Nav.Link>
                <button className="sign-in-button">SIGN-IN</button>
                <button className="sign-up-button">SIGN-UP</button>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    </div>
  );
};

export default Navbars;

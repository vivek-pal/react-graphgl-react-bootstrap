import React from "react";
import "./NavBar.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Logo from "../../../assets/icons/logo.png";

function NavBar() {
  return (
    <Navbar expand="lg" className="w-100 z-2">
      <Container>
        <Navbar.Brand className="text-light">
        <img className="me-2" src={Logo} alt="logo" />
            Health Insurance
          {/* <Link to="/" className="text-decoration-none text-light d-flex">
           
          </Link> */}
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default NavBar;

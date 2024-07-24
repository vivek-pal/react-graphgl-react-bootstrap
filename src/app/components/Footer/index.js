import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer mt-auto">
      <Container className="p-3">
        <p className="text-center text-white">
          Thank you for visiting Health Insurance
        </p>
        <p className="text-center mt-5 text-white">
          Follow us on social media:
        </p>
        <Row>
          <Col className="text-center">
            <a href="/">Instagram</a>
          </Col>
          <Col className="text-center">
            <a href="/">Facebook</a>
          </Col>
          <Col className="text-center">
            <a href="/">Twitter</a>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;

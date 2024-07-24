import React, { useEffect } from "react";
import userService from "../../services/userService";
import { Dispatch } from "redux";
import { setUserList } from "./homeSlice";
import { useAppDispatch } from "../../hooks";
import Quote from "../../components/Quote";
import { Button, Form, Container, Card } from "react-bootstrap";

const Home = () => {
  return (
    <Container className="mb-5">
      <div className="mt-3">
      <Card>
        <Card.Header>New Quote</Card.Header>
        <div className="mb-3">
          <Quote />
        </div>
      </Card>
      </div>
    </Container>
  );
};

export default Home;

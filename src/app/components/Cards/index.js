import React from "react";
import { createSelector } from "reselect";
import {
  Button,
  Container,
  Card,
  Col,
  Row,
  Placeholder,
} from "react-bootstrap";
import { makeSelectUserlist } from "../../pages/Home/selectors";
import { useAppSelector } from "../../hooks";
import PlaceHolder_Img from "../../../assets/img/placeholder.svg";

const stateSelector = createSelector(makeSelectUserlist, (userList) => ({
  userList,
}));

const Cards = () => {
  const { userList } = useAppSelector(stateSelector);

  if (userList == undefined) {
    return (
      <Container className="mt-5">
        <Row>
          {[1, 2, 3].map((index) => (
            <Col key={index}>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={PlaceHolder_Img} />
                <Card.Body>
                  <Placeholder as={Card.Title} animation="glow">
                    <Placeholder xs={6} />
                  </Placeholder>
                  <Placeholder as={Card.Text} animation="glow">
                    <Placeholder xs={7} /> <Placeholder xs={4} />{" "}
                    <Placeholder xs={4} /> <Placeholder xs={6} />{" "}
                    <Placeholder xs={8} />
                  </Placeholder>
                  <Placeholder.Button variant="primary" xs={6} />
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }

  return (
    <Container className="mt-5">
      <Row>
        {userList?.media?.map((user: any, index: any) => (
          <Col key={index}>
            <Card style={{ minWidth: "18rem", margin: "20px" }}>
              <Card.Img variant="top" src={user.coverImage.extraLarge || ""} />
              <Card.Body>
                <Card.Title>Example Card</Card.Title>
                <Card.Text>{user?.title?.english || ""}</Card.Text>
                <Button variant="primary">Details</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Cards;

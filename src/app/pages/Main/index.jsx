import React, { useEffect, useState } from "react";
import { Container, Card, Stack } from "react-bootstrap";
import { useSelector } from "react-redux";
import PrimaryInsuredDetails from "../../components/PrimaryInsuredDetails";
import Steps from "../../components/Steps";
import Account from "../../components/Account";
import Classes from "../../components/Classes";
import Summary from "../../components/Summary";
import NavigationButtons from "../../components/NavigationButtons";
import {useLocation} from 'react-router-dom';

const Main = () => {
  const location = useLocation();
  const page = useSelector((e) => e.page.value);
  const [header, setHeader] = useState("");
  const config = {
    
    0: "Applicant",
    1: "Policy Information",
    2: "Classes Eligibility",
    3: "Summary"
  }


  useEffect(() => {
    setHeader(config[page]);
  },[page])

  const renderTab = () => {
    switch (page) {
      case 0:
        return <Account  />;
      case 1:
        return <PrimaryInsuredDetails />;
      case 2:
        return <Classes />;
      case 3:
        return <Summary />;
    }
  };
  return (
    <Container>
      <div className="mt-3 mb-5">
      <div>{location.state.id}</div>
      <div><b>{location.state.product} </b> | {location.state.effectiveDate}</div>
      <div className="mt-3">
        <Steps />
        <Card>
          <Card.Header>{header}</Card.Header>
          <div className="m-3">
            {renderTab()}
            <NavigationButtons />
          </div>
        </Card>
        </div>
      </div>
    </Container>
  );
};

export default Main;

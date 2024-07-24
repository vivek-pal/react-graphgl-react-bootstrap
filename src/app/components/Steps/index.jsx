import React from "react";
import Nav from "react-bootstrap/Nav";
import { useSelector } from "react-redux";

const Steps = () => {
    const page = useSelector((e)=>e.page.value)
  const handleSelect = (eventKey) => alert(`selected ${eventKey}`);

  return (
    <div className="Steps">
      <Nav
        variant="underline"
        defaultActiveKey="0"
        activeKey={page.toString()}
        // onSelect={handleSelect}
      >
        <Nav.Item>
          <Nav.Link eventKey="0">Account</Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link eventKey="1">Policy Info</Nav.Link>
        </Nav.Item>
        
        <Nav.Item>
          <Nav.Link eventKey="2">Eligibility</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="3" > Coverage Summary</Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
};

export default Steps;

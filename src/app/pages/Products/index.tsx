import React, { useState } from "react";
import { Form, Container, Button } from "react-bootstrap";
import DynamicFormControl from "../../controls/DynamicFormControl";

const Products = () => {
  const [type, setType]: any = useState("");
  const [data, setData] = useState([]);

  const config: any = {
    checkbox: { id: 1, type: "checkbox", label: "Check Box" },
    switch: { id: 2, type: "switch", label: "Toggle" },
    text: { id: 3, type: "text", label: "Name", placeholder: "Please enter" },
    email: { id: 4, type: "email", label: "Email", placeholder: "Please enter email" },
    textarea: { id: 5, type: "textarea", as: "textarea", rows: 3, label: "Comment", placeholder: "Please enter comment" },
    radio: { id: 6, type: "radio", label: "Redio Button" },
  };

  const getData = async (id:any) => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      setData(data);
    });
  }

  const handleOnChange = async (e: any) => {
    const type = e.currentTarget.value;
    await getData(config[type].id);
    if(data){
      console.log(JSON.stringify(data))
      setType(type);
    }

  }

  return (
    <Container className="mt-5">
        <Form.Select
          aria-label="Default select example"
          value={type}
          onChange={handleOnChange}
        >
          <option>Please select</option>
          <option value="text">Text Box</option>
          <option value="checkbox">Check Box</option>
          <option value="radio">Redio Button</option>
          <option value="switch">Switch</option>
          <option value="email">Email</option>
          <option value="textarea">Text Area</option>
        </Form.Select>

      <Form>
        <div key={`default-${type}`} className="mt-3">
          <DynamicFormControl {...config[type]} />
        </div>
        {/* <Button  className="mt-3" variant="secondary" type="submit">Save</Button> */}
      </Form>
    </Container>
  );
};

export default Products;

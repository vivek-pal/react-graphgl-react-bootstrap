import { useEffect, useState } from "react";
import { Button, Container, Form, Col, Row, InputGroup } from "react-bootstrap";
import { NEW_USER } from "../../services/userService/queries";
import { useMutation } from "@apollo/client";

function Summary() {
  const [validated, setValidated] = useState(false);
  const [formData, setFormData] = useState({
    limit: "",
    deductible: "",
    coverageFactor: "",
    premium: "",
    premium1: "",
    written: "",
    change: "",
  });

  const [createUser, newUser] = useMutation(NEW_USER);

  const getData = async () => {
    fetch(`https://jsonplaceholder.typicode.com/todos/1`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        // setFormData(data);
        setFormData({
          limit: "123",
          deductible: "25",
          coverageFactor: "Primary",
          premium: "100",
          premium1: "50",
          written: "150",
          change: "200",
        });
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    event.stopPropagation();
    setValidated(true);
    if (form.checkValidity() === false) {
    } else {
      console.log(JSON.stringify(formData));
      try {
        await createUser({
          variables: formData,
        });
        alert("User added successfully.");
      } catch (err) {
        alert(err);
      }
    }
  };

  return (
    <div>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} md="3" controlId="validationCustom01">
            <Form.Label>Limit</Form.Label>
            <Form.Control
              required
              type="text"
              name="limit"
              placeholder=""
              defaultValue={formData.limit}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationCustom01">
            <Form.Label>Deductible</Form.Label>
            <Form.Control
              required
              type="text"
              name="deductible"
              placeholder=""
              defaultValue={formData.deductible}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationCustom01">
            <Form.Label>Coverage Factor</Form.Label>
            <Form.Control
              required
              type="text"
              name="coverageFactor"
              placeholder=""
              defaultValue={formData.coverageFactor}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationCustom01">
            <Form.Label>Premium</Form.Label>
            <Form.Control
              required
              type="text"
              name="premium"
              placeholder=""
              defaultValue={formData.premium}
              onChange={handleChange}
            />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} md="4" controlId="validationCustom01">
            <Form.Label>Premium</Form.Label>
            <Form.Control
              required
              type="text"
              name="premium1"
              placeholder=""
              defaultValue={formData.premium1}
              onChange={handleChange}
              disabled={true}
            />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} md="4" controlId="validationCustom01">
            <Form.Label>Written</Form.Label>
            <Form.Control
              required
              type="text"
              name="written"
              placeholder=""
              defaultValue={formData.written}
              onChange={handleChange}
              disabled={true}
            />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} md="4" controlId="validationCustom01">
            <Form.Label>Change</Form.Label>
            <Form.Control
              required
              type="text"
              name="change"
              placeholder=""
              defaultValue={formData.change}
              onChange={handleChange}
              disabled={true}
            />
          </Form.Group>
        </Row>
      </Form>
    </div>
  );
}

export default Summary;

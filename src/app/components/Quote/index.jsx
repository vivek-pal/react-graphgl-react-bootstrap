import { useState } from "react";
import { Button, Container, Form, Col, Row } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

function NewQuote() {
  let navigate = useNavigate();
  let { id } = useParams();

  const [validated, setValidated] = useState(false);
  const [formData, setFormData] = useState({
    effectiveDate: "",
    product: "",
  });

  const routeChange = () => {
    let path = `/main`;
    navigate(path, {
      state: {
        id: id,
        effectiveDate: formData.effectiveDate,
        product: formData.product,
      },
    });
  };

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
      if (formData.product === "AHH") {
        routeChange();
      } else {
        window.open("https://www.google.com/");
      }
    }
  };

  return (
    <Container className="mt-3">
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} md="4" controlId="validationCustom01">
            <Form.Label>Effective Date</Form.Label>
            <Form.Control
              required
              type="date"
              name="effectiveDate"
              placeholder="Effective Date"
              defaultValue={formData.effectiveDate}
              onChange={handleChange}
              min={new Date().toISOString().split("T")[0]}
            />
            <Form.Control.Feedback type="invalid">
              Please select a Effective Date.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} md="4" controlId="validationCustom02">
            <Form.Label>Product</Form.Label>
            <Form.Select
              required
              aria-label="product list"
              name="product"
              value={formData.product}
              onChange={handleChange}
            >
              <option value="">Please select</option>
              <option value="AHH">AHH</option>
              <option value="CarrierSpecialityAccidentHealth">
                Carrier Speciality Accident Health
              </option>
            </Form.Select>
            <Form.Control.Feedback type="invalid">
              Please choose a Product.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Button variant="flat" type="submit">
          Start
        </Button>
      </Form>
    </Container>
  );
}

export default NewQuote;

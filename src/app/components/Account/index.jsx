import { useState, useEffect } from "react";
import { Button, Form, Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { info } from "../../pages/Main/user";

function Account() {
  const dispatch = useDispatch();
  const user = useSelector((e) => e.user.value);
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    accountEffectiveDate: "",
    accountExpirationDate: "",
  });

  const getData = async () => {
    fetch(`https://jsonplaceholder.typicode.com/todos/1`) // https://securapocapi.azure-api.net/api/Address
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        // setFormData(data);
        const responseData = {
          name: "John",
          address: "U.S. Naval Research Laboratory, USA",
          city: "California",
          state: "Los Angeles",
          zip: "90001",
          accountEffectiveDate: "2024-07-16",
          accountExpirationDate: "2025-06-18",
        };
        setFormData(responseData);

        dispatch(
          info({
            ...user,
            responseData,
          })
        );
      });
  };

  useEffect(() => {
    if (!user.isEdit) {
      getData();
    }
  }, []);

  useEffect(() => {
    dispatch(
      info({
        ...user,
        name: formData.name,
        address: formData.address,
        city: formData.city,
        state: formData.state,
        zip: formData.zip,
        isEdit: true,
        accountEffectiveDate: formData.accountEffectiveDate,
        accountExpirationDate: formData.accountExpirationDate,

        nameValid: formData.name !== "",
        addressValid: formData.address !== "",
      })
    );
  }, [formData]);

  useEffect(() => {
    formData.name = user.name;
    formData.address = user.address;
    formData.city = user.city;
    formData.state = user.state;
    formData.zip = user.zip;
    formData.accountEffectiveDate = user.accountEffectiveDate;
    formData.accountExpirationDate = user.accountExpirationDate;

    dispatch(
      info({
        ...user,
        name: formData.name,
        address: formData.address,
        city: formData.city,
        state: formData.state,
        zip: formData.zip,
        accountEffectiveDate: formData.accountEffectiveDate,
        accountExpirationDate: formData.accountExpirationDate,
        nameValid: formData.name !== "",
        addressValid: formData.address !== "",
      })
    );
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="mb-4">
      <Form noValidate validated={user.nextClick}>
        <Row className="mb-3">
          <Form.Group as={Col} md="4" controlId="validationCustom01">
            <Form.Label>
              Name<span className="text-danger">*</span>
            </Form.Label>
            <Form.Control
              required
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
            />
            {!user.nameValid && user.nextClick && (
              <Form.Control.Feedback type="invalid">
                Please enter a Name.
              </Form.Control.Feedback>
            )}
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} md="4" controlId="validationCustom01">
            <Form.Label>
              Address<span className="text-danger">*</span>
            </Form.Label>
            <Form.Control
              required
              type="text"
              name="address"
              placeholder="Address"
              defaultValue={formData.address}
              onChange={handleChange}
            />
            {!user.addressValid && user.nextClick && (
              <Form.Control.Feedback type="invalid">
                Please enter a Address.
              </Form.Control.Feedback>
            )}
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} md="4" controlId="validationCustom01">
            <Form.Label>City</Form.Label>
            <Form.Control
              type="text"
              name="city"
              placeholder="City"
              defaultValue={formData.city}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom01">
            <Form.Label>State</Form.Label>
            <Form.Control
              type="text"
              name="state"
              placeholder="State"
              defaultValue={formData.state}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom01">
            <Form.Label>Zip</Form.Label>
            <Form.Control
              type="text"
              name="zip"
              placeholder="Zip"
              value={formData.zip}
              onChange={handleChange}
            />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} md="4" controlId="validationCustom01">
            <Form.Label>Effective Date</Form.Label>
            <Form.Control
              type="date"
              name="accountEffectiveDate"
              format="dd/mm/yyyy"
              defaultValue={formData.accountEffectiveDate}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom01">
            <Form.Label>Expiration Date</Form.Label>
            <Form.Control
              type="date"
              name="accountExpirationDate"
              format="dd/mm/yyyy"
              defaultValue={formData.accountExpirationDate}
              onChange={handleChange}
            />
          </Form.Group>
        </Row>

        <Button variant="primary">Verify Address</Button>
      </Form>
    </div>
  );
}

export default Account;

import { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Col, Row } from "react-bootstrap";
import { info } from "../../pages/Main/user";

function FormCmp() {
  const dispatch = useDispatch();
  const user = useSelector((e) => e.user.value);
  const [quote, setQuote] = useState({
    effectiveDate: "",
    product: "",
  });

  const refEffectiveDate = useRef();
  const refProduct = useRef();

  useEffect(() => {
    dispatch(
      info({
        ...user,
        effectiveDate: refEffectiveDate.current.value,
        product: refProduct.current.value,
        effectiveDateValid: refEffectiveDate.current.value !== "",
        productValid: refProduct.current.value !== "",
      })
    );
  }, [quote.effectiveDate, quote.product]);

  useEffect(() => {
    refEffectiveDate.current.value = user.effectiveDate;
    refProduct.current.value = user.product;

    dispatch(
      info({
        ...user,
        effectiveDate: refEffectiveDate.current.value,
        product: refProduct.current.value,
        effectiveDateValid: refEffectiveDate.current.value !== "",
        productValid: refProduct.current.value !== "",
      })
    );
  }, []);

  return (
    <div>
      <Form noValidate validated={user.nextClick}>
        
        <Row className="mb-3">
          <Form.Group as={Col} md="4" controlId="validationCustom03">
            <Form.Label>
              Producer<span className="text-danger">*</span>
            </Form.Label>
            <Form.Select
              required
              aria-label="product list"
              ref={refProduct}
              onChange={(e) => setQuote({ ...quote, product: e.target.value })}
            >
              <option value="">Please select</option>
              <option value="THEODORESCHEREKOS">
              THEODORE S CHEREKOS
              </option>
            </Form.Select>
            {!user.productValid && user.nextClick && (
              <Form.Control.Feedback type="invalid">
                Please choose a product.
              </Form.Control.Feedback>
            )}
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} md="4" controlId="validationCustom01">
            <Form.Label>
              Effective Date<span className="text-danger">*</span>
            </Form.Label>
            <Form.Control
              required
              type="date"
              name="effectiveDate"
              placeholder="MM/DD/YYYY"
              ref={refEffectiveDate}
              onChange={(e) =>
                setQuote({ ...quote, effectiveDate: e.target.value })
              }
            />
            {!user.effectiveDateValid && user.nextClick && (
              <Form.Control.Feedback type="invalid">
                Please enter a Effective Date.
              </Form.Control.Feedback>
            )}
          </Form.Group>
        </Row>
      </Form>
    </div>
  );
}

export default FormCmp;

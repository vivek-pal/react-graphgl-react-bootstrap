import { useState, useEffect, useCallback } from "react";
import { Button, Form, Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { info } from "../../pages/Main/user";

function Classes() {
  const dispatch = useDispatch();
  const user = useSelector((e) => e.user.value);
  const [validated, setValidated] = useState(false);
  const [subClassList, setSubClassList] = useState([]);
  const [formData, setFormData] = useState({
    businessClassCode: "",
  });

  useEffect(() => {
    let tempSubClassList = subClassList?.filter((x) => !!x.subClassCode || !!x.numberToParticipants );
    dispatch(
      info({
        ...user,
        businessClassCode: formData.businessClassCode,
        subClassList: tempSubClassList
      })
    );
  }, [formData, subClassList]);

  useEffect(() => {
    let item = {
      id: 0,
      isDeleted: false,
      serialNo: 1,
      subClassCode: "",
      numberToParticipants: "",
    };

    formData.businessClassCode = user.businessClassCode;
    if(user.subClassList){
      setSubClassList(user.subClassList);
    } else {
      setSubClassList([...subClassList, item]);
    }
    

    dispatch(
      info({
        ...user,
        businessClassCode: formData.businessClassCode,
        subClassList: subClassList
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

  const onAdd = useCallback(
    (e) => {
      e.preventDefault();
      let dict = {
        id: 0,
        isDeleted: false,
        serialNo: subClassList?.length + 1 || 1,
        subClassCode: "",
        numberToParticipants: "",
      };

      let newState = [...subClassList, dict];
      let index = 1;

      // newState.forEach((item) => {
      //   if (!item.isDeleted) {
      //     item.serialNo = index;
      //     index = index + 1;
      //   }
      //   return item;
      // });
      setSubClassList(newState);
    },
    [subClassList]
  );

  const deleteRow = (item, event) => {
    event.preventDefault();
    let getFilterData = subClassList?.filter((x) => !x.isDeleted);
    if (getFilterData.length > 1) {
      let newState = subClassList.map((newItem) => {
        if (newItem.serialNo == item.serialNo) {
          let updatedItem = { ...newItem };
          updatedItem.isDeleted = true;

          return updatedItem;
        }
        return newItem;
      });
      let index = 1;

      // newState.forEach((item) => {
      //   if (!item.isDeleted) {
      //     item.serialNo = index;
      //     index = index + 1;
      //   }
      //   return item;
      // });
      setSubClassList(newState);
    }
  };

  
  const handleSubClassChange = useCallback(
    (name, inputValue, identifier) => {
      let newState = subClassList.map((item) => {
        if (item.serialNo == identifier) {
          let updatedItem = { ...item };
          updatedItem[name] = inputValue;

          return updatedItem;
        }
        return item;
      });

      setSubClassList(newState);
    },
    [subClassList]
  );

  const renderSubClass = (item, index) => {
    return (
      <Row className="mb-3" key={index}>
        <Form.Group as={Col} md="4" controlId="validationCustom03">
          <Form.Label>Sub Class Code</Form.Label>
          <Form.Select
            aria-label="sub class list"
            value={item.subClassCode}
            name="subClassCode"
            onChange={(e) => handleSubClassChange("subClassCode",e.target.value, item.serialNo)}
          >
            <option>Please select</option>
            <option value="Football">Football</option>
            <option value="NonSportsCampsDay">Non Sports Camps - Day</option>
          </Form.Select>

          <Form.Control.Feedback type="invalid">
            Please provide a valid Sub Class.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom04">
          <Form.Label>Number to Participants</Form.Label>
          <Form.Control
            type="text"
            // placeholder="Number to Participants"
            name="numberToParticipants"
            required
            value={item.numberToParticipants}
            onChange={(e) => handleSubClassChange("numberToParticipants",e.target.value, item.serialNo)}
          />
          <Form.Control.Feedback type="invalid">
            Please provide a value.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group
          as={Col}
          md="3"
          style={{ display: "flex", alignItems: "end" }}
          controlId="validationCustom05"
        >
          {index != 0 && <Button variant="danger" disabled={item.id != 0} onClick={(e) => deleteRow(item, e)}>Delete</Button>}
        </Form.Group>
      </Row>
    );
  };

  return (
    <div>
      <Form noValidate validated={validated}>
        <Row className="mb-3">
          <Form.Group as={Col} md="4" controlId="validationCustom01">
            <Form.Label>Business Class Code</Form.Label>
            <Form.Select
              aria-label="product list"
              value={formData.businessClassCode}
              name="businessClassCode"
              onChange={handleChange}
            >
              <option>Please select</option>
              <option value="Campers">Campers</option>
            </Form.Select>
          </Form.Group>
        </Row>
        {subClassList.filter((x) => !x.isDeleted).map((item, index) => renderSubClass(item, index))}
        <Row className="mb-3">
          <Form.Group as={Col} md="2" controlId="validationCustom01">
            <Button variant="flat" onClick={onAdd}>
              Add
            </Button>
          </Form.Group>
        </Row>
      </Form>
    </div>
  );
}

export default Classes;

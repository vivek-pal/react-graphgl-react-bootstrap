import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Container, Form, Col, Row, InputGroup } from "react-bootstrap";
import { back, next, exit } from "../../pages/Main/page";
import { reset } from "../../pages/Main/user";
import { info } from "../../pages/Main/user";
import { useNavigate, useLocation } from "react-router-dom";
import { useMutation } from '@apollo/client';
import { NEW_USER } from "../../services/userService/queries";

const NavigationButtons = () => {
  let navigate = useNavigate();
  const location = useLocation();
  const page = useSelector((e) => e.page.value);
  const user = useSelector((e) => e.user.value);
  const dispatch = useDispatch();
  const nextClick = () => {
    console.log(user);
    dispatch(info({ ...user, nextClick: true }));
    if (
      user.nameValid &&
      // user.productValid &&
      page == 0
    ) {
      dispatch(next());
      dispatch(info({ ...user, nextClick: false }));
    }
    if (user.effectiveDateValid && user.productValid && page == 1) {
      dispatch(next());
      dispatch(info({ ...user, nextClick: false }));
    }
    if(page == 2) {
      saveForm();
    }
    if (page > 1) {
      dispatch(next());
    }
  };
  const [createUser] = useMutation(NEW_USER);

  const routeChange = () => {
    let path = `/${location.state.id || 0}`;
    navigate(path);
  };

  const saveForm = async () => {
    try {
      await createUser({
        variables: user
      });                          
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className={page == 0 ? "navigation btnRight" : "navigation"}>
      {/* {page !== 3 ? <Button variant="flat" onClick={nextClick}>
        {page == 0 ? "Start" : "Next"}
      </Button> : <Button variant="secondary">
        Bind
      </Button>
      } */}

      {page === 0 && (
        <Button
          variant="flat"
          style={{ visibility: "hidden" }}
          onClick={nextClick}
        >
          Start
        </Button>
      )}

      {page > 0 && page < 3 && (
        <Button variant="light" onClick={() => dispatch(back())}>
          Back
        </Button>
      )}

      {page > -1 && page < 3 && (
        <Button variant="flat" onClick={nextClick}>
          Next
        </Button>
      )}

      {page === 3 && <Button variant="secondary">Bind</Button>}

      {page === 3 && (
        <Button
          variant="danger"
          onClick={() => {
            dispatch(exit());
            dispatch(reset());
            routeChange();
          }}
        >
          Exit
        </Button>
      )}
    </div>
  );
};

export default NavigationButtons;

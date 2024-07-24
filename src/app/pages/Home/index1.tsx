import React, { useEffect } from "react";
import userService from "../../services/userService";
import { Dispatch } from "redux";
import { setUserList } from "./homeSlice";
import { useAppDispatch } from "../../hooks";
import Card from "../../components/Cards";

const actionDispatch = (dispatch: Dispatch) => ({
  setUserList: (page: any) => dispatch(setUserList(page)),
});

const Home = () => {
  const { setUserList } = actionDispatch(useAppDispatch());
  useEffect(() => {
    // fetchUser();
  }, []);

  const fetchUser = async () => {
    const userList = await userService.fetchUserList(0).catch((err) => {
      console.log(err);
    });
    console.log(userList);
    if (userList) {
      setUserList(userList);
    }
  };

  return (
    <Card />
  );
};

export default Home;

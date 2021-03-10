import React, { useState } from "react";
import { useDispatch } from "react-redux";

import UserLogin from "../../organisms/UserLogin/UserLogin";
import { fetchUser } from "./../../../reducers/actions/userActions";

const Login = (props) => {
  const dispatch = useDispatch();

  const [stateUser, setStateUser] = useState({});
  const [statePage, setStatePage] = useState({
    loading_text: "Loading...",
    loading: true,
    err: {},
  });

  const setDataUser = (input) => {
    setStateUser({
      ...stateUser,
      [input.name]: input.value,
    });
  };

  const _loginUser = async () => {
    try {
      dispatch(fetchUser(stateUser));
      setStatePage({
        ...statePage,
        loading: false,
      });
    } catch (err) {
      // const { message, code } = JSON.parse(err.message);
      setStatePage({
        err: err.message,
        loading: false,
        loading_text: "",
      });
    }
  };

  return (
    <div>
      <UserLogin loginUser={_loginUser} handleChange={setDataUser}></UserLogin>
    </div>
  );
};

export default Login;

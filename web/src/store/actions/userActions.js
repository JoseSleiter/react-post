import { useDispatch, useSelector } from "react-redux";
import {
  handleErrors,
  handleThrowErrors,
} from "../../utils/middleware/handleErrors";

// Action Creators
const setUser = (payload) => ({ type: "SET_USER", payload });

const logUserOut = () => ({ type: "LOG_OUT" });

// Methods
export const fetchUser = (userInfo) => async (dispatch) => {
  try {
    let response = await fetch(`http://localhost:3001/api/v1/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(userInfo),
    });
    let { data } = await handleErrors(response);
    console.log("data", data);

    localStorage.setItem("token", data.token);
    dispatch(setUser(data.user));
  } catch (error) {
    console.log(error.message);
  }
};

export const signUserUp = (userInfo) => async (dispatch) => {
  try {
    let response = await fetch(`http://localhost:3001/api/v1/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(userInfo),
    });
    let { data } = await handleErrors(response);
    localStorage.setItem("token", data.token);
    dispatch(setUser(data.user));
  } catch (error) {
    console.log(error.message);
  }
};

export const autoLogin = () => async (dispatch) => {
  try {
    let localToken = localStorage.getItem("token");
    if (!!localToken && localToken != "undefined") {
      let response = await fetch(
        `http://localhost:3001/api/v1/auth/autoLogin`,
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      let { data } = await handleErrors(response);
      console.log("data", data);
      localStorage.setItem("token", data.token);
      dispatch(setUser(data.user));
    }
  } catch (error) {
    console.log(error.message);
  }
};

export const fetchLogout = (dispatch) => {
  dispatch(logUserOut());
};

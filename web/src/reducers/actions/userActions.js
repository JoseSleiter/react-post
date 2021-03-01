import { useDispatch, useSelector } from "react-redux";

// Action Creators
const setUser = (payload) => ({ type: "SET_USER", payload });

const logUserOut = () => ({ type: "LOG_OUT" });

// Methods

export const fetchUser = (userInfo) => (dispatch) => {
  fetch(`http://localhost:3001/api/v1/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(userInfo),
  })
    .then((res) => res.json())
    .then(({ data }) => {
      console.log("data", data);

      localStorage.setItem("token", data.token);
      dispatch(setUser(data.user));
    });
};

export const signUserUp = (userInfo) => (dispatch) => {
  fetch(`http://localhost:3001/api/v1/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(userInfo),
  })
    .then((res) => res.json())
    .then(({ data }) => {
      localStorage.setItem("token", data.token);
      dispatch(setUser(data.user));
    });
};

export const autoLogin = () => (dispatch) => {
  fetch(`http://localhost:3001/api/v1/auth/autoLogin`, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  })
    .then((res) => res.json())
    .then(({ data }) => {
      console.log("data", data);
      // localStorage.setItem("token", data.token);
      dispatch(setUser(data.user));
    })
    .catch((err) => {
      console.log("err", err);
    });
};

export const fetchLogout = (dispatch) => {
  dispatch(logUserOut());
};

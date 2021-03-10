import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import Header from "./components/organisms/Header/Header";
import Home from "./components/pages/Home/Home";
import Login from "./components/pages/Login/Login";
import Register from "./components/pages/Register/Register";
import Perfil from "./components/pages/Perfil/Perfil";
import GuardedRoute from "./utils/guard/guardedRoute";
import { autoLogin } from "./store/actions/userActions";

import LzHeader from "./template/LazyLoad/Header/LzHeader";

function App() {
  const userReducer = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(autoLogin());
  // }, []);

  return (
    <div className="App">
      <Router>
        {/* <Header></Header> */}
        <LzHeader></LzHeader>
        <Switch>
          <GuardedRoute
            exact
            path="/perfil"
            component={Perfil}
            auth={userReducer.loggedIn}
          />
          <GuardedRoute
            exact
            path="/login"
            component={Login}
            auth={!userReducer.loggedIn}
          />
          <GuardedRoute
            exact
            path="/register"
            component={Register}
            auth={!userReducer.loggedIn}
          />
          <Route exact path="/">
            <Home />
          </Route>
          {/* <Redirect to="/"></Redirect> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;

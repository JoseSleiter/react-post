import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { fetchLogout } from "./../../../reducers/actions/userActions";

import Img from "../../atoms/Img/Img";
import ButtonIcon from "../../atoms/ButtonIcon/ButtonIcon";
import NavBar from "../../molecules/NavBar/NavBar";
import CardSession from "../../molecules/CardSession/CardSession";
import SearchField from "../../molecules/SearchField/SearchField";

import logo from "./../../../assets/img/gs-logo.png";

const Header = (props) => {
  const userReducer = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  const hangleLogout = () => {
    console.log("logout");
    fetchLogout(dispatch);
  };

  return (
    <header className="Header">
      <div className="Header__inner inner">
        <div className="Header__Logo">
          <Img src={logo} alt="" />
        </div>
        <div className="Header__Spacer"></div>
        <NavBar>
          <CardSession
            isLogin={userReducer.loggedIn}
            hangleLogout={hangleLogout}
          ></CardSession>
        </NavBar>
      </div>
      <div className="SearchField__inner inner">
        <SearchField></SearchField>
      </div>
    </header>
  );
};

// connect()(Header);
export default Header;

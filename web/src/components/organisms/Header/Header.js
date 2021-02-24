import React from "react";
import ButtonIcon from "../../atoms/ButtonIcon/ButtonIcon";
import Img from "../../atoms/Img/Img";
import CardSession from "../../molecules/CardSession/CardSession";
import NavBar from "../../molecules/NavBar/NavBar";
import SearchField from "../../molecules/SearchField/SearchField";

import logo from "./../../../assets/img/gs-logo.png";

const Header = (props) => {
  if (props.isMovil)
    return (
      <header className="Header">
        <div className="Header__inner inner">
          <nav className="MainMenu">
            <div class="MainMenu__MobileHeader">
              <div class="MainMenu__Logo">
                <a herf="/">
                  <Img src={logo} alt="" />
                </a>
              </div>
              <NavBar></NavBar>
              <button class="MainMenu__MenuToggle close">
                <i class="fas fa-times"></i>
              </button>
            </div>
          </nav>
          <div className="header_menu-toggle">
            <ButtonIcon icon="fas fa-bars" />
          </div>
        </div>
        <div className="SearchField__inner inner">
          <SearchField></SearchField>
        </div>
      </header>
    );
  return (
    <header className="Header">
      <div className="Header__inner inner">
        <div className="Header__Logo">
          <Img src={logo} alt="" />
        </div>
        <div class="Header__Spacer"></div>
        <NavBar>
          <CardSession></CardSession>
        </NavBar>
      </div>
      <div className="SearchField__inner inner">
        <SearchField></SearchField>
      </div>
    </header>
  );
};

export default Header;

import React from "react";
import ButtonIcon from "../../atoms/ButtonIcon/ButtonIcon";
import Img from "../../atoms/Img/Img";
import NavBar from "../../molecules/NavBar/NavBar";

const Header = (props) => {
  if (props.isMovil)
    return (
      <header>
        <nav className="MainMenu">
          <div class="MainMenu__MobileHeader">
            <div class="MainMenu__Logo">
              <a herf="/">
                <img
                  src="https://images.ctfassets.net/5gv1edeicqfs/2VJg7fkuNaAUqUawUuckk4/66298626f95b05550594405b2e5d39b9/gs-logo-inv.png"
                  alt=""
                />
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
      </header>
    );
  return (
    <header>
      <div className="Header">
        <div className="Header__logo">
          <Img />
        </div>
        <div class="Header__Spacer"></div>
        <NavBar></NavBar>
      </div>
    </header>
  );
};

export default Header;

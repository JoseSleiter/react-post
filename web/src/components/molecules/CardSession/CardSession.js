import { React, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../atoms/Button/Button";

const CardSession = (props) => {
  const [isToggle, setIsToggle] = useState(false);

  const handleNull = (e) => {};

  const handleToggle = (e) => {
    setIsToggle(!isToggle);
  };

  const hangleLogout = () => {
    props.hangleLogout();
  };

  if (props.isLogin)
    return (
      <div className="CardSession__dropdown">
        <Button
          handleClick={handleToggle}
          handleHover={handleToggle}
          handleLeaveHover={handleNull}
          text="My Account"
        ></Button>
        <div
          className={`CardSession__dropdown-content  ${
            !isToggle ? "" : "open"
          }`}
        >
          <Link to="/perfil">Me</Link>
          <Button handleClick={hangleLogout} text="Logout"></Button>
        </div>
      </div>
    );
  return (
    <div className="CardSession__dropdown">
      <Button
        handleClick={handleNull}
        handleHover={handleToggle}
        handleLeaveHover={handleNull}
        text="Account"
      ></Button>
      <div
        className={`CardSession__dropdown-content ${!isToggle ? "" : "open"}`}
      >
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </div>
    </div>
  );
};

export default CardSession;

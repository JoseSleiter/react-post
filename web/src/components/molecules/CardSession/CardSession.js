import { React, useState } from "react";
import ButtonIcon from "../../atoms/ButtonIcon/ButtonIcon";
// import Link from "../../atoms/Link/Link";
import { Link } from "react-router-dom";
import Button from "../../atoms/Button/Button";

<Link to="/perfil">Me</Link>;

const CardSession = (props) => {
  const [isToggle, setIsToggle] = useState(false);

  const handleNull = (e) => {};

  const handleToggle = (e) => {
    setIsToggle(!isToggle);
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
        <div className="CardSession__dropdown-content">
          <Link to="/perfil">Me</Link>
          <Button text="Logout"></Button>
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

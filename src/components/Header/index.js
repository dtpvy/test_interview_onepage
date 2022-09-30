import "./index.css";
import MenuIcon from "../../assets/icons/menu.png";
import CloseIcon from "../../assets/icons/close.png";
import { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [menuState, setMenuState] = useState(false);

  const handleOnClick = () => {
    setMenuState(!menuState);
  };

  return (
    <div className="header">
      <div className="header__title">LOGO</div>
      <div className="header__menu__icon" onClick={handleOnClick}>
        <img src={menuState ? CloseIcon : MenuIcon} alt="" height="24" />
      </div>
      <div
        className={`header__menu ${
          menuState ? "header__menu--show" : "header__menu--hide"
        }`}
      >
        <Link style={{ textDecoration: "none" }} to="/work">
          <div className="header__menu__title">WORK</div>
        </Link>
        <Link style={{ textDecoration: "none" }} to="/services">
          <div className="header__menu__title">SERVICES</div>
        </Link>
        <Link style={{ textDecoration: "none" }} to="/contact">
          <div className="header__menu__title">CONTACT</div>
        </Link>
      </div>
    </div>
  );
}

export default Header;

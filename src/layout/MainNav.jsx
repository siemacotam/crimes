import { Link } from "react-router-dom";
import logo from "../images/gun.png";

const MainNav = () => {
  const menuElements = [
    { name: "Profil", path: "/hero" },
    { name: "Robota", path: "/rob" },
    { name: "Machlojki", path: "/" },
    { name: "Gang", path: "/mafia" },
    { name: "Sklep", path: "/shop" },
  ];

  const handleShowMenu = () => {
    document
      .querySelector(".mainNav__ul")
      .classList.toggle("mainNav__ul--show");
    document.body.classList.toggle("bodyBlock");
  };

  const handleCloseMenu = () => {
    document
      .querySelector(".mainNav__ul")
      .classList.remove("mainNav__ul--show");
    document.body.classList.remove("bodyBlock");
  };

  const menuElement = (name, path) => {
    return (
      <li className="mainNav__element">
        <Link to={path} className="mainNav__link" onClick={handleShowMenu}>
          {name}
        </Link>
      </li>
    );
  };

  const menuElToShow = menuElements.map((i) => menuElement(i.name, i.path));

  return (
    <>
      <div className="mainNav__wrapper">
        <nav className="mainNav">
          <div className="mainNav__logo-wrapper">
            <Link to="/" className="mainNav__link" onClick={handleCloseMenu}>
              <img className="mainNav__logo" src={logo} alt="logo" />
            </Link>
          </div>
          <ul className="mainNav__ul">{menuElToShow}</ul>
          <button className="mainNav__button" onClick={handleShowMenu}>
            <i class="fa fa-bars"></i>
          </button>
        </nav>
      </div>
    </>
  );
};

export default MainNav;

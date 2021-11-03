import { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../images/gun.png";
import { StoreContext } from "../store/StoreProvider";

const MainNav = () => {
  const { isLoggedIn } = useContext(StoreContext);
  const menuElements = {
    loggedUser: [
      { name: "Profil", path: "/hero" },
      { name: "Akcje", path: "/rob" },
      { name: "Miejsca", path: "/" },
      { name: "Gang", path: "/mafia" },
      { name: "Sklep", path: "/shop" },
    ],
    guest: [
      { name: "Zaloguj", path: "/register" },
      { name: "Statystyki", path: "/stats" },
      { name: "Pomoc", path: "/help" },
    ],
  };

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
      <li key={name} className="mainNav__element">
        <Link to={path} className="mainNav__link" onClick={handleShowMenu}>
          {name}
        </Link>
      </li>
    );
  };

  const menuElToShow = isLoggedIn
    ? menuElements.loggedUser.map((i) => menuElement(i.name, i.path))
    : menuElements.guest.map((i) => menuElement(i.name, i.path));

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
            <i className="fa fa-bars"></i>
          </button>
        </nav>
      </div>
    </>
  );
};

export default MainNav;

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div className="footer__container-up">
          <h1 className="footer__title home__title">Crimes</h1>
          <div className="footer__navs-container">
            <div className="footer__nav-container">
              <h4 className="footer__subtitle">Start</h4>
              <nav className="footer_start-nav">
                <ul className="footer__ul">
                  <li className="footer__li">
                    <Link to="/">Regulamin</Link>
                  </li>
                  <li className="footer__li">
                    <Link to="/">Zasady gry</Link>
                  </li>
                  <li className="footer__li">
                    <Link to="/">Nowości</Link>
                  </li>
                  <li className="footer__li">
                    <Link to="/">Zarejestruj się</Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="footer__nav-container">
              <h4 className="footer__subtitle">Stats</h4>
              <nav className="footer_start-nav">
                <ul className="footer__ul">
                  <li className="footer__li">
                    <Link to="/">Statystyki</Link>
                  </li>
                  <li className="footer__li">
                    <Link to="/">Statystyki graczy</Link>
                  </li>
                  <li className="footer__li">
                    <Link to="/">Statystyki mafii</Link>
                  </li>
                  <li className="footer__li">
                    <Link to="/">Wydarzenia</Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="footer__nav-container">
              <h4 className="footer__subtitle">Pomoc</h4>
              <nav className="footer_start-nav">
                <ul className="footer__ul">
                  <li className="footer__li">
                    <Link to="/">FAQ</Link>
                  </li>
                  <li className="footer__li">
                    <Link to="/">Forum</Link>
                  </li>
                  <li className="footer__li">
                    <Link to="/">Zgłoś błąd</Link>
                  </li>
                  <li className="footer__li">
                    <Link to="/">Support</Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
        <div className="footer__container-down">
          <p className="text-center text-white">
            Prawa zastrzeżone @ Crimes 2021
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

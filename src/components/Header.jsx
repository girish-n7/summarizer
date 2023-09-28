/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import light from "../assets/lightMode.svg";
import dark from "../assets/darkMode.svg";
import logoLightMode from "../assets/logoLightMode.svg";
import logoDarkMode from "../assets/logoDarkMode.svg";

export default function Header({ darkTheme, handleTheme }) {
  return (
    <header className="header--container">
      <div className="header--main">
        <img
          src={darkTheme ? logoDarkMode : logoLightMode}
          className="header--logo"
          alt=""
        ></img>
        <p>
          <Link className="header--title" to="/">
            Summarizer
          </Link>
        </p>
      </div>

      <div className="header--nav">
        <img
          src={darkTheme ? light : dark}
          className="theme"
          onClick={handleTheme}
        ></img>
        <p>
          <Link className="nav--item" to="/">
            Home
          </Link>
        </p>
        <p>
          <Link className="nav--item" to="/help">
            How to use
          </Link>
        </p>
        <p>
          <Link className="nav--item" to="/contact">
            Contact
          </Link>
        </p>
      </div>
    </header>
  );
}

import React from "react";
import { Link } from "react-router-dom";
import light from "../assets/lightMode.svg";
import dark from "../assets/darkMode.svg";
import logoLightMode from "../assets/logoLightMode.svg";
import logoDarkMode from "../assets/logoDarkMode.svg";

export default function Header() {
  const [darkTheme, setDarkTheme] = React.useState(false);

  function handleClick() {
    return setDarkTheme((prevState) => !prevState);
  }

  const theme = document.querySelector(":root").style;

  React.useEffect(() => {
    theme.setProperty("--text", darkTheme ? "#ebeefa" : "#0a1024");
    theme.setProperty("--background", darkTheme ? "#242425" : "#ebeefa");
    theme.setProperty("--primary-button", darkTheme ? "#b598f1" : "#8b66e8");
    theme.setProperty("--accent", darkTheme ? "#cfb9f6" : "#9831b4");
  });

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
          onClick={handleClick}
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

import React from "react";
import { Link } from "react-router-dom";

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
      <p>
        <Link className="header--title" to="/">
          Summarizer
        </Link>
      </p>
      <div className="header--nav">
        <i
          className={`fa-solid fa-${
            darkTheme ? "lightbulb" : "moon"
          } fa-lg theme`}
          onClick={handleClick}
        ></i>
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

// import React from "react";

export default function Footer() {
  const portfolio = "";
  const gitHub = "https://github.com/girish-n7";
  const linkedIn = "https://www.linkedin.com/in/girish-n-7075ba1a4";
  const email = "mailto: ngirish1729@gmail.com";

  return (
    <footer>
      <p className="footer--content">
        © 2023. Made by Girish N{" "}
        <a href={portfolio} title="Portfolio">
          <i className="fa-solid fa-user fa-lg icon"></i>
        </a>
        <a href={linkedIn} title="LinkedIn">
          <i className="fa-brands fa-linkedin-in fa-lg icon"></i>
        </a>
        <a href={gitHub} title="GitHub">
          <i className="fa-brands fa-github fa-lg icon"></i>
        </a>
        <a href={email} title="email">
          <i className="fa-solid fa-envelope fa-lg icon"></i>
        </a>
      </p>
    </footer>
  );
}

import userLogo from "../assets/user.svg";
import linkedInLogo from "../assets/linkedin.svg";
import gitHubLogo from "../assets/github.svg";
import emailLogo from "../assets/email.svg";

export default function Footer() {
  const portfolio = "https://girish-n7.github.io/portfolio_v2/";
  const gitHub = "https://github.com/girish-n7";
  const linkedIn = "https://www.linkedin.com/in/girish-n-7075ba1a4";
  const email = "mailto: ngirish1729@gmail.com";

  return (
    <footer>
      <p className="footer--content">
        © 2023. Made by Girish N{" "}
        <a href={portfolio} title="Portfolio">
          <img src={userLogo} className="footer--logo" alt=""></img>
        </a>
        <a href={linkedIn} title="LinkedIn">
          <img src={linkedInLogo} className="footer--logo" alt=""></img>
        </a>
        <a href={gitHub} title="GitHub">
          <img src={gitHubLogo} className="footer--logo" alt=""></img>
        </a>
        <a href={email} title="email">
          <img src={emailLogo} className="footer--logo" alt=""></img>
        </a>
      </p>
    </footer>
  );
}

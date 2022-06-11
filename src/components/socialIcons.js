import React from "react";
import MainCss from "../index.css";
import GithubIcon from "../assets/GitHub Icon.png";
import FacebookIcon from "../assets/Facebook Icon.png";
import InstagramIcon from "../assets/Instagram Icon.png";
import TwitterIcon from "../assets/Twitter Icon.png";

export default function SocialIcons() {
  return (
    <div className="socialIcons">
      <a href="https://github.com/kanmi-idris">
        <img src={GithubIcon} alt="GitHub Icon" />
      </a>
      <a href="https://web.facebook.com/olasunkanmi.idris.359">
        <img src={FacebookIcon} alt="Facebook Icon" />
      </a>
      <a href="https://www.instagram.com/primus_gram/">
        <img src={InstagramIcon} alt="Instagram Icon" />
      </a>
      <a href="https://twitter.com/IdrisOlasunka13">
        <img src={TwitterIcon} alt="Twitter Icon" />
      </a>
    </div>
  );
}

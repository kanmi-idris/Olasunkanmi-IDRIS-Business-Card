import React from "react";
import MainCss from "../index.css";
import GithubIcon from "../assets/GitHub Icon.png";
import FacebookIcon from "../assets/Facebook Icon.png";
import InstagramIcon from "../assets/Instagram Icon.png";
import TwitterIcon from "../assets/Twitter Icon.png";

export default function SocialIcons() {
  return (
    <div className="socialIcons">
      <img src={GithubIcon} alt="GitHub Icon" />
      <img src={FacebookIcon} alt="Facebook Icon" />
      <img src={InstagramIcon} alt="Instagram Icon" />
      <img src={TwitterIcon} alt="Twitter Icon" />
    </div>
  );
}

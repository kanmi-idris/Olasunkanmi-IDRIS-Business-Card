import React from "react";
import MainCss from "../index.css";
import EmailIcon from "../assets/Email.png";
import LinkedinIcon from "../assets/LinkedinButton.png";

export function EmailButton() {
  return (
    <div>
      <button className="EmailButton">
        <a href="mailto:olasunkanmiidris15@gmail.com">
          <img src={EmailIcon} alt="Email icon" />
        </a>
        Email
      </button>
    </div>
  );
}

export function LinkedinButton() {
  return (
    <div>
      <button className="LinkedinButton">
        <a href="https://www.linkedin.com/in/olaidris/">
          <img src={LinkedinIcon} alt="Linkedin icon" />
        </a>
        LinkedIn
      </button>
    </div>
  );
}

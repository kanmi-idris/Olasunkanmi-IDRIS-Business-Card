import React from "react";
import MainCss from "../index.css";
import EmailIcon from "../assets/Email.png";
import LinkedinIcon from "../assets/LinkedinButton.png";

export function EmailButton() {
  return (
    <div>
      <button className="EmailButton">
        <img src={EmailIcon} alt="Email icon" />
        Email
      </button>
    </div>
  );
}

export function LinkedinButton() {
  return (
    <div>
      <button className="LinkedinButton">
        <img src={LinkedinIcon} alt="Linkedin icon" />
        LinkedIn
      </button>
    </div>
  );
}

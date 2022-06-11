import React from "react";
import mainCss from "./index.css";
import { EmailButton, LinkedinButton } from "./components/Button";
import SocialIcons from "./components/socialIcons";
import CardImage from "./components/CardImage";

export default function App() {
  return (
    <div className="card_wrap">
      <CardImage />
      <div className="Desktop">
        <div className="main_content">
          <h1 className="Card_Owner_Name">Olasunkanmi Idris</h1>
          <h3 className="Card_Owner_Career">FullStack Developer</h3>
          <a className="Card_Owner_Website" href="#">
            OlasunkanmiIDRIS.Website
          </a>
          <div className="buttons">
            <EmailButton />
            <LinkedinButton />
          </div>
          <div className="Card_Owner_About_and_Interests_Wrap">
            <h3 className="About_Card_Owner">About</h3>
            <p className="About_Card_Owner_Details">
              I am a frontend developer with a particular interest in making
              things simple and automating daily tasks. I try to keep up with
              security and best practices, and am always looking for new things
              to learn.
            </p>
            <h3 className="Interests_Card_Owner">Interests</h3>
            <p className="Interests_Card_Owner_Details">
              Food expert. Music scholar. Reader. Internet fanatic. Bacon buff.
              Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
            </p>
          </div>
        </div>
        <SocialIcons />
      </div>
    </div>
  );
}

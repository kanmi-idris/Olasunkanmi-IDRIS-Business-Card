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
            Portfolio website
          </a>
          <div className="buttons">
            <EmailButton />
            <LinkedinButton />
          </div>
          <div className="Card_Owner_About_and_Interests_Wrap">
            <h3 className="About_Card_Owner">About</h3>
            <p className="About_Card_Owner_Details">
              I have a keen passion for responsive, durable software,
              mobile-first approach and seamless user experience. By using
              several tools to develop quality software I have completed several
              <a href="https://github.com/kanmi-idris?tab=repositories">
                projects
              </a>
              and i'm currently seeking to leverage my skills and gain
              experience whilst contributing to overall organizational growth.
            </p>
            <h3 className="Interests_Card_Owner">Interests</h3>
            <p className="Interests_Card_Owner_Details">
              Food Lover. Movies Geek. Programming.
            </p>
          </div>
        </div>
        <SocialIcons />
      </div>
    </div>
  );
}

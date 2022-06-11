import React from "react";
import CardOwnerImage from "../assets/Olasunkanmi.jpg";
import MainCss from "../index.css";

export default function CardImage() {
  return (
    <>
      <img
        className="Card_Image"
        src={CardOwnerImage}
        alt="Olasunkanmi Idris"
      />
    </>
  );
}

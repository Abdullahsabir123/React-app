import React from "react";
import './Card.css';

export default function Cards(props) {
  return (
    <>
    <div className="Card">

      <img src={props.img} alt="img" className="round" />

      <div className="Cardtitle"><h1>{props.title}</h1></div>

      <div className="Cardtext">{props.text}</div>

    </div>
    </>
  );
}

import React from "react";
import "./Die.scss";
const Die = ({ face, wobble }) => {
  return <i className={`Die ${wobble} fas fa-dice-${face}`}></i>;
};

export default Die;

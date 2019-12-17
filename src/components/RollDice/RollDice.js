import React, { useState } from "react";
import "./RollDice.scss";
import Die from "../Die/Die";

const RollDice = () => {
  const faces = ["one", "two", "three", "four", "five", "six"];
  const [dies, setDies] = useState({
    die1: "one",
    die2: "one"
  });
  const [isRolling, setIsRolling] = useState(false);
  const [wobble, setWobble] = useState("");

  const roll = () => {
    const rnd = () => Math.floor(Math.random() * faces.length);
    setDies({ die1: faces[rnd()], die2: faces[rnd()] });
    setIsRolling(true);
    setWobble("animated wobble");
    setTimeout(() => {
      setIsRolling(false);
      setWobble("");
    }, 1000);
  };

  return (
    <div className="container">
      <div>
        <Die face={dies.die1} wobble={wobble} />
        <Die face={dies.die2} wobble={wobble} />

      </div>
      <button className="roll-btn" onClick={roll} disabled={isRolling}>
        {console.log(dies)}

        {isRolling ? "Rolling..." : "Roll Dice!"}
      </button>
    </div>
  );
};

export default RollDice;

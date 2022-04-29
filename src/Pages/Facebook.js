import React, { useState } from "react";
import Header from "../components/Header";
import Game from "./Game";
import FBConfirmShaming from "../img/Facebook/confirmshaming.png";
import FBMisdirection from "../img/Facebook/Misdirection.jpg";
import FBNC from "../img/Facebook/Misdirection and Needless Complexity.png";
 
const Data = [
  {
    img: FBConfirmShaming,
    option1: "Hidden Costs",
    option2: "Confirm Shaming",
    option3: "Misdirection",
    correctOption: "2",
  },
  {
    img: FBMisdirection,
    option1: "Misdirection",
    option2: "Hidden Costs",
    option3: "Needless Complexity",
    correctOption: "1",
  },
  {
    img: FBNC,
    option1: "All of the Dark Patterns Below Apply",
    option2: "Hidden Costs and Misdirection",
    option3: "Needless Complexity and Misdirection",
    correctOption: "3",
  },
];

const Facebook = () => {
  const [score, setScore] = useState(0);

  const scoreSetter = (val) => {
    const newValue = score+val;
    setScore(newValue);
  };
  return (
    <>
      <Header />
      <h1 style={{ paddingTop:"25px", marginLeft: "825px" }}> Expose Facebook! </h1>
      {score !== 3 ? (
        <>
          <h4>Score: {score}</h4>
          <Game data={Data[score]} scoreSetter={scoreSetter} />
        </>
      ) : (
        <>
        <h1>congrats you won</h1>
        </>
      )}
    </>
  );
};

export default Facebook;

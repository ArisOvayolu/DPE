import React, { useState } from "react";
import Header from "../components/Header";
import Game from "./Game";
import AMHiddenCosts from "../img/Amazon/hidden costs.jpg";
import SneakintoBasket from "../img/Amazon/Sneak into basket.jpg";
import AMMisdirection from "../img/Amazon/Amazon Misdirection.png";

const Data = [
    {
      img: AMHiddenCosts,
      option1: "Hidden Costs",
      option2: "Misdirection",
      option3: "Needless Complexity",
      correctOption: "1",
    },
    {
      img: SneakintoBasket,
      option1: "Sneak into Basket",
      option2: "Disguised Ads",
      option3: "Hidden Costs",
      correctOption: "1",
    },
    {
      img: AMMisdirection,
      option1: "Bait and Switch",
      option2: "Privacy Zuckering",
      option3: "Misdirection",
      correctOption: "3",
    },
  ];
  
  const Amazon = () => {
    const [score, setScore] = useState(0);
  
    const scoreSetter = (val) => {
      const newValue = score+val;
      setScore(newValue);
    };
    return (
      <>
        <Header />
        <h1 style={{ paddingTop:"25px", marginLeft: "825px" }}>Amazons's Dark Patterns</h1>
        {score !== 3 ? (
          <>
            <h4>Score: {score}</h4>
            <Game data={Data[score]} scoreSetter={scoreSetter} />
          </>
        ) : (
          <>
          <h1>Completed!</h1>
          </>
        )}
      </>
    );
  };

export default Amazon;
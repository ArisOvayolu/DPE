import React, { useState } from "react";
import Header from "../components/Header";
import Game from "./Game";
import AMHiddenCosts from "../img/Amazon/hidden costs.jpg";
import SneakintoBasket from "../img/Amazon/Sneak into basket.jpg";
import AMMisdirection from "../img/Amazon/Amazon Misdirection.png";
import Badge from "@mui/material/Badge";
import SportsScoreIcon from "@mui/icons-material/SportsScore";
import Grid from "@mui/material/Grid";
import LinearProgress from "@material-ui/core/LinearProgress";
import Footer from "../components/Footer";

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

const normalise = (value)=> ((value- 0)*100)/(3-0);

const Amazon = () => {
  const [score, setScore] = useState(0);

  const scoreSetter = (val) => {
    const newValue = score + val;
    setScore(newValue);
  };
  return (
    <>
      <Header />
      <LinearProgress variant="determinate" value={normalise(score)} />
      <h1 style={{ paddingTop: "25px", marginLeft: "825px", paddingBottom: "45px" }}>
        Amazons's Dark Patterns
      </h1>
      {score !== 3 ? (
        <>
          <Grid container spacing={2}>
            <Grid item xs={1}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  margin:'auto'
                }}
              >
                <h3>Score</h3>
                <Badge
                  badgeContent={score}
                  sx={{ height: "50px", width: "50px" }}
                  color="primary"
                >
                  <SportsScoreIcon
                    color="black"
                    sx={{ height: "75px", width: "75px" }}
                  />
                </Badge>
              </div>
            </Grid>
            <Grid item xs={11}>
              <Game data={Data[score]} scoreSetter={scoreSetter} />
            </Grid>
          </Grid>
        </>
      ) : (
        <>
          <h1 style={{ paddingTop: "25px", marginLeft: "825px" }}>Completed!</h1>
        </>
      )}
      
    </>
  );
};

export default Amazon;

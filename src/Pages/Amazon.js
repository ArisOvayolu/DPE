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
import Divider from "@mui/material/Divider";

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

const normalise = (value) => ((value - 0) * 100) / (3 - 0);

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
      <h2
        style={{
          paddingTop: "25px",
          marginLeft: "795px",
          fontFamily: "Poppins",
        }}
      >
        Amazons's Dark Patterns
      </h2>
      <Divider light sx={{ padding: "10", mb: "50px" }} />
      <p
        style={{
          paddingTop: "15px",
          marginLeft: "620px",
          fontFamily: "Helvetica",
          fontSize: 20,
        }}
      >
        Look at the image carefully and{" "}
        <span style={{ color: "black", fontSize: 19, fontFamily: "Poppins" }}>
          identify
        </span>{" "}
        the correct{" "}
        <span style={{ color: "black", fontSize: 20, fontFamily: "Poppins" }}>
          {" "}
          dark pattern{" "}
        </span>
        technique.
      </p>
      <p
        style={{
          paddingTop: "20px",
          paddingBottom: "80px",
          marginLeft: "880px",
          fontFamily: "Poppins",
          fontSize: 20,
        }}
      >
        Good Luck!
      </p>
      {score !== 3 ? (
        <>
          <Grid container flexSGrow={1} spacing={2}>
            <Grid item flexGrow={1} xs={1}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  margin: "auto",
                  justifyContent: "flex-end",
                }}
              >
                <h3 style={{ fontFamily: "Poppins" }}>Score</h3>
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
            <Grid item xs={10}>
              <Game data={Data[score]} scoreSetter={scoreSetter} />
            </Grid>
          </Grid>
        </>
      ) : (
        <>
          <h1 style={{ paddingTop: "25px", marginLeft: "825px" }}>
            Completed!
          </h1>
        </>
      )}
    </>
  );
};

export default Amazon;

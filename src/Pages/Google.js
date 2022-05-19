import React, { useState } from "react";
import Header from "../components/Header";
import Game from "./Game";
import DisguisedAds from "../img/Google/Disguised ads.jpg";
import GglNeedlessComplexity from "../img/Google/Needless Complexity.jpg";
import ContinousSpam from "../img/Google/Continous Spam.png";
import Badge from "@mui/material/Badge";
import SportsScoreIcon from "@mui/icons-material/SportsScore";
import Grid from "@mui/material/Grid";
import LinearProgress from "@material-ui/core/LinearProgress";
import Divider from "@mui/material/Divider";
import Completed from "../completed";

const Data = [
  {
    img: DisguisedAds,
    option1: "Disguised Ads",
    option2: "Sneak into Basket",
    option3: "Needless Complexity",
    correctOption: "1",
  },
  {
    img: GglNeedlessComplexity,
    option1: "Misdirection",
    option2: "Disguised Ads",
    option3: "Needless Complexity",
    correctOption: "3",
  },
  {
    img: ContinousSpam,
    option1: "Misdirection",
    option2: "Misdirection and Privacy Zuckering",
    option3: "Privacy Zuckering",
    correctOption: "3",
  },
];

const normalise = (value) => ((value - 0) * 100) / (3 - 0);

const Google = () => {
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
          marginLeft: "810px",
          fontFamily: "Poppins",
        }}
      >
        Google's Dark Patterns
      </h2>
      <Divider light sx={{ padding: "10", mb: "50px" }} />
      <p
        style={{
          paddingTop: "15px",
          marginLeft: "610px",
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
          fontSize: 21,
        }}
      >
        Good Luck!
      </p>
      {score !== 3 ? (
        <>
          <Grid container flexGrow={1} spacing={2}>
            <Grid item xs={1} flexGrow={1}>
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
          <Completed />
        </>
      )}
    </>
  );
};

export default Google;

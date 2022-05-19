import React, { useState } from "react";
import Header from "../components/Header";
import Game from "./Game";
import FBConfirmShaming from "../img/Facebook/confirmshaming.png";
import FBMisdirection from "../img/Facebook/Misdirection.jpg";
import Badge from "@mui/material/Badge";
import FBNC from "../img/Facebook/Misdirection and Needless Complexity.png";
import SportsScoreIcon from "@mui/icons-material/SportsScore";
import Grid from "@mui/material/Grid";
import LinearProgress from "@material-ui/core/LinearProgress";
import { Box } from "@mui/system";
import Divider from "@mui/material/Divider";
import Completed from "../completed";

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

const normalise = (value) => ((value - 0) * 100) / (3 - 0);

const Facebook = () => {
  const [score, setScore] = useState(0);

  const scoreSetter = (val) => {
    const newValue = score + val;
    setScore(newValue);
  };
  return (
    <>
      <Header />
      <Box diplay="flex">
        <LinearProgress variant="determinate" value={normalise(score)} />
        <h2
          style={{
            paddingTop: "25px",
            marginLeft: "790px",
            fontFamily: "Poppins",
          }}
        >
          Facebook's Dark Patterns
        </h2>
        <Divider light />
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
            marginLeft: "880px",
            fontFamily: "Poppins",
            fontSize: 21,
          }}
        >
          Good Luck!
        </p>
        <Divider sx={{ mb: "80px" }} />
        {score !== 3 ? (
          <>
            <Grid container flexGrow={1} spacing={2}>
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
            <Completed />
          </>
        )}
      </Box>
    </>
  );
};

export default Facebook;

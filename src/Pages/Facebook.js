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
import Paper from "@mui/material/Paper";

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
        <h1
          style={{
            paddingTop: "25px",
            marginLeft: "825px",
            paddingBottom: "45px",
          }}
        >
          Facebook's Dark Patterns
        </h1>
        {score !== 3 ? (
          <>
          <Grid container flexGrow={1} spacing={2}>
            <Grid item xs={1}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  margin: "auto",
                }}
              >
                <Paper elevation={24} sx={{borderRadius:'50px', margin:'auto'}}>
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
                </Paper>
              </div>
            </Grid>
            <Grid item xs={11}>
              <Game data={Data[score]} scoreSetter={scoreSetter} />
            </Grid>
          </Grid>
          </>
        ) : (
          <>
            <h1>Completed!</h1>
          </>
        )}
      </Box>
    </>
  );
};

export default Facebook;

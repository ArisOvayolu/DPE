import React, { useState } from "react";
import Header from "../components/Header";
import Game from "./Game";
import DisguisedAds from "../img/Google/Disguised ads.jpg";
import GglNeedlessComplexity from "../img/Google/Needless Complexity.jpg";
import ContinousSpam from "../img/Google/Continous Spam.png";
import Badge from "@mui/material/Badge";
import SportsScoreIcon from "@mui/icons-material/SportsScore";
import Grid from "@mui/material/Grid";


const Data = [
    {
      img: DisguisedAds,
      option1: "Disguised Ads",
      option2: "Continous Spam",
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
      option1: "Continous Spam and Misdirection",
      option2: "Misdirection and Privacy Zuckering",
      option3: "Continous Spam and Privacy Zuckering",
      correctOption: "3",
    },
  ];
  
  const Google = () => {
    const [score, setScore] = useState(0);
  
    const scoreSetter = (val) => {
      const newValue = score+val;
      setScore(newValue);
    };
    return (
      <>
        <Header />
        <h1 style={{ paddingTop: "25px", marginLeft: "825px" }}>
        Google's Dark Patterns
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
          <h1>Completed!</h1>
          </>
        )}
      </>
    );
  };

export default Google;
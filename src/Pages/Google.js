import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Game from "./Game";
import DisguisedAds from "../img/Google/Disguised ads.jpg";
import GglMisdirection from "../img/Google/Misdirection.jpg";
import GglPrivacyZuckering from "../img/Google/PrivacyZuckering.png";
import GglConfirmShaming from "../img/Google/ConfirmShaming.jpg";
import GglNeedlessComplexity from "../img/Google/NeedlessComplexity2.jpg";
import Badge from "@mui/material/Badge";
import SportsScoreIcon from "@mui/icons-material/SportsScore";
import Grid from "@mui/material/Grid";
import LinearProgress from "@material-ui/core/LinearProgress";
import Divider from "@mui/material/Divider";
import { useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Paper } from "@mui/material";
import Button from "@mui/material/Button";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "#EBF2F2",
  border: "2px solid #000",
  borderRadius: "30px",
  boxShadow: 24,
  p: 4,
};

const Data = [
  {
    img: DisguisedAds,
    option1: "Disguised Ads",
    option2: "Sneak into Basket",
    option3: "Needless Complexity",
    correctOption: "1",
    correctMess:
      "That was Disguised Ads. Google have portrayed their advertised search results in the exact same way they style their usual search results.",
  },
  {
    img: GglMisdirection,
    option1: "Misdirection",
    option2: "Disguised Ads",
    option3: "Needless Complexity",
    correctOption: "1",
    correctMess:
      "That was Misdirection. Google have hid the X button (It was disguised in the top right corner, meshed with the hair of the woman) that users would click on to close their advertisement whilst making the accept button very easy to see.",
  },
  {
    img: GglPrivacyZuckering,
    option1: "Misdirection",
    option2: "Misdirection and Privacy Zuckering",
    option3: "Privacy Zuckering",
    correctOption: "3",
    correctMess:
      "That was Privacy Zuckering. Google is pestering users that aren't interacting with their services to reveal private information.",
  },
  {
    img: GglConfirmShaming,
    option1: "Confirm Shaming",
    option2: "Privacy Zuckering",
    option3: "Needless Complexity",
    correctOption: "1",
    correctMess:
      "That was Confirm Shaming. Google attempt to make their users feel bad about losing unecessary functionality by disabling ad personalisation.",
  },
  {
    img: GglNeedlessComplexity,
    option1: "Misdirection",
    option2: "Sneak into Basket",
    option3: "Needless Complexity",
    correctOption: "3",
    correctMess:
      "Good Work, you've completed the quiz. That was Needless Complexity. Google have made their privacy settings harder to navigate than it needs to be so users can't easily access the settings they want.",
  },
];

const normalise = (value) => ((value - 0) * 100) / (3 - 0);

const Google = () => {
  const [score, setScore] = useState(0);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    if (score === 5) {
      navigate("/ExposeTheDarkPatterns/Completed");
    }
    setOpen(false);
  };
  const navigate = useNavigate();

  const scoreSetter = (val) => {
    const newValue = score + val;
    setScore(newValue);
  };

  useEffect(() => {
    if (score >= 1) {
      setOpen(true);
    }
  }, [score]);

  return (
    <>
      <Header />
      <LinearProgress variant="determinate" value={normalise(score)} />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Paper sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Nice!
          <Divider />
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 4, mb: 4 }}>
            {score >= 1 ? Data[score - 1].correctMess : ""}
          </Typography>
          <Divider />
          <Button onClick={handleClose}>Close Window</Button>
        </Paper>
      </Modal>

      <h2
        style={{
          paddingTop: "25px",
          marginLeft: "810px",
          fontFamily: "Poppins",
        }}
      >
        Google's Dark Patterns
      </h2>
      <Divider light />
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
          marginLeft: "880px",
          fontFamily: "Poppins",
          fontSize: 21,
        }}
      >
        Good Luck!
      </p>
      <Divider sx={{ mb: "80px" }} />
      {score !== 5 ? (
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
        </>
      )}
    </>
  );
};

export default Google;

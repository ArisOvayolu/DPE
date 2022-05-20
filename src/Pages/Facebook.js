import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Game from "./Game";
import FBConfirmShaming from "../img/Facebook/confirmshaming.png";
import FBMisdirection from "../img/Facebook/Misdirection.jpg";
import Misdirection from "../img/Facebook/Misdirection.png"
import NCCF from "../img/Facebook/NeedlessCandCS.jpg"
import Badge from "@mui/material/Badge";
import FBNC from "../img/Facebook/Misdirection and Needless Complexity.png";
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
    img: FBConfirmShaming,
    option1: "Hidden Costs",
    option2: "Confirm Shaming",
    option3: "Misdirection",
    correctOption: "2",
    correctMess:
      "That was Confirm Shaming. Facebook attempts to use a list of the user's friends to emotionally influence the user's decision to delete their account."
  },
  {
    img: FBMisdirection,
    option1: "Misdirection",
    option2: "Hidden Costs",
    option3: "Needless Complexity",
    correctOption: "1",
    correctMess:
      "That was Misdirection. Facebook fabricates notifications to convince the user to login and check their account. Once logged in the user will see no notifications."
  },
  {
    img: FBNC,
    option1: "Misdirection and Confirm Shaming",
    option2: "Hidden Costs and Misdirection",
    option3: "Needless Complexity and Misdirection",
    correctOption: "1",
    correctMess:
      "That was Misdirection paired with Confirm Shaming. Facebook purposefully makes the manage choices less appealing in order to distract the user from clicking it. Throughout the process of deciding the settings, they consistently use emotive language like 'protect' to sway the users decision."
  },
  {
    img: Misdirection,
    option1: "Privacy Zuckering",
    option2: "Hidden Costs",
    option3: "Misdirection",
    correctOption: "3",
    correctMess:
      "That was Misdirection. Facebook purposefully add 'Ghost' stories on the avatars of the user's friends to make it seem like they have posted a story. When the user clicks on it Facebook reveals that the user's friend in fact hasn't posted anything for a while. "
  },
  {
    img: NCCF,
    option1: "Misdirection and Privacy Zuckering",
    option2: "Needless Complexity and Confirm Shaming",
    option3: "Needless Complexity and Misdirection",
    correctOption: "2",
    correctMess:
      "Good Work, you've completed the quiz. That was Needless Complexity and Confirm Shaming. Facebook are attempting to sway their user's decision with the emotive language that nudges them to click on accept - rather than giving the user a simple yes or no option. They also fail to provide a close window functionality which is Needless Complexity."
  },
];

const normalise = (value) => ((value - 0) * 100) / (3 - 0);

const Facebook = () => {
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
      {score !== 5 ? (
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
        </>
      )}
    </>
  );
};

export default Facebook;

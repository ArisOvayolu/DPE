import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Game from "./Game";
import AMHiddenCosts from "../img/Amazon/hidden costs.jpg";
import SneakintoBasket from "../img/Amazon/Sneak into basket.jpg";
import AMMisdirection from "../img/Amazon/Amazon Misdirection.png";
import AMConfirmShaming from "../img/Amazon/ConfirmShaming.jpg";
import AMNeedlessComplexity from "../img/Amazon/NeedlessComplexity.jpg";
import Badge from "@mui/material/Badge";
import SportsScoreIcon from "@mui/icons-material/SportsScore";
import Grid from "@mui/material/Grid";
import LinearProgress from "@material-ui/core/LinearProgress";
import Divider from "@mui/material/Divider";
import { useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Paper,Box } from "@mui/material";
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
    img: AMHiddenCosts,
    option1: "Hidden Costs",
    option2: "Misdirection",
    option3: "Needless Complexity",
    correctOption: "1",
    correctMess:
      "That was Hidden Costs. Amazon have revealed an extra paywall in the checkout section after advertising 'free' shipping.",
  },
  {
    img: SneakintoBasket,
    option1: "Sneak into Basket",
    option2: "Disguised Ads",
    option3: "Hidden Costs",
    correctOption: "1",
    correctMess:
      "That was Sneak into Basket. Amazon have sneaked a subscription deal by default, a user that isn't paying attention would end up purchasing more than they bargained for. ",
  },
  {
    img: AMMisdirection,
    option1: "Confirm Shaming",
    option2: "Privacy Zuckering",
    option3: "Misdirection",
    correctOption: "3",
    correctMess:
      "That was Misdirection. Amazon have purposefully made the 'unsubcribe' link harder to identify when compared to the other links they have provided.",
  },
  {
    img: AMConfirmShaming,
    option1: "Confirm Shaming",
    option2: "Privacy Zuckering",
    option3: "Misdirection",
    correctOption: "1",
    correctMess:
      "That was Confirm Shaming. Amazon attempt to make the user feel as though they are missing out on supposed 'benefits' rather than letting them cancel the membership without attempting to sway their decision.",
  },
  {
    img: AMNeedlessComplexity,
    option1: "Sneak into Basket",
    option2: "Needless Complexity",
    option3: "Disguised Ads",
    correctOption: "2",
    correctMess:
      "Good Work, you've completed the quiz. That was Roach Motel/ Needless Complexity. Amazon have made the reviewing process for unfavourable reviews unecessarily complicated to reduce the number of negative reviews."
  },
];

const normalise = (value) => ((value - 0) * 100) / (3 - 0);

const Amazon = () => {
  const [score, setScore] = useState(0);
  const [open, setOpen] = useState(false);
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
    <Box sx={{display:'flex', justifyContent:'center', alignItems:'center', minWidth:'100%'}}>
    <Box sx={{display:'flex', flexDirection:'column',justifyContent:'center',minWidth:'100%', alignItems:'center'}}>

      <h2
        style={{
          paddingTop: "25px",
          fontFamily: "Poppins",
        }}
      >
        Amazons's Dark Patterns
      </h2>
      <Divider light />
      <p
        style={{
          paddingTop: "15px",
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
          fontFamily: "Poppins",
          fontSize: 21,
        }}
      >
        Good Luck!
      </p>
      <Divider sx={{ mb: "80px" }} />
      {score !== 5 ? (
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
        <></>
      )}
      </Box>
      </Box>
    </>
  );
};

export default Amazon;

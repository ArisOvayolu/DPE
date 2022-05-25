import React from "react";
import Header from "./components/Header";
import Box from "@mui/material/Box";
import StatusBar from "./components/StatusBar";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import { useNavigate } from "react-router-dom";

const Completed = () => {
  const Navigate = useNavigate();
  const FeedbackHandler = () => {
    Navigate("/Feedback");
  };
  const EDPHandler = () => {
    Navigate("/ExposeTheDarkPatterns");
  };
  return (
    <>
      <StatusBar></StatusBar>
      <Header />
      <Box
        sx={{
          backgroundColor: "white",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          alignContent: "center",
        }}
      >
        <h1
          style={{
            paddingTop: "20px",
            fontFamily: "Poppins",
          }}
        >
          {" "}
          Good Work!{" "}
        </h1>
        <p
          style={{
            fontFamily: "Helvetica",
            fontSize: 19,
            paddingBottom: "20px"
          }}
        >
          It's safe to say you're becoming a bit of an{" "}
          <span style={{ color: "black", fontSize: 19, fontFamily: "Poppins" }}>
            expert
          </span>{" "}
          on dark pattern techniques now!
        </p>
        <Divider
          light
          sx={{ minWidth: "100%", mb: "20px" }}
          variant="fullWidth"
        />
        <p
          style={{
            fontFamily: "Helvetica",
            fontSize: 19,
            paddingBottom:"20px"
          }}
        >
          Try another quiz to further test your knowledge!
        </p>
        <Button
          variant="text"
          sx={{
            color: "White",
            fontFamily: "Poppins",
            backgroundColor: "#253030",
          }}
          onClick={EDPHandler}
        >
          Try another interface
        </Button>
        <Divider
          light
          sx={{ minWidth: "100%", mb: "10px", mt: "40px" }}
          variant="fullWidth"
        />
        <p
          style={{
            fontFamily: "poppins",
            fontSize: 19,
          }}
        >
          Already completed them all?
        </p>
        <p
          style={{
            fontFamily: "Helvetica",
            fontSize: 19,
            paddingBottom: "20px",
          }}
        >
          Please check out the feedback page, your input will greatly help
          future work on this website and will also be used for research
          purposes.
        </p>
        <Button
          variant="text"
          sx={{
            color: "White",
            fontFamily: "Poppins",
            backgroundColor: "#253030",
          }}
          onClick={FeedbackHandler}
        >
          Leave Feedback
        </Button>
        <p
          style={{
            fontFamily: "Poppins",
            paddingTop: "30px",
            fontSize: 19,
          }}
        >
          Thank you for your support!
        </p>
      </Box>
    </>
  );
};

export default Completed;

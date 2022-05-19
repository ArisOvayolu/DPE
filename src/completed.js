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
  return (
    <>
      <StatusBar></StatusBar>
      <Header />
      <Box sx={{ margin: "40px", backgroundColor: "#E1E8E8" }}>
        <h2
          style={{
            padding: "20px",
            paddingTop: "50px",
            marginLeft: "700px",
            fontFamily: "Poppins",
          }}
        >
          {" "}
          Good Work!{" "}
        </h2>
        <Divider light sx={{ padding: "10px" }} />

        <Button
          variant="text"
          sx={{ color: "White", fontFamily: "Poppins", marginLeft: "825px", backgroundColor: "#253030" }}
          onClick={FeedbackHandler}
        >
          Test Your Knowledge
        </Button>
      </Box>
    </>
  );
};

export default Completed;

import React from "react";
import Header from "./components/Header";
import Box from "@mui/material/Box";
import StatusBar from "./components/StatusBar";
import Divider from "@mui/material/Divider";

const Feedback = () => {
  return (
    <>
      <StatusBar></StatusBar>
      <Header />

      <Box
        sx={{
          margin: "5px",
          backgroundColor: "#E1E8E8",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h1
          style={{
            paddingTop: "25px",
            fontFamily: "Poppins",
          }}
        >
          {" "}
          Feedback{" "}
        </h1>
        <p
          style={{
            fontFamily: "Helvetica",
            fontSize: 19,
          }}
        >
          <span style={{ color: "black", fontSize: 21, fontFamily: "Poppins" }}>
            This survey
          </span>{" "}
          has been created so I can receive direct user feedback on this website
          and their opinions on dark pattern techniques.
        </p>
        <p
          style={{
            fontFamily: "Helvetica",
            fontSize: 19,
          }}
        >
          <span style={{ color: "black", fontSize: 21, fontFamily: "Poppins" }}>
            The feedback
          </span>{" "}
          will be used partly as an incentive for future work on this website
          and will also contribute to research on dark pattern techniques.
        </p>
        <Divider
          light
          sx={{ minWidth: "100%", mb: "30px" }}
          variant="fullWidth"
        />

        <iframe
        title="Feedback"
          src="https://docs.google.com/forms/d/e/1FAIpQLSfKoUuQ_DWVHpZ_R3b8lhKXTtAaAKtNlHf_nlp_OvpirVwpLg/viewform?embedded=true"
          width="640"
          height="843"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
        >
          Loading…
        </iframe>
        <p
          style={{
            fontFamily: "Helvetica",
            fontSize: 19,
            paddingTop: "60px",
          }}
        >
          <span style={{ color: "black", fontSize: 19, fontFamily: "Poppins" }}>
            Thank you!
          </span>{" "}
          your feedback is truly appreciated.
        </p>
      </Box>
    </>
  );
};

export default Feedback;

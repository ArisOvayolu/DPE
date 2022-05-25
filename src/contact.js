import React from "react";
import Header from "./components/Header";
import Box from "@mui/material/Box";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Fab from "@mui/material/Fab";
import { Divider } from "@mui/material";

const Contact = () => {
  return (
    <>
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
            fontFamily: "Poppins",
          }}
        >
          {" "}
          Get in Contact{" "}
        </h1>
        <Divider sx={{ minWidth: "100%" }} variant="fullWidth" />
        <h3
          style={{
            paddingTop: "20px",
            paddingBottom: "40px",
            fontSize: 18,
            fontFamily: "Poppins",
          }}
        >
          Please do not hesitate to get in contact!
        </h3>
        <Fab
          variant="extended"
          onClick={() => {
            window.open(
              "mailto:arisovayolu@gmail.com?body=Dear%20DPE%2C%0A%0A",
              "_blank"
            );
          }}
          sx={{ marign: "auto", backgroundColor: "white" }}
        >
          Email <EmailIcon sx={{ mr: 0 }} />
        </Fab>
        <Divider
          light
          sx={{ minWidth: "100%", paddingTop: "40px" }}
          variant="fullWidth"
        />
        <h3
          style={{
            paddingTop: "20px",
            paddingBottom: "40px",
            fontFamily: "Poppins",
          }}
        >
          Find me on Linkedin!
        </h3>
        <Fab
          variant="extended"
          onClick={() => {
            window.open(
              "https://uk.linkedin.com/in/aris-m-ovayolu-722647157?msclkid=365f8e52cfcd11ec928539b45ccd3297",
              "_blank"
            );
          }}
          sx={{ marign: "auto", backgroundColor: "white" }}
        >
          Linkedin <LinkedInIcon sx={{ mr: 0 }} />
        </Fab>
        <Divider
          light
          sx={{ minWidth: "100%", paddingTop: "40px" }}
          variant="fullWidth"
        />
      </Box>
    </>
  );
};

export default Contact;

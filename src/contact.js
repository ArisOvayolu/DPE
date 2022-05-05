import React from "react";
import Header from "./components/Header";
import Box from "@mui/material/Box";
import Footer from "./components/Footer";
import EmailIcon from "@mui/icons-material/Email";
import Fab from "@mui/material/Fab";

const Contact = () => {
  return (
    <>
      <Header />
      <Box sx={{ marginBottom: "500px" }}>
        <h1 style={{ marginLeft: "825px" }}> Get in Contact </h1>
        <p
          style={{
            padding: "10px",
            paddingLeft: "650px",
            paddingRight: "300px",
          }}
        >
          Follow this email link to give us submissions of Dark Pattern usage
          and/or for any other queries.
        </p>
        <Fab
          variant="extended"
          onClick={() => {
            window.open(
              "mailto:arisovayolu@gmail.com?body=Dear%20DPE%2C%0A%0A",
              "_blank"
            );
          }}
          sx={{ marign: "auto", marginLeft: "45%" }}
        >
          Navigate <EmailIcon sx={{ mr: 1 }} />
        </Fab>
      </Box>
      <Footer />
    </>
  );
};

export default Contact;

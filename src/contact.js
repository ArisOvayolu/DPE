import React from "react";
import Header from "./components/Header";
import Box from "@mui/material/Box";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import Fab from "@mui/material/Fab";

const Contact = () => {
  return (
    <>
      <Header />
      <Box sx={{ marginBottom: "500px" }}>
        <h1 style={{ marginLeft: "795px", fontFamily: 'Abril Fatface', fontSize:45 }}> Get in Contact </h1>
        <p
          style={{
            padding: "10px",
            paddingLeft: "550px",
            paddingRight: "550px",
            fontSize:20,
            fontFamily: 'Montserrat'
          }}
        >
          Please do not hesitate to get in contact!
        </p>
        <Fab
          variant="extended"
          onClick={() => {
            window.open(
              "mailto:arisovayolu@gmail.com?body=Dear%20DPE%2C%0A%0A",
              "_blank"
            );
          }}
          sx={{ marign: "auto", marginLeft: "46%" }}
        >
          Email <EmailIcon sx={{ mr: 0 }} />
        </Fab>
        <p
          style={{
            padding: "10px",
            paddingLeft: "550px",
            paddingRight: "550px",
            fontSize:20,
            fontFamily: 'Montserrat'
          }}
        >
          Find me on Linkedin!
        </p> 
        <Fab
          variant="extended"
          onClick={() => {
            window.open(
              "https://uk.linkedin.com/in/aris-m-ovayolu-722647157?msclkid=365f8e52cfcd11ec928539b45ccd3297",
              "_blank"
            );
          }}
          sx={{ marign: "auto", marginLeft: "46%" }}
        >
          Linkedin <LinkedInIcon sx={{ mr: 0 }} />
        </Fab>
      </Box>
      
    </>
  );
};

export default Contact;

import React from "react";
import Box from "@mui/material/Box";

const Footer = () => {
  return (
    <Box
      sx={{
        marginTop:'100px',
        backgroundColor: "#f0f8ff",
        padding: "10px",
        position: "relative",
        left: 0,
        bottom: 0,
        right: 0,
      }}
    >
      <h4
        style={{
          marginLeft: "830px",
          fontFamily: "Poppins",
        }}
      >
        Created by: Aris M. Ovayolu
      </h4>
    </Box>
  );
};

export default Footer;

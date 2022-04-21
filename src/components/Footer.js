import React from "react";
import Box from "@mui/material/Box";

const Footer = () => {
  return (
    <Box
      sx={{
        margin: "auto",
        backgroundColor: "#f0f8ff",
        padding: "10px",
        position: "absolute",
        left: 0,
        bottom: 0,
        right: 0,
      }}
    >
      <h4
        style={{
          marginLeft: "750px",
          fontFamily: "Poppins",
        }}
      >
        Created by: Aris
      </h4>
    </Box>
  );
};

export default Footer;

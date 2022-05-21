import React from "react";
import Box from "@mui/material/Box";

const Footer = () => {
  return (
    <Box
      sx={{
        marginTop:"160px",
        backgroundColor: "#253030",
        padding: "10px",
        position:'relative',
        left: 0,
        bottom: 0,
        right: 0,
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
      }}
      component='footer'
    >
      <h4
        style={{
          fontFamily: "Poppins",
          color: 'white'
        }}
      >
        Created by: Aris M. Ovayolu
      </h4>
    </Box>
  );
};

export default Footer;

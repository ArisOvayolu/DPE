import React from "react";
import Header from "./components/Header";
import Box from "@mui/material/Box";
import Footer from "./components/Footer";
import YoutubeEmbed from "./components/YoutubeEmbed";

const DPT = () => {
  return (
    <>
      <Header />
      <Box>
          <h1 style={{ marginLeft: "750px" }}> Dark Pattern Techniques </h1>
          
          <h2 style={{ marginLeft: "450px" }}>Let's explore some of these Dark Patterns, together through a series of these videos</h2>

          <h2 style={{ paddingTop:"10px", marginLeft: "865px" }}> Hidden Cost </h2>
          <YoutubeEmbed embedId="BVHMLs_N7SQ"/>

          <h2 style={{  marginLeft: "835px" }}> Needless Complexity </h2>
          <YoutubeEmbed embedId="BVHMLs_N7SQ"/>

          <h2 style={{ marginLeft: "880px" }}> Misdirection </h2>
          <YoutubeEmbed embedId="BVHMLs_N7SQ"/>

          <h2 style={{ marginLeft: "880px" }}> Confirmshaming </h2>
          <YoutubeEmbed embedId="BVHMLs_N7SQ"/>

          <h2 style={{  marginLeft: "865px" }}> Privacy Zuckering </h2>
          <YoutubeEmbed embedId="BVHMLs_N7SQ"/>
      </Box>
      <Footer/>
    </>
  );
};

export default DPT;


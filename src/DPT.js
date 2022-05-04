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

          <h2 style={{ paddingTop:"10px", marginLeft: "850px" }}> Hidden Cost </h2>
          <YoutubeEmbed embedId="BVHMLs_N7SQ"/>

          <h2 style={{  marginLeft: "815px" }}> Needless Complexity </h2>

          <h2 style={{ paddingTop:"10px", marginLeft: "815px" }}> Misdirection </h2>

          <h2 style={{ paddingTop:"10px", marginLeft: "815px" }}> Confirmshaming </h2>

          <h2 style={{ paddingTop:"10px", marginLeft: "815px" }}> Privacy Zuckering </h2>
      </Box>
      <Footer/>
    </>
  );
};

export default DPT;


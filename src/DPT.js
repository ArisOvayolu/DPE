import React from "react";
import Header from "./components/Header";
import Box from "@mui/material/Box";
import Footer from "./components/Footer";
import YoutubeEmbed from "./components/YoutubeEmbed";
import StatusBar from "./components/StatusBar";

const DPT = () => {
  return (
    <>
      <StatusBar></StatusBar>
      <Header />
      <Box>
          <h1 style={{ padding: '20px', marginLeft: "775px", fontFamily: 'Abril Fatface' }}> Dark Pattern Techniques </h1>
          <p style={{ padding:"2px", paddingLeft: "650px", paddingRight: "475px", fontFamily: 'Montserrat', fontSize:20 }}>
          Lets dive into the different techniques that you will come across on the web.   
          </p>

          <h2 style={{ paddingTop:"10px", marginLeft: "900px", fontFamily: 'Abril Fatface' }}> Hidden Cost </h2>
          <YoutubeEmbed embedId="BVHMLs_N7SQ"/>

          <h2 style={{  marginLeft: "865px", fontFamily: 'Abril Fatface' }}> Needless Complexity </h2>
          <YoutubeEmbed embedId="BVHMLs_N7SQ"/>

          <h2 style={{ marginLeft: "890px", fontFamily: 'Abril Fatface' }}> Misdirection </h2>
          <YoutubeEmbed embedId="BVHMLs_N7SQ"/>

          <h2 style={{ marginLeft: "880px", fontFamily: 'Abril Fatface' }}> Confirmshaming </h2>
          <YoutubeEmbed embedId="BVHMLs_N7SQ"/>

          <h2 style={{  marginLeft: "865px", fontFamily: 'Abril Fatface' }}> Privacy Zuckering </h2>
          <YoutubeEmbed embedId="BVHMLs_N7SQ"/>
      </Box>
    </>
  );
};

export default DPT;


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
      <Box sx={{ margin: "40px", backgroundColor: "#E1E8E8" }}>
        <h1
          style={{
            padding: "20px",
            marginLeft: "700px",
            fontFamily: "Poppins",
          }}
        >
          {" "}
          Dark Pattern Techniques{" "}
        </h1>
        <p
          style={{
            padding: "2px",
            paddingLeft: "610px",
            paddingRight: "475px",
            fontFamily: "Century",
            fontSize: 20,
          }}
        >
          Lets dive into the different techniques that you will come across on
          the web.
        </p>

        <h2
          style={{
            paddingTop: "10px",
            marginLeft: "890px",
            fontFamily: "Poppins",
          }}
        >
          {" "}
          Hidden Cost{" "}
        </h2>
        <YoutubeEmbed embedId="BVHMLs_N7SQ" />

        <h2 style={{ marginLeft: "845px", fontFamily: "Poppins" }}>
          {" "}
          Needless Complexity{" "}
        </h2>
        <YoutubeEmbed embedId="BVHMLs_N7SQ" />

        <h2 style={{ marginLeft: "880px", fontFamily: "Poppins" }}>
          {" "}
          Misdirection{" "}
        </h2>
        <YoutubeEmbed embedId="BVHMLs_N7SQ" />

        <h2 style={{ marginLeft: "870px", fontFamily: "Poppins" }}>
          {" "}
          Confirmshaming{" "}
        </h2>
        <YoutubeEmbed embedId="BVHMLs_N7SQ" />

        <h2 style={{ marginLeft: "855px", fontFamily: "Poppins" }}>
          {" "}
          Privacy Zuckering{" "}
        </h2>
        <YoutubeEmbed embedId="BVHMLs_N7SQ" />
      </Box>
    </>
  );
};

export default DPT;

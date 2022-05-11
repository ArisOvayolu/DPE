import React from "react";
import Header from "./components/Header";
import Box from "@mui/material/Box";
import YoutubeEmbed from "./components/YoutubeEmbed";
import StatusBar from "./components/StatusBar";
import Avatar from "@mui/material/Avatar";
import HC from "./img/DPT/HiddenCosts.jpg";
import MD from "./img/DPT/Misdirection.jpg";
import PZ from "./img/DPT/PrivacyZuckering.jpg";
import NC from "./img/DPT/NeedlessComplexity.jpg";
import DA from "./img/DPT/DisguisedAds.jpg";
import SB from "./img/DPT/SneakintoBasket.jpg";
import CS from "./img/DPT/ConfirmShaming.jpg";
import Divider from "@mui/material/Divider";

const DPT = () => {
  return (
    <>
      <StatusBar></StatusBar>
      <Header />
      <Box sx={{ margin: "40px", backgroundColor: "#E1E8E8" }}>
        <h1
          style={{
            padding: "20px",
            paddingTop: "50px",
            marginLeft: "700px",
            fontFamily: "Poppins",
          }}
        >
          {" "}
          Dark Pattern Techniques{" "}
        </h1>
        <Divider light sx={{ padding: "10px" }} />
        <Box
          sx={{
            paddingTop: "30px",
            flexDirection: "row",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            alignContent: "center",
          }}
        >
          <Avatar alt={"ava"} src={HC} sx={{ width: 50, height: 50 }} />
          <h2
            style={{
              fontFamily: "Poppins",
              marginLeft: "30px",
            }}
          >
            {" "}
            Hidden Cost{" "}
          </h2>
        </Box>
        <YoutubeEmbed embedId="BVHMLs_N7SQ" />
        <Divider light />

        <Box
          sx={{
            flexDirection: "row",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            alignContent: "center",
          }}
        >
          <Avatar alt={"ava"} src={NC} sx={{ width: 50, height: 50 }} />
          <h2 style={{ marginLeft: "30px", fontFamily: "Poppins" }}>
            {" "}
            Needless Complexity{" "}
          </h2>
        </Box>
        <YoutubeEmbed embedId="BVHMLs_N7SQ" />
        <Divider light sx={{ padding: "10px" }} />

        <Box
          sx={{
            flexDirection: "row",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            alignContent: "center",
          }}
        >
          <Avatar alt={"ava"} src={MD} sx={{ width: 50, height: 50 }} />
          <h2 style={{ marginLeft: "30px", fontFamily: "Poppins" }}>
            {" "}
            Misdirection{" "}
          </h2>
        </Box>
        <YoutubeEmbed embedId="BVHMLs_N7SQ" />
        <Divider light sx={{ padding: "10px" }} />

        <Box
          sx={{
            flexDirection: "row",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            alignContent: "center",
          }}
        >
          <Avatar alt={"ava"} src={CS} sx={{ width: 50, height: 50 }} />
          <h2 style={{ marginLeft: "30px", fontFamily: "Poppins" }}>
            {" "}
            Confirmshaming{" "}
          </h2>
        </Box>
        <YoutubeEmbed embedId="BVHMLs_N7SQ" />
        <Divider light sx={{ padding: "10px" }} />

        <Box
          sx={{
            flexDirection: "row",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            alignContent: "center",
          }}
        >
          <Avatar alt={"ava"} src={PZ} sx={{ width: 50, height: 50 }} />
          <h2 style={{ marginLeft: "30px", fontFamily: "Poppins" }}>
            {" "}
            Privacy Zuckering{" "}
          </h2>
        </Box>
        <YoutubeEmbed embedId="BVHMLs_N7SQ" />
        <Divider light sx={{ padding: "10px" }} />

        <Box
          sx={{
            flexDirection: "row",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            alignContent: "center",
          }}
        >
          <Avatar alt={"ava"} src={DA} sx={{ width: 50, height: 50 }} />
          <h2 style={{ marginLeft: "30px", fontFamily: "Poppins" }}>
            {" "}
            Disguised Ads{" "}
          </h2>
        </Box>
        <YoutubeEmbed embedId="BVHMLs_N7SQ" />
        <Divider light sx={{ padding: "10px" }} />

        <Box
          sx={{
            flexDirection: "row",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            alignContent: "center",
          }}
        >
          <Avatar alt={"ava"} src={SB} sx={{ width: 50, height: 50 }} />
          <h2 style={{ marginLeft: "30px", fontFamily: "Poppins" }}>
            {" "}
            Sneak into Basket{" "}
          </h2>
        </Box>
        <YoutubeEmbed embedId="BVHMLs_N7SQ" />
      </Box>
    </>
  );
};

export default DPT;

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
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import { useNavigate } from "react-router-dom";

const DPT = () => {
  const Navigate = useNavigate();
  const EDPHandler = () => {
    Navigate("/ExposeTheDarkPatterns");
  };
  return (
    <>
      <StatusBar></StatusBar>
      <Header />
      <Box sx={{ margin: "10px",padding:'20px', backgroundColor: "#E1E8E8", display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center' }}>
        <h1
          style={{
            padding: "20px",
            paddingTop: "50px",
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
        <YoutubeEmbed embedId="-xK02zueCuY" />
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
            Needless Complexity / "Roach Motel"{" "}
          </h2>
        </Box>
        <YoutubeEmbed embedId="D2lOt-kpXP4" />
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
        <YoutubeEmbed embedId="6ZfhMkd07GU" />
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
        <YoutubeEmbed embedId="rPvrPuthUi0" />
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
        <YoutubeEmbed embedId="KQHST_gYkzc" />
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
        <YoutubeEmbed embedId="-wVWqzbcmcE" />
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
        <YoutubeEmbed embedId="dVoPKDZuXJ0" />

        <Button
          variant="text"
          sx={{ color: "White", fontFamily: "Poppins",  backgroundColor: "#253030" }}
          onClick={EDPHandler}
        >
          Test Your Knowledge
        </Button>
      </Box>
    </>
  );
};

export default DPT;

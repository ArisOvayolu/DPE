import React from "react";
import Header from "./components/Header";
import Box from "@mui/material/Box";
import StatusBar from "./components/StatusBar";
import Divider from "@mui/material/Divider";

const Feedback = () => {
  return (
    <>
      <StatusBar></StatusBar>
      <Header />

      <Box sx={{ margin: "40px", backgroundColor: "#E1E8E8", display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center" }}>
        <h1
            style={{
              padding: "20px",
              paddingTop: "50px",
              fontFamily: "Poppins",
            }}
          >
          {" "}
          Feedback{" "}
        </h1>
        <Divider light sx={{minWidth:'100%', mb:'30px'}} variant="fullWidth" />

        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSfKoUuQ_DWVHpZ_R3b8lhKXTtAaAKtNlHf_nlp_OvpirVwpLg/viewform?embedded=true"
          width="640"
          height="843"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
        >
          Loading…
        </iframe>
      </Box>
    </>
  );
};

export default Feedback;

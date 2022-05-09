import React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const Navigate = useNavigate();
  const DPTHandler = () => {
    Navigate("/DarkPatternTechniques");
  };
  const homeHandler = () => {
    Navigate("/");
  };
  const contactHandler = () => {
    Navigate("/Contact");
  };
  const EDPHandler = () => {
    Navigate("/ExposeTheDarkPatterns");
  };
  const aboutHandler = () => {
    Navigate("/About");
  };
  const alternativeHandler = () => {
    Navigate("/AlternativeDesign");
  };
  return (
    <>
      <Box
        sx={{
          margin: "auto",
          paddingLeft: "800px",
          backgroundColor: "#253030",
          padding: "10px",
        }}
      >
        <h1
          style={{
            marginLeft: "765px",
            backgroundColor: "#253030",
            borderRadius: "15px",
            padding: "10px",
            maxWidth: "300px",
            paddingLeft: "75px",
            fontFamily: "Poppins",
            color: "white",
          }}
        >
          Dark Patterns Exposed
        </h1>
        <Stack sx={{ marginLeft: "350px" }} spacing={10} direction="row">
          <Button
            sx={{ color: "white", fontFamily: "Abril Fatface" }}
            onClick={homeHandler}
          >
            home
          </Button>
          <Button
            variant="text"
            sx={{ color: "white", fontFamily: "Abril Fatface" }}
            onClick={aboutHandler}
          >
            About
          </Button>
          <Button
            variant="text"
            sx={{ color: "white", fontFamily: "Abril Fatface" }}
            onClick={DPTHandler}
          >
            Dark Pattern Techniques
          </Button>
          <Button
            variant="text"
            sx={{ color: "white", fontFamily: "Abril Fatface" }}
            onClick={EDPHandler}
          >
            Expose The Dark Patterns
          </Button>
          <Button
            variant="text"
            sx={{ color: "white", fontFamily: "Abril Fatface" }}
            onClick={alternativeHandler}
          >
            Alternative Design
          </Button>
          <Button
            variant="text"
            sx={{ color: "white", fontFamily: "Abril Fatface" }}
            onClick={contactHandler}
          >
            Contact
          </Button>
        </Stack>
      </Box>
    </>
  );
};

export default Header;

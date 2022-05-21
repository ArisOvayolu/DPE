import React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useNavigate,useLocation   } from "react-router-dom";

const Header = () => {
  const Navigate = useNavigate();
  const location = useLocation();
  const pathname = location.pathname;
  console.log('here is location --->', pathname)
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
  const feedbackHandler = () => {
    Navigate("/Feedback");
  };
  return (
    <>
      <Box
        sx={{
          margin: "auto",
          backgroundColor: "#253030",
          padding: "10px",
          display:'flex',
          justifyContent:'center',
          alignItems:'center',
          flexDirection:'column'
        }}
      >
        <h1
          style={{
            backgroundColor: "#253030",
            borderRadius: "15px",
            maxWidth: "300px",
            paddingLeft:"100px",
            fontFamily: "Poppins",
            color: "white",
          }}
        >
          Dark Patterns Exposed
        </h1>
        <Stack  spacing={10} direction="row">
          <Button
            sx={{ color:pathname==='/'? 'yellow':"white", fontFamily: "Poppins" }}
            onClick={homeHandler}
          >
            home
          </Button>
          <Button
            variant="text"
            sx={{ color:pathname==='/About'? 'yellow':"white", fontFamily: "Poppins" }}
            onClick={aboutHandler}
          >
            About
          </Button>
          <Button
            variant="text"
            sx={{ color:pathname==='/DarkPatternTechniques'? 'yellow':"white", fontFamily: "Poppins" }}
            onClick={DPTHandler}
          >
            Dark Pattern Techniques
          </Button>
          <Button
            variant="text"
            sx={{ color:pathname==='/ExposeTheDarkPatterns'? 'yellow':"white", fontFamily: "Poppins" }}
            onClick={EDPHandler}
          >
            Expose The Dark Patterns
          </Button>
          <Button
            variant="text"
            sx={{ color:pathname==='/Feedback'? 'yellow':"white", fontFamily: "Poppins" }}
            onClick={feedbackHandler}
          >
            User Feedback
          </Button>
          <Button
            variant="text"
            sx={{ color: pathname==='/Contact'? 'yellow':"white", fontFamily: "Poppins" }}
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

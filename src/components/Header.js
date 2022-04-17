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
  const homeHandler=()=>{
      Navigate('/')
  };
  const contactHandler=()=>{
    Navigate('/Contact')
  };
  const EDPHandler=()=>{
    Navigate('/ExposeTheDarkPatterns')
  };
  return (
    <Box
      sx={{
        margin: "auto",
        paddingLeft: "800px",
        backgroundColor: "#8AC6D1",
        padding: "10px",
      }}
    >
      <h1
        style={{
          marginLeft: "750px",
          backgroundColor: "#b2e6fa",
          borderRadius: "15px",
          padding: "10px",
          maxWidth: "350px",
          paddingLeft: "20px",
        }}
      >
        Dark Patterns Exposed
      </h1>
      <Stack sx={{ marginLeft: "650px" }} spacing={2} direction="row">
        <Button onClick={homeHandler}>home</Button>
        <Button variant="text" onClick={DPTHandler}>
          Dark Pattern Techniques
        </Button>
        <Button variant="text" onClick={EDPHandler}>
            Expose The Dark Patterns
        </Button>
        <Button variant="text" onClick={contactHandler}>
        Contact
        </Button>
      </Stack>
    </Box>
  );
};

export default Header;

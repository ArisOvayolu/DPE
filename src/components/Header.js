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
        backgroundColor: "black",
        padding: "10px",
      }}
    >
      <h1
        style={{
          marginLeft: "765px",
          backgroundColor: "black",
          borderRadius: "15px",
          padding: "10px",
          maxWidth: "300px",
          paddingLeft: "75px",
          fontFamily: 'Poppins',
          color: 'white'
        }}
      >
        Dark Patterns Exposed
      </h1>
      <Stack sx={{ marginLeft: "475px", }} spacing={15} direction="row">
        <Button sx={{color:'white'}} onClick={homeHandler}>home</Button>
        <Button variant="text" sx={{color:'white'}} onClick={DPTHandler}>
        Dark Pattern Techniques
        </Button>
        <Button variant="text" sx={{color:'white'}} onClick={EDPHandler}>
        Expose The Dark Patterns
        </Button>
        <Button variant="text" sx={{color:'white'}} onClick={contactHandler}>
        Contact
        </Button>
      </Stack>
    </Box>
  );
};

export default Header;

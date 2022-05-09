import React from "react";
import Header from "./components/Header";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Facebook from "./img/Facebook-logo.jpg";
import Amazon from "./img/Amazon.jpg";
import Google from "./img/Google.png";
import { useNavigate } from "react-router";
import Footer from "./components/Footer";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import { Divider } from "@mui/material";

const avData = [
  { img: Facebook, route: "/ExposeTheDarkPatterns/Facebook", alt: "facebook" },
  { img: Google, route: "/ExposeTheDarkPatterns/Google", alt: "google" },
  { img: Amazon, route: "/ExposeTheDarkPatterns/amazon", alt: "amazon" },
];

const EDP = () => {
  const Navigate = useNavigate();

  const onClickHandler = (link) => {
    Navigate(link);
  };
  return (
    <>
      <Header />
      <h1 style={{ marginLeft: "775px", fontFamily: 'Abril Fatface', padding:'25px' }}> Expose The Dark Patterns </h1>
      <Divider />
      <div
        style={{
          width: "425px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Paper elevation={24} sx={{backgroundColor:'white', borderRadius:'50px', padding:'10px', marginLeft:'1495px', marginTop:'60px'}}>
          <Stack
            direction="row"
            spacing={10}
            sx={{ margin: "auto", justifySelf: "center" }}
          >
            {avData.map((a) => {
              return (
                <Avatar
                  alt={a.alt}
                  src={a.img}
                  sx={{ width: 90, height: 90 }}
                  onClick={() => onClickHandler(a.route)}
                />
              );
            })}
          </Stack>
        </Paper>
      </div>
      <Box>
        <p style={{ paddingTop:'40px', padding:'10px', marginLeft: '600px', marginRight:'600px', fontFamily: 'Montserrat', fontSize:20}}>
        Welcome to the interactive learning page! You have three infamous implementors of dark patterns to pick from: Facebook, Amazon and Google to test your knowledge on dark pattern techniques!
        </p>
        <p style={{ padding:'10px', marginLeft: '650px', marginRight:'600px', fontFamily: 'Montserrat', fontSize:20}}>
        Select one and expose the dark patterns that these companies use!
        </p>  
      </Box>
    </>
  );
};

export default EDP;

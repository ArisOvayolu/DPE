import React from "react";
import Header from "./components/Header";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Facebook from "./img/Facebook-logo.jpg";
import Amazon from "./img/Amazon.jpg";
import Google from "./img/Google.png";
import { useNavigate } from "react-router";
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
    <Box sx={{display:'flex', justifyContent:'center', flexDirection:'column', alignItems:'center'}}>
      <Header />

      <h1
        style={{ marginLeft: "735px", fontFamily: "Poppins", padding: "25px" }}
      >
        {" "}
        Expose The Dark Patterns{" "}
      </h1>
      <Divider />
      <h3
        style={{ marginLeft: "850px", fontFamily: "Poppins", padding: "5px" }}
      >
        Test Your Knowledge
      </h3>
      <p
        style={{
          paddingTop: "40px",
          marginLeft: "600px",
          fontFamily: "Helvetica",
          fontSize: 19,
        }}
      >
        Now that we've learnt a bit more about dark patterns, its time to test
        our knowledge!
      </p>
      <p
        style={{
          paddingTop: "10px",
          marginLeft: "645px",
          fontFamily: "Helvetica",
          fontSize: 19,
        }}
      >
        Before you are three
        <span style={{ color: "black", fontSize: 19, fontFamily: "Poppins" }}>
          {" "}
          infamous wielders
        </span>{" "}
        of dark patterns to pick from.
      </p>
      <div
        style={{
          width: "425px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Paper
          elevation={24}
          sx={{
            backgroundColor: "white",
            borderRadius: "50px",
            padding: "10px",
            marginLeft: "1495px",
            marginTop: "40px",
          }}
        >
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
      <Box sx={{ paddingTop: "30px" }}>
        <p
          style={{
            paddingTop: "20px",
            marginLeft: "880px",
            fontFamily: "Helvetica",
            fontSize: 19,
          }}
        >
          <span style={{ color: "black", fontSize: 19, fontFamily: "Poppins" }}>
            Choose Wisely!
          </span>
        </p>
      </Box>
      </Box>
    </>
  );
};

export default EDP;

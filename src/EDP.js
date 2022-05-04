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
      <Box>
      <h1 style={{ marginLeft: "775px" }}> Expose The Dark Patterns </h1>
      </Box>
      <div style={{width:'425px', margin:'0 auto', marginTop:'20px'}}>
        <Stack direction="row" spacing={10}>
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
      </div>

      <Footer />
    </>
  );
};

export default EDP;

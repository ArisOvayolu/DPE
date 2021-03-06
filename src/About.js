import React from "react";
import Header from "./components/Header";
import Box from "@mui/material/Box";
import StatusBar from "./components/StatusBar";
import { Divider } from "@mui/material";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import pp from "./img/About/pp.jpg";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Fab from "@mui/material/Fab";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const About = () => {
  const Navigate = useNavigate();
  const contactHandler = () => {
    Navigate("/Contact");
  };

  return (
    <>
      <StatusBar></StatusBar>
      <Header />
      <Box
        sx={{
          margin: "5px",
          backgroundColor: "#E1E8E8",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          alignContent: "center",
        }}
      >
        <h1
          style={{
            paddingTop: "30px",
            paddingBottom: "20px",
            fontFamily: "Poppins",
          }}
        >
          {" "}
          About{" "}
        </h1>
        <Divider light sx={{ minWidth: "100%" }} variant="fullWidth" />
        <Grid
          container
          justifyContent="center"
          item
          xs={12}
          sx={{ paddingTop: "40px" }}
        >
          <Card
            sx={{
              backgroundColor: "#EBF2F2",
            }}
          >
            <CardMedia
              component="img"
              height="300"
              width="400"
              image={pp}
              alt="pp"
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h6"
                component="div"
                style={{ marginLeft: "65px", paddingBottom: "10px" }}
              >
                Aris M. Ovayolu
              </Typography>
              <Fab
                variant="extended"
                onClick={() => {
                  window.open(
                    "https://uk.linkedin.com/in/aris-m-ovayolu-722647157?msclkid=365f8e52cfcd11ec928539b45ccd3297",
                    "_blank"
                  );
                }}
                sx={{
                  marign: "auto",
                  marginLeft: "28%",
                  color: "black",
                  backgroundColor: "#E1E8E8",
                }}
              >
                Linkedin <LinkedInIcon sx={{ mr: 0, color: "black" }} />
              </Fab>
            </CardContent>
          </Card>
        </Grid>
        <h3
          style={{
            paddingTop: "50px",
            paddingBottom: "10px",
            fontFamily: "Poppins",
            fontSize: 21,
          }}
        >
          Me
        </h3>
        <p
          style={{
            maxWidth: "1100px",
            paddingBottom: "30px",
            lineHeight: 1.5,
            fontFamily: "Helvetica",
            fontSize: 19,
          }}
        >
          <span style={{ color: "black", fontSize: 25, fontFamily: "Poppins" }}>
            Hello, world!{" "}
          </span>
          My name is Aris, and I am a third-year computer science student at
          Newcastle University. I???ve always been interested in the psychology
          behind the designing of user experiences; why are certain
          applications/website so addicting to use? How do some of these
          applications/websites become so integral to the consumers day to day
          life?
        </p>
        <p
          style={{
            maxWidth: "1100px",
            paddingBottom: "30px",
            lineHeight: 1.5,
            fontFamily: "Helvetica",
            fontSize: 19,
          }}
        >
          These questions led me to the topic of Human Computer Interaction
          (HCI), where I began learning the principles and techniques that UI/UE
          developers adopt to design these interfaces and experiences. Working
          from the perspective of the designer stressed the importance of the
          responsibility that these designers, and the companies that employ
          them, bear in operating in goodwill and not taking advantage of
          consumers. Such responsibility should never be taken lightly; the
          controversy surrounding some of the world???s most influential
          applications/websites (Facebook, for example) and their unethical
          practices with their user experiences, taints the fundamental trust
          between consumer and designer.
        </p>
        <p
          style={{
            maxWidth: "1100px",
            paddingBottom: "30px",
            lineHeight: 1.5,
            fontFamily: "Helvetica",
            fontSize: 19,
          }}
        >
          I am strongly against this approach to designing and created this
          website to raise awareness of dark pattern implementation - the
          ultimate aim of this website is to educate the average web user of
          these deceptive design techniques.
        </p>
        <Divider light sx={{ minWidth: "100%" }} variant="fullWidth" />
        <h1
          style={{
            paddingTop: "25px",
            paddingBottom: "30px",
            fontFamily: "Poppins",
          }}
        >
          {" "}
          How can I get involved?{" "}
        </h1>
        <p
          style={{
            maxWidth: "1100px",
            paddingBottom: "30px",
            lineHeight: 1.5,
            fontFamily: "Helvetica",
            fontSize: 19,
          }}
        >
          We are planning on adding new features to to the site in the near
          future to make it more accessible towards user input.
        </p>
        <p
          style={{
            maxWidth: "1100px",
            paddingBottom: "30px",
            lineHeight: 1.5,
            fontFamily: "Helvetica",
            fontSize: 19,
          }}
        >
          <span style={{ color: "black", fontSize: 19, fontFamily: "Poppins" }}>
            What does that mean?
          </span>{" "}
          Well, one of the ways we were thinking of adding more user input is by
          adding a page that allows users to submit their own experiences with
          coming across dark patterns. For now though, do not hesitate to
          contact us by navigating to the contact page, your feedback is very
          much so appreciated!
        </p>
        <Button
          variant="text"
          sx={{
            backgroundColor: "#253030",
            color: "White",
            fontFamily: "Poppins",
          }}
          onClick={contactHandler}
        >
          Contact
        </Button>
      </Box>
    </>
  );
};

export default About;

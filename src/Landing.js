import React from "react";
import Header from "./components/Header";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import info from "./img/Landing/DarkPatterns.jpeg";
import StatusBar from "./components/StatusBar";
import Divider from "@mui/material/Divider";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

const Landing = () => {
  const Navigate = useNavigate();
  const DPTHandler = () => {
    Navigate("/DarkPatternTechniques");
  };

  return (
    <>
      <StatusBar></StatusBar>
      <Header />
      <Box sx={{ margin: "50px", backgroundColor: "#E1E8E8" }}>
        <h1
          style={{
            paddingTop: "45px",
            paddingBottom: "25px",
            marginLeft: "690px",
            fontFamily: "Poppins",
            fontSize: 38,
          }}
        >
          What are Dark Patterns?
        </h1>
        <Divider light sx={{ padding: "10px" }} />
        <Grid
          container
          direction="row"
          flexGrow={1}
          justifyContent="center"
          alignItems="center"
        >
          <Grid container justifyContent="center" item xs={6}>
            <Card sx={{ padding: "10px" }}>
              <CardMedia
                component="img"
                height="525"
                width="675"
                image={info}
                alt="info"
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h6"
                  component="div"
                  style={{ marginLeft: "45px" }}
                >
                  Visual Representation of Dark Pattern Techniques
                </Typography>
                <Divider light sx={{ padding: "1px" }} />
                <Typography
                  gutterBottom
                  variant="body2"
                  component="div"
                  style={{ marginLeft: "65px" }}
                >
                  Ref: https://uxknowledgebase.com/dark-patterns-3b41ed7a690e
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={5}>
            <h3
              style={{
                paddingTop: "25px",
                paddingBottom: "10px",
                marginLeft: "300px",
                fontFamily: "Poppins",
                fontSize: 21,
              }}
            >
              {" "}
              Dark Patterns{" "}
            </h3>
            <p
              style={{
                fontFamily: "Helvetica",
                fontSize: 19,
                paddingBottom: "20px",
                lineHeight: 1.5,
              }}
            >
              What are dark patterns, and why is this website <span style={{color: "black", fontSize:19, fontFamily:"Poppins"}}>“exposing”</span> them? 
              Dark Patterns are deceptive design techniques implemented by
              applications/websites to coerce the consumer to do something that
              they may not have necessarily been wanting to do - all for the
              gain of the service provider. Ever felt that the application that
              you're using becomes a bit too complicated when you're trying to
              cancel a subscription? Thats a dark pattern technique. Have you
              ever come across a number of surprise "service fees" in the
              checkout page? Thats another dark pattern technique.
            </p>
            <h3
              style={{
                paddingBottom: "10px",
                marginLeft: "320px",
                fontFamily: "Poppins",
                fontSize: 20,
              }}
            >
              {" "}
              Webdemic{" "}
            </h3>
            <p
              style={{
                fontFamily: "Helvetica",
                fontSize: 19,
                paddingBottom: "20px",
                lineHeight: 1.5,
              }}
            >
              These design techniques are highly unethical and are designed to
              prey upon users' cognitive biases, abuse users' data and abuse
              user trust for financial gain. These UI/UX developers hold a
              responsibility and need to be held accountable for such practices.
              The scale of dark pattern implementation is rampant, its a true
              pandemic of the web - greater awareness must be a priority so we
              can gain control of our UXs.
            </p>
            <h3
              style={{
                paddingBottom: "10px",
                marginLeft: "320px",
                fontFamily: "Poppins",
                fontSize: 21,
              }}
            >
              {" "}
              Techniques{" "}
            </h3>
            <p
              style={{
                fontFamily: "Helvetica",
                lineHeight: 1.5,
                fontSize: 19,
              }}
            >
              Dark Patterns come in a number of different techniques (to achieve
              various purposes) and as a practice are largely unknown by the
              average consumer. The infographic on the left highlights a number
              of these techniques.
            </p>
            <Divider sx={{ padding: "10px" }} />
          </Grid>
        </Grid>
        <h2
          style={{
            paddingTop: "40px",
            marginLeft: "825px",
            fontFamily: "Poppins",
            paddingBottom: "20px",
          }}
        >
          {" "}
          The Problem{" "}
        </h2>
        <p
          style={{
            padding: "10px",
            paddingLeft: "400px",
            paddingRight: "400px",
            lineHeight: 1.5,
            paddingBottom: "20px",
            fontFamily: "Helvetica",
            fontSize: 19,
          }}
        >
          If it’s not illegal, some may ask, what is the problem with this?
          Well, like many other aspects of the computing industry, the law isn’t
          always the most consistent indicator for what is right and wrong.
          Abusing the consumers trust by providing a service that undermines the
          value of honesty (which is what most dark pattern techniques
          ultimately do) is highly unethical and wrong.
        </p>
        <p
          style={{
            padding: "10px",
            paddingLeft: "400px",
            paddingRight: "400px",
            lineHeight: 1.5,
            paddingBottom: "30px",
            fontFamily: "Helvetica",
            fontSize: 19,
          }}
        >
          UX/UI designers should always prioritize the needs of the consumer and
          create interfaces that provide a smooth and efficient user experience.
          Raising awareness about these deceptive design tactics is very
          important, as people have the right to be aware of how they are
          unknowingly being exploited, for profit, by these corporations on a
          regular basis.
        </p>
        <Divider sx={{ padding: "10px" }} />
        <h2
          style={{
            paddingTop: "25px",
            paddingBottom: "30px",
            marginLeft: "715px",
            fontFamily: "Poppins",
          }}
        >
          {" "}
          How can I avoid Dark Patterns?{" "}
        </h2>
        <h3
          style={{
            paddingBottom: "10px",
            marginLeft: "790px",
            fontFamily: "Poppins",
            fontSize: 21,
          }}
        >
          Spreading Awareness
        </h3>
        <p
          style={{
            padding: "10px",
            paddingLeft: "400px",
            paddingRight: "400px",
            paddingBottom: "20px",
            lineHeight: 1.5,
            fontFamily: "Helvetica",
            fontSize: 19,
          }}
        >
          So, the question remains, how can we avoid being exploited by these
          unethical design techniques? Well, the first step must be spreading
          awareness. By educating the average user on how industry is taking
          advantage of them, and how to take steps to avoid this, we are
          reducing the effectiveness of these deceptive design techniques. This
          website will be dedicated to doing exactly that; educating people
          about these techniques and how to avoid them.
        </p>
        <h3
          style={{
            paddingBottom: "10px",
            marginLeft: "860px",
            fontFamily: "Poppins",
            fontSize: 21,
          }}
        >
          This Site
        </h3>
        <p
          style={{
            padding: "10px",
            paddingLeft: "400px",
            paddingRight: "400px",
            paddingBottom: "20px",
            fontFamily: "Helvetica",
            lineHeight: 1.5,
            fontSize: 19,
          }}
        >
          There are two dedicated pages that users can explore to better
          understand what dark patterns are, the “Dark Pattern Techniques” page,
          where you can find explanations on the different Dark Pattern
          techniques that you may come across - and a simple interactive game
          where users can test what theyve learnt (Expose the Dark Patterns).
        </p>
        <h3
          style={{
            paddingBottom: "10px",
            marginLeft: "820px",
            fontFamily: "Poppins",
            fontSize: 21,
          }}
        >
          Future Features
        </h3>
        <p
          style={{
            padding: "10px",
            paddingLeft: "400px",
            paddingRight: "400px",
            paddingBottom: "20px",
            lineHeight: 1.5,
            fontFamily: "Helvetica",
            fontSize: 19,
          }}
        >
          We have plans to extend the website further by adding further features
          like a user submission page; where users can submit their experiences
          of coming across dark pattern techniques - which would ultimately
          become a massive log of dark pattern techniques that
          applications/websites implement.
        </p>
        <Divider sx={{ padding: "10px" }} />
        <h2
          style={{
            paddingTop: "25px",
            paddingBottom: "10px",
            marginLeft: "860px",
            fontFamily: "Poppins",
          }}
        >
          {" "}
          Dive in{" "}
        </h2>
        <p
          style={{
            padding: "10px",
            paddingLeft: "570px",
            paddingRight: "400px",
            paddingBottom: "20px",
            lineHeight: 1.5,
            fontFamily: "Helvetica",
            fontSize: 19,
          }}
        >
          <span style={{color: "black", fontSize:19, fontFamily:"Poppins"}}>Piqued your interest?</span> Let's have a more in depth look at the different
          techniques.
        </p>
        <Button
          variant="text"
          sx={{
            backgroundColor: "#253030",
            color: "White",
            fontFamily: "Poppins",
            marginLeft: "795px",
          }}
          onClick={DPTHandler}
        >
          Dark Pattern Techniques
        </Button>
      </Box>
    </>
  );
};

export default Landing;

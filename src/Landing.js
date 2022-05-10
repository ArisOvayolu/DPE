import React from "react";
import Header from "./components/Header";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import info from "./img/Landing/DarkPatterns.jpeg";
import StatusBar from "./components/StatusBar";
import Divider from '@mui/material/Divider'
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const Landing = () => {
  const Navigate = useNavigate();
  const DPTHandler = () => {
    Navigate("/DarkPatternTechniques");
  };

  return (
    <>
      <StatusBar></StatusBar>
      <Header />
      <Box sx={{margin:'40px', backgroundColor: "#E1E8E8" }}>
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
        <Divider light sx={{padding:'10px'}}/>
        <Grid
          container
          direction="row"
          flexGrow={1}
          justifyContent="center"
          alignItems="center"
        >
          <Grid container justifyContent="center" item xs={5}>
            <Card sx={{padding:'10px'}}>
                <CardMedia
                  component="img"
                  height="425"
                  width="575"
                  image={info}
                  alt="info"
                />
                <CardContent>
                <Typography gutterBottom variant="h6" component="div" style={{marginLeft:'45px'}}>
                  Visual Representation of Dark Pattern Techniques
                </Typography>
                <Divider light sx={{padding:'1px'}}/>
                <Typography gutterBottom variant="body2" component="div" style={{marginLeft:'65px'}}>
                  Ref: https://uxknowledgebase.com/dark-patterns-3b41ed7a690e
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={5}>
            <p
              style={{
                fontFamily: "Century",
                fontSize: 20,
              }}
            >
              What are Dark Patterns, and why is this website “exposing” them?
              Building on from the tainted trust between consumer and designer,
              Dark Patterns are deceptive design techniques implemented by
              applications/websites to coerce the consumer to do something that
              they may not have necessarily been wanting to do - all for the
              gain of the service provider. Dark Patterns come in various
              techniques (to achieve various purposes) and as a practice are
              largely unknown by the average consumer.
            </p>
            <Divider sx={{padding:'10px'}}/>
          </Grid>
        </Grid>
        <h2
          style={{
            paddingTop: "25px",
            marginLeft: "825px",
            fontFamily: "Poppins",
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
            fontFamily: "Century",
            fontSize: 20,
          }}
        >
          If it’s not illegal, some may ask, what is the problem with this?
          Well, like many other aspects of the computing industry, the law isn’t
          always the most consistent indicator for what is right and wrong.
          Abusing the consumers trust by providing a service that undermines the
          value of honesty (which is what most Dark Pattern techniques
          ultimately do) is highly unethical and wrong. UX/UI designers should
          always prioritize the needs of the consumer and create interfaces that
          provide a smooth and efficient user experience. Raising awareness
          about these deceptive design tactics is very important, as people have
          the right to be aware of how they are unknowingly being exploited, for
          profit, by these corporations on a regular basis.
        </p>
        <Divider sx={{padding:'10px'}}/>
        <h2
          style={{
            paddingTop: "25px",
            marginLeft: "715px",
            fontFamily: "Poppins",
          }}
        >
          {" "}
          How can I avoid Dark Patterns?{" "}
        </h2>
        <p
          style={{
            padding: "10px",
            paddingLeft: "400px",
            paddingRight: "400px",
            fontFamily: "Century",
            fontSize: 20,
          }}
        >
          So, the question remains, how can we avoid being exploited by these
          unethical design techniques? Well, for me, the first step must be
          spreading awareness. By educating the average user on how industry is
          taking advantage of them, and how to take steps to avoid this, we are
          reducing the effectiveness of these deceptive design techniques. This
          website will be dedicated to doing exactly that; educating people
          about these techniques and how to avoid them. There are two dedicated
          pages to achieve this goal, the “Dark Pattern Techniques” page (where
          we essentially provide explanations on the different Dark Pattern
          techniques that you may come across and how to avoid them) and an
          interactive learning experience, “Expose the Dark Pattern” (where the
          user can select an application and then try and expose the different
          dark pattern techniques that they can find). Depending on user
          feedback, we are also considering future work on this website by
          adding a page dedicated to submissions, outing the implementation of
          such techniques, by you guys; essentially building a large thread of
          real examples.
        </p>
        <Divider sx={{padding:'10px'}}/>
        <h2
          style={{
            paddingTop: "25px",
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
            fontFamily: "Century",
            fontSize: 20,
          }}
        >
          Piqued your interest? Let's have a more in depth look at the different
          techniques
        </p>
        <Button
            variant="text"
            sx={{ backgroundColor:"#253030", color: "White", fontFamily: "Poppins", marginLeft: "795px" }}
            onClick={DPTHandler}
          >
            Dark Pattern Techniques
          </Button> 
      </Box>
      
    </>
  );
};

export default Landing;

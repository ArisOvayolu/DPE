import React from "react";
import Header from "./components/Header";
import Box from "@mui/material/Box";
import Footer from "./components/Footer";
import StatusBar from "./components/StatusBar";
import pp from "./img/About/pp.jpg";
import { Divider } from "@mui/material";

const About = () => {
    return (
      <>
        <StatusBar></StatusBar>
        <Header />
        <Box sx={{margin:'40px'}}>
          <h1 style={{ paddingTop:"10px", marginLeft: "875px", fontFamily: 'Abril Fatface', fontSize:45 }}> About </h1>
          <p style={{ padding:"2px", paddingLeft: "500px", paddingRight: "450px", fontFamily: 'Montserrat', fontSize:20}}>
          Hello, world! My name is Aris, and I am a third-year computer science student at Newcastle University. 
          </p> 
          <p style={{ padding:"2px", paddingLeft: "400px", paddingRight: "400px", fontFamily: 'Montserrat', fontSize:20}}>
          I’ve always been interested in the psychology behind the designing of user experiences; why are certain applications/website so addicting to use? How do some of these applications/websites become so integral to the consumers day to day life? These questions led me to the topic of Human Computer Interaction (HCI), where I began learning the principles and techniques that UI/UE developers adopt to design these interfaces and experiences. Working from the perspective of the designer stressed the importance of the responsibility that these designers, and the companies that employ them, bear in operating in goodwill and not taking advantage of consumers. Such responsibility should never be taken lightly; the controversy surrounding some of the world’s most influential applications/websites (Facebook, for example) and their unethical practices with their user experiences, taints the fundamental trust between consumer and designer.   
          </p> 
          <Divider />
          <h1 style={{ paddingTop:"25px", marginLeft: "755px", fontFamily: 'Abril Fatface' }}> What does this site offer? </h1>
          <p style={{ padding:"10px", paddingLeft: "400px", paddingRight: "400px", fontFamily: 'Montserrat', fontSize:20 }}>
          This site aims to be a platform that provides the public information on dark patterns. The home page offers an overview of what dark patterns are and the general discussions around them; users that are interested in looking at dark patterns in a more in depth manner can check out our "Dark Pattern Techniques" page. 
          </p>
          <Divider />
          <h1 style={{ paddingTop:"25px", marginLeft: "755px", fontFamily: 'Abril Fatface' }}> How can I get involved? </h1>
          <p style={{ padding:"2px", paddingLeft: "400px", paddingRight: "400px", fontFamily: 'Montserrat', fontSize:20 }}>
          We are planning on adding new features to to the site in the near future to make it more accessible towards user input.   
          </p>
          <p style={{ padding:"1px", paddingLeft: "400px", paddingRight: "400px", fontFamily: 'Montserrat', fontSize:20 }}>
          What does that mean? Well, one of the ways we were thinking of adding more user input is by adding a page that allows users to submit their own experiences with coming across dark patterns. For now though, do not hesitate to contact us by navigating to the contact page, your feedback is very much so appreciated!  
          </p>
          view contacts
        </Box>
      </>
      
    );
  };
  
  export default About;
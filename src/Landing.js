import React from "react";
import Header from "./components/Header";
import Box from "@mui/material/Box";
import Footer from "./components/Footer";


const Landing = () => {
  return (
    <>
      <Header />
      <Box sx={{margin:'40px'}}>
        <h1 style={{ paddingTop:"10px", marginLeft: "875px" }}> About </h1>
        <p style={{ padding:"10px", paddingLeft: "450px", paddingRight: "450px" }}>
        Hello, world! My name is Aris, and I am a third-year computer science student at Newcastle University. I’ve always been interested in the psychology behind the designing of user experiences; why are certain applications/website so addicting to use? How do some of these applications/websites become so integral to the consumers day to day life? These questions led me to the topic of Human Computer Interaction (HCI), where I began learning the principles and techniques that UI/UE developers adopt to design these interfaces and experiences. Working from the perspective of the designer stressed the importance of the responsibility that these designers, and the companies that employ them, bear in operating in goodwill and not taking advantage of consumers. Such responsibility should never be taken lightly; the controversy surrounding some of the world’s most influential applications/websites (Facebook, for example) and their unethical practices with their user experiences, taints the fundamental trust between consumer and designer. 
        </p>

        <h1 style={{ paddingTop:"25px", marginLeft: "750px" }}> What are Dark Patterns? </h1>
        <p style={{ padding:"10px", paddingLeft: "450px", paddingRight: "450px" }}>
        So, what are Dark Patterns, and why have I created a website “exposing” them? Building on from the tainted trust between consumer and designer, Dark Patterns are deceptive design techniques implemented by applications/websites to coerce the consumer to do something that they may not have necessarily been wanting to do - all for the gain of the service provider. Dark Patterns come in various techniques (to achieve various purposes) and as a practice are largely unknown by the average consumer. 
        </p>

        <h1 style={{ paddingTop:"25px", marginLeft: "825px" }}> The Problem </h1>
        <p style={{ padding:"10px", paddingLeft: "450px", paddingRight: "450px" }}>
        If it’s not illegal, some may ask, what is the problem with this? Well, like many other aspects of the computing industry, the law isn’t always the most consistent indicator for what is right and wrong. Abusing the consumers trust by providing a service that undermines the value of honesty (which is what most Dark Pattern techniques ultimately do) is highly unethical and wrong. UX/UI designers should always prioritize the needs of the consumer and create interfaces that provide a smooth and efficient user experience. Raising awareness about these deceptive design tactics is very important, as people have the right to be aware of how they are unknowingly being exploited, for profit, by these corporations on a regular basis. 
        </p>

        <h1 style={{ paddingTop:"25px", marginLeft: "750px" }}> How can I avoid Dark Patterns? </h1>
        <p style={{ padding:"10px", paddingLeft: "450px", paddingRight: "450px" }}>
        So, the question remains, how can we avoid being exploited by these unethical design techniques? Well, for me, the first step must be spreading awareness. By educating the average user on how industry is taking advantage of them, and how to take steps to avoid this, we are reducing the effectiveness of these deceptive design techniques. This website will be dedicated to doing exactly that; educating people about these techniques and how to avoid them. There are two dedicated pages to achieve this goal, the “Dark Pattern Techniques” page (where we essentially provide explanations on the different Dark Pattern techniques that you may come across and how to avoid them) and an interactive learning experience, “Expose the Dark Pattern” (where the user can select an application and then try and expose the different dark pattern techniques that they can find). Depending on user feedback, we are also considering future work on this website by adding a page dedicated to submissions, outing the implementation of such techniques, by you guys; essentially building a large thread of real examples.
        </p>
      </Box>
      {/* <Footer/> */}
    </>
  );
};

export default Landing;

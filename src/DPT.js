import React from "react";
import Header from "./components/Header";
import Box from "@mui/material/Box";
import YoutubeEmbed from "./components/YoutubeEmbed";
import StatusBar from "./components/StatusBar";
import Avatar from "@mui/material/Avatar";
import HC from "./img/DPT/HiddenCosts.jpg";
import NC1 from "./img/DPT/NC.png";
import NC2 from "./img/DPT/NCC.png";
import MD from "./img/DPT/Misdirection.jpg";
import PZ from "./img/DPT/PrivacyZuckering.jpg";
import NC from "./img/DPT/NeedlessComplexity.jpg";
import DA from "./img/DPT/DisguisedAds.jpg";
import SB from "./img/DPT/SneakintoBasket.jpg";
import CS from "./img/DPT/ConfirmShaming.jpg";
import HCE from "./img/DPT/Hidden Costs.jpg";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import { useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

const DPT = () => {
  const Navigate = useNavigate();
  const EDPHandler = () => {
    Navigate("/ExposeTheDarkPatterns");
  };
  return (
    <>
      <StatusBar></StatusBar>
      <Header />
      <Box
        sx={{
          margin: "5px",
          padding: "20px",
          backgroundColor: "#E1E8E8",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1
          style={{
            padding: "20px",
            paddingTop: "50px",
            fontFamily: "Poppins",
          }}
        >
          {" "}
          Dark Pattern Techniques{" "}
        </h1>
        <Divider
          light
          sx={{ padding: "10px", minWidth: "100%" }}
          variant="fullWidth"
        />
        <Box
          sx={{
            paddingTop: "30px",
            flexDirection: "row",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            alignContent: "center",
          }}
        >
          <Avatar alt={"ava"} src={HC} sx={{ width: 50, height: 50 }} />
          <h2
            style={{
              fontFamily: "Poppins",
              marginLeft: "30px",
            }}
          >
            {" "}
            Hidden Cost{" "}
          </h2>
        </Box>
        <Box
          sx={{
            paddingBottom: "15px",
            flexDirection: "column",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            alignContent: "center",
          }}
        >
          <p
            style={{
              paddingBottom: "0px",
              lineHeight: 1.5,
              fontFamily: "Helvetica",
              fontSize: 18,
              maxWidth: "835px",
            }}
          >
            <span
              style={{ color: "black", fontSize: 20, fontFamily: "Poppins" }}
            >
              Hidden costs
            </span>{" "}
            appear at the final checkout page, unexpectedly, with no prior
            mention in any other part of the UI/UX. They are in the final
            checkout stage as the application/website wants the user to go
            through all the stages of online shopping before they eventually
            come across the hidden fees.{" "}
          </p>
          <p
            style={{
              paddingBottom: "0px",
              lineHeight: 1.5,
              fontFamily: "Helvetica",
              fontSize: 18,
              maxWidth: "835px",
            }}
          >
            This makes the user less likely to notice the fees (as they’re not
            highlighted in the user’s face; they’re rather more sneakily
            implemented) and even if they do notice, the user is so far
            committed, they’re far more likely to just go ahead and purchase,
            regardless of the extra fees.
          </p>
          <h3
            style={{
              fontFamily: "Poppins",
            }}
          >
            Example
          </h3>
          <Card sx={{ padding: "20px", marginBottom: "20px" }}>
            <CardMedia
              component="img"
              height="450"
              width="600"
              image={HCE}
              alt="info"
            />
            <CardContent>
              <Divider
                light
                sx={{ padding: "1px", minWidth: "100%" }}
                variant="fullWidth"
              />
              <Typography
                gutterBottom
                variant="body2"
                component="div"
                style={{ marginLeft: "190px" }}
              >
                Ref: https://measuringu.com/flower-ux/
              </Typography>
            </CardContent>
          </Card>
          <p
            style={{
              paddingBottom: "0px",
              lineHeight: 1.5,
              fontFamily: "Helvetica",
              fontSize: 18,
              maxWidth: "835px",
            }}
          >
            As you can see from the image above, the hidden costs are only
            revealed to the user in the final checkout section of this UX.
          </p>
          <p
            style={{
              paddingBottom: "0px",
              lineHeight: 1.5,
              fontFamily: "Helvetica",
              fontSize: 18,
              maxWidth: "835px",
            }}
          >
            Another common implementation of hidden costs is pairing them with
            supposed “free” items or bargain deals that seem to be a steal for
            the user. These items are only free or a bargain, till the user gets
            to the checkout page where they come across the hidden costs and
            come to the realization that maybe they might have been duped.
          </p>
          <h3
            style={{
              fontFamily: "Poppins",
            }}
          >
            How to avoid Hidden Costs
          </h3>
          <p
            style={{
              paddingBottom: "0px",
              lineHeight: 1.5,
              fontFamily: "Helvetica",
              fontSize: 18,
              maxWidth: "835px",
            }}
          >
            Always be aware that there may be hidden costs in the checkout
            section when you are doing some online shopping, so don’t get too
            attached to the items in your basket!
          </p>
          <p
            style={{
              paddingBottom: "0px",
              lineHeight: 1.5,
              fontFamily: "Helvetica",
              fontSize: 18,
              maxWidth: "835px",
            }}
          >
            If we want to see a change and prevent the implementation of this
            technique, we need to stop purchasing items from
            website/applications that implement this technique.{" "}
            <span
              style={{ color: "black", fontSize: 18, fontFamily: "Poppins" }}
            >
              DO NOT ENTERTAIN THEIR MANIPULATION!
            </span>
          </p>
          <p
            style={{
              paddingBottom: "0px",
              lineHeight: 1.5,
              fontFamily: "Helvetica",
              fontSize: 18,
              maxWidth: "835px",
            }}
          >
            Golden rule of the internet; if it looks too good to be true, it
            probably is. Be vigilant online, if a website is offering you a
            bargain that’s too good to be true, chances are there are some
            hidden costs involved.
          </p>
          <h3
            style={{
              fontFamily: "Poppins",
            }}
          >
            Check out this video!
          </h3>
          <p
            style={{
              paddingBottom: "0px",
              lineHeight: 1.5,
              fontFamily: "Helvetica",
              fontSize: 18,
              maxWidth: "835px",
            }}
          >
            If reading all of that isn't for you, check out this short video I
            made summarising this technique!
          </p>
        </Box>
        <YoutubeEmbed embedId="-xK02zueCuY" />
        <Divider
          light
          sx={{ minWidth: "100%", mb: "30px" }}
          variant="fullWidth"
        />

        <Box
          sx={{
            flexDirection: "row",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            alignContent: "center",
          }}
        >
          <Avatar alt={"ava"} src={NC} sx={{ width: 50, height: 50 }} />
          <h2 style={{ marginLeft: "30px", fontFamily: "Poppins" }}>
            {" "}
            Needless Complexity / "Roach Motel"{" "}
          </h2>
        </Box>
        <Box
          sx={{
            paddingBottom: "15px",
            flexDirection: "column",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            alignContent: "center",
          }}
        >
          <p
            style={{
              paddingBottom: "0px",
              lineHeight: 1.5,
              fontFamily: "Helvetica",
              fontSize: 18,
              maxWidth: "835px",
            }}
          >
            <span
              style={{ color: "black", fontSize: 20, fontFamily: "Poppins" }}
            >
              Needless complexity or “roach motel”
            </span>{" "}
            is the technique of creating a design that is very easy for the user
            to sign up to/enter, but difficult to exit. Most commonly applied by
            applications/websites that offer subscription services – the
            application intentionally designs their subscription cancelling
            process, for example, to be so complex, a portion of users would
            simply give up as they struggle to navigate the user interface.
          </p>
          <p
            style={{
              paddingBottom: "0px",
              lineHeight: 1.5,
              fontFamily: "Helvetica",
              fontSize: 18,
              maxWidth: "835px",
            }}
          >
            This practice is surprisingly common, think of personal experiences;
            the signing up process is always the easier process when compared to
            cancelling an account or subscription.
          </p>
          <p
            style={{
              paddingBottom: "0px",
              lineHeight: 1.5,
              fontFamily: "Helvetica",
              fontSize: 18,
              maxWidth: "835px",
            }}
          >
            For the service provider, the benefits are clear, they make more
            revenue as people are less likely to persist with trying to cancel
            their account or subscription. Their objectives are clear,
            prioritise revenue over user experience.
          </p>
          <h3
            style={{
              fontFamily: "Poppins",
            }}
          >
            Example
          </h3>
          <Card sx={{ padding: "20px", marginBottom: "20px" }}>
            <CardMedia
              component="img"
              height="600"
              width="750"
              image={NC1}
              alt="info"
            />
            <CardContent>
              <Divider
                light
                sx={{ padding: "1px", minWidth: "100%" }}
                variant="fullWidth"
              />
              <Typography
                gutterBottom
                variant="body2"
                component="div"
                style={{ marginLeft: "175px" }}
              >
                Ref: https://www.deceptive.design/types/roach-motel
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{ padding: "20px", marginBottom: "20px", mt:"30px" }}>
            <CardMedia
              component="img"
              height="400"
              width="550"
              image={NC2}
              alt="info"
            />
            <CardContent>
              <Divider
                light
                sx={{ padding: "1px", minWidth: "100%" }}
                variant="fullWidth"
              />
              <Typography
                gutterBottom
                variant="body2"
                component="div"
                style={{ marginLeft: "175px" }}
              >
                Ref: https://www.deceptive.design/types/roach-motel
              </Typography>
            </CardContent>
          </Card>
          <h3
            style={{
              fontFamily: "Poppins",
            }}
          >
            How to avoid Needless Complexity/Roach Motel
          </h3>
        </Box>
        <YoutubeEmbed embedId="D2lOt-kpXP4" />
        <Divider
          light
          sx={{ padding: "10px", minWidth: "100%" }}
          variant="fullWidth"
        />

        <Box
          sx={{
            flexDirection: "row",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            alignContent: "center",
          }}
        >
          <Avatar alt={"ava"} src={MD} sx={{ width: 50, height: 50 }} />
          <h2 style={{ marginLeft: "30px", fontFamily: "Poppins" }}>
            {" "}
            Misdirection{" "}
          </h2>
        </Box>
        <YoutubeEmbed embedId="6ZfhMkd07GU" />
        <Divider
          light
          sx={{ padding: "10px", minWidth: "100%" }}
          variant="fullWidth"
        />

        <Box
          sx={{
            flexDirection: "row",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            alignContent: "center",
          }}
        >
          <Avatar alt={"ava"} src={CS} sx={{ width: 50, height: 50 }} />
          <h2 style={{ marginLeft: "30px", fontFamily: "Poppins" }}>
            {" "}
            Confirmshaming{" "}
          </h2>
        </Box>
        <YoutubeEmbed embedId="rPvrPuthUi0" />
        <Divider
          light
          sx={{ padding: "10px", minWidth: "100%" }}
          variant="fullWidth"
        />

        <Box
          sx={{
            flexDirection: "row",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            alignContent: "center",
          }}
        >
          <Avatar alt={"ava"} src={PZ} sx={{ width: 50, height: 50 }} />
          <h2 style={{ marginLeft: "30px", fontFamily: "Poppins" }}>
            {" "}
            Privacy Zuckering{" "}
          </h2>
        </Box>
        <YoutubeEmbed embedId="KQHST_gYkzc" />
        <Divider
          light
          sx={{ padding: "10px", minWidth: "100%" }}
          variant="fullWidth"
        />

        <Box
          sx={{
            flexDirection: "row",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            alignContent: "center",
          }}
        >
          <Avatar alt={"ava"} src={DA} sx={{ width: 50, height: 50 }} />
          <h2 style={{ marginLeft: "30px", fontFamily: "Poppins" }}>
            {" "}
            Disguised Ads{" "}
          </h2>
        </Box>
        <YoutubeEmbed embedId="-wVWqzbcmcE" />
        <Divider
          light
          sx={{ padding: "10px", minWidth: "100%" }}
          variant="fullWidth"
        />

        <Box
          sx={{
            flexDirection: "row",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            alignContent: "center",
          }}
        >
          <Avatar alt={"ava"} src={SB} sx={{ width: 50, height: 50 }} />
          <h2 style={{ marginLeft: "30px", fontFamily: "Poppins" }}>
            {" "}
            Sneak into Basket{" "}
          </h2>
        </Box>
        <YoutubeEmbed embedId="dVoPKDZuXJ0" />

        <Button
          variant="text"
          sx={{
            color: "White",
            fontFamily: "Poppins",
            backgroundColor: "#253030",
          }}
          onClick={EDPHandler}
        >
          Test Your Knowledge
        </Button>
      </Box>
    </>
  );
};

export default DPT;

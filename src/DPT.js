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
import MisDirection from "./img/DPT/mD.jpg";
import DA from "./img/DPT/DisguisedAds.jpg";
import privacy from "./img/DPT/PrivateData.png";
import D from "./img/DPT/Disguised.png";
import sneak from "./img/DPT/siB.jpg";
import confirm from "./img/DPT/ConfirmSH.png";
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
              marginTop:"40px"
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
          <Card sx={{ padding: "20px", marginBottom: "20px", mt: "30px" }}>
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
          <p
            style={{
              paddingBottom: "0px",
              lineHeight: 1.5,
              fontFamily: "Helvetica",
              fontSize: 18,
              maxWidth: "835px",
            }}
          >
            The images above highlight how this technique may be used. Rolling
            Stones deceptively lure their users into signing up to their
            subscription, unless they notice the decline button highlighted in
            the first picture (Misdirection...).
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
            The only way users, that notice later on that they've subscribed,
            can unsubscribe is to download a form, print it out fill it in with
            a pen, put it in an envelope with a stamp and sent it to them via
            mail.
          </p>
          <h3
            style={{
              fontFamily: "Poppins",
              marginTop: "10px",
            }}
          >
            How to avoid Needless Complexity/Roach Motel
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
            If it’s an unknown service, you can use free online tools like
            “TrustPilot” to see what other people are saying about the service.
            If there are many negative reviews describing functionality that is
            similar to this dark pattern, chances are you should stay away from
            that service.
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
            Don’t just sign up for anything!{" "}
            <span
              style={{ color: "black", fontSize: 18, fontFamily: "Poppins" }}
            >
              Be vigilant online.
            </span>{" "}
            Be sure to check the service’s stated conditions before
            subscribing/signing up! If you see any inconsistency or hints of
            immoral practices that align with this (or any other) dark pattern
            then do not sign up!
          </p>
          <h3
            style={{
              fontFamily: "Poppins",
              marginTop:"40px"
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
              Misdirection
            </span>{" "}
             is the technique of intentionally distracting the
            user’s attention, through the application of design choices that
            prey upon psychological biases, to nudge them to selecting an option
            that benefits the service provider.
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
            This technique is widely implemented and is often paired with other
            dark pattern techniques due to its ease of implementation and
            usability.
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
            For example, a service provider may implement misdirection with the
            technique, needless complexity (As seen earlier on the page), so
            that they can manipulate the user’s action from two directions.
            Using misdirection to prey on their cognitive biases and needless
            complexity to frustrate the user.
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
            Misdirection is effective in enabling the service provider to gain
            better control of their user’s decision making, essentially allowing
            them to optimise their interface to achieve their goals. As this
            technique uses psychological biases against the user, the user,
            often isn’t even aware that their decision-making process is being
            influenced.
          </p>
          <h3
            style={{
              fontFamily: "Poppins",
            }}
          >
            Example
          </h3>
          <Card sx={{ padding: "20px", marginBottom: "20px", mt: "30px" }}>
            <CardMedia
              component="img"
              height="400"
              width="550"
              image={MisDirection}
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
                style={{ marginLeft: "155px" }}
              >
                Ref: https://adamfard.com/blog/dark-patterns-ux
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
            The image above displays the implementation of the dark pattern
            technique, “misdirection” by ZSL London Zoo. The aim of this design
            technique is to prey upon the users’ cognitive biases and prompt
            them to click the big green arrow, which would mean that the user
            would pay a donation as well as the standard fee. The other option
            is nowhere near as appealing to a user that is trying to quickly
            purchase their ticket and move to the next stage; they could easily
            fall prey to this deceptive design without ever realising.
          </p>
          <h3
            style={{
              fontFamily: "Poppins",
              marginTop: "30px",
            }}
          >
            How to avoid Misdirection
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
            Scan the options available to you thoroughly. With the commonality
            of this dark pattern it will be hard to avoid interfaces that apply
            it; scanning all options (as the one you want is often secluded) is
            therefore a key habit to adopt in order to avoid such manipulation.
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
            Do not immediately click on the option that the UI presents you,{" "}
            <span
              style={{ color: "black", fontSize: 18, fontFamily: "Poppins" }}
            >
              think for yourself!
            </span>{" "}
          </p>
          <h3
            style={{
              fontFamily: "Poppins",
              marginTop: "40px",
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
              Confirm Shaming
            </span>{" "}
            is the technique of using emotive language to influence and,
            ultimately, sway the user’s decision to benefit the service
            provider.
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
            For example, the option to decline a service is worded in a way to
            make the user feel guilty, or even stupid.
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
            Similarly, to misdirection, technique aims to give the service
            provider the power of influencing the user’s decision making,
            allowing them to puppet the users behaviour to best cater to their
            goals.
          </p>
          <h3
            style={{
              fontFamily: "Poppins",
            }}
          >
            Example
          </h3>
          <Card sx={{ padding: "20px", marginBottom: "20px", mt: "30px" }}>
            <CardMedia
              component="img"
              height="450"
              width="600"
              image={confirm}
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
                style={{ marginLeft: "60px" }}
              >
                Ref: https://adamfard.com/blog/dark-patterns-ux
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
            The image above is a great example of what confirm shaming
            implementation might look like. This example not only highlights
            this technique being used, but it is also paired with privacy
            zuckering. This website wants the user to reveal their email
            address, otherwise they simply will not be receiving this random act
            of supposed “kindness”.
          </p>
          <h3
            style={{
              fontFamily: "Poppins",
              marginTop: "30px",
            }}
          >
            How to avoid Confirm Shaming
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
            Be aware of the application when they use emotional terminology to
            get you to do something (its most likely Confirmshaming).
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
            <span
              style={{ color: "black", fontSize: 18, fontFamily: "Poppins" }}
            >
              YOU ARE NOT MISSING OUT!
            </span>{" "}
            Do not let an application coerce you into thinking that you MUST use
            their service!
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
            Ignore and be vigilant, Confirmshaming is often paired with
            misdirection.
          </p>
          <h3
            style={{
              fontFamily: "Poppins",
              marginTop: "40px",
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
              Privacy zuckering
            </span>{" "}
            is the technique of luring the user to reveal private information
            that they didn’t want to, or necessarily have to.
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
            Websites/application are able to make additional revenue off the
            dealing of their users’ private data. Third party corporations,
            governments, and agencies buy entire databases worth of private data
            from sources like, Facebook and use it in various ways for various
            purposes.
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
            These purposes can range from having complex algorithms designed to
            comb through these colossal sets of data to identify patterns in
            user behaviour, to having algorithms that search for keywords that
            can paint a larger picture of general public sentiment towards a
            specific policy.
          </p>
          <h3
            style={{
              fontFamily: "Poppins",
            }}
          >
            Example
          </h3>
          <Card sx={{ padding: "20px", marginBottom: "20px", mt: "30px" }}>
            <CardMedia
              component="img"
              height="450"
              width="600"
              image={privacy}
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
                style={{ marginLeft: "130px" }}
              >
                Ref: https://Twitter
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
            The image above displays a user catching out Facebook on their
            deceptive usage of users' private data.
          </p>
          <h3
            style={{
              fontFamily: "Poppins",
              marginTop: "30px",
            }}
          >
            How to avoid Privacy Zuckering
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
            As always, you must be extremely vigilant with your data online!{" "}
            <span
              style={{ color: "black", fontSize: 18, fontFamily: "Poppins" }}
            >
              Do not enter any personal information that you do not need to.
            </span>{" "}
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
            Check privacy settings for everything that you use, including the
            actual web browser! A virtual profile of you can be made through the
            storage of your private data which means you have to be careful with
            everything that tracks your behaviour online.
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
          Use any legal aid you can, use GDPR to your advantage! Reject privacy
          cookies that aren't required, they only minimally benefit your user
          experience!
          </p>
          <h3
            style={{
              fontFamily: "Poppins",
              marginTop:"40px"
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
              Disguised Ads
            </span>{" "}
            ads are the technique of implementing ads into the interface,
            without making it clear that they are, indeed, ads.
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
            This technique is implemented in order to try and lure the user into
            clicking on them.
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
            A common way for website/applications to generate money online is
            through advertisements. These advertisements bring in more revenue
            for increased interaction - whether that be the number of users that
            view it, or the number of users that click on it.
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
              image={D}
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
                style={{ marginLeft: "140px" }}
              >
                Ref: https://www.deceptive.design/types/disguised-ads
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
            The image above is a great representation of how a user may come
            across this technique and fall victim to it.
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
            The advertisement matches the design of the UI, preying upon the
            user’s cognitive biases to click on the massive blue “DOWNLOAD NOW”
            button. The real download button is on the top left-hand side of the
            screen, but you wouldn’t blame the user for noticing the other one
            before.
          </p>
          <h3
            style={{
              fontFamily: "Poppins",
              marginTop: "30px",
            }}
          >
            How to avoid Disguised Ads
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
            Be wary of sites that use advertisements as a form of revenue, they
            are more likely to implement such techniques to increase profits.
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
            If something doesn’t quite fit into the UI, double check before
            clicking – chances are it’s a disguised ad.
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
            If you keep falling for it, they’ll keep implementing it. The only
            way to establish substantial change is if we stop falling victim to
            these deceptive designs,{" "}
            <span
              style={{ color: "black", fontSize: 18, fontFamily: "Poppins" }}
            >
              be vigorous online!
            </span>{" "}
          </p>
          <h3
            style={{
              fontFamily: "Poppins",
              marginTop:"40px"
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
              Sneak into Basket
            </span>{" "}
            Sneak into basket is the technique of, as you may have guessed by
            the name, sneaking additional items to the user’s basket without
            their consent. Most commonly implemented by online shopping sites,
            this technique aims to make the service provider extra revenue.
            Similar to hidden costs, the website/application sneaks into small
            value items to decrease the probability of detection. If a user has
            a large basket, containing a number of items, the additional item/s
            that the website sneaked in could go unnoticed and end up being
            purchased by the user.
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
            Thanks to new laws being passed in the UK (replacing the outdated
            1997 consumer rights law), this technique is now illegal to
            implement by online retailers.
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
              image={sneak}
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
                style={{ marginLeft: "140px" }}
              >
                Ref:
                https://www.tedic.org/en/dark-pattern-sports-direct-sneak-into-basket-2/
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
            The image above is an example of sneak into basket implementation.
            Sports Direct.com have added a £1's worth of additional items to the
            user’s basket without consent. If the order had been any larger,
            perhaps, the user wouldn’t have noticed such a small additional
            charge.
          </p>
          <h3
            style={{
              fontFamily: "Poppins",
              mt: "10px",
            }}
          >
            How to avoid Sneak into Basket
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
            <span
              style={{ color: "black", fontSize: 18, fontFamily: "Poppins" }}
            >
              Be vigilant
            </span>{" "}
            when shopping online, check your cart thoroughly before purchasing.
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
            Do not purchase item/s, even if its useful as it only encourages the
            implementation of such techniques.
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
            Avoid going back to sites that implement this technique.
          </p>
          <h3
            style={{
              fontFamily: "Poppins",
              marginTop:"40px"
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

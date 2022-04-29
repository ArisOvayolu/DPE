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

      <Box>
        <h1 style={{ marginLeft: "775px" }}> Expose The Dark Patterns </h1>
        <p
          style={{
            padding: "10px",
            paddingLeft: "300px",
            paddingRight: "300px",
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Faucibus
          ornare suspendisse sed nisi lacus sed viverra tellus. Dui faucibus in
          ornare quam viverra orci sagittis eu. Maecenas ultricies mi eget
          mauris pharetra et ultrices. Nisl pretium fusce id velit ut. Non quam
          lacus suspendisse faucibus interdum posuere lorem ipsum dolor.
          Faucibus purus in massa tempor nec feugiat nisl pretium fusce. Amet
          massa vitae tortor condimentum. Justo nec ultrices dui sapien eget mi
          proin sed libero. Quam adipiscing vitae proin sagittis nisl rhoncus
          mattis rhoncus urna. Vitae auctor eu augue ut lectus arcu. Vitae
          suscipit tellus mauris a diam. Nibh sit amet commodo nulla facilisi
          nullam. Lorem ipsum dolor sit amet consectetur. Augue neque gravida in
          fermentum et sollicitudin ac orci. At quis risus sed vulputate odio ut
          enim blandit volutpat. nenatis lectus magna fringilla urna. Maecenas
          volutpat blandit aliquam etiam. Sed id semper risus in hendrerit
          gravida rutrum quisque. Augue eget arcu dictum varius. Hendrerit
          gravida rutrum quisque non tellus orci ac auctor. Nam libero justo
          laoreet sit amet. Id interdum velit laoreet id donec ultrices. Sodales
          neque sodales ut etiam sit amet nisl purus in. Cras pulvinar mattis
          nunc sed blandit libero volutpat sed. Pretium fusce id velit ut tortor
          pretium viverra suspendisse potenti. Quam vulputate dignissim
          suspendisse in. Justo donec enim diam vulputate ut pharetra.
        </p>
      </Box>
      <Footer />
    </>
  );
};

export default EDP;

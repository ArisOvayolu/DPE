import React from "react";
import Grid from "@mui/material/Grid";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import FormLabel from "@mui/material/FormLabel";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";

const Game = (props) => {
  const { data, scoreSetter } = props;
  const [value, setValue] = React.useState("");
  const [error, setError] = React.useState(false);
  const [helperText, setHelperText] = React.useState("Choose wisely");
  const handleRadioChange = (event) => {
    setValue(event.target.value);
    setHelperText(" ");
    setError(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (value === data.correctOption) {
      setError(false);
      scoreSetter(1);
    } else if (value !== data.correctOption) {
      setHelperText("Sorry, wrong answer!");
      setError(true);
    } else {
      setHelperText("Please select an option.");
      setError(true);
    }
  };

  return (
    <Grid spacing={2} container sx={{padding:'30px', margin:'20px'}}>
      <Grid xs={12} item sx={{ justifyContent: "center", display: "flex" }}>
        <img
          src={data.img}
          alt="img1"
          style={{
            padding: "10px",
            maxHeight: "125%",
            maxWidth: "125%",
            justifySelf: "center",
          }}
        />
      </Grid>
      <Grid xs={12} item sx={{ justifyContent: "center", display: "flex" }}>
        <Paper elevation={3} >
          <form onSubmit={handleSubmit}>
            <FormControl sx={{ m: 3 }} error={error} variant="standard">
              <FormLabel id="demo-error-radios">Dark Patterns Quiz!</FormLabel>
              <RadioGroup
                aria-labelledby="demo-error-radios"
                name="quiz"
                value={value}
                onChange={handleRadioChange}
              >
                <FormControlLabel
                  value="1"
                  control={<Radio />}
                  label={`${data.option1}`}
                />
                <FormControlLabel
                  value="2"
                  control={<Radio />}
                  label={`${data.option2}`}
                />
                <FormControlLabel
                  value="3"
                  control={<Radio />}
                  label={`${data.option3}`}
                />
              </RadioGroup>
              <FormHelperText>{helperText}</FormHelperText>
              <Button sx={{ mt: 1, mr: 1 }} type="submit" variant="outlined">
                Check Answer
              </Button>
            </FormControl>
          </form>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Game;

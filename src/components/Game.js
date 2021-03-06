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
import { Box } from "@mui/system";
import { Divider } from "@mui/material";


const Game = (props) => {
  const { data, scoreSetter } = props;
  const [value, setValue] = React.useState("");
  const [error, setError] = React.useState(false);
  const [helperText, setHelperText] = React.useState("Choose wisely!");
  const handleRadioChange = (event) => {
    setValue(event.target.value);
    setHelperText(" ");
    setError(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (value === data.correctOption) {
      setHelperText("Choose wisely!")
      setError(false);
      scoreSetter(1);
      setValue('');
    } else if (value !== data.correctOption) {
      setHelperText("Sorry, wrong answer!");
      setError(true);
      setValue('');
    } else {
      setHelperText("Please select an option.");
      setError(true);
      setValue('');
    }
  };
  

  return (
    <Box 
    display='flex'
    justifyContent='center'
    alignItems='center'
    >
      <Paper elevation={1} sx={{borderRadius:'50px', padding:'30px', minHeight:"450px", minWidth:"700px", backgroundColor: "#EBF2F2"}}>
        <Grid spacing={1} container display='flex' justifyContent='center' alignItems='center'>
          <Grid xs={9} item >
            <img
              src={data.img}
              alt="img1"
              style={{
                padding: "10px",
                maxHeight: "100%",
                maxWidth: "100%",
                justifySelf: "center",
              }}
            />
          </Grid>
          <Grid xs={3} item   sx={{ justifyContent:'space-around',display: "flex"}} >
            <Paper elevation={3} sx={{borderRadius:'10px'}} >
              <form onSubmit={handleSubmit}>
                <FormControl sx={{ m: 3, borderRadius:'40px' }} error={error} variant="standard">
                  <FormLabel sx={{mb:"10px"}} id="demo-error-radios">Pick the correct Dark Pattern!</FormLabel>
                  <RadioGroup
                    aria-labelledby="demo-error-radios"
                    name="quiz"
                    value={value}
                    onChange={handleRadioChange}
                  >
                    <FormControlLabel
                      value="1"
                      control={<Radio />}
                      sx = {{mb:"10px"}}
                      label={`${data.option1}`}
                    />
                    <Divider />
                    <FormControlLabel
                      value="2"
                      control={<Radio />}
                      sx = {{mb:"10px"}}
                      label={`${data.option2}`}
                    />
                    <Divider />
                    <FormControlLabel
                      value="3"
                      control={<Radio />}
                      sx = {{mb:"10px"}}
                      label={`${data.option3}`}
                    />
                  </RadioGroup>
                  <FormHelperText>{helperText}</FormHelperText>
                  <Button sx={{ mt: 1, mr: 1 }} type="submit" variant="contained">
                    Check Answer
                  </Button>
                </FormControl>
              </form>
            </Paper>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default Game;

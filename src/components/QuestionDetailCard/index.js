import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import FormLabel from "@mui/material/FormLabel";
import Button from "@mui/material/Button";
import { Avatar, Card, CardContent, Typography } from "@mui/material";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import { useDispatch } from "react-redux";
import { saveQuestionAnswer } from "../../features/questions";
export default function QuestionDetailCard(props) {
  const dispatch = useDispatch();
  const answered = props.questionData.Answered;
  console.log(answered);
  const [value, setValue] = React.useState("");
  const [error, setError] = React.useState(false);
  const [helperText, setHelperText] = React.useState("Select an answare");

  const handleRadioChange = (event) => {
    setValue(event.target.value);
    setHelperText(" ");
    setError(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (value !== undefined) {
      //setHelperText("You got it!");
      const formattedData = {
        authedUser: props.questionData.loggedUserData.id,
        qid: props.questionData.id,
        answer: value,
      };
      console.log(formattedData);
      setError(false);
      dispatch(saveQuestionAnswer(formattedData));
    } else {
      setHelperText("Please select an option.");
      setError(true);
    }
  };

  return (
    <Card
      sx={{
        width: { xs: "100%", sm: "100%", md: "90%", lg: "80%", xl: "60%" },
      }}
    >
      <CardContent
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar
          sx={{
            width: "70px",
            height: "70px",
            backgroundColor: "secondary.main",
          }}
          src={props.questionData.userData.avatarURL}
        ></Avatar>
        {answered ? (
          <div>ciao</div>
        ) : (
          <>
            <Typography variant="h3" component="div" color="textSecondary">
              Would you rather...
            </Typography>
            <form onSubmit={handleSubmit}>
              <FormControl
                sx={{ m: 3 }}
                component="fieldset"
                error={error}
                variant="standard"
              >
                <RadioGroup
                  aria-label="quiz"
                  name="quiz"
                  value={value}
                  onChange={handleRadioChange}
                >
                  <FormControlLabel
                    value="optionOne"
                    control={<Radio />}
                    label={
                      <Typography
                        variant="h6"
                        component="div"
                        color="textSecondary"
                      >
                        {props.questionData.optionOne.text}
                      </Typography>
                    }
                  />
                  <Typography
                    variant="h5"
                    component="div"
                    color="textSecondary"
                  >
                    OR..
                  </Typography>
                  <FormControlLabel
                    value="optionTwo"
                    control={<Radio />}
                    label={
                      <Typography
                        variant="h6"
                        component="div"
                        color="textSecondary"
                      >
                        {props.questionData.optionTwo.text}
                      </Typography>
                    }
                  />
                </RadioGroup>
                <FormHelperText error="true">{helperText}</FormHelperText>
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  fullWidth
                >
                  Submit
                </Button>
              </FormControl>
            </form>
          </>
        )}
      </CardContent>
    </Card>
  );
}

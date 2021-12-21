import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  FormControl,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import React from "react";
import logo from "../../images/1_ISGtKTBwJem2C7tPfKL4-A.jpg";
import { useDispatch } from "react-redux";
import { login } from "../../features/loggedUser";

export default function SignIn() {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const signInFunction = () => {
    alert("Sign In action!");
    dispatch(
      login({
        id: "tylermcginnis",
        name: "Tyler McGinnis",
        avatarURL:
          "https://gravatar.com/avatar/a2c75f9d12766c7a78fa176343db9b6a?s=400&d=retro&r=x",
        answers: {
          vthrdm985a262al8qx3do: "optionOne",
          xj352vofupe1dqz9emx13r: "optionTwo",
        },
        questions: ["loxhs1bqm25b708cmbf3g", "vthrdm985a262al8qx3do"],
      })
    );
  };
  const dispatch = useDispatch();

  const getUsersForLogin = (data) => {
    return (
      <FormControl fullWidth>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          onChange={handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    );
  };

  return (
    <Box
      sx={{
        height: "100%",
        width: "100%",
      }}
    >
      <Box
        sx={{
          backgroundColor: "red",
          position: "absolute",
          top: "50%",
          left: "50%",
          marginRight: "-50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia component="img" alt="logo" height="140" image={logo} />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              textAlign="center"
              color="primary.main"
            >
              Would you rather?
            </Typography>
            <Box sx={{ minWidth: 120 }}>{getUsersForLogin()}</Box>
          </CardContent>
          <CardActions
            sx={{
              justifyContent: "center",
            }}
          >
            <Button size="small" onClick={signInFunction}>
              Sign In
            </Button>
          </CardActions>
        </Card>
      </Box>
    </Box>
  );
}

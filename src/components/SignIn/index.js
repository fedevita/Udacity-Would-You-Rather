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

export default function SignIn() {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const signInFunction = () => {
    alert("Sign In action!");
  };

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
          <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image={logo}
          />
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

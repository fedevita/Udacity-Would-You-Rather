import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import immagine from "./1_ISGtKTBwJem2C7tPfKL4-A.jpg";
import {
  CardActionArea,
  CardActions,
  FormControl,
  Grid,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";

function SignInCard() {
  const [Users, setUsers] = React.useState("");

  const handleChange = (event) => {
    setUsers(event.target.value);
  };
  return (
    <Card sx={{ width: "100%", height: "100%" }}>
      <CardActionArea
        sx={{
          height: "80%",
          bgcolor: "common.white",
          color: "grey.600",
        }}
      >
        <CardMedia
          component="img"
          height="75%"
          image={immagine}
          alt="green iguana"
        />
        <CardContent sx={{ height: "25%" }}>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            justifyContent="center"
          >
            Would you rather?
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{ height: "20%", bgcolor: "blue" }}>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
  );
}

export default function SignIn() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        bgcolor: "common.white",
        color: "primary.contrastText",
        height: "100vh",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          bgcolor: "blue",
          color: "primary.contrastText",
          height: "50vh",
          width: "75vh",
          margin: "auto",
        }}
      >
        <SignInCard />
      </Box>
    </Box>
  );
}

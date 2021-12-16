import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import immagine from "./1_ISGtKTBwJem2C7tPfKL4-A.jpg";
import { FormControl, Grid, MenuItem, Select } from "@mui/material";
import { Box } from "@mui/system";

function SignInCard() {
  const [Users, setUsers] = React.useState("");

  const handleChange = (event) => {
    setUsers(event.target.value);
  };
  return (
    <Card>
      <CardMedia
        component="img"
        height="300"
        image={immagine}
        alt="background Sign In"
      />
      <CardContent
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Grid container justifyContent="center" rowSpacing={3}>
          <Grid key="1" item>
            <Box sx={{ width: 400 }}>
              <FormControl fullWidth>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={Users}
                  onChange={handleChange}
                >
                  <MenuItem value={10}>UTENTE AAA</MenuItem>
                  <MenuItem value={20}>UTENTE BBB</MenuItem>
                  <MenuItem value={30}>UTENTE CCC</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Grid>
          <Grid key="2" item>
            <Button size="medium" variant="contained">
              Sign In
            </Button>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default function SignIn() {
  return (
    <Box
      sx={{
        width: 500,
        height: 450,
      }}
    >
      <SignInCard />
    </Box>
  );
}

import { Box } from "@mui/material";
import React from "react";

export default function SignIn() {
  return (
    <Box
      sx={{
        height: "100%",
        width: "100%",
      }}
    >
      <Box
        sx={{
          height: {
            xs: "100%", // theme.breakpoints.up('xs')
            sm: "30vh", // theme.breakpoints.up('sm')
            md: "30vh", // theme.breakpoints.up('md')
            lg: "30vh", // theme.breakpoints.up('lg')
            xl: "30vh", // theme.breakpoints.up('xl')
          },
          width: {
            xs: "100%", // theme.breakpoints.up('xs')
            sm: "30vh", // theme.breakpoints.up('sm')
            md: "30vh", // theme.breakpoints.up('md')
            lg: "30vh", // theme.breakpoints.up('lg')
            xl: "30vh", // theme.breakpoints.up('xl')
          },
          backgroundColor: "red",
          position: "absolute",
          top: "50%",
          left: "50%",
          marginRight: "-50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        sign In
      </Box>
    </Box>
  );
}

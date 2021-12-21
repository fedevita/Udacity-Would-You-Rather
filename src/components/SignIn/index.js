import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CircularProgress,
  FormControl,
  MenuItem,
  Select,
  Snackbar,
  Typography,
} from "@mui/material";
import React from "react";
import logo from "../../images/1_ISGtKTBwJem2C7tPfKL4-A.jpg";
import { useDispatch } from "react-redux";
import { login } from "../../features/loggedUser";
import { useSelector } from "react-redux";
import MuiAlert from "@mui/material/Alert";
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function SignIn() {
  const [currentUser, setCurrentUser] = React.useState("");
  const [openSnack, setOpenSnack] = React.useState(false);
  const dispatch = useDispatch();
  const handleCloseSnack = (event, reason) => {
    if (reason === "clickaway") {
      setOpenSnack(false);
    }

    setOpenSnack(false);
  };
  const handleChange = (event) => {
    setCurrentUser(event.target.value);
  };

  const signInFunction = () => {
    const data = users.filter((user) => user.id === currentUser)[0];
    if (data === undefined) {
      setOpenSnack(true);
    } else {
      dispatch(login(data));
    }
  };

  const users = useSelector((state) => state.users.value);
  const status = useSelector((state) => state.users.status);
  const getUsersForLogin = (data) => {
    return (
      <FormControl fullWidth>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={currentUser}
          onChange={handleChange}
        >
          {users.map((user) => (
            <MenuItem key={user.id} value={user.id}>
              {user.name}
            </MenuItem>
          ))}
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
            {status !== "success" && (
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <CircularProgress />
              </Box>
            )}

            {status === "success" && (
              <Box sx={{ minWidth: 120 }}>{getUsersForLogin()}</Box>
            )}
          </CardContent>
          <CardActions
            sx={{
              justifyContent: "center",
            }}
          >
            {status === "success" && (
              <Button size="small" onClick={signInFunction}>
                Sign In
              </Button>
            )}
          </CardActions>
        </Card>
      </Box>
      <Snackbar
        open={openSnack}
        autoHideDuration={6000}
        onClose={handleCloseSnack}
      >
        <Alert
          onClose={handleCloseSnack}
          severity="error"
          sx={{ width: "100%" }}
        >
          Select at least one user, please.
        </Alert>
      </Snackbar>
    </Box>
  );
}

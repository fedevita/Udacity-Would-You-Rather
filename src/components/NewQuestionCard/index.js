import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Avatar, TextField } from "@mui/material";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import { useDispatch, useSelector } from "react-redux";
import { saveQuestions } from "../../features/questions";

export default function NewQuestionCard() {
  const dispatch = useDispatch();
  const loggedUser = useSelector((state) => state.loggedUser.value);
  const validationSchema = Yup.object().shape({
    OptionOne: Yup.string().required("Option One is required"),
    OptionTwo: Yup.string().required("Option Two is required"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });
  const onSubmit = (data) => {
    const formattedData = {
      optionOneText: data.OptionOne,
      optionTwoText: data.OptionTwo,
      author: loggedUser.id,
    };
    dispatch(saveQuestions(formattedData));
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
        >
          <AddCircleIcon />
        </Avatar>
        <Typography variant="h3" component="div" color="textSecondary">
          Create New Question
        </Typography>
        <TextField
          required
          id="OptionOne"
          name="OptionOne"
          label="Option One"
          fullWidth
          margin="dense"
          {...register("OptionOne")}
          error={errors.OptionOne ? true : false}
        />
        <Typography variant="inherit" color="error.main">
          {errors.OptionOne?.message}
        </Typography>
        <Typography variant="h5" component="div" color="textSecondary">
          OR
        </Typography>
        <TextField
          required
          id="OptionTwo"
          name="OptionTwo"
          label="Option Two"
          fullWidth
          margin="dense"
          {...register("OptionTwo")}
          error={errors.OptionTwo ? true : false}
        />
        <Typography variant="inherit" color="error.main">
          {errors.OptionTwo?.message}
        </Typography>
      </CardContent>
      <CardActions
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmit(onSubmit)}
        >
          Submit
        </Button>
      </CardActions>
    </Card>
  );
}

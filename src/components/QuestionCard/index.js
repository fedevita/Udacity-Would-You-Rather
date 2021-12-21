import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import { Button } from "@mui/material";

export default function QuestionCard(props) {
  const data = props.questionData;
  return (
    <Card
      sx={{
        width: {
          xs: "100%",
          sm: "100%",
          md: "40%",
          lg: "40%",
          xl: "40%",
        },
      }}
    >
      <CardHeader
        avatar={
          <Avatar
            sx={{ bgcolor: red[500], width: 56, height: 56 }}
            aria-label="recipe"
          >
            R
          </Avatar>
        }
        title={
          <Typography variant="h5" color="text.secondary">
            {data.author} asks:
          </Typography>
        }
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          ...{data.optionOne.text}...
        </Typography>
      </CardContent>
      <CardActions>
        <Button fullWidth variant="contained">
          View Poll
        </Button>
      </CardActions>
    </Card>
  );
}

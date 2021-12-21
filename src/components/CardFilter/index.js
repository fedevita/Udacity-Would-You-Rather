import * as React from "react";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";

export default function CardFilter(props) {
  return (
    <FormControl component="fieldset" variant="standard">
      <FormGroup sx={{ display: "flex", flexDirection: "row" }}>
        <FormControlLabel
          control={
            <Switch
              checked={props.state.Answered}
              onChange={props.handleAnswered}
              name="Answered"
            />
          }
          label="Answered"
        />
        <FormControlLabel
          control={
            <Switch
              checked={props.state.UnAnswered}
              onChange={props.handleUnAnswered}
              name="UnAnswered"
            />
          }
          label="Unanswered"
        />
      </FormGroup>
    </FormControl>
  );
}

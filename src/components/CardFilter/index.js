import * as React from "react";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";

export default function CardFilter() {
  const [state, setState] = React.useState({
    Answered: true,
    UnAnswered: true,
    All: true,
  });

  const handleAnswered = (event) => {
    setState({
      Answered: event.target.checked,
      UnAnswered: !event.target.checked,
      All: false,
    });
  };
  const handleUnAnswered = (event) => {
    setState({
      Answered: !event.target.checked,
      UnAnswered: event.target.checked,
      All: false,
    });
  };
  const handleAll = (event) => {
    setState({
      Answered: event.target.checked,
      UnAnswered: event.target.checked,
      All: event.target.checked,
    });
  };

  return (
    <FormControl component="fieldset" variant="standard">
      <FormGroup sx={{ display: "flex", flexDirection: "row" }}>
        <FormControlLabel
          control={
            <Switch
              checked={state.Answered}
              onChange={handleAnswered}
              name="Answered"
            />
          }
          label="Answered"
        />
        <FormControlLabel
          control={
            <Switch
              checked={state.UnAnswered}
              onChange={handleUnAnswered}
              name="UnAnswered"
            />
          }
          label="Unanswered"
        />
        <FormControlLabel
          control={
            <Switch checked={state.All} onChange={handleAll} name="all" />
          }
          label="All"
        />
      </FormGroup>
    </FormControl>
  );
}

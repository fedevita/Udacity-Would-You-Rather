import { TextField } from "@mui/material";
import React from "react";

export default function CustomInput(props) {
  const { name, label, value, onChange } = props;
  return (
    <TextField
      label={label}
      name={name}
      value={value}
      onChange={onChange}
      error
      helperText="Some Validation Error"
      variant="filled"
    />
  );
}

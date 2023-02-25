import {
  FormControl,
  FormHelperText,
  InputAdornment,
  OutlinedInput,
} from "@mui/material";
import React, { memo } from "react";

type props = {
  length: Number;
  desc: String;
  unit: String;
};

export const OutputForm: React.VFC<props> = memo(({ length, desc, unit }) => {
  return (
    <FormControl sx={{ m: 1, width: "30ch" }} variant="outlined">
      <OutlinedInput
        id="outlined-adornment-weight"
        endAdornment={<InputAdornment position="end">{unit}</InputAdornment>}
        aria-describedby="outlined-weight-helper-text"
        inputProps={{
          "aria-label": "weight",
          style: { textAlign: "right", fontSize: 20 },
        }}
        value={length}
      />
      <FormHelperText id="outlined-weight-helper-text">{desc}</FormHelperText>
    </FormControl>
  );
});

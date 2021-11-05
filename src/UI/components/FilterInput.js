import * as React from "react";
import FormControl, { useFormControl } from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import Box from "@mui/material/Box";
import FormHelperText from "@mui/material/FormHelperText";

function MyFormHelperText({ filterBy }) {
  const { focused } = useFormControl() || {};

  const helperText = React.useMemo(() => {
    return `Filter by ${filterBy}`;
  }, [focused]);

  return <FormHelperText>{helperText}</FormHelperText>;
}
export const FilterInput = ({ name, onChange }) => {
  return (
    <Box component="form" noValidate autoComplete="off">
      <FormControl sx={{ width: "22ch", mr: 2, ml: 2 }}>
        <OutlinedInput
          name={name}
          onChange={onChange}
          placeholder={`Please enter ${name}`}
        />
        <MyFormHelperText filterBy={name} />
      </FormControl>
    </Box>
  );
};

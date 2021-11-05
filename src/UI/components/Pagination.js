import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";
import Box from "@mui/material/Box";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      marginTop: theme.spacing(2),
    },
  },
}));

export const PaginationList = ({ currentPage, countPages, handleChange }) => {
  const classes = useStyles();
  console.log(currentPage);
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <div className={classes.root}>
        <Pagination
          count={countPages}
          size="large"
          page={currentPage}
          onChange={handleChange}
          name="page"
          id="name"
        />
      </div>
    </Box>
  );
};

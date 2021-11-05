import * as React from "react";
import { useHistory } from "react-router-dom";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import {
  CHARACTERS_ROUTE,
  EPISODES_ROUTE,
  LOCATION_ROUTE,
  MY_FAVORITE_LIST_ROUTE,
} from "../../utils/consts";

export const NavBar = () => {
  const [value, setValue] = React.useState(0);
  const history = useHistory();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
      <Tabs value={value} onChange={handleChange} centered>
        <Tab
          onClick={() => history.push(CHARACTERS_ROUTE)}
          label="Characters"
        />
        <Tab onClick={() => history.push(EPISODES_ROUTE)} label="Episodes" />
        <Tab onClick={() => history.push(LOCATION_ROUTE)} label="Location" />
        <Tab
          onClick={() => history.push(MY_FAVORITE_LIST_ROUTE)}
          label="My favorite list"
        />
      </Tabs>
    </Box>
  );
};

import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import {
  EPISODES_ROUTE,
  CHARACTERS_ROUTE,
  MY_FAVORITE_LIST_ROUTE,
  LOCATION_ROUTE,
} from "../utils/consts";
import { Episode } from "../pages/Episode";
import { Location } from "../pages/Location";
import { MyFavoriteList } from "../pages/MyFavoriteList";
import { Characters } from "../pages/Characters";

const AppRouter = () => {
  return (
    <Switch>
      <Route path={EPISODES_ROUTE} component={Episode} exact />
      <Route path={LOCATION_ROUTE} component={Location} exact />
      <Route path={CHARACTERS_ROUTE} component={Characters} exact />
      <Route path={MY_FAVORITE_LIST_ROUTE} component={MyFavoriteList} exact />
      <Redirect to={CHARACTERS_ROUTE} />
    </Switch>
  );
};

export default AppRouter;

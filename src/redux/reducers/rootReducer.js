import { combineReducers } from "redux";

import { itemsReducer } from "./itemsReducer.js.js";

export const rootReducer = combineReducers({
  items: itemsReducer,
});

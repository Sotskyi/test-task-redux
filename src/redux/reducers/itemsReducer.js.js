import { ItemsActionTypes } from "../types";

const initialState = {
  data: [],
  // page: 1,
  error: null,
  // limit: 10,
  loading: false,
};

export const itemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ItemsActionTypes.FETCH_ITEMS:
      return { ...state, loading: true };
    case ItemsActionTypes.FETCH_ITEMS_SUCCESS:
      return { ...state, loading: false, data: action.payload };
    case ItemsActionTypes.FETCH_ITEMS_ERROR:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

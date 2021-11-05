import { ItemsActionTypes } from "../types";

export const fetchItems =
  (endpoint, options = null) =>
  async (dispatch) => {
    console.log(endpoint, options);
    try {
      const endpointUrl = options
        ? `https://rickandmortyapi.com/api/${endpoint}${options}`
        : `https://rickandmortyapi.com/api/${endpoint}`;

      dispatch({ type: ItemsActionTypes.FETCH_ITEMS });
      const response = await fetch(endpointUrl);
      const data = await response.json();
      dispatch({
        type: ItemsActionTypes.FETCH_ITEMS_SUCCESS,
        payload: data,
      });
    } catch (e) {
      dispatch({
        type: ItemsActionTypes.FETCH_ITEMS_ERROR,
        payload: "Error occurred during loading data",
      });
    }
  };

import { Map } from "immutable";

import { SET_FILTER, RESET_FILTERS } from "./constants";

const initialState = Map({});

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_FILTER:
      const { filter } = action.payload;
      return state.set(filter.key, filter.value);
    case RESET_FILTERS:
      return initialState;
    default:
      return state;
  }
};

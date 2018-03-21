import * as constants from "../constants";

export function setFilter(key, value) {
  return {
    type: constants.SET_FILTER,
    payload: {
      filter: {
        key,
        value
      }
    }
  };
}

export function resetFilters() {
  return {
    type: constants.RESET_FILTERS
  };
}

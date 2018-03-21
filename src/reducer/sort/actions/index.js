import * as constants from "../constants";

export const setSortProperty = property => {
  return {
    type: constants.SET_SORT_PROPERTY,
    payload: {
      property
    }
  };
};

export const resetSortProperty = () => {
  return {
    type: constants.RESET_SORT_PROPERTY
  };
};

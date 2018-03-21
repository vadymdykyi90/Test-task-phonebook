import * as constants from "../constants";

export const addRecord = record => {
  return {
    type: constants.ADD_RECORD,
    payload: {
      record
    }
  };
};

export const removeRecord = id => {
  return {
    type: constants.REMOVE_RECORD,
    payload: {
      id
    }
  };
};

export const editRecord = record => {
  return {
    type: constants.EDIT_RECORD,
    payload: {
      record
    }
  };
};

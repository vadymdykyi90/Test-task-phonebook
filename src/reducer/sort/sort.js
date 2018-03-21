import { SET_SORT_PROPERTY, RESET_SORT_PROPERTY } from "./constants";

const initialState = {
  property: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_SORT_PROPERTY:
      const { property } = action.payload;
      return Object.assign({}, state, {
        property
      });
    case RESET_SORT_PROPERTY:
      return Object.assign({}, state, {
        property: null
      });
    default:
      return state;
  }
};

import { combineReducers } from "redux";

import recordReducer from "./record";
import filterReducer from "./filter";
import sortReducer from "./sort";

export default combineReducers({
  recordReducer,
  filterReducer,
  sortReducer
});

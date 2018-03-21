import { Map, List } from "immutable";

import { ADD_RECORD, REMOVE_RECORD, EDIT_RECORD } from "./constants";

import { generateRecords } from "../../utils";

const records = generateRecords();
const initialState = Map({
  records: List(records)
});

export default (state = initialState, action) => {
  const records = state.get("records");

  switch (action.type) {
    case ADD_RECORD:
      const { record } = action.payload;
      return state.set("records", records.push(record));
    case REMOVE_RECORD:
      var { id } = action.payload;
      const indexToRemove = findRecord(records, id);
      return state.set("records", records.remove(indexToRemove));
    case EDIT_RECORD:
      const editedRecord = action.payload.record;
      const indexToEdit = findRecord(records, editedRecord.id);
      return state.set("records", records.mergeIn([indexToEdit], editedRecord));
    default:
      return state;
  }
};

function findRecord(records, id) {
  return records.findIndex(record => record.id === id);
}

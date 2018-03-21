import uuidv4 from "uuid/v4";
import moment from "moment";
import { random } from "lodash";

export const generateId = () => {
  return uuidv4();
};

export const getFormattedDate = date => {
  return moment(date).format("YYYY-MM-DD");
};

export const generateRecords = () => {
  return new Array(15).fill(undefined).map((_, i) => ({
    id: `${generateId()}-${i}`,
    data: {
      firstname: `Test-${i}`,
      lastname: `Lastname-${i}`,
      birthday: getFormattedDate(new Date()),
      number: generatePhoneNum()
    }
  }));
};

const generatePhoneNum = () => {
  return new Array(8)
    .fill(undefined)
    .map(() => random(0, 9))
    .join("");
};

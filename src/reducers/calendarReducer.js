import { CHANGE_DATE } from "../actions/types";

const initialCalendarState = {
  selectedDate: "20200129",
  dateOptions: [
    "20200129",
    "20200130",
    "20200131",
    "20200201",
    "20200202",
    "20200203",
    "20200204",
  ],
};

export default (state = initialCalendarState, { type, payload }) => {
  switch (type) {
    case CHANGE_DATE:
      return {
        ...state,
        selectedDate: payload,
      };
    default:
      return state;
  }
};

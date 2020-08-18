import { combineReducers } from "redux";
import servicesReducer from "./servicesReducer";
import scheduleReducer from "./scheduleReducer";
import calendarReducer from "./calendarReducer";

export default combineReducers({
  services: servicesReducer,
  schedule: scheduleReducer,
  calendar: calendarReducer,
});

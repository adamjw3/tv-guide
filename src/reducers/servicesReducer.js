import { FETCH_SERVICES, FETCH_SCHEDULE } from "../actions/types";

const initialState = {
  data: [],
};

export default (state = initialState, { type, sid, payload }) => {
  switch (type) {
    case FETCH_SERVICES:
      return {
        ...state,
        data: [...state.data, ...payload],
      };
    case FETCH_SCHEDULE:
      return {
        ...state,
        data: state.data.map((channel) => (channel.sid === sid ? { ...channel, schedule: type.payload } : channel)),
      };
    default:
      return state;
  }
};

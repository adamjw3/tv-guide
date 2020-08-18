import { FETCH_SCHEDULE } from "../actions/types";

const initialSCHEDULEState = {
  data: {},
};

export default (state = initialSCHEDULEState, { type, payload }) => {
  switch (type) {
    case FETCH_SCHEDULE:
      const { sid } = payload;
      return {
        ...state,
        data: { ...state.data, [sid]: payload },
      };
    default:
      return state;
  }
};

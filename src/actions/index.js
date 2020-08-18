import { FETCH_SERVICES, FETCH_SCHEDULE,CHANGE_DATE } from "./types";
import api from "../apis/index";

export const fetchSchedule = (sid, date) => async (dispatch) => {
  const response = await api.get(`/schedule/${date}/${sid}.json`);

  dispatch({
    type: FETCH_SCHEDULE,
    payload: response.data,
  });
};

export const fetchServices = () => async (dispatch) => {
  const response = await api.get("/services.json");
  const services = response.data;

  dispatch({
    type: FETCH_SERVICES,
    payload: services,
  });
};

export const changeDate = (newDate) => async (dispatch) => {

  dispatch({
    type: CHANGE_DATE,
    payload: newDate,
  });
};

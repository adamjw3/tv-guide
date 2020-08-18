import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchSchedule } from "../actions";

const Schedule = ({ sid,toggleModalOn }) => {
  const selectedDate = useSelector((state) => state.calendar.selectedDate);
  const schedule = useSelector((state) => state.schedule.data[sid]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSchedule(sid, selectedDate));
  }, [dispatch, sid, selectedDate]);

  if (!schedule) {
    return <p>Loading</p>;
  }

  const { events } = schedule;
  return (
    <div>
      {events.map((event) => (
        <p key={event.eid} onClick={() => {
          toggleModalOn(event)
        }}>{event.t}</p>
      ))}
    </div>
  );
};

export default Schedule;

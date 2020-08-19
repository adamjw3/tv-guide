import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchSchedule } from "../actions";
import styled from "styled-components";

const ScheduleContainerStyles = styled.div`
  display: flex;
  padding: 20px;
`;

const ScheduleItems = styled.div`
  font-size: 12px;
  cursor: pointer;
  flex: 0 0 200px;
`;

const Schedule = ({ sid, toggleModalOn }) => {
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
    <ScheduleContainerStyles>
      {events.map((event) => (
        <ScheduleItems
          key={event.eid}
          onClick={() => {
            toggleModalOn(event);
          }}
        >
          {event.t}
        </ScheduleItems>
      ))}
    </ScheduleContainerStyles>
  );
};

export default Schedule;

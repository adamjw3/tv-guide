import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeDate } from "../actions";

const DatePicker = () => {
  const { selectedDate, dateOptions } = useSelector((state) => state.calendar);
  const dispatch = useDispatch();

  const handleDateChange = (newDate) => {
    dispatch(changeDate(newDate));
  };

  return (
    <>
      <p>Select Date</p>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: 20,
        }}
      >
        {dateOptions.map((option) => (
          <button
            key={option}
            onClick={() => handleDateChange(option)}
            style={{
              color: option === selectedDate ? "red" : "black",
            }}
          >
            {option}
          </button>
        ))}
      </div>
    </>
  );
};

export default DatePicker;

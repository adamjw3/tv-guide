import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { changeDate } from "../actions";

const DateContainerStyles = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const DateButtonStyles = styled.button`
  background-color: ${(props) => (props.option === props.selectedDate ? props.theme.colors.black : "transparent")};
  border: 1px solid ${(props) => props.theme.colors.black};
  color: ${(props) => (props.option === props.selectedDate ? props.theme.colors.white : props.theme.colors.black)};
  cursor: pointer;
  position: relative;
  overflow: hidden;
  padding: 10px 20px;

  &::after {
    content: "";
    background-color: ${(props) => props.theme.colors.black};
    height: 100%;
    opacity: 0.3;
    top: 0;
    left: 0;
    position: absolute;
    pointer-events: none;
    width: 100%;
    transform: translateX(-100%);
    transition: transform 0.3s ease-in-out;
  }

  &:hover {
    &::after {
      transform: translateX(100%);
    }
  }
`;

const DatePicker = () => {
  const { selectedDate, dateOptions } = useSelector((state) => state.calendar);
  const dispatch = useDispatch();

  const handleDateChange = (newDate) => {
    dispatch(changeDate(newDate));
  };

  return (
    <DateContainerStyles
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: 20,
      }}
    >
      {dateOptions.map((option) => (
        <DateButtonStyles key={option} onClick={() => handleDateChange(option)} selectedDate={selectedDate} option={option}>
          {option}
        </DateButtonStyles>
      ))}
    </DateContainerStyles>
  );
};

export default DatePicker;

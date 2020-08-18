import React from "react";

const ModalBody = ({ event }) => {
  const { t, eg } = event;
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        margin: 40,
      }}
    >
      <h5>{t}</h5>
      <span>{eg}</span>
    </div>
  );
};

export default ModalBody;

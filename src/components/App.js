import React from "react";
import DatePicker from "./DatePicker";
import ServicesList from "../components/ServicesList";
import "./App.css";

const App = () => {
  return (
    <div>
      <DatePicker />
      <ServicesList />
    </div>
  );
};

export default App;

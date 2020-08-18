import React, { useEffect, useState } from "react";
import { fetchServices } from "../actions";
import { useDispatch, useSelector } from "react-redux";
import Modali, { useModali } from "modali";
import ReactPaginate from "react-paginate";

import ModalBody from "./ModalBody";
import Schedule from "./Schedule";

const ServicesList = () => {
  const perPage = 100;

  const [eventModal, toggleEventModal] = useModali();
  const [selectedEvent, setSelectedEvent] = useState(null);
  const services = useSelector((state) => state.services.data);
  const [paginationSlice, setPaginationSlice] = useState({
    start: 0,
    end: perPage,
  });
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchServices());
  }, [dispatch]);

  const toggleModalOn = (event) => {
    setSelectedEvent(event);
    toggleEventModal();
  };

  const hanglePagintionChange = (values) => {
    const { selected } = values;
    const start = selected * perPage;
    const end = start + perPage;
    setPaginationSlice({
      start,
      end,
    });
  };
  return (
    <div>
      <Modali.Modal {...eventModal}>
        <ModalBody event={selectedEvent} />
      </Modali.Modal>
      <ReactPaginate
        previousLabel={"previous"}
        nextLabel={"next"}
        breakLabel={"..."}
        breakClassName={"break-me"}
        pageCount={services.length / perPage}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={hanglePagintionChange}
        containerClassName={"pagination"}
        subContainerClassName={"pages pagination"}
        activeClassName={"active"}
      />
      {services.slice(paginationSlice.start, paginationSlice.end).map((service) => {
        const logoUrl = `https://cdn.skyq.sky.com/recruitment/tvguide/logos/${service.sid}/100x100.png`;

        return (
          <div key={service.sid}>
            <img src={logoUrl} alt={service.t} />
            <Schedule sid={service.sid} toggleModalOn={toggleModalOn}></Schedule>
          </div>
        );
      })}
    </div>
  );
};

export default ServicesList;

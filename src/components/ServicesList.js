import React, { useEffect, useState } from "react";
import { fetchServices } from "../actions";
import { useDispatch, useSelector } from "react-redux";
import Modali, { useModali } from "modali";
import ReactPaginate from "react-paginate";
import styled from "styled-components";

import ModalBody from "./ModalBody";
import Schedule from "./Schedule";

const PaginationContainerStyles = styled.div`
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme.colors.white};
  bottom: 0;
  padding: 20px;
  height: 50px;
  position: fixed;
  width: 100%;

  .pagination {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  li {
    border: 1px solid ${(props) => props.theme.colors.black};
    padding: 10px 20px;

    a {
      cursor: pointer;
    }
  }
`;

const ChannelWrapper = styled.div`
  width: 100%;
`;

const ChannelContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  padding: 20px;
`;

const ImageContainer = styled.div`
  background-color: ${(props) => props.theme.colors.white};
  flex: 0 0 100px;
`;

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

      <ChannelWrapper>
        {services.slice(paginationSlice.start, paginationSlice.end).map((service) => {
          const logoUrl = `https://cdn.skyq.sky.com/recruitment/tvguide/logos/${service.sid}/100x100.png`;

          return (
            <ChannelContainer key={service.sid}>
              <ImageContainer>
                <img src={logoUrl} alt={service.t} />
              </ImageContainer>
              <Schedule sid={service.sid} toggleModalOn={toggleModalOn}></Schedule>
            </ChannelContainer>
          );
        })}
      </ChannelWrapper>
      <PaginationContainerStyles>
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
      </PaginationContainerStyles>
    </div>
  );
};

export default ServicesList;

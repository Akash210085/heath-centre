import React, { useState } from "react";
import Data from "./Data";
import Form from "./Form";
function DashboardContainer() {
  const [appointment, SetAppointment] = useState({
    id: 0,
    appointmentType: "",
    category: "",
    doctorName: "",
    preferredSlot: "",
    reasonForAppointment: "",
    status: "Request Sent",
  });
  const [appointmentList, SetAppointmentList] = useState([]);
  function handleSubmit(event) {
    event.preventDefault();
    SetAppointmentList((preValue) => {
      return [...preValue, appointment];
    });

    SetAppointment((preValue) => {
      let { id } = preValue;
      return {
        ...preValue,
        id: id + 1,
      };
    });
  }
  return (
    <div>
      <Form
        appointment={appointment}
        SetAppointment={SetAppointment}
        handleSubmit={handleSubmit}
      />
      <Data appointmentList={appointmentList} />
    </div>
  );
}

export default DashboardContainer;

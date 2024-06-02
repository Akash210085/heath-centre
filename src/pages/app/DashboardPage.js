import React, { useState } from "react";
import Data from "../../components/Dashboard/Data";
import Form from "../../components/Dashboard/Form";
function DashboardPage() {
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
        id: id + 1,
        appointmentType: "",
        category: "",
        doctorName: "",
        preferredSlot: "",
        reasonForAppointment: "",
        status: "Request Sent",
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

export default DashboardPage;

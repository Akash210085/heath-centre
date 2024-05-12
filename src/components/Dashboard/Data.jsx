import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "appointmentType", headerName: "Appointment Type", width: 250 },
  { field: "category", headerName: "Category", width: 250 },
  {
    field: "doctorName",
    headerName: "Doctor Name",
    width: 250,
  },
  {
    field: "preferredSlot",
    headerName: "Preferred Slot",
    width: 250,
  },
  {
    field: "reasonForAppointment",
    headerName: "Reason For Appoinment",
    width: 250,
  },
  {
    field: "status",
    headerName: "Status",
    width: 250,
  },
];

// const rows = [
//   {
//     id: 1,
//     category: "OPD",
//     type: "general consultance",
//     doctorName: "Ashutosh Modi",
//     slot: "Wednesday 05:30 pm to 06",
//     status: "Request Sent",
//     reason: "Bimar hun",
//   },
//   {
//     id: 2,
//     appoinmentType: "specific health concern",
//     category: "Vaccination (Paeditritian",
//     doctorName: "Rohit Sahrtma",
//     preferredSlot: "Tuesday 11am",
//     status: "Request Sent",
//     reasonForAppoinment: "Bimar hun",
//   },
// ];

export default function Data(props) {
  return (
    <div className="data">
      <DataGrid
        rows={props.appointmentList}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        sx={{
          "&.MuiDataGrid-root": {},
        }}
        pageSizeOptions={[5, 10]}
      />
    </div>
  );
}

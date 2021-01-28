import React from "react";
import { DataGrid } from "@material-ui/data-grid";

function DataTable({ clients }) {
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "firstName", headerName: "First name", width: 130 },
    { field: "lastName", headerName: "Last name", width: 130 },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      width: 90,
    },
  ];

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={clients}
        columns={columns}
        pageSize={5}
        checkboxSelection
      />
    </div>
  );
}

export default DataTable;

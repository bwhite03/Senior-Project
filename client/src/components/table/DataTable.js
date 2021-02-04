import React from "react";
import axios from "axios";
import Button from "@material-ui/core/Button";
import { DataGrid } from "@material-ui/data-grid";

function DataTable({ clients, setClients }) {
  const [selectedRow, setSelectedRow] = React.useState();

  const handleRowSelection = (e) => {
    setSelectedRow(e.data);
  };

  const handleDelete = () => {
    axios
      .delete(`/deleteclient/${selectedRow.id}`, {})
      .then((res) => {
        setClients(clients.filter((row) => row.id !== selectedRow.id));
      })
      .catch(function (error) {
        console.log(error);
      });
  };

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
      <Button variant="outlined" color="primary" onClick={handleDelete}>
        Delete Selected
      </Button>
      <DataGrid
        rows={clients}
        columns={columns}
        pageSize={5}
        checkboxSelection
        onRowSelected={handleRowSelection}
      />
    </div>
  );
}

export default DataTable;

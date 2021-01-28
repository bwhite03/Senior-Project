import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import DataTable from "./components/table/DataTable";
import Container from "@material-ui/core/Container";
import ClientDialog from "./components/client-dialog/ClientDialog";

function App() {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    axios
      .get("/clients")
      .then((res) => {
        setClients(res.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <Container maxWidth="lg">
      <h1 style={{ textAlign: "center" }}>GT Care Client Database</h1>
      <ClientDialog />
      <DataTable clients={clients} />
    </Container>
  );
}

export default App;

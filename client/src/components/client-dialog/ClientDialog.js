import React from "react";
import axios from "axios";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { v4 as uuidv4 } from "uuid";

function ClientDialog({ setClients, clients }) {
  const [open, setOpen] = React.useState(false);
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [age, setAge] = React.useState();
  const id = uuidv4();

  const data = {
    firstName,
    lastName,
    age,
    id,
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const submitForm = () => {
    axios
      .post("/client", {
        firstName,
        lastName,
        age,
        id,
      })
      .then((res) => {
        setClients([...clients, data]);
      })
      .catch(function (error) {
        console.log(error);
      });

    setFirstName("");
    setLastName("");
    setAge("");
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Add Client
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Add Client</DialogTitle>
        <DialogContent>
          <DialogContentText>Add client to database.</DialogContentText>
          <TextField
            onChange={(e) => setFirstName(e.target.value)}
            autoFocus
            margin="dense"
            id="firstName"
            label="First Name"
            type="text"
            fullWidth
          />
          <TextField
            onChange={(e) => setLastName(e.target.value)}
            margin="dense"
            id="lastName"
            label="Last Name"
            type="text"
            fullWidth
          />
          <TextField
            onChange={(e) => setAge(e.target.value)}
            margin="dense"
            id="age"
            label="Age"
            type="number"
            min="1"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button variant="contained" onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={submitForm} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default ClientDialog;

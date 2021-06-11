import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

const TicketModal = (props) => {
  const [open, setOpen] = useState(props.open);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const getOpen = () => {
    console.log('get Open :>> ');
    return open;
  };

const getNumber = () =>{
  return props.number;
};

  return (
    <div>
      {/* <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Edit Ticket
      </Button> */}
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Edit Ticket</DialogTitle>
        <DialogContent>
          <DialogContentText>Edit ticket details</DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="number"
            label="Ticket number"
            type="text"
            defaultValue={props.number}
            //value={getNumber}
            fullWidth
          />{" "}
          <TextField
            autoFocus
            margin="dense"
            id="seller"
            label="Seller"
            type="text"
            value="{props.row.seller}"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="buyer"
            label="Buyer"
            type="text"
            value="{props.row.buyer}"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={props.onClick} color="primary">
            Cancel
          </Button>
          <Button onClick={props.onClick} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default TicketModal;

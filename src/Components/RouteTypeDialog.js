import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function RouteTypeDialog({open, setOpen}) {

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog disablePortal open={open} onClose={handleClose}>
        <DialogTitle>Pick a route type</DialogTitle>
        <DialogContent>
          <div style={{display: "flex", flexDirection: "column"}}>
            <div>
              <Button variant="contained" onClick={handleClose} style={{width: 175, margin: 5}}>Fastest</Button>
              <Button variant="contained" onClick={handleClose} style={{width: 175, margin: 5}}>Indoors / Dry</Button>
            </div>
            <div>
              <Button variant="contained" onClick={handleClose} style={{width: 175, margin: 5}}>Step-Free</Button>
              <Button variant="contained" onClick={handleClose} style={{width: 175, margin: 5}}>Cancel</Button>
            </div>
          </div>
          </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
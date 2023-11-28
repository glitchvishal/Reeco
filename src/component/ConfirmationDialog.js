// ConfirmationDialog.js
import React from "react";
import { useDispatch } from "react-redux";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
} from "@material-ui/core";
import { updateOrderStatusAction } from "../redux/actions";
const ConfirmationDialog = ({ open, onClose }) => {
  const dispatch = useDispatch();

  const handleYesClick = () => {
    // Dispatch an action to update the order status to "missing - urgently"
    console.log("Status: Missing - Urgently");
    dispatch(updateOrderStatusAction("missing - urgently"));

    // Close the dialog
    onClose();
  };

  const handleNoClick = () => {
    console.log("Status: Missing");
    // Dispatch an action to update the order status to "missing"
    dispatch(updateOrderStatusAction("missing"));
    // Close the dialog
    onClose();
  };
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>{"Missing product"}</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Is "Chicken Breast Fillets, Boneless...urgent?"
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleNoClick} color="primary">
          No
        </Button>
        <Button onClick={handleYesClick} color="primary" autoFocus>
          Yes
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmationDialog;

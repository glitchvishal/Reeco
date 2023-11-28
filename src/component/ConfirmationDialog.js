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
import { SET_DIALOG_OPEN, UPDATE_ORDER_STATUS } from "../redux/actions";
const ConfirmationDialog = ({ open, onClose }) => {
  const dispatch = useDispatch();

  const handleYesClick = () => {
    console.log("Status: Missing - Urgently");
    dispatch({
      type: UPDATE_ORDER_STATUS,
      payload: { text: "missing - urgent", id: 1 },
    });
    dispatch({ type: SET_DIALOG_OPEN, payload: true });

    onClose();
  };

  const handleNoClick = () => {
    console.log("Status: Missing");
    dispatch({
      type: UPDATE_ORDER_STATUS,
      payload: { text: "missing", id: 1 },
    });
    dispatch({ type: SET_DIALOG_OPEN, payload: true });
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

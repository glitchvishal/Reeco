import React, { useState } from "react";
import { TableRow, TableCell, Button } from "@material-ui/core";
import {
  Edit as EditIcon,
  Close as CloseIcon,
  Check as CheckIcon,
} from "@material-ui/icons";
import Chip from "@mui/material/Chip";
import { useDispatch, useSelector } from "react-redux";
import ConfirmationDialog from "./ConfirmationDialog";
import { SET_DIALOG_OPEN, UPDATE_ORDER_STATUS } from "../redux/actions";

const OrderItem = ({ item }) => {
  const dispatch = useDispatch();
  const { dialogOpen } = useSelector((state) => state);
  const handleOpenConfirmationDialog = () => {
    dispatch({ type: SET_DIALOG_OPEN, payload: true });
  };
  const handleApproveStatus = () => {
    // Dispatch an action to update the status to "approved"
    dispatch({
      type: UPDATE_ORDER_STATUS, // You should define this action type in your Redux actions
      payload: { text: "approved", id: 1 },
      // payload: { id: item.id, status: "approved" },
    });
  };
  const getChipColor = () => {
    switch (item.status) {
      case "Pending":
        return "blue";
      case "missing":
        return "orange";
      case "missing - urgent":
        return "red";
      case "approved":
        return "green";
      default:
        return "default"; // You can set a default color if needed
    }
  };
  const getIconColor = () => {
    if (item.status === "approved") {
      return "green";
    } else {
      // Handle other status conditions if needed
      return "default";
    }
  };
  const getIconColorMissing = () => {
    if (item.status === "missing") {
      return "orange";
    } else if (item.status === "missing - urgent") {
      return "red";
    } else if (item.status === "approved") {
      return "default";
    }
  };
  return (
    <>
      <ConfirmationDialog
        open={dialogOpen}
        onClose={() => dispatch({ type: SET_DIALOG_OPEN, payload: false })}
      />
      <TableRow>
        <TableCell>
          <img
            style={{ width: "50px", height: "50px" }}
            src={item.img}
            alt={item.productName}
          />
        </TableCell>
        <TableCell align="left">{item.productName}</TableCell>
        <TableCell align="center">{item.brand}</TableCell>
        <TableCell align="center">{item.price}</TableCell>
        <TableCell align="center">{item.quantity}</TableCell>
        <TableCell align="center">{item.total}</TableCell>
        <TableCell align="center">
          <Chip
            label={item.status}
            style={{
              color: "white",
              backgroundColor:
                getChipColor() === "default" ? "" : getChipColor(),
            }}
          />
        </TableCell>
        <TableCell>
          <Button startIcon={<EditIcon />}></Button>
          <Button
            onClick={handleOpenConfirmationDialog}
            startIcon={<CloseIcon style={{ color: getIconColorMissing() }} />}
          ></Button>
          <Button
            onClick={handleApproveStatus}
            startIcon={<CheckIcon style={{ color: getIconColor() }} />}
          ></Button>
        </TableCell>
      </TableRow>
    </>
  );
};

export default OrderItem;

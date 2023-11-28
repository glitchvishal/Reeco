import React, { useEffect } from "react";
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
  const handleOpenConfirmationDialog = (id) => {
    dispatch({ type: SET_DIALOG_OPEN, payload: { dialog: true, id: id } });
  };
  const handleApproveStatus = (id) => {
    dispatch({
      type: UPDATE_ORDER_STATUS, // You should define this action type in your Redux actions
      // payload: { text: "approved", item },
      payload: { id: id, text: "approved" },
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
  const getIconColor = (item) => {
    if (item.status === "approved") {
      return "green";
    } else {
      return "black";
    }
  };
  const getIconColorMissing = (item) => {
    if (item.status === "missing") {
      return "orange";
    } else if (item.status === "missing - urgent") {
      return "red";
    } else if (item.status === "approved") {
      return "black";
    }
  };
  useEffect(() => {}, [item]);
  return (
    <>
      <ConfirmationDialog
        open={dialogOpen}
        onClose={() =>
          dispatch({
            type: SET_DIALOG_OPEN,
            payload: { dialog: false, id: null },
          })
        }
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
              backgroundColor: getChipColor(item.status),
            }}
          />
        </TableCell>
        <TableCell>
          <Button startIcon={<EditIcon />}></Button>
          <Button
            onClick={() => handleOpenConfirmationDialog(item.id)}
            startIcon={
              <CloseIcon style={{ color: getIconColorMissing(item) }} />
            }
          ></Button>
          <Button
            onClick={() => handleApproveStatus(item.id)}
            startIcon={<CheckIcon style={{ color: getIconColor(item) }} />}
          ></Button>
        </TableCell>
      </TableRow>
    </>
  );
};

export default OrderItem;

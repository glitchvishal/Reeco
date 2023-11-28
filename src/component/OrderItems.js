import React from "react";
import { TableRow, TableCell, Button } from "@material-ui/core";
import {
  Edit as EditIcon,
  Close as CloseIcon,
  Check as CheckIcon,
} from "@material-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import ConfirmationDialog from "./ConfirmationDialog";
import { SET_DIALOG_OPEN } from "../redux/actions";

const OrderItem = ({ item }) => {
  const dispatch = useDispatch();
  const { dialogOpen } = useSelector((state) => state);
  const handleOpenConfirmationDialog = () => {
    dispatch({ type: SET_DIALOG_OPEN, payload: true });
  };
  return (
    <>
      <ConfirmationDialog
        open={dialogOpen}
        onClose={() => dispatch({ type: SET_DIALOG_OPEN, payload: false })}
      />
      <TableRow>
        <TableCell align="center">{item.productName}</TableCell>
        <TableCell align="center">{item.brand}</TableCell>
        <TableCell align="center">{item.price}</TableCell>
        <TableCell align="center">{item.quantity}</TableCell>
        <TableCell align="center">{item.total}</TableCell>
        <TableCell align="center">{item.status}</TableCell>
        <TableCell>
          <Button startIcon={<EditIcon />}></Button>
          <Button
            onClick={handleOpenConfirmationDialog}
            startIcon={<CloseIcon />}
          ></Button>
          <Button startIcon={<CheckIcon />}></Button>
        </TableCell>
      </TableRow>
    </>
  );
};

export default OrderItem;

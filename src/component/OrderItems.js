import React from "react";
import { TableRow, TableCell, Button } from "@material-ui/core";
import { Edit as EditIcon } from "@material-ui/icons";

const OrderItem = ({ item }) => {
  return (
    <TableRow>
      <TableCell>{item.productName}</TableCell>
      <TableCell>{item.brand}</TableCell>
      <TableCell>{item.price}</TableCell>
      <TableCell>{item.quantity}</TableCell>
      <TableCell>{item.total}</TableCell>
      <TableCell>
        <Button startIcon={<EditIcon />}>Edit</Button>
      </TableCell>
    </TableRow>
  );
};

export default OrderItem;
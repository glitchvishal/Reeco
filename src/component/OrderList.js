// OrderList.js
import React from "react";
import { useSelector } from "react-redux";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import OrderItem from "./OrderItems";

const OrderList = () => {
  const items = useSelector((state) => state.order.items);
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell align="left">Product name</TableCell>
            <TableCell align="center">Brand</TableCell>
            <TableCell align="center">Price</TableCell>
            <TableCell align="center">Quantity</TableCell>
            <TableCell align="center">Total</TableCell>
            <TableCell align="right"></TableCell>
            <TableCell align="left">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {items.map((item) => (
            <OrderItem key={item.id} item={item} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default OrderList;

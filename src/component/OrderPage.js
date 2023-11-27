// OrderPage.js
import React from "react";
import {
  Container,
  Button,
  Typography,
  Divider,
  styled,
  Paper,
  Box,
} from "@material-ui/core";
import Stack from "@mui/material/Stack";
import { useDispatch, useSelector } from "react-redux";
import OrderList from "./OrderList";
import Header from "./Header";
import ConfirmationDialog from "./ConfirmationDialog";
import { APPROVE_ORDER, SET_DIALOG_OPEN } from "../redux/actions";
import { Add as AddIcon } from "@material-ui/icons";

const OrderPage = () => {
  const dispatch = useDispatch();
  const { order, dialogOpen } = useSelector((state) => state);

  const handleApproveOrder = () => {
    dispatch({ type: APPROVE_ORDER });
  };

  const handleOpenConfirmationDialog = () => {
    dispatch({ type: SET_DIALOG_OPEN, payload: true });
  };

  const StyledPaper = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
    ...theme.typography.h2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  return (
    <Container>
      <Header />
      <ConfirmationDialog
        open={dialogOpen}
        onClose={() => dispatch({ type: SET_DIALOG_OPEN, payload: false })}
      />
      <Typography variant="h5">Order {order.id}</Typography>
      <Box sx={{ width: "100%" }}>
        <Stack
          direction="row"
          divider={<Divider orientation="vertical" flexItem />}
          spacing={2}
        >
          <StyledPaper>Supplier: {order.supplier}</StyledPaper>
          <StyledPaper>Shipping date: {order.shippingDate}</StyledPaper>
          <StyledPaper>Total: {order.total}</StyledPaper>
        </Stack>
      </Box>

      <Button
        variant="contained"
        color="primary"
        onClick={handleOpenConfirmationDialog}
      >
        <AddIcon /> Add item
      </Button>
      <OrderList />
      <Button variant="contained" color="primary" onClick={handleApproveOrder}>
        Approve Order
      </Button>
    </Container>
  );
};

export default OrderPage;

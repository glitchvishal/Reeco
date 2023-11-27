// OrderPage.js
import React from "react";
import {
  Container,
  Button,
  Typography,
  Divider,
  // styled,
  Paper,
  Box,
  TextField,
} from "@material-ui/core";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import { useDispatch, useSelector } from "react-redux";
import OrderList from "./OrderList";
import Header from "./Header";
import ConfirmationDialog from "./ConfirmationDialog";
import { APPROVE_ORDER, SET_DIALOG_OPEN } from "../redux/actions";
import { Add as AddIcon } from "@material-ui/icons";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import IcecreamIcon from "@mui/icons-material/Icecream";
import LunchDiningIcon from "@mui/icons-material/LunchDining";
// import TapasIcon from "@mui/icons-material/Tapas";
import LocalDiningIcon from "@mui/icons-material/LocalDining";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import CakeIcon from "@mui/icons-material/Cake";
import NightlifeIcon from "@mui/icons-material/Nightlife";

const OrderPage = () => {
  const dispatch = useDispatch();
  const { order, dialogOpen } = useSelector((state) => state);

  const handleApproveOrder = () => {
    dispatch({ type: APPROVE_ORDER });
  };

  const handleOpenConfirmationDialog = () => {
    dispatch({ type: SET_DIALOG_OPEN, payload: true });
  };
  const handleSearch = (searchTerm) => {
    // Implement your search logic here
    console.log("Searching for:", searchTerm);
  };

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body1,
    padding: theme.spacing(1),
    // textAlign: "center",
    width: "180px",
    color: "black",
  }));

  return (
    <Container>
      <Header />
      <ConfirmationDialog
        open={dialogOpen}
        onClose={() => dispatch({ type: SET_DIALOG_OPEN, payload: false })}
      />
      <Typography variant="h5">Order {order.id}</Typography>
      <Box style={{ width: "100%" }}>
        <Stack
          direction="row"
          divider={<Divider orientation="vertical" flexItem />}
          spacing={2}
        >
          <Item>
            <Typography variant="body1" color="gray">
              Supplier:
            </Typography>{" "}
            <Typography variant="h6">
              <b>{order.supplier}</b>
            </Typography>
          </Item>
          <Item>
            <Typography variant="body1" color="gray">
              Shipping date:{" "}
            </Typography>
            <Typography variant="h6">
              <b>{order.shippingDate}</b>
            </Typography>
          </Item>
          <Item>
            <Typography variant="body1" color="gray">
              Total:
            </Typography>
            <Typography variant="h6">
              <b>{order.total}</b>
            </Typography>
          </Item>
          <Item>
            <Typography variant="body1">Categories</Typography>
            <Typography
              variant="h5"
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: (theme) => theme.spacing(1),
              }}
            >
              <AcUnitIcon sx={{ padding: (theme) => theme.spacing(1) }} />
              <FastfoodIcon sx={{ padding: (theme) => theme.spacing(1) }} />
              <IcecreamIcon sx={{ padding: (theme) => theme.spacing(1) }} />
              <LunchDiningIcon sx={{ padding: (theme) => theme.spacing(1) }} />
              <LocalDiningIcon sx={{ padding: (theme) => theme.spacing(1) }} />
              <MenuBookIcon sx={{ padding: (theme) => theme.spacing(1) }} />
              <CakeIcon sx={{ padding: (theme) => theme.spacing(1) }} />
              <NightlifeIcon sx={{ padding: (theme) => theme.spacing(1) }} />
            </Typography>
          </Item>
          <Item>
            <Typography variant="body1" color="gray">
              Department
            </Typography>
            <Typography variant="h6">
              <b>300-444-678</b>
            </Typography>
          </Item>
          <Item>
            <Typography variant="body1" color="gray">
              Status
            </Typography>
            <Typography variant="h6">
              <b>Awaiting your approval</b>
            </Typography>
          </Item>
        </Stack>
      </Box>
      <Box
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "20px",
          marginTop: "20px",
          gap: "20px",
        }}
      >
        <TextField
          style={{ borderRadius: 20, width: "50%" }}
          label="Search"
          variant="outlined"
          onChange={(e) => handleSearch(e.target.value)}
        />

        <Button
          variant="contained"
          color="primary"
          onClick={handleOpenConfirmationDialog}
        >
          <AddIcon /> Add item
        </Button>
      </Box>

      <OrderList />
      <Button variant="contained" color="primary" onClick={handleApproveOrder}>
        Approve Order
      </Button>
    </Container>
  );
};

export default OrderPage;

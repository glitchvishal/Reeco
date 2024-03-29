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
// import { setOrderItemsAction } from "../redux/actions";
import OrderList from "./OrderList";
import Header from "./Header";
// import ConfirmationDialog from "./ConfirmationDialog";
import { APPROVE_ORDER } from "../redux/actions";
// import { Add as AddIcon } from "@material-ui/icons";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import IcecreamIcon from "@mui/icons-material/Icecream";
import LunchDiningIcon from "@mui/icons-material/LunchDining";
// import TapasIcon from "@mui/icons-material/Tapas";
import LocalDiningIcon from "@mui/icons-material/LocalDining";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import CakeIcon from "@mui/icons-material/Cake";
import NightlifeIcon from "@mui/icons-material/Nightlife";
import AddItemModal from "./AddItemModal";
const BreadcrumbsItem = styled(Typography)(({ theme }) => ({
  cursor: "pointer",
  "&:hover": {
    textDecoration: "underline",
  },
}));
const Breadcrumbs = ({ crumbs }) => {
  return (
    <Stack direction="row" spacing={1}>
      {crumbs.map((crumb, index) => (
        <React.Fragment key={index}>
          <BreadcrumbsItem>{crumb}</BreadcrumbsItem>
          {index < crumbs.length - 1 && <Typography>/</Typography>}
        </React.Fragment>
      ))}
    </Stack>
  );
};

const OrderPage = () => {
  const dispatch = useDispatch();
  const { order, dialogOpen } = useSelector((state) => state);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddItemClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  const handleApproveOrder = () => {
    console.log("Before dispatch:", order);
    dispatch({ type: APPROVE_ORDER });
    console.log("After dispatch:", order);
  };

  const handleSearch = (searchTerm) => {
    // Implement your search logic here
    console.log("Searching for:", searchTerm);
  };

  // Define addItemAction
  const addItemAction = (item) => {
    return { type: 'ADD_ITEM', payload: item };
  };

  // Define newItem (this is just a placeholder, replace it with your actual logic to create a new item)
  const newItem = {
    name: 'New Item',
    quantity: 1,
    // Add other properties as needed
  };

  const handleAddItem = () => {
    // Dispatch the addItemAction with the new item
    console.log("Adding item")
    dispatch(addItemAction(newItem));
  };

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body1,
    padding: theme.spacing(1),
    // textAlign: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    width: "180px",
    color: "black",
  }));

  return (
    <>
      <Header />
      <Box
        style={{
          marginBottom: "20px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          padding: "20px",
          borderRadius: "8px",
        }}
      >
        <Container>
          <Breadcrumbs crumbs={["Orders", `Order ${order.id}`]} />
          <Box
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: "20px",
            }}
          >
            <Typography variant="h5">
              <b>Order {order.id}</b>
            </Typography>
            <Stack spacing={2} direction="row">
              <Button variant="outlined" color="primary">
                Back
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={handleApproveOrder}
              >
                Approve Order
              </Button>
            </Stack>
          </Box>
        </Container>
      </Box>
      <Container>
        <Box style={{ width: "100%", marginTop: "30px", marginBottom: "30px" }}>
          <Stack
            direction="row"
            divider={<Divider orientation="vertical" flexItem />}
            spacing={2}
          >
            <Item>
              <Typography variant="body1">Supplier:</Typography>{" "}
              <Typography variant="h6">
                <b>{order.supplier}</b>
              </Typography>
            </Item>
            <Item>
              <Typography variant="body1">Shipping date: </Typography>
              <Typography variant="h6">
                <b>{order.shippingDate}</b>
              </Typography>
            </Item>
            <Item>
              <Typography variant="body1">Total:</Typography>
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
                <LunchDiningIcon
                  sx={{ padding: (theme) => theme.spacing(1) }}
                />
                <LocalDiningIcon
                  sx={{ padding: (theme) => theme.spacing(1) }}
                />
                <MenuBookIcon sx={{ padding: (theme) => theme.spacing(1) }} />
                <CakeIcon sx={{ padding: (theme) => theme.spacing(1) }} />
                <NightlifeIcon sx={{ padding: (theme) => theme.spacing(1) }} />
              </Typography>
            </Item>
            <Item>
              <Typography variant="body1">Department</Typography>
              <Typography variant="h6">
                <b>300-444-678</b>
              </Typography>
            </Item>
            <Item>
              <Typography variant="body1">Status</Typography>
              <Typography
                variant="h6"
                style={{
                  color: order.status === "Approved" ? "green" : "black",
                }}
              >
                <b>{order.status}</b>{" "}
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
            style={{ borderRadius: "50px", width: "50%" }}
            label="Search"
            variant="outlined"
            onChange={(e) => handleSearch(e.target.value)}
          />

          <Button variant="contained" color="primary" onClick={handleAddItem}>
            Add item
          </Button>
          <AddItemModal open={isModalOpen} handleClose={handleCloseModal} />
        </Box>

        <OrderList />
      </Container>
    </>
  );
};

export default OrderPage;

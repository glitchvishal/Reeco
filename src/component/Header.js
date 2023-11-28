// Header.js
import React from "react";
import {
  AppBar,
  Toolbar,
  // IconButton,
  Typography,
  // Button,
  Container,
} from "@material-ui/core";
import { Stack } from "@mui/material";
import { KeyboardArrowDown } from "@material-ui/icons";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";

const Header = () => {
  return (
    <AppBar position="static">
      <Container>
        <Toolbar>
          {/* <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton> */}
          <Stack direction="row" style={{ flexGrow: "1" }}>
            <Typography variant="h5" style={{ marginRight: "30px" }}>
              <b>RecoCo</b>
            </Typography>
            <Typography variant="h6" style={{ marginRight: "30px" }}>
              Store
            </Typography>
            <Typography variant="h6" style={{ marginRight: "30px" }}>
              Order
            </Typography>
            <Typography variant="h6" style={{ marginRight: "30px" }}>
              Analytics
            </Typography>
          </Stack>
          <LocalGroceryStoreIcon style={{ marginRight: "8px" }} />
          <Typography
            color="inherit"
            style={{ display: "flex", alignItems: "center" }}
          >
            Hello, James
            <KeyboardArrowDown style={{ marginLeft: "8px" }} />
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;

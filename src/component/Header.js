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
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    // border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));
const Header = () => {
  return (
    <AppBar position="static">
      <Container>
        <Toolbar>
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
            <Typography variant="h6" style={{}}>
              Analytics
            </Typography>
          </Stack>
          <IconButton aria-label="cart">
            <StyledBadge badgeContent={4} color="secondary">
              <LocalGroceryStoreIcon style={{ color: "white" }} />
            </StyledBadge>
          </IconButton>
          {/* <LocalGroceryStoreIcon style={{ marginRight: "30px" }} /> */}
          <Typography
            color="inherit"
            style={{
              display: "flex",
              alignItems: "center",
              marginLeft: "20px",
            }}
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

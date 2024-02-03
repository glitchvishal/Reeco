import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItemAction } from "../redux/actions";

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
} from "@material-ui/core";

const AddItemModal = ({ open, handleClose }) => {
  const dispatch = useDispatch();
  const [newItem, setNewItem] = useState({
    productName: "",
    description: "",
    price: "",
  });

  const handleChange = (field, value) => {
    setNewItem((prevItem) => ({
      ...prevItem,
      [field]: value,
    }));
  };

  const handleSaveClick = () => {
    dispatch(addItemAction(newItem));
    handleClose();
  };

  const handleCancelClick = () => {
    handleClose();
  };

  return (
    <Dialog open={open} onClose={handleCancelClick}>
      <DialogTitle>Add New Item</DialogTitle>
      <DialogContent>
        <TextField
          label="Product Name"
          fullWidth
          margin="normal"
          value={newItem.productName}
          onChange={(e) => handleChange("productName", e.target.value)}
        />
        <TextField
          label="Description"
          fullWidth
          margin="normal"
          value={newItem.description}
          onChange={(e) => handleChange("description", e.target.value)}
        />
        <TextField
          label="Price"
          fullWidth
          margin="normal"
          value={newItem.price}
          onChange={(e) => handleChange("price", e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCancelClick} color="primary">
          Cancel
        </Button>
        <Button onClick={handleSaveClick} color="primary">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddItemModal;

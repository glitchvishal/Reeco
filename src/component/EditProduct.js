// EditProduct.js
import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
} from "@material-ui/core";

const EditProduct = ({ open, handleClose, handleSave, product }) => {
  const [editedProduct, setEditedProduct] = useState(product);

  const handleChange = (field, value) => {
    setEditedProduct((prevProduct) => ({
      ...prevProduct,
      [field]: value,
    }));
  };

  const handleSaveClick = () => {
    handleSave(editedProduct);
    handleClose();
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Edit Product</DialogTitle>
      <DialogContent>
        {/* Editable fields */}
        <TextField
          label="Product Name"
          fullWidth
          margin="normal"
          value={editedProduct.productName}
          onChange={(e) => handleChange("productName", e.target.value)}
        />
        <TextField
          label="Description"
          fullWidth
          margin="normal"
          value={editedProduct.description}
          onChange={(e) => handleChange("description", e.target.value)}
        />
        <TextField
          label="Price"
          fullWidth
          margin="normal"
          value={editedProduct.price}
          onChange={(e) => handleChange("price", e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleSaveClick} color="primary">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditProduct;

// IssueDialog.js
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  RadioGroup,
  FormControlLabel,
  Radio,
  DialogActions,
} from "@material-ui/core";
import { setIssueDialogOpen } from "./actionCreators";

const IssueDialog = () => {
  const dispatch = useDispatch();
  const issueDialogOpen = useSelector((state) => state.issueDialogOpen);

  const handleClose = () => dispatch(setIssueDialogOpen(false));

  const handleSubmit = (event) => {
    event.preventDefault();
    // handle form submission
    handleClose();
  };

  return (
    <Dialog open={issueDialogOpen} onClose={handleClose}>
      <DialogTitle>
        Chicken Breast Fillets, Boneless Marinated 6 Ounce Raw, Invalid...
      </DialogTitle>
      <form onSubmit={handleSubmit}>
        <DialogContent>
          {/* Other dialog content such as the image and text fields */}
          <TextField
            label="Price $"
            type="number"
            fullWidth
            margin="normal"
            defaultValue="60.67"
          />
          <TextField
            label="Quantity"
            type="number"
            fullWidth
            margin="normal"
            defaultValue="998"
          />
          <TextField
            label="Total"
            fullWidth
            margin="normal"
            defaultValue="$9,000.02"
          />

          <RadioGroup name="issueReason" defaultValue="missingProduct">
            {["missingProduct", "quantityNotSame", "priceNotSame", "other"].map(
              (value) => (
                <FormControlLabel
                  key={value}
                  value={value}
                  control={<Radio />}
                  label={value === "missingProduct" ? "Missing product" : value}
                />
              )
            )}
          </RadioGroup>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit" color="primary">
            Send
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default IssueDialog;

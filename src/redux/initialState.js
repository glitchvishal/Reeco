import items from "../data/items.json";
export const initialIssueState = {
  issueDialogOpen: false,
};
export const initialOrderState = {
  order: {
    id: "32457ABC",
    supplier: "East coast fruits & vegetables",
    shippingDate: "Thu, Feb 10",
    total: "$15,028.3",
    items: items,
    status: "Awaiting your approval",
  },
  dialogOpen: false,
  currentItem: null,
};

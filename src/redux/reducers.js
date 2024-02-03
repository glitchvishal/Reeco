// reducers.js
import {
  SET_DIALOG_OPEN,
  APPROVE_ORDER,
  SET_ISSUE_DIALOG_OPEN,
  SET_ORDER_ITEMS,
  UPDATE_ORDER_STATUS,
  SET_EDIT_PRODUCT,
  UPDATE_PRODUCT,
  ADD_ITEM,
} from "./actions";
import { initialIssueState, initialOrderState } from "./initialState";

const issueReducer = (state = initialIssueState, action) => {
  switch (action.type) {
    case SET_ISSUE_DIALOG_OPEN:
      return { ...state, issueDialogOpen: action.payload };
    default:
      return state;
  }
};

const orderReducer = (state = initialOrderState, action) => {
  switch (action.type) {
    case SET_DIALOG_OPEN:
      console.log(action.payload);
      return {
        ...state,
        dialogOpen: action.payload.dialog,
        currentItem: action.payload.id,
      };
    case APPROVE_ORDER:
      return {
        ...state,
        order: {
          ...state.order,
          status: "Approved",
        },
      };
    case SET_ORDER_ITEMS:
      return {
        ...state,
        items: action.payload,
      };
    case UPDATE_ORDER_STATUS:
      console.log(action.payload);
      const newItems = state.order.items.map((item, index) => {
        let t = item;
        if (item.id === action.payload.id) {
          t.status = action.payload.text;
          return t;
        }
        return item;
      });
      return {
        ...state,
        order: {
          ...state.order,
          items: [...newItems],
        },
      };
    case SET_EDIT_PRODUCT:
      return {
        ...state,
        editProduct: action.payload,
      };
    case UPDATE_PRODUCT:
      // Assuming payload is the updated product
      return {
        ...state,
        // Update the products array or relevant part of the state
      };
      case ADD_ITEM: // Add the case for adding an item
      return {
        ...state,
        order: {
          ...state.order,
          items: [...state.order.items, action.payload], // Append the new item to the existing items array
        },
      };
    default:
      return state
  }
};

export default orderReducer;

// reducers.js
import {
  SET_DIALOG_OPEN,
  APPROVE_ORDER,
  SET_ISSUE_DIALOG_OPEN,
  SET_ORDER_ITEMS,
  UPDATE_ORDER_STATUS,
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
      return {
        ...state,
        dialogOpen: action.payload,
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
        if (index === action.payload.id) {
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
    default:
      return state;
  }
};

export default orderReducer;

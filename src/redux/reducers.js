// reducers.js
import {
  SET_DIALOG_OPEN,
  APPROVE_ORDER,
  SET_ISSUE_DIALOG_OPEN,
  SET_ORDER_ITEMS,
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
    default:
      return state;
  }
};

export default orderReducer;

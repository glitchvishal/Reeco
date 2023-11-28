// actionTypes.js
export const SET_DIALOG_OPEN = "ORDER_PAGE/SET_DIALOG_OPEN";
export const APPROVE_ORDER = "ORDER_PAGE/APPROVE_ORDER";
export const SET_ISSUE_DIALOG_OPEN = "SET_ISSUE_DIALOG_OPEN";
export const SET_ORDER_ITEMS = "SET_ORDER_ITEMS";
export const UPDATE_ORDER_STATUS = "UPDATE_ORDER_STATUS";

export const approveOrderAction = () => ({
  type: APPROVE_ORDER,
});
export const setOrderItemsAction = (items) => ({
  type: SET_ORDER_ITEMS,
  payload: items,
});
export const updateOrderStatusAction = (status) => ({
  type: UPDATE_ORDER_STATUS,
  payload: status,
});

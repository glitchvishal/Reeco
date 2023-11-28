// actionTypes.js
export const SET_DIALOG_OPEN = "ORDER_PAGE/SET_DIALOG_OPEN";
export const APPROVE_ORDER = "ORDER_PAGE/APPROVE_ORDER";
export const SET_ISSUE_DIALOG_OPEN = "SET_ISSUE_DIALOG_OPEN";
export const SET_ORDER_ITEMS = "SET_ORDER_ITEMS";
export const UPDATE_ORDER_STATUS = "UPDATE_ORDER_STATUS";
export const SET_EDIT_PRODUCT = "SET_EDIT_PRODUCT";
export const UPDATE_PRODUCT = "UPDATE_PRODUCT";

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
export const setEditProduct = (product) => ({
  type: SET_EDIT_PRODUCT,
  payload: product,
});

export const updateProduct = (updatedProduct) => ({
  type: UPDATE_PRODUCT,
  payload: updatedProduct,
});

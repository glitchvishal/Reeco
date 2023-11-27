import React from "react";
import { Provider } from "react-redux";
// import OrderPage from "./components/OrderPage.js";
import OrderPage from "./component/OrderPage";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./redux/reducers"; // Assuming you have a rootReducer file

const store = createStore(rootReducer, applyMiddleware(thunk));

const App = () => {
  return (
    <Provider store={store}>
      <OrderPage />
    </Provider>
  );
};

export default App;

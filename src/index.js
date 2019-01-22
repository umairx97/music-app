import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";

const App = () => {
  return <div>hello</div>;
};


const createStoreWithMiddleware = applyMiddleware()(createStore)

ReactDOM.render(
  <Provider store = {createStoreWithMiddleware()}>
    <App />
  </Provider>,
  document.getElementById("root")
);

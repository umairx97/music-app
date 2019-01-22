import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";
import { Provider } from "react-redux";

const App = () => {
  return <div>hello</div>;
};
ReactDOM.render(
  <Provider>
    <App />
  </Provider>,
  document.getElementById("root")
);

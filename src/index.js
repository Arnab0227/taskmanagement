import React from "react";
import { createRoot } from "react-dom/client";
import { store } from "./redux/store";
import App from "./App";
import "./index.css";
import { Provider } from "react-redux";

const el = document.getElementById("root");
const root = createRoot(el);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

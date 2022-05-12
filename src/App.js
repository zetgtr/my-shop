import React from "react";
import { Router } from "./Router";
import "./App.css";
import { store } from "./Store";
import { Provider } from "react-redux";

export const App = () => {
  return (
<Provider store={store}>
    <Router />
</Provider>
  )
};

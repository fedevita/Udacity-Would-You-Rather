import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import usersReducer from "./features/users";
import loggedUserReducer from "./features/loggedUser";
import questionsReducer from "./features/questions";
const store = configureStore({
  reducer: {
    users: usersReducer,
    loggedUser: loggedUserReducer,
    questions: questionsReducer,
  },
});
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

reportWebVitals();

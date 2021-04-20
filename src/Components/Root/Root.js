import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../redux/store";

import App from "../../App";

const Root = () => (
  <Provider store={store}>
    <Router basename="/">
      <Route component={App} />
    </Router>
  </Provider>
);

export default Root;

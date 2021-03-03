import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";

import App from "../../App";

const Root = () => (
  <Router basename="/">
    <Route component={App} />
  </Router>
);

export default Root;

import React from "react";
import ReactDOM from "react-dom";
import "./stylesheet/index.css";
import "./stylesheet/normalize.css";
import reportWebVitals from "./reportWebVitals";
import Root from "./Components/Root/Root";

ReactDOM.render(<Root />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

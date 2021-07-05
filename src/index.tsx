import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import "./index.css";
import App from "./App";
import Header from "./component/Header/index";
import Booking from "./component/book/Bookings";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={App} />   
        <Route path="/availabilities" component={App} exact />
        <Route path="/bookings" component={Booking} exact />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

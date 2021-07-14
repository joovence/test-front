import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import { Availabilities } from "pages/availabilities";
import { Bookings } from "pages/bookings";

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact>
      <Redirect to="/availabilities" />
    </Route>
    <Route path="/availabilities" component={Availabilities} />
    <Route path="/bookings" component={Bookings} />
  </Switch>
);

export default Routes;

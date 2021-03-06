import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import Ingoing from "./pages/Ingoing";
import Outgoing from "./pages/Outgoing";
import Ot from "./pages/Ot";
import ViewIngoing from "./pages/ViewIngoing";
import ViewOutgoing from "./pages/ViewOutgoing";
import ViewOt from "./pages/ViewOt";
import App from "./App";
import history from "./history";

export default class Routes extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/ingoing" component={Ingoing} />
          <Route path="/outgoing" component={Outgoing} />
          <Route path="/ot" component={Ot} />
          <Route path="/ingoingRec" component={ViewIngoing} />
          <Route path="/otRec" component={ViewOt} />
          <Route path="/outgoingRec" component={ViewOutgoing} />
        </Switch>
      </Router>
    );
  }
}

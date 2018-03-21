import React from "react";
import { Router, Route, Switch } from "react-router";
import createHistory from "history/createBrowserHistory";

import Root from "../containers/Root";
import AddRecord from "../pages/AddRecord";
import RecordList from "../pages/RecordList";

const history = createHistory();

const Routes = () => (
  <Router history={history}>
    <Root>
      <Switch>
        <Route exact path="/" component={RecordList} />
        <Route path="/add-record" component={AddRecord} />
      </Switch>
    </Root>
  </Router>
);

export default Routes;

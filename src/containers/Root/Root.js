import React from "react";
import { Grid } from "react-bootstrap";
import { Provider } from "react-redux";

import store from "../../store";

import Header from "../../components/Header";

const Root = ({ children }) => (
  <Provider store={store}>
    <Grid>
      <Header />
      {children}
    </Grid>
  </Provider>
);

export default Root;

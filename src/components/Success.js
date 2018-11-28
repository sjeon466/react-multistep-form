import React, { Component } from "react";
import AppBar from "material-ui/AppBar";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

class Success extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Success" />
          <h1>Thank you for your Submission</h1>
          <p>You will get an email with further instructions</p>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

export default Success;

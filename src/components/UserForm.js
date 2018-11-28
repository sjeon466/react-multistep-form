import React, { Component } from "react";
import FormUserDetails from "./FormUserDetails";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";

class UserForm extends Component {
  state = {
    step: 1,
    firstName: "",
    lastName: "",
    email: "",
    occupation: "",
    city: "",
    bio: ""
  };

  // Proceed to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({ step: step + 1 });
  };

  // Go back to previous step
  nextStep = () => {
    const { step } = this.state;
    this.setState({ step: step - 1 });
  };

  // Handle Fields change
  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    const {
      step,
      firstName,
      lastName,
      email,
      occupation,
      city,
      bio
    } = this.state;
    const values = { firstName, lastName, email, occupation, city, bio };

    switch (step) {
      case 1:
        return (
          <FormUserDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );

      case 2:
        return <h1>FormPersonalDetails</h1>;
      case 3:
        return <h1>Confirm</h1>;
      case 4:
        return <h1>Success</h1>;
    }

    return <div />;
  }
}

export default UserForm;

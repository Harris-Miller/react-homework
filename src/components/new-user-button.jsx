import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';

export default class NewUserButton extends Component {
  addUser = () => {
    this.props.openNewDialog();
  };

  render() {
    return (
      <RaisedButton label="Add New user" primary fullWidth onClick={this.addUser} />
    );
  }
}
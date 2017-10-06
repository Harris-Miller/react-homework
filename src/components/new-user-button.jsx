import React, { Component } from 'react';
import propTypes from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton';

export default class NewUserButton extends Component {
  static propTypes = {
    openNewDialog: propTypes.func.isRequired
  };

  addUser = () => {
    this.props.openNewDialog();
  };

  render() {
    return (
      <RaisedButton label="Add New user" primary fullWidth onClick={this.addUser} />
    );
  }
}

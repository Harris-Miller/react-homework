import React, { Component } from 'react';
import propTypes from 'prop-types';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';

export default class EditDialog extends Component {
  static propTypes = {
    app: propTypes.shape({
      user: propTypes.shape({
        id: propTypes.number,
        first: propTypes.string,
        last: propTypes.string,
        address: propTypes.string
      }),
      isDialogOpen: propTypes.bool.isRequired
    }).isRequired,
    closeDialog: propTypes.func.isRequired
  };

  state = {
    id: -1,
    first: '',
    last: '',
    address: ''
  };

  componentWillReceiveProps(nextProps) {
    this.setState({
      id: nextProps.app.user ? nextProps.app.user.id : -1,
      first: nextProps.app.user ? nextProps.app.user.first : '',
      last: nextProps.app.user ? nextProps.app.user.last : '',
      address: nextProps.app.user ? nextProps.app.user.address : ''
    });
  }

  handleClose = () => {
    this.props.closeDialog();
  };

  submit = () => {
    const action = this.props.app.user ? 'editUser' : 'addUser';

    this.props[action](Object.assign({}, this.state));

    this.handleClose();
  };

  fieldChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary
        onClick={this.handleClose}
      />,
      <FlatButton
        label="Submit"
        primary
        keyboardFocused
        onClick={this.submit}
      />
    ];

    return (
      <div>
        <Dialog
          modal
          title={this.props.app.user ? 'Edit User' : 'Add User'}
          open={this.props.app.isDialogOpen}
          actions={actions}
        >
          <form>
            <input hidden readOnly name="id" value={this.state.id} />
            <TextField floatingLabelText="First Name" name="first" value={this.state.first} onChange={this.fieldChange} />
            <TextField floatingLabelText="Last Name" name="last" value={this.state.last} onChange={this.fieldChange} />
            <TextField fullWidth floatingLabelText="Address" name="address" value={this.state.address} onChange={this.fieldChange} />
          </form>
        </Dialog>
      </div>
    );
  }
}

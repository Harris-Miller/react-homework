import React, { Component } from 'react';
import propTypes from 'prop-types';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from 'material-ui/Table';
import FlatButton from 'material-ui/FlatButton';

export default class UserTable extends Component {
  static propTypes = {
    openEditDialog: propTypes.func.isRequired,
    removeUser: propTypes.func.isRequired,
    users: propTypes.shape.isRequired
  };

  openEditDialog(user) {
    this.props.openEditDialog(user);
  }

  removeUser(id) {
    this.props.removeUser(id);
  }

  render() {
    const { users } = this.props;

    return (
      <Table
        selectable={false}
      >
        <TableHeader
          displaySelectAll={false}
        >
          <TableRow>
            <TableHeaderColumn>First Name</TableHeaderColumn>
            <TableHeaderColumn>Last Name</TableHeaderColumn>
            <TableHeaderColumn>Address</TableHeaderColumn>
            <TableHeaderColumn />
          </TableRow>
        </TableHeader>
        <TableBody
          displayRowCheckbox={false}
          stripedRows
        >
          {users.map(user => (
            <TableRow key={user.id} onClick={() => this.openEditDialog(user)}>
              <TableRowColumn>{user.first}</TableRowColumn>
              <TableRowColumn>{user.last}</TableRowColumn>
              <TableRowColumn>{user.address}</TableRowColumn>
              <TableRowColumn>
                <FlatButton label="Edit" onClick={() => this.openEditDialog(user)} />
                <FlatButton label="Remove" onClick={() => this.removeUser(user.id)} />
              </TableRowColumn>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  }
}

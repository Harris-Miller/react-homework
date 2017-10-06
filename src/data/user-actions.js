import * as userActionTypes from './user-action-types';
import Dispatcher from './dispatcher';

let userId = 0;

export function addUser(user) {
  Dispatcher.dispatch({
    type: userActionTypes.ADD_USER,
    user: { ...user, id: userId++ }
  });
}

export function editUser(user) {
  console.log('editUser');
  Dispatcher.dispatch({
    type: userActionTypes.EDIT_USER,
    user
  });
}

export function removeUser(id) {
  Dispatcher.dispatch({
    type: userActionTypes.REMOVE_USER,
    id
  });
}

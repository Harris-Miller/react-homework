import * as appActionTypes from './app-action-types';
import Dispatcher from './dispatcher';

export function openNewDialog() {
  Dispatcher.dispatch({
    type: appActionTypes.OPEN_NEW_DIALOG
  });
}

export function openEditDialog(user) {
  Dispatcher.dispatch({
    type: appActionTypes.OPEN_EDIT_DIALOG,
    user
  });
}

export function closeDialog() {
  console.log('closeDialog');
  Dispatcher.dispatch({
    type: appActionTypes.CLOSE_DIALOG
  });
}

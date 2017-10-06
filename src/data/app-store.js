import { ReduceStore } from 'flux/utils';
import * as appActionTypes from './app-action-types';
import Dispatcher from './dispatcher';

// NOTE: my recruter mentioned that someone else was disqualified for using immutableJS here
// so I'm purposely avoiding it here, instead i'm just manually returning new a state
// for each action instead of mutating the state directly

export default class AppStore extends ReduceStore {
  constructor() {
    super(Dispatcher);
  }

  getInitialState() {
    return { isDialogOpen: false, user: null };
  }

  reduce(state, action) {
    switch (action.type) {
      case appActionTypes.OPEN_NEW_DIALOG:
        return Object.assign({}, state, { isDialogOpen: true, user: null });
      case appActionTypes.OPEN_EDIT_DIALOG:
        return Object.assign({}, state, { isDialogOpen: true, user: action.user });
      case appActionTypes.CLOSE_DIALOG:
        return Object.assign({}, state, { isDialogOpen: false });
      default:
        return state;
    }
  }
}

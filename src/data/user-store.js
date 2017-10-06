import { ReduceStore } from 'flux/utils';
import * as userActionTypes from './user-action-types';
import Dispatcher from './dispatcher';

// NOTE: my recruiter mentioned that someone else was disqualified for using immutableJS here
// so I'm purposely avoiding it here, instead i'm just manually returning new a state
// for each action instead of mutating the state directly

export default class UserStore extends ReduceStore {
  constructor() {
    super(Dispatcher);
  }

  getInitialState() {
    return [];
  }

  reduce(state, action) {
    const copy = state.concat([]);
    let index;

    switch (action.type) {
      case userActionTypes.ADD_USER:
        return [...state, action.user];
      case userActionTypes.EDIT_USER:
        index = copy.findIndex(user => user.id === action.user.id);

        if (index !== -1) {
          copy[index] = action.user;
          return copy;
        }

        return state;
      case userActionTypes.REMOVE_USER:
        index = state.findIndex(user => user.id === action.id);

        if (index !== -1) {
          copy.splice(index, 1);
          return copy;
        }

        return state;
      default:
        return state;
    }
  }
}

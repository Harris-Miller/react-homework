import { Container } from 'flux/utils';
import App from '../components/app';
import AppStore from '../data/app-store';
import * as appActions from '../data/app-actions';
import UserStore from '../data/user-store';
import * as userActions from '../data/user-actions';

const appStore = new AppStore();
const userStore = new UserStore();

function getStores() {
  return [
    appStore,
    userStore
  ];
}

function getState() {
  return {
    app: appStore.getState(),
    users: userStore.getState(),
    ...appActions,
    ...userActions
  };
}

export default Container.createFunctional(App, getStores, getState);

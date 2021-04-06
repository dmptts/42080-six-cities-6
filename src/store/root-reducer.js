import {combineReducers} from 'redux';
import {appInterface} from './app-interface/app-interface';
import {appData} from './app-data/app-data';
import {user} from './user/user';

export const NameSpace = {
  DATA: `DATA`,
  INTERFACE: `INTERFACE`,
  USER: `USER`
};

export default combineReducers({
  [NameSpace.INTERFACE]: appInterface,
  [NameSpace.DATA]: appData,
  [NameSpace.USER]: user,
});

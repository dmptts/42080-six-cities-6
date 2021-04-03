import {combineReducers} from 'redux';
import {appInterface} from './interface/interface';
import {appData} from './data/data';
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

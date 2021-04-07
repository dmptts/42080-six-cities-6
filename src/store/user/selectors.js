import {NameSpace} from '../root-reducer';

export const getAuthStatus = (state) => state[NameSpace.USER].authStatus;
export const getUserData = (state) => state[NameSpace.USER].user;
export const getInitStatus = (state) => state[NameSpace.USER].init;

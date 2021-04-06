import {NameSpace} from '../root-reducer';

export const getSelectedCity = (state) => state[NameSpace.INTERFACE].city;
export const getSortingType = (state) => state[NameSpace.INTERFACE].sortingType;
export const getActiveCard = (state) => state[NameSpace.INTERFACE].activeCard;
export const getReviewFormStatus = (state) => state[NameSpace.INTERFACE].reviewFormStatus;

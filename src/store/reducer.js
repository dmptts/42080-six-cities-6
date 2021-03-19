import offers from '../mock/offers';
import {ActionsTypes} from './actions';
import {DEFAULT_CITY, SortingTypes} from '../const';

const initialState = {
  city: DEFAULT_CITY,
  sortingType: SortingTypes.POPULARITY_DESCENDING,
  offers
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionsTypes.CHANGE_CITY:
      return {
        ...state,
        city: action.payload
      };
    case ActionsTypes.CHANGE_SORTING:
      return {
        ...state,
        sortingType: action.payload
      };
    default:
      return state;
  }
};

export {reducer};

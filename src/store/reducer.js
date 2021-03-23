import {ActionsTypes} from './actions';
import {DEFAULT_CITY, SortingTypes} from '../const';

const initialState = {
  city: DEFAULT_CITY,
  sortingType: SortingTypes.POPULARITY_DESCENDING,
  activeCard: null,
  offers: []
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
    case ActionsTypes.SET_ACTIVE_CARD:
      return {
        ...state,
        activeCard: action.payload
      };
    case ActionsTypes.UNSET_ACTIVE_CARD:
      return {
        ...state,
        activeCard: action.payload
      };
    case ActionsTypes.LOAD_OFFERS:
      return {
        ...state,
        offers: action.payload
      };
    default:
      return state;
  }
};

export {reducer};

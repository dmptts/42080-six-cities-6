import offers from '../mock/offers';
import {ActionsType} from './actions';

const initialState = {
  city: `Amsterdam`,
  offers
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionsType.CHANGE_CITY:
      return {
        ...state,
        city: action.payload
      };
    case ActionsType.FILL_OFFERS_LIST:
      return {
        ...state,
        offers: action.payload
      };
    default:
      return state;
  }
};

export {reducer};

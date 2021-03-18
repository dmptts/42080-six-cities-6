import offers from '../mock/offers';
import {ActionsType} from './actions';
import {DEFAULT_CITY} from '../const';

const initialState = {
  city: DEFAULT_CITY,
  offers
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionsType.CHANGE_CITY:
      return {
        ...state,
        city: action.payload
      };
    default:
      return state;
  }
};

export {reducer};

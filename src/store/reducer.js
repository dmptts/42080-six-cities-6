import offers from '../mock/offers';
import {filterOffers} from '../filter';
import {ActionsType} from './actions';
import {DEFAULT_CITY} from '../const';

const initialState = {
  city: DEFAULT_CITY,
  offers: filterOffers(offers, DEFAULT_CITY)
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionsType.CHANGE_CITY:
      return {
        ...state,
        city: action.payload,
        offers: filterOffers(offers, action.payload)
      };
    default:
      return state;
  }
};

export {reducer};

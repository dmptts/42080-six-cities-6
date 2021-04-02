import {ActionsTypes} from '../actions';

const initialState = {
  offers: [],
  offer: {},
  reviews: [],
  nearbyOffers: [],
  isOffersLoaded: false,
  isOfferDataLoaded: false
};

const appData = (state = initialState, action) => {
  switch (action.type) {
    case ActionsTypes.LOAD_OFFERS:
      return {
        ...state,
        offers: action.payload,
        isOffersLoaded: true
      };
    case ActionsTypes.LOAD_REVIEWS:
      return {
        ...state,
        reviews: action.payload
      };
    case ActionsTypes.LOAD_OFFER_BY_ID:
      return {
        ...state,
        offer: action.payload,
        isOfferDataLoaded: true
      };
    case ActionsTypes.LOAD_NEARBY_OFFERS:
      return {
        ...state,
        nearbyOffers: action.payload
      };
    case ActionsTypes.RESET_OFFER_DATA:
      return {
        ...state,
        isOfferDataLoaded: false,
        offer: {},
        reviews: [],
        nearbyOffers: []
      };
  }

  return state;
};

export {appData};

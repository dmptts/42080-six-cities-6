import {ActionsTypes} from '../actions';

const initialState = {
  offers: [],
  offer: {},
  reviews: [],
  nearbyOffers: [],
  isOffersLoaded: false,
  isOfferLoaded: false,
  isReviewsLoaded: false,
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
        reviews: action.payload,
        isReviewsLoaded: true
      };
    case ActionsTypes.LOAD_OFFER_BY_ID:
      return {
        ...state,
        offer: action.payload,
        isOfferLoaded: true
      };
    case ActionsTypes.LOAD_NEARBY_OFFERS:
      return {
        ...state,
        nearbyOffers: action.payload
      };
  }

  return state;
};

export {appData};

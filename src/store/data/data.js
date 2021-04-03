import {ActionsTypes} from '../actions';

const initialState = {
  offers: [],
  offer: {},
  reviews: [],
  nearbyOffers: [],
  favoriteOffers: [],
  isOffersLoaded: false,
  isOfferDataLoaded: false,
  isFavoritesLoaded: false
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
    case ActionsTypes.LOAD_FAVORITES:
      return {
        ...state,
        favoriteOffers: action.payload,
        isFavoritesLoaded: true
      };
    case ActionsTypes.RESET_FAVORITES:
      return {
        ...state,
        favoriteOffers: [],
        isFavoritesLoaded: false
      };
    case ActionsTypes.RESET_OFFERS:
      return {
        ...state,
        offers: [],
        isOffersLoaded: false
      };
  }

  return state;
};

export {appData};

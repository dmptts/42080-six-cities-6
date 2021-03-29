import {ActionsTypes} from './actions';
import {DEFAULT_CITY, SortingTypes} from '../const';

const initialState = {
  city: DEFAULT_CITY,
  sortingType: SortingTypes.POPULARITY_DESCENDING,
  activeCard: null,
  offers: [],
  offer: {},
  reviews: [],
  nearbyOffers: [],
  isOffersLoaded: false,
  isOfferLoaded: false,
  isReviewsLoaded: false,
  authStatus: false,
  user: {}
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
    case ActionsTypes.CHECK_AUTH_STATUS:
      return {
        ...state,
        authStatus: action.payload
      };
    case ActionsTypes.GET_USER_DATA:
      return {
        ...state,
        user: action.payload
      };
    case ActionsTypes.LOGIN:
      return {
        ...state,
        authStatus: true,
        user: action.payload
      };
    default:
      return state;
  }
};

export {reducer};

import {ActionsTypes} from '../actions';

const initialState = {
  offers: [],
  offer: null,
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
        offer: null,
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
    case ActionsTypes.UPDATE_OFFERS:
      const updatedOfferIndex = state.offers.findIndex((offer) => offer.id === action.payload.id);
      const offersCopy = state.offers.slice();

      offersCopy.splice(updatedOfferIndex, 1, action.payload.offer);

      return {
        ...state,
        offers: offersCopy
      };
    case ActionsTypes.UPDATE_OFFER:
      return {
        ...state,
        offer: action.payload
      };
    case ActionsTypes.UPDATE_FAVORITES:
      const updatedFavoriteIndex = state.offers.findIndex((offer) => offer.id === action.payload.id);
      const favoritesCopy = state.offers.slice();

      favoritesCopy.splice(updatedFavoriteIndex, 1);

      return {
        ...state,
        favoriteOffers: favoritesCopy
      };
  }

  return state;
};

export {appData};

export const ActionsTypes = {
  CHANGE_CITY: `interface/changeCity`,
  CHANGE_SORTING: `interface/changeSorting`,
  SET_ACTIVE_CARD: `interface/setActiveCard`,
  UNSET_ACTIVE_CARD: `interface/unsetActiveCard`,
  LOAD_OFFERS: `data/loadOffers`,
  LOAD_OFFER_BY_ID: `data/loadOfferByID`,
  LOAD_REVIEWS: `data/loadReviews`,
  LOAD_NEARBY_OFFERS: `data/loadNearbyOffers`,
  CHECK_AUTH_STATUS: `user/checkAuthStatus`,
  GET_USER_DATA: `user/getUserData`,
  REDIRECT_TO_ROUTE: `route/redirectToRoute`
};

export const changeCity = (city) => ({
  type: ActionsTypes.CHANGE_CITY,
  payload: city
});

export const changeSorting = (sortingType) => ({
  type: ActionsTypes.CHANGE_SORTING,
  payload: sortingType
});

export const setActiveCard = (card) => ({
  type: ActionsTypes.SET_ACTIVE_CARD,
  payload: card
});

export const unsetActiveCard = () => ({
  type: ActionsTypes.SET_ACTIVE_CARD,
  payload: null
});

export const loadOffers = (offers) => ({
  type: ActionsTypes.LOAD_OFFERS,
  payload: offers,
});

export const loadOffer = (offer) => ({
  type: ActionsTypes.LOAD_OFFER_BY_ID,
  payload: offer
});

export const loadReviews = (reviews) => ({
  type: ActionsTypes.LOAD_REVIEWS,
  payload: reviews
});

export const loadNearbyOffers = (offers) => ({
  type: ActionsTypes.LOAD_NEARBY_OFFERS,
  payload: offers
});

export const checkAuthStatus = (response) => ({
  type: ActionsTypes.CHECK_AUTH_STATUS,
  payload: response
});

export const getUserData = (userData) => ({
  type: ActionsTypes.GET_USER_DATA,
  payload: userData
});

export const redirect = (url) => ({
  type: ActionsTypes.REDIRECT_TO_ROUTE,
  payload: url
});

export const ActionsTypes = {
  CHANGE_CITY: `main/changeCity`,
  CHANGE_SORTING: `main/changeSorting`,
  SET_ACTIVE_CARD: `offer-card/setActiveCard`,
  UNSET_ACTIVE_CARD: `offer-card/unsetActiveCard`,
  LOAD_OFFERS: `data/loadOffers`,
  LOAD_OFFER_BY_ID: `data/loadOfferByID`,
  LOAD_REVIEWS: `data/loadReviews`,
  LOAD_NEARBY_OFFERS: `data/loadNearbyOffers`,
  CHECK_AUTH_STATUS: `user/checkAuthStatus`,
  GET_USER_DATA: `user/getUserData`,
  LOGIN: `user/login`,
  REDIRECT_TO_ROUTE: `route/redirectToRoute`
};

export const ActionCreator = {
  changeCity: (city) => ({
    type: ActionsTypes.CHANGE_CITY,
    payload: city
  }),

  changeSorting: (sortingType) => ({
    type: ActionsTypes.CHANGE_SORTING,
    payload: sortingType
  }),

  setActiveCard: (card) => ({
    type: ActionsTypes.SET_ACTIVE_CARD,
    payload: card
  }),

  unsetActiveCard: () => ({
    type: ActionsTypes.SET_ACTIVE_CARD,
    payload: null
  }),

  loadOffers: (offers) => ({
    type: ActionsTypes.LOAD_OFFERS,
    payload: offers,
  }),

  loadOffer: (offer) => ({
    type: ActionsTypes.LOAD_OFFER_BY_ID,
    payload: offer
  }),

  loadReviews: (reviews) => ({
    type: ActionsTypes.LOAD_REVIEWS,
    payload: reviews
  }),

  loadNearbyOffers: (offers) => ({
    type: ActionsTypes.LOAD_NEARBY_OFFERS,
    payload: offers
  }),
  
  checkAuthStatus: (response) => ({
    type: ActionsTypes.CHECK_AUTH_STATUS,
    payload: response
  }),

  getUserData: (userData) => ({
    type: ActionsTypes.GET_USER_DATA,
    payload: userData
  }),

  login: (response) => ({
    type: ActionsTypes.LOGIN,
    payload: response
  }),

  redirect: (url) => ({
    type: ActionsTypes.REDIRECT_TO_ROUTE,
    payload: url
  })
};

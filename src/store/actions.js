export const ActionsTypes = {
  CHANGE_CITY: `main/changeCity`,
  CHANGE_SORTING: `main/changeSorting`,
  SET_ACTIVE_CARD: `offer-card/setActiveCard`,
  UNSET_ACTIVE_CARD: `offer-card/unsetActiveCard`,
  LOAD_OFFERS: `data/loadOffers`
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
  })
};
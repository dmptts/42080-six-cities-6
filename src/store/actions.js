export const ActionsType = {
  CHANGE_CITY: `main/changeCity`,
  FILL_OFFERS_LIST: `main/fillOffersList`
};

export const ActionCreator = {
  changeCity: (city) => ({
    type: ActionsType.CHANGE_CITY,
    payload: city
  })
};

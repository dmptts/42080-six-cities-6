export const ActionsType = {
  CHANGE_CITY: `main/changeCity`
};

export const ActionCreator = {
  changeCity: (city) => ({
    type: ActionsType.CHANGE_CITY,
    payload: city
  })
};

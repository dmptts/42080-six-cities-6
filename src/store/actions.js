export const ActionsTypes = {
  CHANGE_CITY: `main/changeCity`,
  CHANGE_SORTING: `main/changeSorting`
};

export const ActionCreator = {
  changeCity: (city) => ({
    type: ActionsTypes.CHANGE_CITY,
    payload: city
  }),

  changeSorting: (sortingType) => ({
    type: ActionsTypes.CHANGE_SORTING,
    payload: sortingType
  })
};

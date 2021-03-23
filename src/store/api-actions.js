import {ActionCreator} from "./actions";

export const fetchOffers = () => (dispatch, _getState, api) => {
  api.get(`/hotels`)
    .then((offers) => dispatch(ActionCreator.loadOffers(offers)));
};

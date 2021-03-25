import {ActionCreator} from "./actions";
import {adaptToClient} from "../utils";

export const fetchOffers = () => (dispatch, _getState, api) => {
  api.get(`/hotels`)
    .then(({data}) => dispatch(ActionCreator.loadOffers(data.map((offer) => adaptToClient(offer)))));
};

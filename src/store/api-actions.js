import {ActionCreator} from './actions';
import {adaptToClient} from '../utils';

export const fetchOffers = () => (dispatch, _getState, api) => {
  api.get(`/hotels`)
    .then(({data}) => dispatch(ActionCreator.loadOffers(data.map((offer) => adaptToClient(offer)))));
};

export const fetchOfferById = (id) => (dispatch, _getState, api) => {
  api.get(`hotels/${id}`)
    .then(({data}) => dispatch(ActionCreator.loadOffer(adaptToClient(data))))
    .catch((error) => {
      if (error.response && error.response.status === 404) {
        dispatch(ActionCreator.redirect(`/not-found`));
      }
    });
};

export const checkAuthStatus = () => (dispatch, _getState, api) => {
  api.get(`/login`)
    .then(({data}) => dispatch(ActionCreator.checkAuthStatus(data)))
    .catch(() => {});
};

export const login = ({email, password}) => (dispatch, _getState, api) => {
  api.post(`/login`, {email, password})
    .then(({data}) => dispatch(ActionCreator.login(data)))
    .then(() => dispatch(ActionCreator.redirect(`/`)));
};

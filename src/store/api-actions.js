import {ActionCreator} from './actions';
import {adaptOfferToClient, adaptReviewToClient} from '../utils';

export const fetchOffers = () => (dispatch, _getState, api) => {
  api.get(`/hotels`)
    .then(({data}) => {
      dispatch(
          ActionCreator.loadOffers(
              data.map((offer) => adaptOfferToClient(offer))
          )
      );
    })
    .catch(() => {});
};

export const fetchOfferById = (id) => (dispatch, _getState, api) => {
  api.get(`/hotels/${id}`)
    .then(({data}) => dispatch(ActionCreator.loadOffer(adaptOfferToClient(data))))
    .catch((error) => {
      if (error.response && error.response.status === 404) {
        dispatch(ActionCreator.redirect(`/not-found`));
      }
    });
};

export const fetchReviews = (id) => (dispatch, _getState, api) => {
  api.get(`/comments/${id}`)
    .then(({data}) => {
      dispatch(
          ActionCreator.loadReviews(
              data.map((review) => adaptReviewToClient(review))
          )
      );
    })
    .catch(() => {});
};

export const fetchNearbyOffers = (id) => (dispatch, _getState, api) => {
  api.get(`/hotels/${id}/nearby`)
    .then(({data}) => {
      dispatch(
          ActionCreator.loadNearbyOffers(
              data.map((offer) => adaptOfferToClient(offer))
          )
      );
    })
    .catch(() => {});
};

export const checkAuthStatus = () => (dispatch, _getState, api) => {
  api.get(`/login`)
    .then(({data}) => {
      dispatch(ActionCreator.checkAuthStatus(true));
      dispatch(ActionCreator.getUserData(data));
    })
    .catch(() => {});
};

export const login = ({email, password}) => (dispatch, _getState, api) => {
  api.post(`/login`, {email, password})
    .then(({data}) => dispatch(ActionCreator.login(data)))
    .then(() => dispatch(ActionCreator.redirect(`/`)));
};

export const postReview = ({comment, rating}, id) => (dispatch, _getState, api) => {
  api.post(`/comments/${id}`, {comment, rating});
};

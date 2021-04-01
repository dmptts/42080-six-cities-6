import {ActionCreator} from './actions';
import {adaptOfferToClient, adaptReviewToClient} from '../utils';
import {APIRoutes} from '../const';

export const fetchOffers = () => (dispatch, _getState, api) => {
  api.get(APIRoutes.OFFERS)
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
  api.get(`${APIRoutes.OFFERS}/${id}`)
    .then(({data}) => dispatch(ActionCreator.loadOffer(adaptOfferToClient(data))))
    .catch((error) => {
      if (error.response && error.response.status === 404) {
        dispatch(ActionCreator.redirect(`/not-found`));
      }
    });
};

export const fetchReviews = (id) => (dispatch, _getState, api) => {
  api.get(`${APIRoutes.COMMENTS}/${id}`)
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
  api.get(`${APIRoutes.OFFERS}/${id}/nearby`)
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
  api.get(APIRoutes.LOGIN)
    .then(({data}) => {
      dispatch(ActionCreator.checkAuthStatus(true));
      dispatch(ActionCreator.getUserData(data));
    })
    .catch(() => {});
};

export const login = ({email, password}) => (dispatch, _getState, api) => {
  api.post(APIRoutes.LOGIN, {email, password})
    .then(({data}) => dispatch(ActionCreator.login(data)))
    .then(() => dispatch(ActionCreator.redirect(`/`)));
};

export const postReview = ({comment, rating}, id) => (_dispatch, _getState, api) => {
  api.post(`${APIRoutes.COMMENTS}/${id}`, {comment, rating});
};

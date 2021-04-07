import {loadOffers, loadOffer, loadReviews, loadNearbyOffers, redirect, getUserData, checkAuthStatus, loadFavorites, setReviewFormStatus, changeInitStatus} from './actions';
import {adaptOfferToClient, adaptReviewToClient} from '../utils';
import {APIRoutes, AppRoutes, ReviewFormStatuses} from '../const';

export const fetchOffers = () => (dispatch, _getState, api) => {
  api.get(APIRoutes.OFFERS)
    .then(({data}) => {
      dispatch(
          loadOffers(
              data.map((offer) => adaptOfferToClient(offer))
          )
      );
    })
    .catch(() => {});
};

export const fetchOfferById = (id) => (dispatch, _getState, api) => {
  api.get(`${APIRoutes.OFFERS}/${id}`)
    .then(({data}) => dispatch(loadOffer(adaptOfferToClient(data))))
    .catch((error) => {
      if (error.response && error.response.status === 404) {
        dispatch(redirect(AppRoutes.NOT_FOUND));
      }
    });
};

export const fetchReviews = (id) => (dispatch, _getState, api) => {
  api.get(`${APIRoutes.COMMENTS}/${id}`)
    .then(({data}) => {
      dispatch(
          loadReviews(
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
          loadNearbyOffers(
              data.map((offer) => adaptOfferToClient(offer))
          )
      );
    })
    .catch(() => {});
};

export const requireAuth = () => (dispatch, _getState, api) => {
  api.get(APIRoutes.LOGIN)
    .then(({data}) => {
      dispatch(checkAuthStatus(true));
      dispatch(getUserData(data));
    })
    .catch(() => {})
    .then(() => dispatch(changeInitStatus(true)));
};

export const login = ({email, password}) => (dispatch, _getState, api) => {
  api.post(APIRoutes.LOGIN, {email, password})
    .then(({data}) => {
      dispatch(checkAuthStatus(true));
      dispatch(getUserData(data));
    })
    .then(() => dispatch(redirect(AppRoutes.ROOT)));
};

export const postReview = ({comment, rating}, id) => (dispatch, _getState, api) => {
  api.post(`${APIRoutes.COMMENTS}/${id}`, {comment, rating})
    .then(() => dispatch(setReviewFormStatus(ReviewFormStatuses.OK)))
    .catch(() => dispatch(setReviewFormStatus(ReviewFormStatuses.ERROR)))
    .then(() => dispatch(fetchReviews(id)));
};

export const fetchFavorites = () => (dispatch, _getState, api) => {
  api.get(APIRoutes.FAVORITE)
    .then(({data}) => {
      dispatch(
          loadFavorites(
              data.map((offer) => adaptOfferToClient(offer))
          )
      );
    });
};

export const postFavorite = (status, id) => (dispatch, _getState, api) => {
  api.post(`${APIRoutes.FAVORITE}/${id}/${status}`)
    .catch((error) => {
      if (error.response && error.response.status === 401) {
        dispatch(redirect(AppRoutes.LOGIN));
      }
    });
};

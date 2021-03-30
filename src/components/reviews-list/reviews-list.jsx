import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {fetchReviews} from '../../store/api-actions';
import PropTypes from 'prop-types';
import Review from '../review/review';
import reviewsPropTypes from './reviews-list.prop';
import {MAX_REVIEWS_RENDERED} from '../../const';

const ReviewsList = ({offerID, isReviewsLoaded, reviews, onLoadData}) => {
  useEffect(() => {
    onLoadData(offerID);
  }, [offerID]);

  if (!isReviewsLoaded) {
    onLoadData(offerID);
  }

  return <ul className="reviews__list">
    {reviews.slice(-MAX_REVIEWS_RENDERED).map((review) => <Review key={review.id} review={review} />)}
  </ul>;
};

ReviewsList.propTypes = {
  offerID: PropTypes.number.isRequired,
  isReviewsLoaded: PropTypes.bool.isRequired,
  reviews: reviewsPropTypes,
  onLoadData: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  reviews: state.reviews,
  isReviewsLoaded: state.isReviewsLoaded
});

const mapDispatchToProps = (dispatch) => ({
  onLoadData(id) {
    dispatch(fetchReviews(id));
  }
});

export {ReviewsList};
export default connect(mapStateToProps, mapDispatchToProps)(ReviewsList);

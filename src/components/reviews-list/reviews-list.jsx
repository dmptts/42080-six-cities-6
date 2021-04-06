import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Review from '../review/review';
import reviewsPropTypes from './reviews-list.prop';
import ReviewForm from '../review-form/review-form';
import {MAX_REVIEWS_RENDERED} from '../../const';
import {getReviews, getReviewsLoadStatus} from '../../store/app-data/selectors';
import dayjs from 'dayjs';

const ReviewsList = ({reviews, offerID}) => {
  return <section className="property__reviews reviews">
    <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
    <ul className="reviews__list">
      {reviews.slice(-MAX_REVIEWS_RENDERED).sort((reviewA, reviewB) => dayjs(reviewA.date) - dayjs(reviewB.date)).map((review) => <Review key={review.id} review={review} />)}
    </ul>
    <ReviewForm offerID={offerID} />
  </section>;
};

ReviewsList.propTypes = {
  offerID: PropTypes.number.isRequired,
  reviews: reviewsPropTypes
};

const mapStateToProps = (state) => ({
  reviews: getReviews(state),
  isReviewsLoaded: getReviewsLoadStatus(state)
});

export {ReviewsList};
export default connect(mapStateToProps, null)(ReviewsList);

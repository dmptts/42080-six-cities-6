import React from 'react';
import Review from '../review/review';
import reviewsPropTypes from './reviews-list.prop';
import {MAX_REVIEWS_RENDERED} from '../../const';

const ReviewsList = ({reviews}) => {
  return <ul className="reviews__list">
    {reviews.slice(-MAX_REVIEWS_RENDERED).map((review) => <Review key={review.id} review={review} />)}
  </ul>;
};

ReviewsList.propTypes = {reviews: reviewsPropTypes};

export default ReviewsList;

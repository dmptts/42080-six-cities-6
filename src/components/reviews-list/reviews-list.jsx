import React from 'react';
import Review from '../review/review';
import reviewsPropTypes from './reviews-list.prop';

const ReviewsList = ({reviews}) => {
  return <ul className="reviews__list">
    {reviews.map((review) => <Review key={review.id} review={review} />)}
  </ul>;
};

ReviewsList.propTypes = {reviews: reviewsPropTypes};

export default ReviewsList;

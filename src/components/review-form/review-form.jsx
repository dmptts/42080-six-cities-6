import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {fetchReviews, postReview} from '../../store/api-actions';
import {getAuthStatus} from '../../store/user/selectors';
import {getReviewFormStatus} from '../../store/interface/selectors';
import {ReviewFormStatuses} from '../../const';
import {setReviewFormStatus} from '../../store/actions';

const ReviewForm = ({authStatus, offerID, onSubmit, reviewFormStatus}) => {
  const [reviewForm, setReviewForm] = useState({
    rating: null,
    review: ``,
    isFormActive: true,
    isSubmitActive: false
  });

  const {rating, review, isFormActive, isSubmitActive} = reviewForm;

  useEffect(() => {
    if (reviewFormStatus !== ReviewFormStatuses.OK) {
      setReviewForm({
        ...reviewForm,
        rating: null,
        review: ``,
        isFormActive: false,
        isSubmitActive: false
      });
    } else {
      setReviewForm({
        rating: null,
        review: ``,
        isFormActive: true,
        isSubmitActive: false
      });
    }
  }, [reviewFormStatus]);

  const handleFieldChange = (evt) => {
    const {name, value} = evt.target;

    if (review.length >= 50 && review.length <= 300) {
      setReviewForm({...reviewForm, [name]: value, isSubmitActive: true});
    } else {
      setReviewForm({...reviewForm, [name]: value, isSubmitActive: false});
    }
  };

  const handleFormSubmit = (evt) => {
    evt.preventDefault();

    onSubmit(
        {
          comment: reviewForm.review,
          rating: reviewForm.rating
        },
        offerID
    );
  };

  if (reviewFormStatus === ReviewFormStatuses.ERROR) {
    return <p>Error occured</p>;
  }

  return authStatus && <form className="reviews__form form" action="#" method="post" onSubmit={handleFormSubmit}>
    <label className="reviews__label form__label" htmlFor="review">Your review</label>
    <div className="reviews__rating-form form__rating" onChange={handleFieldChange}>
      <input className="form__rating-input visually-hidden" name="rating" value="5" id="5-stars" type="radio" defaultChecked={rating === `5`} disabled={!isFormActive} />
      <label htmlFor="5-stars" className="reviews__rating-label form__rating-label" title="perfect">
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star"></use>
        </svg>
      </label>

      <input className="form__rating-input visually-hidden" name="rating" value="4" id="4-stars" type="radio" defaultChecked={rating === `4`} disabled={!isFormActive} />
      <label htmlFor="4-stars" className="reviews__rating-label form__rating-label" title="good">
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star"></use>
        </svg>
      </label>

      <input className="form__rating-input visually-hidden" name="rating" value="3" id="3-stars" type="radio" defaultChecked={rating === `3`} disabled={!isFormActive} />
      <label htmlFor="3-stars" className="reviews__rating-label form__rating-label" title="not bad">
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star"></use>
        </svg>
      </label>

      <input className="form__rating-input visually-hidden" name="rating" value="2" id="2-stars" type="radio" defaultChecked={rating === `2`} disabled={!isFormActive} />
      <label htmlFor="2-stars" className="reviews__rating-label form__rating-label" title="badly">
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star"></use>
        </svg>
      </label>

      <input className="form__rating-input visually-hidden" name="rating" value="1" id="1-star" type="radio" defaultChecked={rating === `1`} disabled={!isFormActive} />
      <label htmlFor="1-star" className="reviews__rating-label form__rating-label" title="terribly">
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star"></use>
        </svg>
      </label>
    </div>
    <textarea className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved" value={review} onChange={handleFieldChange} disabled={!isFormActive}></textarea>
    <div className="reviews__button-wrapper">
      <p className="reviews__help">
        To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
      </p>
      <button className="reviews__submit form__submit button" type="submit" disabled={!isSubmitActive}>Submit</button>
    </div>
  </form>;
};

ReviewForm.propTypes = {
  authStatus: PropTypes.bool.isRequired,
  offerID: PropTypes.number.isRequired,
  onSubmit: PropTypes.func.isRequired,
  reviewFormStatus: PropTypes.string.isRequired
};

const mapStateToProps = (state) => ({
  authStatus: getAuthStatus(state),
  reviewFormStatus: getReviewFormStatus(state)
});

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (reviewData, id) => {
    dispatch(setReviewFormStatus(ReviewFormStatuses.SENT));
    dispatch(postReview(reviewData, id));
    dispatch(fetchReviews(id));
  }
});

export {ReviewForm};
export default connect(mapStateToProps, mapDispatchToProps)(ReviewForm);

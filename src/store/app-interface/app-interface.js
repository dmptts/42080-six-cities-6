import {ActionsTypes} from '../actions';
import {DEFAULT_CITY, ReviewFormStatuses, SortingTypes} from '../../const';

const initialState = {
  city: DEFAULT_CITY,
  sortingType: SortingTypes.POPULARITY_DESCENDING,
  activeCard: null,
  reviewFormStatus: ReviewFormStatuses.OK
};

const appInterface = (state = initialState, action) => {
  switch (action.type) {
    case ActionsTypes.CHANGE_CITY:
      return {
        ...state,
        city: action.payload
      };
    case ActionsTypes.CHANGE_SORTING:
      return {
        ...state,
        sortingType: action.payload
      };
    case ActionsTypes.SET_ACTIVE_CARD:
      return {
        ...state,
        activeCard: action.payload
      };
    case ActionsTypes.UNSET_ACTIVE_CARD:
      return {
        ...state,
        activeCard: action.payload
      };
    case ActionsTypes.SET_REVIEW_FORM_STATUS:
      return {
        ...state,
        reviewFormStatus: action.payload
      };
  }

  return state;
};

export {appInterface};

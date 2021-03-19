import React from 'react';
import PropTypes from 'prop-types';
import {SortingTypes} from '../../const';
import {ActionCreator} from '../../store/actions';
import {connect} from 'react-redux';

const Sorting = ({sortingType, onSortingOptionClick}) => {
  return <form className="places__sorting" action="#" method="get">
    <span className="places__sorting-caption">Sort by</span>
    <span className="places__sorting-type" tabIndex="0">
      Popular
      <svg className="places__sorting-arrow" width="7" height="4">
        <use xlinkHref="#icon-arrow-select"></use>
      </svg>
    </span>
    <ul className="places__options places__options--custom places__options--opened">
      <li
        className={`places__option + ${sortingType === SortingTypes.POPULARITY_DESCENDING && ` places__option--active`}`}
        tabIndex="0"
        onClick={() => onSortingOptionClick(SortingTypes.POPULARITY_DESCENDING)}
      >
        Popular
      </li>
      <li
        className={`places__option + ${sortingType === SortingTypes.PRICE_ASCENDING && ` places__option--active`}`}
        tabIndex="0"
        onClick={() => onSortingOptionClick(SortingTypes.PRICE_ASCENDING)}
      >
        Price: low to high
      </li>
      <li
        className={`places__option + ${sortingType === SortingTypes.PRICE_DESCENDING && ` places__option--active`}`}
        tabIndex="0"
        onClick={() => onSortingOptionClick(SortingTypes.PRICE_DESCENDING)}
      >
        Price: high to low
      </li>
      <li
        className={`places__option + ${sortingType === SortingTypes.RATING_DESCENDING && ` places__option--active`}`}
        tabIndex="0"
        onClick={() => onSortingOptionClick(SortingTypes.RATING_DESCENDING)}
      >
        Top rated first
      </li>
    </ul>
  </form>;
};

Sorting.propTypes = {
  sortingType: PropTypes.string.isRequired,
  onSortingOptionClick: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  sortingType: state.sortingType
});

const mapDispatchToProps = (dispatch) => ({
  onSortingOptionClick(sortingType) {
    dispatch(ActionCreator.changeSorting(sortingType));
  }
});

export {Sorting};
export default connect(mapStateToProps, mapDispatchToProps)(Sorting);

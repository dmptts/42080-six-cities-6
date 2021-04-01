import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {SortingTypes} from '../../const';
import {changeSorting} from '../../store/actions';
import {connect} from 'react-redux';

const Sorting = ({sortingType, onSortingOptionClick}) => {
  const [sortingState, setSortingState] = useState(false);

  return <form className="places__sorting" action="#" method="get">
    <span className="places__sorting-caption">Sort by</span>
    <span
      className="places__sorting-type"
      tabIndex="0"
      onClick={() => setSortingState(!sortingState)}
    >
      {sortingType}
      <svg className="places__sorting-arrow" width="7" height="4">
        <use xlinkHref="#icon-arrow-select"></use>
      </svg>
    </span>
    <ul className={`places__options places__options--custom + ${sortingState && `places__options--opened`}`}>
      <li
        className={`places__option + ${sortingType === SortingTypes.POPULARITY_DESCENDING && ` places__option--active`}`}
        tabIndex="0"
        onClick={() => {
          onSortingOptionClick(SortingTypes.POPULARITY_DESCENDING);
          setSortingState(false);
        }}
      >
        Popular
      </li>
      <li
        className={`places__option + ${sortingType === SortingTypes.PRICE_ASCENDING && ` places__option--active`}`}
        tabIndex="0"
        onClick={() => {
          onSortingOptionClick(SortingTypes.PRICE_ASCENDING);
          setSortingState(false);
        }}
      >
        Price: low to high
      </li>
      <li
        className={`places__option + ${sortingType === SortingTypes.PRICE_DESCENDING && ` places__option--active`}`}
        tabIndex="0"
        onClick={() => {
          onSortingOptionClick(SortingTypes.PRICE_DESCENDING);
          setSortingState(false);
        }}
      >
        Price: high to low
      </li>
      <li
        className={`places__option + ${sortingType === SortingTypes.RATING_DESCENDING && ` places__option--active`}`}
        tabIndex="0"
        onClick={() => {
          onSortingOptionClick(SortingTypes.RATING_DESCENDING);
          setSortingState(false);
        }}
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
    dispatch(changeSorting(sortingType));
  }
});

export {Sorting};
export default connect(mapStateToProps, mapDispatchToProps)(Sorting);

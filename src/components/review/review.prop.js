import PropTypes from 'prop-types';

const reviewPropTypes = PropTypes.shape({
  id: PropTypes.number.isRequired,
  user: PropTypes.shape({
    avatarUrl: PropTypes.string,
    name: PropTypes.string.isRequired,
    isPro: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired
  }),
  rating: PropTypes.number.isRequired,
  comment: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired
});

export default reviewPropTypes;

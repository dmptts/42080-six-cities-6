import PropTypes from 'prop-types';

const reviewPropTypes = PropTypes.shape({
  id: PropTypes.number.isRequired,
  reviewer: PropTypes.shape({
    avatarUrl: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  }),
  rating: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  date: PropTypes.object.isRequired
});

export default reviewPropTypes;

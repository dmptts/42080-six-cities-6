import PropTypes from 'prop-types';

const offerPropTypes = PropTypes.shape({
  id: PropTypes.number.isRequired,
  city: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  goods: PropTypes.arrayOf(PropTypes.string),
  host: PropTypes.shape({
    avatarUrl: PropTypes.string,
    id: PropTypes.number.isRequired,
    isPro: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired
  }).isRequired,
  images: PropTypes.arrayOf(PropTypes.string),
  isFavorite: PropTypes.bool.isRequired,
  isPremium: PropTypes.bool.isRequired,
  location: PropTypes.shape({
    latitude: PropTypes.number.isRequired,
    longitude: PropTypes.number.isRequired,
    zoom: PropTypes.number
  }).isRequired,
  maxAdults: PropTypes.number.isRequired,
  previewImage: PropTypes.string,
  price: PropTypes.number,
  rating: PropTypes.number,
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
});

export default offerPropTypes;

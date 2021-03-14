export const filterOffers = (offers, currentCity) => {
  return offers.filter((offer) => offer.city === currentCity);
};

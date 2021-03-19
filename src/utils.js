import {SortingTypes} from "./const";

export const sortOffers = (offers, sortingType) => {
  switch (sortingType) {
    case SortingTypes.POPULARITY_DESCENDING:
      return offers;
    case SortingTypes.PRICE_ASCENDING:
      return offers.sort((offerA, offerB) => offerA.price - offerB.price);
    case SortingTypes.PRICE_DESCENDING:
      return offers.sort((offerA, offerB) => offerB.price - offerA.price);
    case SortingTypes.RATING_DESCENDING:
      return offers.sort((offerA, offerB) => offerB.rating - offerA.rating);
    default:
      return offers;
  }
};

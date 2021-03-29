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

export const adaptOfferToClient = (offer) => {
  return {
    ...offer,
    city: offer.city.name,
    previewImage: offer.preview_image,
    maxAdults: offer.max_adults,
    isFavorite: offer.is_favorite,
    isPremium: offer.is_premium,
    host: {
      ...offer.host,
      isPro: offer.host.is_pro,
      avatarUrl: offer.host.avatar_url
    }
  };
};

export const adaptReviewToClient = (review) => {
  return {
    ...review,
    user: {
      ...review.user,
      avatarUrl: review.user.avatar_url,
      isPro: review.user.is_pro
    }
  };
};

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
  const adaptedOffer = {
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

  delete adaptedOffer.preview_image;
  delete adaptedOffer.is_favorite;
  delete adaptedOffer.is_premium;
  delete adaptedOffer.max_adults;
  delete adaptedOffer.host.avatar_url;
  delete adaptedOffer.host.is_pro;

  return adaptedOffer;
};

export const adaptReviewToClient = (review) => {
  const adaptedReview = {
    ...review,
    user: {
      ...review.user,
      avatarUrl: review.user.avatar_url,
      isPro: review.user.is_pro
    }
  };

  delete adaptedReview.user.is_pro;
  delete adaptedReview.user.avatar_url;

  return adaptedReview;
};

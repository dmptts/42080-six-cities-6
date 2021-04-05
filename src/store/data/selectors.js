import {NameSpace} from '../root-reducer';

export const getOffers = (state) => state[NameSpace.DATA].offers;
export const getOffer = (state) => state[NameSpace.DATA].offer;
export const getReviews = (state) => state[NameSpace.DATA].reviews;
export const getNearbyOffers = (state) => state[NameSpace.DATA].nearbyOffers;
export const getFavoriteOffers = (state) => state[NameSpace.DATA].favoriteOffers;
export const getOffersLoadStatus = (state) => state[NameSpace.DATA].isOffersLoaded;
export const getOfferLoadStatus = (state) => state[NameSpace.DATA].isOfferDataLoaded;
export const getReviewsLoadStatus = (state) => state[NameSpace.DATA].isReviewsLoaded;
export const getFavoritesLoadStatus = (state) => state[NameSpace.DATA].isFavoritesLoaded;

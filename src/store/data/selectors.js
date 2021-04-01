import {NameSpace} from '../root-reducer';

export const getOffers = (state) => state[NameSpace.DATA].offers;
export const getOffer = (state) => state[NameSpace.DATA].offer;
export const getReviews = (state) => state[NameSpace.DATA].reviews;
export const getNearbyOffers = (state) => state[NameSpace.DATA].nearbyOffers;
export const getOffersLoadStatus = (state) => state[NameSpace.DATA].isOffersLoaded;
export const getOfferLoadStatus = (state) => state[NameSpace.DATA].isOfferLoaded;
export const getReviewsLoadStatus = (state) => state[NameSpace.DATA].isReviewsLoaded;

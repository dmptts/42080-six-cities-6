export const AVATAR_URL = `https://i.pravatar.cc/128`;

export const DEFAULT_CITY = `Paris`;

export const MAX_REVIEWS_RENDERED = 10;

export const Cities = [`Paris`, `Cologne`, `Brussels`, `Amsterdam`, `Hamburg`, `Dusseldorf`];

export const CitiesCoords = {
  'Paris': [48.85661, 2.351499],
  'Cologne': [50.938361, 6.959974],
  'Brussels': [50.846557, 4.351697],
  'Amsterdam': [52.38333, 4.9],
  'Hamburg': [53.550341, 10.000654],
  'Dusseldorf': [51.225402, 6.776314]
};

export const SortingTypes = {
  POPULARITY_DESCENDING: `Popular`,
  PRICE_ASCENDING: `Price: low to high`,
  PRICE_DESCENDING: `Price: high to low`,
  RATING_DESCENDING: `Top rated first`
};

export const AppRoutes = {
  ROOT: `/`,
  LOGIN: `/login`,
  FAVORITES: `/favorites`,
  OFFER: `/offer`,
  NOT_FOUND: `/not-found`
};

export const APIRoutes = {
  OFFERS: `/hotels`,
  COMMENTS: `/comments`,
  LOGIN: `/login`,
  FAVORITE: `/favorite`,
};

export const ReviewFormStatuses = {
  OK: `OK`,
  SENT: `SENT`,
  ERROR: `ERROR`,
};

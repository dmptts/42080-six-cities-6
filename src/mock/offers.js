const AVATAR_URL = `https://i.pravatar.cc/128`;

export default [
  {
    id: 1,
    city: `Amsterdam`,
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
    goods: [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
    host: {
      avatarUrl: `img/avatar-angelina.jpg`,
      id: 3,
      isPro: true,
      name: `Angelina`
    },
    images: [`img/1.png`, `img/2.png`],
    isFavorite: false,
    isPremium: true,
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8
    },
    maxAdults: 4,
    previewImage: `img/apartment-01.jpg`,
    price: 120,
    rating: 4.8,
    title: `Beautiful & luxurious studio at great location`,
    type: `apartment`
  },

  {
    id: 2,
    city: `Amsterdam`,
    description: `Apartments have facilities which include some comfortable seating in the living room, a dining table and chairs in the kitchen or dining room; a stove, a microwave oven, two refridgerators and a freezer in the kitchen and a drying cupboard.`,
    goods: [`Parking`, `Kitchen`, `Cable TV`, `Washing machine`, `Dishwasher`, `Internet`],
    host: {
      avatarUrl: `img/avatar-max.jpg`,
      id: 3,
      isPro: true,
      name: `Max`
    },
    images: [`img/1.png`, `img/2.png`],
    isFavorite: true,
    isPremium: false,
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8
    },
    maxAdults: 4,
    previewImage: `img/apartment-02.jpg`,
    price: 80,
    rating: 3.4,
    title: `Canal View Prinsengracht`,
    type: `apartment`
  },

  {
    id: 3,
    city: `Amsterdam`,
    description: `Apartments have facilities which include some comfortable seating in the living room, a dining table and chairs in the kitchen or dining room; a stove, a microwave oven, two refridgerators and a freezer in the kitchen and a drying cupboard.`,
    goods: [`Parking`, `Kitchen`, `Cable TV`, `Washing machine`, `Dishwasher`, `Internet`],
    host: {
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      id: 3,
      isPro: true,
      name: `Max`
    },
    images: [`img/1.png`, `img/2.png`],
    isFavorite: false,
    isPremium: true,
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8
    },
    maxAdults: 4,
    previewImage: `img/apartment-03.jpg`,
    price: 180,
    rating: 4.8,
    title: `Nice, cozy, warm big bed apartment`,
    type: `apartment`
  },

  {
    id: 4,
    city: `Amsterdam`,
    description: `Apartments have facilities which include some comfortable seating in the living room, a dining table and chairs in the kitchen or dining room; a stove, a microwave oven, two refridgerators and a freezer in the kitchen and a drying cupboard.`,
    goods: [`Parking`, `Kitchen`, `Cable TV`, `Washing machine`, `Dishwasher`, `Internet`],
    host: {
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      id: 3,
      isPro: true,
      name: `Max`
    },
    images: [`img/1.png`, `img/2.png`],
    isFavorite: false,
    isPremium: false,
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8
    },
    maxAdults: 4,
    previewImage: `img/room.jpg`,
    price: 80,
    rating: 4.2,
    title: `Wood and stone place`,
    type: `private room`
  }
];

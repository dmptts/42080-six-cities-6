import dayjs from 'dayjs';
import {AVATAR_URL} from '../const';

export default [
  {
    id: 1,
    reviewer: {
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      name: `Max`,
    },
    rating: 4,
    text: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
    date: dayjs(`2019-04-24`)
  },
  {
    id: 2,
    reviewer: {
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      name: `Jassy`,
    },
    rating: 5,
    text: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
    date: dayjs(`2019-06-24`)
  }
];

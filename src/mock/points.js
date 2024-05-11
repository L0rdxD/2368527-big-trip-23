import { getRandomArrayElement, getRandomInt } from '../utils';

const mockPoints = [
  {
    id: 1,
    type: 'taxi',
    destination: 1,
    offers: [1, 2],
    basePrice: 620,
    isFavorite: true,
    dateFrom: '2019-07-11T10:55:56.845Z',
    dateTo: '2019-07-11T11:22:13.375Z',
  },
  {
    id: 2,
    type: 'train',
    destination: 3,
    offers: [1, 2],
    basePrice: 170,
    isFavorite: false,
    dateFrom: '2019-07-10T22:55:56.845Z',
    dateTo: '2019-07-11T11:22:13.375Z',
  },
  {
    id: 3,
    type: 'flight',
    destination: 2,
    offers: [1],
    basePrice: 50,
    isFavorite: false,
    dateFrom: '2019-07-10T22:55:56.845Z',
    dateTo: '2019-07-11T11:22:13.375Z',
  },
];

const mockDestinations = [
  {
    id: 1,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget.',
    name: 'Moscow',
    pictures: [
      {
        src: `https://loremflickr.com/248/152?random=${getRandomInt(3)}`,
        description: `photo_${getRandomInt(10)}`,
      },
      {
        src: `https://loremflickr.com/248/152?random=${getRandomInt(4)}`,
        description: `photo_${getRandomInt(4)}`,
      },
      {
        src: `https://loremflickr.com/248/152?random=${getRandomInt(5)}`,
        description: `photo_${getRandomInt(5)}`,
      },
      {
        src: `https://loremflickr.com/248/152?random=${getRandomInt(9)}`,
        description: `photo_${getRandomInt(9)}`,
      },
    ],
  },
  {
    id: 2,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget.',
    name: 'Tokio',
    pictures: [
      {
        src: `https://loremflickr.com/248/152?random=${getRandomInt(2)}`,
        description: `photo_${getRandomInt(2)}`,
      },
      {
        src: `https://loremflickr.com/248/152?random=${getRandomInt(1)}`,
        description: `photo_${getRandomInt(1)}`,
      },
    ],
  },
  {
    id: 3,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget.',
    name: 'Bangkok',
    pictures: [
      {
        src: `https://loremflickr.com/248/152?random=${getRandomInt(10)}`,
        description: `photo_${getRandomInt(10)}`,
      },
    ],
  },
];

const mockOffers = [
  {
    type: 'taxi',
    offers: [
      {
        id: 1,
        title: 'Business class',
        price: 500,
      },
      {
        id: 2,
        title: 'Nametag at airport',
        price: 120,
      },
    ],
  },
  {
    type: 'flight',
    offers: [
      {
        id: 1,
        title: 'Add luggage',
        price: 50,
      },
      {
        id: 2,
        title: 'Add meal',
        price: 120,
      },
    ],
  },
  {
    type: 'train',
    offers: [
      {
        id: 1,
        title: 'Add luggage',
        price: 50,
      },
      {
        id: 2,
        title: 'Add meal',
        price: 120,
      },
    ],
  },
];

function getRandomPoint() {
  return getRandomArrayElement(mockPoints);
}

export { getRandomPoint, mockDestinations, mockOffers };
